import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LOGO from "../../assets/logo.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const dropdownRef = useRef(null);
  const mobileMenuBtnRef = useRef(null);
  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Product categories data structure
  const productCategories = {
    "Garments": {
      "Men": ["Shirts", "T-shirts", "Sweat Tops", "Hoodies", "Lowers", "Jeans", "Pants", "Shorts"],
      "Women": ["Tops", "T-shirts", "Lowers", "Jeans", "Pants", "Skirts", "Dresses"],
      "Kids": ["T-shirts", "Shirts", "Pants", "Shorts", "Sportswear", "Casualwear"]
    },
    "Footwear": {
      "Men": ["Sports Shoes", "Casual Shoes", "Slippers & Sandals", "Office Shoes"],
      "Women": ["Casual Shoes", "Slippers & Sandals", "Flats & Heels", "Boots"],
      "Kids": ["Sports Shoes", "Casual Shoes", "Slippers & Sandals", "Flats & Heels", "Boots"]
    },
    "Fabrics": {
      "Garment Fabrics": ["Cotton Fabric", "Linen Fabric", "Denim Fabric", "Knitted Fabric", "Printed Fabric", "Blended Fabric"],
      "Home Textile Fabrics": ["Curtain Fabric", "Bedsheet Fabric", "Upholstery Fabric", "Cushion Cover Fabric", "Table Linen Fabric"]
    },
    "Home Textile": {
      "Products": ["Bedsheets", "Curtains", "Pillow Covers", "Cushion Covers", "Table Linen", "Blankets", "Comforters"]
    },
    "Electronics & Appliances": [
      "LED Lights", "Home Appliances", "Fans", "Heaters", "Kitchen Appliances", "Extension Boards"
    ]
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation function to handle category clicks
  const handleCategoryClick = (category, subcategory = null, productType = null) => {
    const params = new URLSearchParams();

    if (category && category !== 'all') {
      params.append('category', category.toLowerCase().replace(/\s+/g, '-'));
    }

    if (subcategory) {
      params.append('subcategory', subcategory.toLowerCase().replace(/\s+/g, '-'));
    }

    if (productType) {
      params.append('productType', productType.toLowerCase().replace(/\s+/g, '-'));
    }

    const queryString = params.toString();
    const url = queryString ? `/products?${queryString}` : '/products';

    navigate(url);
    closeAll();
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    if (!mobileMenuActive) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
  };

  const toggleDropdown = (dropdown, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (window.innerWidth <= 1260) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
      if (activeDropdown !== dropdown) {
        setActiveSubmenu(null);
      }
    } else {
      closeAll();
    }
  };

  const toggleSubmenu = (submenu, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (window.innerWidth <= 1260) {
      setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    }
  };

  const closeAll = () => {
    setMobileMenuActive(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  // Hover handlers for desktop
  const handleDropdownMouseEnter = (dropdown) => {
    if (window.innerWidth > 1260) {
      clearTimeout(dropdownTimeoutRef.current);
      setActiveDropdown(dropdown);
      setActiveSubmenu(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 1260) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }, 200);
    }
  };

  const handleSubmenuMouseEnter = (submenu) => {
    if (window.innerWidth > 1260) {
      clearTimeout(submenuTimeoutRef.current);
      setActiveSubmenu(submenu);
    }
  };

  const handleSubmenuMouseLeave = () => {
    if (window.innerWidth > 1260) {
      submenuTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 150);
    }
  };

  const handleDropdownMenuMouseEnter = () => {
    if (window.innerWidth > 1260) {
      clearTimeout(dropdownTimeoutRef.current);
      clearTimeout(submenuTimeoutRef.current);
    }
  };

  const handleDropdownMenuMouseLeave = () => {
    if (window.innerWidth > 1260) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }, 200);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mobileMenuBtnRef.current &&
        !mobileMenuBtnRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      clearTimeout(dropdownTimeoutRef.current);
      clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1260) {
        setMobileMenuActive(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuActive]);

  // Render submenu items with unique keys
  const renderSubmenuItems = (items, parentKey = '', category = '', subcategory = '') => {
    return items.map((item, index) => (
      <button
        key={`${parentKey}-${category}-${subcategory}-${item}-${index}`}
        onClick={() => handleCategoryClick(category, subcategory, item)}
        className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2ca0c9] transition-all duration-200 rounded-md"
      >
        {item}
      </button>
    ));
  };

  // Render clickable category header
  const renderClickableCategoryHeader = (categoryName, mainCategory = '') => {
    return (
      <button
        onClick={() => handleCategoryClick(mainCategory || categoryName)}
        className="w-full text-left py-2 px-4 text-lg font-bold text-gray-900 hover:bg-blue-50 hover:text-[#2ca0c9] transition-all duration-200 rounded-md mb-3 border-b border-gray-200 pb-2"
      >
        {categoryName}
      </button>
    );
  };

  // Render category with subcategories - FIXED VERSION
  const renderCategoryWithSubcategories = (categoryName, subcategories, parentKey = '', mainCategory = '') => {
    const isMobile = window.innerWidth <= 1260;
    const submenuKey = `${parentKey}-${categoryName}-${mainCategory}`;

    return (
      <div className="relative group" key={submenuKey}>
        {isMobile ? (
          <div>
            <button
              className="w-full text-left py-2 px-4 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-[#2ca0c9] transition-all duration-200 rounded-md flex items-center justify-between"
              onClick={(e) => {
                // FIX: Add direct navigation when clicking subcategory
                handleCategoryClick(mainCategory, categoryName);
                toggleSubmenu(submenuKey, e);
              }}
            >
              <span>{categoryName}</span>
              <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${activeSubmenu === submenuKey ? 'rotate-180' : ''
                }`}></i>
            </button>

            <div
              className={`pl-4 transition-all duration-300 overflow-hidden ${activeSubmenu === submenuKey
                ? 'max-h-96 opacity-100 mt-1'
                : 'max-h-0 opacity-0 mt-0'
                }`}
            >
              {renderSubmenuItems(subcategories, submenuKey, mainCategory, categoryName)}
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              className="w-full text-left py-2 px-4 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-[#2ca0c9] transition-all duration-200 rounded-md flex items-center justify-between"
              onMouseEnter={() => handleSubmenuMouseEnter(submenuKey)}
              // FIX: Add onClick for direct navigation on desktop as well
              onClick={() => handleCategoryClick(mainCategory, categoryName)}
            >
              <span>{categoryName}</span>
              <i className="fas fa-chevron-right text-xs"></i>
            </button>

            <div
              className={`absolute left-full top-0 ml-1 bg-white shadow-2xl rounded-lg py-2 min-w-48 border border-gray-200 transition-all duration-300 z-[1002] ${activeSubmenu === submenuKey
                ? 'max-h-96 opacity-100 visible translate-x-0'
                : 'max-h-0 opacity-0 invisible translate-x-2'
                } overflow-hidden`}
              onMouseEnter={() => handleSubmenuMouseEnter(submenuKey)}
              onMouseLeave={handleSubmenuMouseLeave}
            >
              {renderSubmenuItems(subcategories, submenuKey, mainCategory, categoryName)}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render simple category with clickable header
  const renderSimpleCategory = (categoryName, items, parentKey = '') => {
    return (
      <div key={`${parentKey}-${categoryName}`}>
        {renderClickableCategoryHeader(categoryName)}
        <div className="space-y-1">
          {renderSubmenuItems(items, `${parentKey}-${categoryName}`, categoryName)}
        </div>
      </div>
    );
  };

  // Render mega dropdown content
  const renderMegaDropdownContent = () => {
    const isMobile = window.innerWidth <= 1260;

    if (isMobile) {
      return (
        <div className="space-y-4 p-4 max-h-[70vh] overflow-y-auto">
          {/* Garments */}
          <div>
            {renderClickableCategoryHeader("Garments")}
            <div className="space-y-1">
              {renderCategoryWithSubcategories("Men", productCategories.Garments.Men, "garments", "Garments")}
              {renderCategoryWithSubcategories("Women", productCategories.Garments.Women, "garments", "Garments")}
              {renderCategoryWithSubcategories("Kids", productCategories.Garments.Kids, "garments", "Garments")}
            </div>
          </div>

          {/* Footwear */}
          <div>
            {renderClickableCategoryHeader("Footwear")}
            <div className="space-y-1">
              {renderCategoryWithSubcategories("Men", productCategories.Footwear.Men, "footwear", "Footwear")}
              {renderCategoryWithSubcategories("Women", productCategories.Footwear.Women, "footwear", "Footwear")}
              {renderCategoryWithSubcategories("Kids", productCategories.Footwear.Kids, "footwear", "Footwear")}
            </div>
          </div>

          {/* Fabrics */}
          <div>
            {renderClickableCategoryHeader("Fabrics")}
            <div className="space-y-1">
              {renderCategoryWithSubcategories("Garment Fabrics", productCategories.Fabrics["Garment Fabrics"], "fabrics", "Fabrics")}
              {renderCategoryWithSubcategories("Home Textile Fabrics", productCategories.Fabrics["Home Textile Fabrics"], "fabrics", "Fabrics")}
            </div>
          </div>

          {/* Home Textile */}
          <div>
            {renderSimpleCategory("Home Textile", productCategories["Home Textile"].Products, "hometextile")}
          </div>

          {/* Electronics & Appliances */}
          <div>
            {renderSimpleCategory("Electronics & Appliances", productCategories["Electronics & Appliances"], "electronics")}
          </div>

          {/* View All Products */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Explore All Products</h4>
            <p className="text-sm text-gray-600 mb-3">Discover our complete collection</p>
            <button
              onClick={() => handleCategoryClick('all')}
              className="inline-block bg-[#2ca0c9] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-[#2389b3] transition-all duration-200"
            >
              View All Products
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Column 1: Garments & Footwear */}
          <div className="space-y-6">
            <div>
              {renderClickableCategoryHeader("Garments")}
              <div className="space-y-1">
                {renderCategoryWithSubcategories("Men", productCategories.Garments.Men, "garments", "Garments")}
                {renderCategoryWithSubcategories("Women", productCategories.Garments.Women, "garments", "Garments")}
                {renderCategoryWithSubcategories("Kids", productCategories.Garments.Kids, "garments", "Garments")}
              </div>
            </div>

            <div>
              {renderClickableCategoryHeader("Footwear")}
              <div className="space-y-1">
                {renderCategoryWithSubcategories("Men", productCategories.Footwear.Men, "footwear", "Footwear")}
                {renderCategoryWithSubcategories("Women", productCategories.Footwear.Women, "footwear", "Footwear")}
                {renderCategoryWithSubcategories("Kids", productCategories.Footwear.Kids, "footwear", "Footwear")}
              </div>
            </div>
          </div>

          {/* Column 2: Fabrics & Home Textile */}
          <div className="space-y-6">
            <div>
              {renderClickableCategoryHeader("Fabrics")}
              <div className="space-y-1">
                {renderCategoryWithSubcategories("Garment Fabrics", productCategories.Fabrics["Garment Fabrics"], "fabrics", "Fabrics")}
                {renderCategoryWithSubcategories("Home Textile Fabrics", productCategories.Fabrics["Home Textile Fabrics"], "fabrics", "Fabrics")}
              </div>
            </div>

            <div>
              {renderSimpleCategory("Home Textile", productCategories["Home Textile"].Products, "hometextile")}
            </div>
          </div>

          {/* Column 3: Electronics & View All */}
          <div className="space-y-6">
            <div>
              {renderSimpleCategory("Electronics & Appliances", productCategories["Electronics & Appliances"], "electronics")}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Explore All Products</h4>
              <p className="text-sm text-gray-600 mb-3">Discover our complete collection</p>
              <button
                onClick={() => handleCategoryClick('all')}
                className="inline-block bg-[#2ca0c9] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-[#2389b3] transition-all duration-200"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-3 bg-white bg-opacity-95 backdrop-blur-lg z-[1000] transition-all duration-300 shadow-sm ${scrolled ? 'py-3 shadow-lg' : ''
          }`}
      >
        <div className="container-fluid mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="logo text-2xl font-bold text-[#2ca0c9] font-playfair flex-shrink-0"
          >
            <img
              src={LOGO}
              className="w-32 sm:w-36 md:w-40 h-auto"
              alt="Maya Exports"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuBtnRef}
            className="mobile-menu-btn xl:hidden text-2xl text-dark z-[1001] p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Main Navigation */}
          <nav
            ref={navRef}
            className={`main-nav ${mobileMenuActive ? 'active' : ''
              } xl:static fixed top-16 right-0 w-80 max-w-[90vw] h-[calc(100vh-64px)] bg-white xl:bg-transparent xl:w-auto xl:h-auto transition-all duration-300 xl:translate-x-0 shadow-2xl xl:shadow-none border-l border-gray-100 xl:border-none ${mobileMenuActive ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
              } overflow-y-auto xl:overflow-visible z-[1001] ${mobileMenuActive ? 'block' : 'hidden xl:block'
              }`}
          >
            <ul className="flex flex-col xl:flex-row xl:items-center p-4 xl:p-0 space-y-1 xl:space-y-0 xl:space-x-6 2xl:space-x-8">
              <li className="w-full xl:w-auto">
                <a
                  href="/"
                  className="font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  Home
                </a>
              </li>

              <li className="w-full xl:w-auto">
                <a
                  href="/about"
                  className="font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  About
                </a>

              </li>

              {/* Products Mega Dropdown */}
              <li
                ref={dropdownRef}
                className={`dropdown relative w-full xl:w-auto ${activeDropdown === 'products' ? 'active' : ''
                  }`}
                onMouseEnter={() => handleDropdownMouseEnter('products')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <button
                  onClick={() => handleCategoryClick('all')}
                  className="font-medium transition-colors duration-300 flex items-center justify-between xl:justify-start py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  <span>Products</span>
                  <i
                    className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''
                      }`}
                  ></i>
                </button>

                {/* Mega Dropdown Menu */}
                <div
                  className={`dropdown-menu xl:absolute xl:top-full xl:left-0 bg-white xl:shadow-2xl xl:rounded-xl transition-all duration-300 border border-gray-200 z-[1002] ${activeDropdown === 'products'
                    ? 'max-h-[80vh] opacity-100 visible translate-y-0 xl:translate-y-0 xl:min-w-[800px]'
                    : 'max-h-0 opacity-0 invisible translate-y-2 xl:translate-y-2'
                    } overflow-hidden xl:overflow-visible mt-1 xl:mt-0 w-full xl:w-auto`}
                  onMouseEnter={handleDropdownMenuMouseEnter}
                  onMouseLeave={handleDropdownMenuMouseLeave}
                >
                  {renderMegaDropdownContent()}
                </div>
              </li>

              <li className="w-full xl:w-auto">
                <button
                  onClick={() => navigate('/ourteam')}
                  className="font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  Our Team
                </button>
              </li>

              <li className="w-full xl:w-auto">
                <button
                  onClick={() => navigate('/tradeEvents')}
                  className="font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  Trade Events
                </button>
              </li>

              <li className="w-full xl:w-auto">
                <button
                  onClick={() => navigate('/career')}
                  className="font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  Career
                </button>
              </li>

              <li className="w-full xl:w-auto">
                <button
                  onClick={() => navigate('/contact')}
                  className="font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base text-dark hover:text-[#2ca0c9] hover:bg-gray-50 xl:hover:bg-transparent"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Search Section */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-55 py-2 px-4 rounded-full border border-gray-300 focus:border-[#2ca0c9] focus:outline-none focus:ring-2 focus:ring-[#2ca0c9] focus:ring-opacity-30 transition-all duration-300"
                />
                <button className="w-10 h-10 rounded-full bg-[#2ca0c9] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ml-2">
                  <i className="fas fa-search text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {mobileMenuActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999] xl:hidden"
          onClick={closeAll}
        ></div>
      )}
    </>
  );
};

export default Header;