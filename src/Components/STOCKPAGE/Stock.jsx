import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faStar,
  faEye,
  faShoppingBag,
  faFilter,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

// Demo data for order-to-make products
const orderToMakeProducts = [
  {
    id: 1,
    title: "Custom Printed Cotton T-Shirts",
    shortDescription: "High-quality custom printed cotton t-shirts with your design",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "custom-garment",
    tags: ["Custom Print", "Cotton", "Bulk Order", "7-10 Days"],
    minOrder: 100,
    productionTime: "7-10 days",
    customization: "Full Customization"
  },
  {
    id: 2,
    title: "Bamboo Fiber Home Textiles",
    shortDescription: "Eco-friendly bamboo fiber bedsheets and pillowcases",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    category: "custom-hometextile",
    tags: ["Bamboo Fiber", "Eco-friendly", "Custom Size", "14 Days"],
    minOrder: 50,
    productionTime: "10-14 days",
    customization: "Size & Design"
  },
  {
    id: 3,
    title: "LED Smart Lighting Solutions",
    shortDescription: "Custom LED lighting systems for commercial spaces",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    category: "custom-electronics",
    tags: ["Smart LED", "Commercial", "Custom Design", "21 Days"],
    minOrder: 25,
    productionTime: "15-21 days",
    customization: "Technical Specifications"
  },
  {
    id: 4,
    title: "Designer Kitchen Appliances",
    shortDescription: "Premium kitchen appliances with custom branding",
    image: "https://images.unsplash.com/photo-1583778176476-4a8b9f8d1e6e?w=400",
    category: "custom-appliances",
    tags: ["Premium", "Custom Branding", "Bulk", "30 Days"],
    minOrder: 20,
    productionTime: "25-30 days",
    customization: "Branding & Features"
  },
  {
    id: 5,
    title: "Organic Baby Clothing Set",
    shortDescription: "Custom organic cotton baby clothes with safe dyes",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400",
    category: "custom-garment",
    tags: ["Organic", "Baby", "Safe Materials", "10 Days"],
    minOrder: 200,
    productionTime: "8-10 days",
    customization: "Design & Size"
  },
  {
    id: 6,
    title: "Hotel Linen Collection",
    shortDescription: "Custom hotel linens with embroidered logos",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
    category: "custom-hometextile",
    tags: ["Hotel Grade", "Embroidery", "Bulk", "20 Days"],
    minOrder: 100,
    productionTime: "15-20 days",
    customization: "Logo & Size"
  }
];

const Stock = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loadingProductId, setLoadingProductId] = useState(null); // Track which product is loading

  const categories = [
    { slug: 'all', name: 'All Products' },
    { slug: 'custom-garment', name: 'Custom Garments' },
    { slug: 'custom-hometextile', name: 'Custom Home Textiles' },
    { slug: 'custom-electronics', name: 'Custom Electronics' },
    { slug: 'custom-appliances', name: 'Custom Appliances' }
  ];

  const filteredProducts = orderToMakeProducts.filter(product => {
    const matchesSearch = searchTerm === '' ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
      product.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product) => {
    // Navigate to product detail or show customization modal
    console.log('Customize product:', product);
    // You can implement a modal or separate page for customization
  };

  const handleInquire = (product, e) => {
    e.stopPropagation();
    setLoadingProductId(product.id); // Set loading for this specific product
    
    // Simulate API call
    setTimeout(() => {
      setLoadingProductId(null); // Clear loading state
      alert(`Inquiry sent for ${product.title}. Our team will contact you within 24 hours.`);
    }, 1000);
  };

  const getCategoryName = (slug) => {
    const category = categories.find(cat => cat.slug === slug);
    return category ? category.name : 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 my-5">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] py-16 text-white">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Order to Make
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Customize products according to your requirements. Minimum order quantities apply.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-5 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.slug
                      ? 'bg-[#27A0C9] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Search custom products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#27A0C9] focus:border-[#27A0C9] transition-colors duration-300"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative cursor-pointer border border-gray-100"
            >
              <div className="product-img h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Custom Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#27A0C9] text-white py-1 px-3 rounded-full text-xs font-medium shadow-lg">
                    Custom Order
                  </span>
                </div>

                {/* Production Time */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-yellow-500 text-white py-1 px-2 rounded-full text-xs font-medium">
                    {product.productionTime}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                    <button 
                      onClick={() => handleProductClick(product)}
                      className="bg-white text-[#27A0C9] py-2 px-6 rounded-full font-semibold text-sm hover:bg-[#27A0C9] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                    >
                      <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                      Customize Now
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
                
                {/* Customization Details */}
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Min. Order:</span>
                    <span className="font-semibold text-[#27A0C9]">{product.minOrder} units</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Production:</span>
                    <span className="font-semibold text-yellow-600">{product.productionTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Customization:</span>
                    <span className="font-semibold text-green-600">{product.customization}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-lavender-50 text-[#27A0C9] py-1 px-2 rounded-full text-xs font-medium border border-lavender-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <button
                  onClick={(e) => handleInquire(product, e)}
                  disabled={loadingProductId === product.id}
                  className="w-full bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loadingProductId === product.id ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faShoppingBag} className="w-4 h-4" />
                      Request Custom Quote
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4 text-gray-300">🔧</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No custom products found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-[#27A0C9] text-white py-3 px-8 rounded-xl font-medium hover:bg-[#1e8ab3] transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6 text-center">
            How Custom Orders Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#27A0C9] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Request Quote</h3>
              <p className="text-gray-600 text-sm">
                Send us your requirements and we'll provide a detailed quote within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#27A0C9] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Customize & Approve</h3>
              <p className="text-gray-600 text-sm">
                Work with our team to finalize design, materials, and specifications
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#27A0C9] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Production & Delivery</h3>
              <p className="text-gray-600 text-sm">
                We manufacture and deliver your custom products within the agreed timeline
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;