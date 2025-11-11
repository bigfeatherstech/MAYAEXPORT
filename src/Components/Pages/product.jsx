import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { featuredCollections, productCategories } from '../DATA/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFilter, 
  faSort, 
  faSearch,
  faStar,
  faEye,
  faShoppingBag,
  faChevronDown,
  faChevronRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [scrollToSection, setScrollToSection] = useState(false);
  const [isFromHeaderNavigation, setIsFromHeaderNavigation] = useState(false);

  // Handle URL parameters on component mount and update
  useEffect(() => {
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const productType = searchParams.get('productType');

    console.log('URL Params:', { category, subcategory, productType });

    // Check if navigation came from header (has any URL parameters)
    const hasUrlParams = category || subcategory || productType;
    setIsFromHeaderNavigation(hasUrlParams);

    if (category) {
      setSelectedCategory(category);
      if (hasUrlParams) {
        setScrollToSection(true);
      }
    } else {
      setSelectedCategory('all');
    }
    
    if (subcategory) {
      setSelectedSubcategory(subcategory);
    }
    
    if (productType) {
      setSelectedProductType(productType);
    }

    // Reset display count when URL parameters change
    setDisplayCount(20);
  }, [searchParams]);

  // Scroll to products section only when coming from header navigation
  useEffect(() => {
    if (scrollToSection && isFromHeaderNavigation) {
      const timer = setTimeout(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        setScrollToSection(false);
        setIsFromHeaderNavigation(false); // Reset after scrolling
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [scrollToSection, isFromHeaderNavigation]);

  // Enhanced filtering based on URL parameters
  const filteredProducts = featuredCollections.filter(product => {
    // Category filter - match main category
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.includes(selectedCategory);
    
    // Subcategory filter (if provided) - match subcategory in category
    const matchesSubcategory = !selectedSubcategory || 
                              product.category.includes(selectedSubcategory);
    
    // Product type filter (if provided) - match in title, tags or description
    const matchesProductType = !selectedProductType || 
                              product.tags.some(tag => 
                                tag.toLowerCase().includes(selectedProductType.toLowerCase())
                              ) ||
                              product.title.toLowerCase().includes(selectedProductType.toLowerCase()) ||
                              product.shortDescription.toLowerCase().includes(selectedProductType.toLowerCase());
    
    // Search term filter
    const matchesSearch = searchTerm === '' ||
                         product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => 
                           tag.toLowerCase().includes(searchTerm.toLowerCase())
                         );

    return matchesCategory && matchesSubcategory && matchesProductType && matchesSearch;
  });

  // Group products by subcategory for section display
  const getProductsBySubcategory = () => {
    const subcategories = {};
    
    filteredProducts.forEach(product => {
      // Extract subcategory from product category
      const categoryParts = product.category.split('-');
      let subcategory = 'other';
      
      if (categoryParts.length > 1) {
        subcategory = categoryParts[1]; // Get the second part (men, women, kids, etc.)
      }
      
      if (!subcategories[subcategory]) {
        subcategories[subcategory] = [];
      }
      subcategories[subcategory].push(product);
    });
    
    return subcategories;
  };

  const productsBySubcategory = getProductsBySubcategory();

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return 0; // Add price logic if available
      case 'price-high':
        return 0; // Add price logic if available
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Products to display (with load more functionality)
  const displayedProducts = sortedProducts.slice(0, displayCount);
  const hasMoreProducts = displayCount < sortedProducts.length;

  const handleProductClick = (product) => {
    navigate(`/productdetail/${product.id}`);
  };

  const handleCategorySelect = (categorySlug, fromSidebar = false) => {
    setSelectedCategory(categorySlug);
    setSelectedSubcategory(null);
    setSelectedProductType(null);
    setIsFilterOpen(false);
    setDisplayCount(20);
    
    // Only scroll if NOT coming from sidebar (i.e., from header navigation)
    if (!fromSidebar) {
      setScrollToSection(true);
      setIsFromHeaderNavigation(true);
    }
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsFilterOpen(false);
    setDisplayCount(20);
    
    // Scroll to the specific subcategory section
    const sectionId = `subcategory-${subcategory}`;
    const timer = setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory(null);
    setSelectedProductType(null);
    setSearchTerm('');
    setSortBy('featured');
    setDisplayCount(20);
    
    // Update URL without parameters
    navigate('/products');
  };

  const handleLoadMore = () => {
    setLoadMoreLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount(prevCount => prevCount + 20);
      setLoadMoreLoading(false);
    }, 800);
  };

  const getCategoryName = (slug) => {
    if (slug === 'all') return 'All Products';
    
    const category = productCategories.find(cat => cat.slug === slug);
    return category ? category.name : slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getSubcategoryDisplayName = (subcategory) => {
    const names = {
      'men': "Men's Collection",
      'women': "Women's Collection", 
      'kids': "Kids Collection",
      'garment': "Garment Fabrics",
      'hometextile': "Home Textile Fabrics",
      'products': "Home Textile Products",
      'ledlights': "LED Lights",
      'homeappliances': "Home Appliances",
      'kitchenappliances': "Kitchen Appliances",
      'other': "Other Products"
    };
    
    return names[subcategory] || subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
  };

  const getActiveFiltersText = () => {
    const filters = [];
    
    if (selectedCategory !== 'all') {
      filters.push(getCategoryName(selectedCategory));
    }
    
    if (selectedSubcategory) {
      filters.push(selectedSubcategory.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '));
    }
    
    if (selectedProductType) {
      filters.push(selectedProductType.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '));
    }
    
    return filters.join(' • ');
  };

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(20);
  }, [selectedCategory, selectedSubcategory, selectedProductType, searchTerm, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#27A0C9]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] py-16 text-white">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              {getCategoryName(selectedCategory)}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our premium collection of export-quality products
            </p>
            
            {/* Active Filters Display */}
            {(selectedSubcategory || selectedProductType) && (
              <div className="mt-4 bg-white/20 rounded-lg p-3 inline-block">
                <p className="text-sm opacity-90">
                  <span className="font-semibold">Active Filters:</span> {getActiveFiltersText()}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container-fluid mx-auto px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faFilter} className="w-4 h-4 mr-2 text-[#27A0C9]" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategorySelect('all', true)} // true indicates from sidebar
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      selectedCategory === 'all' 
                        ? 'bg-[#27A0C9] text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Products
                    <span className="float-right text-sm opacity-75">
                      ({featuredCollections.length})
                    </span>
                  </button>
                  
                  {productCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.slug, true)} // true indicates from sidebar
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedCategory === category.slug 
                          ? 'bg-[#27A0C9] text-white shadow-lg' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                      <span className="float-right text-sm opacity-75">
                        ({featuredCollections.filter(p => p.category.includes(category.slug)).length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategory Quick Links */}
              {selectedCategory !== 'all' && Object.keys(productsBySubcategory).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    {Object.keys(productsBySubcategory).map(subcategory => (
                      <button
                        key={subcategory}
                        onClick={() => handleSubcategorySelect(subcategory)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                          selectedSubcategory === subcategory 
                            ? 'bg-[#27A0C9] text-white shadow-lg' 
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {getSubcategoryDisplayName(subcategory)}
                        <span className="float-right text-sm opacity-75">
                          ({productsBySubcategory[subcategory].length})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Search Products</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                  />
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Bar */}
            <div className="lg:hidden bg-white rounded-2xl shadow-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center bg-[#27A0C9] text-white py-2 px-4 rounded-xl font-medium"
                >
                  <FontAwesomeIcon icon={faFilter} className="w-4 h-4 mr-2" />
                  Filters
                </button>
                
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9]"
                  >
                    <option value="featured">Featured</option>
                    <option value="name">Name A-Z</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filter Dropdown */}
              {isFilterOpen && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Categories</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleCategorySelect('all', true)}
                          className={`px-3 py-2 rounded-lg text-sm ${
                            selectedCategory === 'all' 
                              ? 'bg-[#27A0C9] text-white' 
                              : 'bg-white text-gray-700'
                          }`}
                        >
                          All
                        </button>
                        {productCategories.map(category => (
                          <button
                            key={category.id}
                            onClick={() => handleCategorySelect(category.slug, true)}
                            className={`px-3 py-2 rounded-lg text-sm ${
                              selectedCategory === category.slug 
                                ? 'bg-[#27A0C9] text-white' 
                                : 'bg-white text-gray-700'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mobile Subcategory Quick Links */}
                    {selectedCategory !== 'all' && Object.keys(productsBySubcategory).length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.keys(productsBySubcategory).map(subcategory => (
                            <button
                              key={subcategory}
                              onClick={() => handleSubcategorySelect(subcategory)}
                              className={`px-3 py-2 rounded-lg text-sm ${
                                selectedSubcategory === subcategory 
                                  ? 'bg-[#27A0C9] text-white' 
                                  : 'bg-white text-gray-700'
                              }`}
                            >
                              {getSubcategoryDisplayName(subcategory)}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Search</h4>
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Sort Bar */}
            <div className="hidden lg:flex justify-between items-center bg-white rounded-2xl shadow-lg p-6 mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#27A0C9]">{displayedProducts.length}</span> of{' '}
                <span className="font-semibold text-[#27A0C9]">{sortedProducts.length}</span> products
                {selectedCategory !== 'all' && ` in ${getCategoryName(selectedCategory)}`}
                {(selectedSubcategory || selectedProductType) && ` • ${getActiveFiltersText()}`}
              </p>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9]"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div id="products-section">
              {displayedProducts.length > 0 ? (
                <>
                  {/* Display products grouped by subcategory */}
                  {selectedCategory !== 'all' && Object.keys(productsBySubcategory).length > 1 ? (
                    // Show products grouped by subcategory
                    <div className="space-y-12">
                      {Object.keys(productsBySubcategory).map((subcategory) => (
                        <div key={subcategory} id={`subcategory-${subcategory}`} className="scroll-mt-24">
                          {/* Subcategory Header */}
                          <div className="flex items-center justify-between mb-8">
                            <div>
                              <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-2">
                                {getSubcategoryDisplayName(subcategory)}
                              </h2>
                              <p className="text-gray-600">
                                {productsBySubcategory[subcategory].length} products available
                              </p>
                            </div>
                            {selectedSubcategory === subcategory && (
                              <span className="bg-[#27A0C9] text-white py-1 px-3 rounded-full text-sm font-medium">
                                Active
                              </span>
                            )}
                          </div>

                          {/* Products Grid for this subcategory */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                            {productsBySubcategory[subcategory].slice(0, displayCount).map(product => (
                              <div
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className="product-card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative cursor-pointer border border-gray-100"
                              >
                                <div className="product-img h-64 overflow-hidden relative">
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <img 
                                    src={product.image} 
                                    alt={product.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  
                                  {/* Category Badge */}
                                  <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-[#27A0C9] text-white py-1 px-3 rounded-full text-xs font-medium shadow-lg capitalize">
                                      {product.category.split('-').slice(0, 2).join(' ')}
                                    </span>
                                  </div>

                                  {/* Hover Overlay */}
                                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                      <button className="bg-white text-[#27A0C9] py-2 px-6 rounded-full font-semibold text-sm hover:bg-[#27A0C9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                                        <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                                        View Details
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-4">
                                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#27A0C9] transition-colors duration-300 line-clamp-2">
                                    {product.title}
                                  </h3>
                                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">
                                    {product.shortDescription}
                                  </p>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {product.tags.slice(0, 2).map((tag, index) => (
                                      <span 
                                        key={index}
                                        className="bg-lavender-50 text-[#27A0C9] py-1 px-2 rounded-full text-xs font-medium border border-lavender-100"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  
                                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                    <div className="flex items-center">
                                      <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-400 mr-1" />
                                      <span className="text-sm text-gray-600">5.0</span>
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium">
                                      Export Ready
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Show all products in a single grid (for "All Products" or single subcategory)
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                      {displayedProducts.map(product => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product)}
                          className="product-card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative cursor-pointer border border-gray-100"
                        >
                          <div className="product-img h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                              src={product.image} 
                              alt={product.alt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 z-20">
                              <span className="bg-[#27A0C9] text-white py-1 px-3 rounded-full text-xs font-medium shadow-lg capitalize">
                                {product.category.split('-').slice(0, 2).join(' ')}
                              </span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <button className="bg-white text-[#27A0C9] py-2 px-6 rounded-full font-semibold text-sm hover:bg-[#27A0C9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                                  <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#27A0C9] transition-colors duration-300 line-clamp-2">
                              {product.title}
                            </h3>
                            <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">
                              {product.shortDescription}
                            </p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.tags.slice(0, 2).map((tag, index) => (
                                <span 
                                  key={index}
                                  className="bg-lavender-50 text-[#27A0C9] py-1 px-2 rounded-full text-xs font-medium border border-lavender-100"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                              <div className="flex items-center">
                                <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-400 mr-1" />
                                <span className="text-sm text-gray-600">5.0</span>
                              </div>
                              <div className="text-sm text-gray-500 font-medium">
                                Export Ready
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Load More Button */}
                  {hasMoreProducts && (
                    <div className="text-center mt-12">
                      <button
                        onClick={handleLoadMore}
                        disabled={loadMoreLoading}
                        className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-12 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 mx-auto min-w-48"
                      >
                        {loadMoreLoading ? (
                          <>
                            <FontAwesomeIcon icon={faSpinner} className="w-5 h-5 animate-spin" />
                            Loading...
                          </>
                        ) : (
                          <>
                            Load More Products
                            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-gray-500 mt-4">
                        Showing {displayedProducts.length} of {sortedProducts.length} products
                      </p>
                    </div>
                  )}

                  {/* End of Results Message */}
                  {!hasMoreProducts && displayedProducts.length > 0 && (
                    <div className="text-center mt-12">
                      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                        <div className="text-4xl mb-4 text-[#27A0C9]">🎉</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">All Products Loaded</h3>
                        <p className="text-gray-600">
                          You've reached the end of our {getCategoryName(selectedCategory).toLowerCase()} collection.
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                  <div className="text-6xl mb-4 text-gray-300">📦</div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">
                    {selectedCategory !== 'all' 
                      ? `No products found in ${getCategoryName(selectedCategory)}. Try adjusting your filters.`
                      : 'Try adjusting your filters or search terms'
                    }
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={clearFilters}
                      className="bg-[#27A0C9] text-white py-3 px-8 rounded-xl font-medium hover:bg-[#1e8ab3] transition-all duration-300"
                    >
                      Clear All Filters
                    </button>
                    <button
                      onClick={() => navigate('/products')}
                      className="bg-gray-200 text-gray-700 py-3 px-8 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300"
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;