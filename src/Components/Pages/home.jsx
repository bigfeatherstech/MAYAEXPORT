import { useEffect, useState } from 'react';
import { featuredCollections, testimonials, partners, productCategories } from '../DATA/data';
import ProductDetailModal from '../PoductDetailModal/ProductDetailModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import AOS styles
import 'aos/dist/aos.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import AOS
import AOS from 'aos';
import image9 from "../../assets/image9.jpg";
import banner2 from "../../assets/banner2.png";
import banner5 from "../../assets/banner5.jpg";
import LOGO from "../../assets/logo.png";

import { useNavigate } from 'react-router-dom';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faGlobe, 
  faAward, 
  faShieldAlt, 
  faUsers, 
  faShippingFast, 
  faCertificate, 
  faLeaf, 
  faFlask, 
  faBox, 
  faMapMarkerAlt, 
  faPhone, 
  faClock,
  faStar,
  faChevronLeft,
  faChevronRight,
  faHome,
  faIndustry,
  faMicroscope,
  faWarehouse,
  faRocket,
  faHandshake,
  faEye,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // Refresh AOS after load
    setTimeout(() => {
      AOS.refresh();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Duplicate testimonials and partners for loop mode
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const duplicatedPartners = [...partners, ...partners];

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  // Filter products by category - UPDATED for new data structure
  const getProductsByCategory = (categorySlug) => {
    return featuredCollections.filter(product => {
      // Check if product category includes the category slug
      return product.category.includes(categorySlug);
    });
  };

  // Get specific products for each section - UPDATED
  const getMensProducts = () => {
    return featuredCollections.filter(product => 
      product.category.includes('garments-men') || 
      product.category.includes('footwear-men')
    ).slice(0, 12);
  };

  const getWomensProducts = () => {
    return featuredCollections.filter(product => 
      product.category.includes('garments-women') || 
      product.category.includes('footwear-women')
    ).slice(0, 12);
  };

  const getKidsProducts = () => {
    return featuredCollections.filter(product => 
      product.category.includes('garments-kids') || 
      product.category.includes('footwear-kids')
    ).slice(0, 12);
  };

  const getElectronicsProducts = () => {
    return featuredCollections.filter(product => 
      product.category.includes('electronics')
    ).slice(0, 12);
  };

  const getFabricProducts = () => {
    return featuredCollections.filter(product => 
      product.category.includes('fabrics')
    ).slice(0, 12);
  };

  const getAccessoriesProducts = () => {
    // Since we don't have accessories in new structure, use mixed products
    return featuredCollections.slice(0, 12);
  };

  // Navigate to products page with category filter
  const handleViewAllProducts = (category = '') => {
    if (category) {
      navigate(`/products?category=${category}`);
    } else {
      navigate('/products');
    }
  };

  // Helper function to create safe CSS selector names
  const createSafeSelector = (text) => {
    return text
      .replace(/'/g, '') // Remove apostrophes
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-zA-Z0-9-]/g, '') // Remove any other special characters
      .toLowerCase();
  };

  // Mix selected categories for "Best Selling Products" - UPDATED
  const mixedProducts = [
    ...getMensProducts().slice(0, 2),
    ...getWomensProducts().slice(0, 2),
    ...getKidsProducts().slice(0, 2),
    ...getElectronicsProducts().slice(0, 2),
    ...getFabricProducts().slice(0, 2),
    ...getAccessoriesProducts().slice(0, 2),
  ];

  // Enhanced Product Card Component
  const ProductCard = ({ product }) => (
    <div className="product-card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl relative h-full flex flex-col border border-gray-100">
      <div className="product-img h-72 overflow-hidden relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={product.image} 
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-[#27A0C9] text-white py-2 px-4 rounded-full text-xs font-medium shadow-lg capitalize">
            {getCategoryDisplayName(product.category)}
          </span>
        </div>

        {/* Hover Overlay with View Details */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={() => handleQuickView(product)}
              className="bg-white text-[#27A0C9] py-3 px-6 rounded-full font-semibold text-sm hover:bg-[#27A0C9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      </div>
      
      <div className="product-info p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#27A0C9] transition-colors duration-300 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow text-sm leading-relaxed">
          {product.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags && product.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="bg-lavender-50 text-[#27A0C9] py-1 px-3 rounded-full text-xs font-medium border border-lavender-100"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="quality-badge flex items-center">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm text-gray-600 font-medium">Export Ready</span>
          </div>
          <div className="text-sm text-gray-500">
            Premium Quality
          </div>
        </div> */}
      </div>
    </div>
  );

  // Helper function to get display name from category
  const getCategoryDisplayName = (category) => {
    if (category.includes('garments-men')) return "Men's Fashion";
    if (category.includes('garments-women')) return "Women's Fashion";
    if (category.includes('garments-kids')) return "Kids Fashion";
    if (category.includes('footwear')) return "Footwear";
    if (category.includes('fabrics')) return "Fabrics";
    if (category.includes('hometextile')) return "Home Textile";
    if (category.includes('electronics')) return "Electronics";
    return "Premium Product";
  };

  // Enhanced Slider Section Component
  const ProductSliderSection = ({ title, description, products, category = '', bgColor = "bg-white" }) => {
    const safeTitle = createSafeSelector(title);
    
    return (
      <section className={`category-slider py-16 ${bgColor} relative overflow-hidden`}>
        <div className="container mx-auto px-5 relative z-10">
          <div className="section-header text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-800">{title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="relative mb-8">
            {products.length > 0 ? (
              <>
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={products.length > 4}
                  navigation={{
                    nextEl: `.slider-button-next-${safeTitle}`,
                    prevEl: `.slider-button-prev-${safeTitle}`,
                  }}
                  pagination={{ 
                    clickable: true,
                    el: `.slider-pagination-${safeTitle}`
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 25 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                  }}
                  className="pb-12"
                >
                  {products.map((product,I) => (
                    <SwiperSlide key={I}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button 
                  className={`slider-button-prev-${safeTitle} absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl hover:shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#27A0C9] hover:text-white hidden lg:flex`}
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                </button>
                
                <button 
                  className={`slider-button-next-${safeTitle} absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl hover:shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#27A0C9] hover:text-white hidden lg:flex`}
                >
                  <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                </button>

                <div className={`slider-pagination-${safeTitle} swiper-pagination !bottom-0 mt-8`}></div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 text-gray-300">📦</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Coming Soon</h3>
                <p className="text-gray-500">We're preparing amazing products for this category.</p>
              </div>
            )}
          </div>

          {/* View All Products Button */}
          <div className="text-center" data-aos="fade-up">
            <button 
              onClick={() => handleViewAllProducts(category)}
              className="inline-flex items-center bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#27A0C9]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#27A0C9]/40"
            >
              View All {title}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  if (loading) {
    return (
      <div
        id="loading-screen"
        className="fixed inset-0 bg-[#fff] flex items-center justify-center z-50 transition-opacity duration-500"
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-[#27A0C9]/40 border-t-[#27A0C9] rounded-full animate-spin"></div>

          {/* Center image */}
          <img
            src={LOGO}
            alt="Loading..."
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Product Detail Modal */}
        <ProductDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          activeImageIndex={activeImageIndex}
          onImageChange={handleImageChange}
        />

        {/* Hero Section */}
        <section className="hero mt-20 h-[70vh] relative overflow-hidden flex items-center bg-gradient-to-br from-beige to-ivory">
          <div className="hero-swiper w-full h-full absolute inset-0 z-0">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.hero-button-next',
                prevEl: '.hero-button-prev',
              }}
              pagination={{ 
                clickable: true, 
                el: '.hero-pagination',
                bulletClass: 'hero-bullet',
                bulletActiveClass: 'hero-bullet-active'
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="h-full w-full"
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${banner2})`
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${banner5})`
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074)`
                    }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <button 
              className="hero-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
              aria-label="Previous slide"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 text-white" />
            </button>
            
            <button 
              className="hero-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
              aria-label="Next slide"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-white" />
            </button>

            <div className="absolute inset-0 bg-black/25 z-5 pointer-events-none" />
            <div className="hero-pagination swiper-pagination !bottom-4 flex justify-center gap-2" />
          </div>

          <div className="container mx-auto px-5 relative z-10">
            <div className="hero-content max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-5 text-white leading-tight drop-shadow-lg">
                Premium Products, Global Standards
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow max-w-lg">
                Maya Exports Ltd - Your trusted partner for quality exports with 25+ years of excellence in global trade.
              </p>
              <div className="hero-btns flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => handleViewAllProducts()}
                  className="btn bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] text-white py-3 px-6 sm:py-3 sm:px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-[#27A0C9]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#27A0C9]/40 text-sm sm:text-base text-center"
                >
                  Explore Products
                </button>
                <a
                  href="#contact"
                  className="btn btn-outline bg-transparent border-2 border-[#27A0C9] text-[#27A0C9] py-3 px-6 sm:py-3 sm:px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 hover:bg-[#27A0C9] hover:text-white text-sm sm:text-base text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about py-20 bg-white relative overflow-hidden" id="about">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-100/40 to-lavender-200/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cream-100/30 to-cream-200/10 rounded-full -translate-x-40 translate-y-40"></div>
          
          <div className="container mx-auto px-5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="about-content" data-aos="fade-right">
                <div className="section-tag mb-4">
                  <span className="inline-block bg-lavender-100 text-[#27A0C9] py-1 px-4 rounded-full text-sm font-medium">
                    About Maya Exports
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800 leading-tight">
                  Global Leaders in <span className="text-[#27A0C9]">Premium Products</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With over two decades of excellence in the export industry, Maya Exports Ltd has established itself as a trusted global partner for premium quality products. Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for clients across 40+ countries.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="stat-card bg-gradient-to-br from-white to-cream-50 rounded-2xl p-5 shadow-sm border border-lavender-100">
                    <div className="text-3xl font-bold text-[#27A0C9] mb-2">25+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="stat-card bg-gradient-to-br from-white to-cream-50 rounded-2xl p-5 shadow-sm border border-lavender-100">
                    <div className="text-3xl font-bold text-[#27A0C9] mb-2">40+</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                </div>
                <a href="/about" className="inline-flex items-center bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-3 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#27A0C9]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#27A0C9]/40">
                  Our Story
                  <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="about-visual" data-aos="fade-left" data-aos-delay="200">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={image9}
                      alt="Maya Exports Quality Assurance"
                      className="w-full h-auto transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-lavender-100 max-w-xs">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-[#27A0C9]" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Quality Certified</h4>
                    </div>
                    <p className="text-sm text-gray-600">ISO 9001:2015 Certified operations ensuring premium quality standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="categories py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-5 relative z-10">
            <div className="section-header text-center mb-16" data-aos="fade-up">
              <div className="section-tag mb-4">
                <span className="inline-block bg-lavender-100 text-[#27A0C9] py-1 px-4 rounded-full text-sm font-medium">
                  Our Products
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-800">Product Categories</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Explore our wide range of premium quality products across various categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <div 
                  key={category.id || index}
                  className="category-card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-lavender-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="category-img h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <span className="text-sm opacity-90">{category.productCount} products</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.subcategories.map((sub, idx) => (
                        <span key={idx} className="bg-lavender-50 text-[#27A0C9] py-1 px-3 rounded-full text-xs font-medium">
                          {sub}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleViewAllProducts(category.slug)}
                      className="inline-flex items-center text-[#27A0C9] font-medium hover:text-[#1e8ab3] transition-colors duration-300"
                    >
                      Explore Category
                      <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Best Selling Products Slider */}
        <ProductSliderSection
          title="Best Selling Products"
          description="Discover our most popular and high-quality products loved by customers worldwide"
          products={mixedProducts}
          bgColor="bg-gradient-to-br from-cream-50 to-lavender-50"
        />

        {/* Men's Collection Slider */}
        <ProductSliderSection
          title="Men's Collection"
          description="Stylish and comfortable men's clothing and footwear for every occasion"
          products={getMensProducts()}
          category="garments"
          bgColor="bg-white"
        />

        {/* Women's Collection Slider */}
        <ProductSliderSection
          title="Women's Collection"
          description="Elegant women's apparel and footwear for modern lifestyle"
          products={getWomensProducts()}
          category="garments"
          bgColor="bg-gradient-to-br from-cream-50 to-lavender-50"
        />

        {/* Kids Collection Slider */}
        <ProductSliderSection
          title="Kids Collection"
          description="Colorful and comfortable kids clothing for all ages"
          products={getKidsProducts()}
          category="garments"
          bgColor="bg-white"
        />

        {/* Electronics Collection Slider */}
        <ProductSliderSection
          title="Electronics Collection"
          description="Latest electronic gadgets and accessories with cutting-edge technology"
          products={getElectronicsProducts()}
          category="electronics"
          bgColor="bg-gradient-to-br from-cream-50 to-lavender-50"
        />

        {/* Fabric Products Slider */}
        <ProductSliderSection
          title="Fabric Products"
          description="High-quality fabrics and textiles for various creative needs"
          products={getFabricProducts()}
          category="fabrics"
          bgColor="bg-white"
        />

        {/* Accessories Collection Slider */}
        <ProductSliderSection
          title="Accessories Collection"
          description="Fashion accessories and jewelry to complete your look"
          products={getAccessoriesProducts()}
          category="accessories"
          bgColor="bg-gradient-to-br from-cream-50 to-lavender-50"
        />

        {/* Testimonials Section */}
        <section className="testimonials py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cream-50 rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="container mx-auto px-5 relative z-10">
            <div className="section-header text-center mb-16" data-aos="fade-up">
              <div className="section-tag mb-4">
                <span className="inline-block bg-lavender-100 text-[#27A0C9] py-1 px-4 rounded-full text-sm font-medium">
                  Client Testimonials
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-800">Trusted by Global Partners</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Hear from our international clients about their experience partnering with Maya Exports.
              </p>
            </div>
            
            <div className="testimonials-slider-container w-full h-full py-8 pb-16 relative z-10">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={duplicatedTestimonials.length > 3}
                pagination={{ 
                  clickable: true,
                  el: '.testimonials-pagination'
                }}
                navigation={{
                  nextEl: '.testimonials-button-next',
                  prevEl: '.testimonials-button-prev',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="testimonials-swiper"
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <SwiperSlide key={`${testimonial.id}-${index}`}>
                    <div className="testimonial-card bg-gradient-to-br from-white to-cream-50 rounded-2xl shadow-lg p-8 max-w-sm mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-lavender-100 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0]"></div>
                      <div className="quote-icon text-4xl text-lavender-200 mb-4">"</div>
                      <p className="testimonial-text text-gray-700 leading-relaxed mb-6 italic">
                        {testimonial.text}
                      </p>
                      <div className="client-info flex items-center">
                        <div className="client-avatar w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-lavender-200 shadow-md">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="client-details">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                          <p className="text-[#27A0C9] font-medium text-sm">{testimonial.position}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 text-[#27A0C9]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="testimonials-pagination swiper-pagination !bottom-0 mt-8"></div>
              
              <div className="testimonials-navigation flex items-center justify-center gap-4 mt-8">
                <button className="testimonials-button-prev !static !relative !transform-none !mt-0 !w-12 !h-12 !bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 after:!text-white after:!text-lg after:!font-bold flex items-center justify-center">
                  <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-white" />
                </button>
                
                <button className="testimonials-button-next !static !relative !transform-none !mt-0 !w-12 !h-12 !bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 after:!text-white after:!text-lg after:!font-bold flex items-center justify-center">
                  <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact py-20 bg-white relative overflow-hidden" id="contact">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-lavender-100/20 rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="container mx-auto px-5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="contact-info" data-aos="fade-right">
                <div className="section-tag mb-4">
                  <span className="inline-block bg-lavender-100 text-[#27A0C9] py-1 px-4 rounded-full text-sm font-medium">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Let's Discuss Your Requirements</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ready to source premium quality products for your market? Contact our export specialists today for competitive pricing, samples, and customized solutions.
                </p>
                
                <div className="contact-details space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-[#27A0C9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Head Office</h4>
                      <p className="text-gray-600">123 Export Street, Trade District<br />Mumbai, Maharashtra 400001, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#27A0C9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Contact</h4>
                      <p className="text-gray-600">+91 22 1234 5678<br />info@mayaexports.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[#27A0C9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form" data-aos="fade-left" data-aos-delay="200">
                <div className="bg-gradient-to-br from-white to-cream-50 rounded-2xl p-8 shadow-lg border border-lavender-100">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input 
                          type="text" 
                          id="company" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                      <select 
                        id="product" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                      >
                        <option value="">Select a product category</option>
                        <option value="garments">Garments</option>
                        <option value="footwear">Footwear</option>
                        <option value="fabrics">Fabrics</option>
                        <option value="hometextile">Home Textile</option>
                        <option value="electronics">Electronics</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-[#27A0C9]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#27A0C9]/40"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta py-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white bg-opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5"></div>
          
          <div className="container mx-auto px-5 relative z-10">
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-5 text-white">Ready to Partner with Maya Exports?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-blue-100 text-lg">
                Join our global network of satisfied clients and experience the Maya Exports difference in quality, reliability, and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn bg-white text-[#27A0C9] py-3 px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30">
                  Request Quote
                </a>
                <button 
                  onClick={() => handleViewAllProducts()}
                  className="btn btn-outline bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#27A0C9]"
                >
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add custom styles */}
      <style jsx="true">{`
        .bg-lavender-50 { background-color: #f8f7ff; }
        .bg-lavender-100 { background-color: #f0edff; }
        .bg-lavender-200 { background-color: #e8e4ff; }
        .border-lavender-100 { border-color: #f0edff; }
        
        .bg-cream-50 { background-color: #fefaf6; }
        .bg-cream-100 { background-color: #fdf6f0; }
        .bg-cream-200 { background-color: #fcf2ea; }
        
        .text-lavender-200 { color: #e8e4ff; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hero-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .hero-bullet-active {
          background: linear-gradient(135deg, #27A0C9, #4ab8e0);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(39, 160, 201, 0.5);
        }
      `}</style>
    </>
  );
};

export default Home;