import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { featuredCollections } from '../../DATA/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar,
  faChevronLeft,
  faShoppingBag,
  faHeart,
  faShare,
  faTruck,
  faShieldAlt,
  faCheckCircle,
  faArrowRight,
  faSpinner,
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        const foundProduct = featuredCollections.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      }, 800);
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.title} to cart!`);
  };

  const handleBuyNow = () => {
    // Buy now logic here
    alert(`Proceeding to buy ${quantity} ${product.title}!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <FontAwesomeIcon icon={faSpinner} className="w-12 h-12 text-[#27A0C9] animate-spin mb-4" />
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4 text-gray-300">❌</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">Product Not Found</h2>
          <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#27A0C9] text-white py-3 px-8 rounded-xl font-medium hover:bg-[#1e8ab3] transition-all duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-5 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-[#27A0C9] transition-colors duration-300"
          >
            Home
          </button>
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
          <button 
            onClick={() => navigate('/products')}
            className="hover:text-[#27A0C9] transition-colors duration-300"
          >
            Products
          </button>
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
          <span className="text-gray-800 font-medium capitalize">
            {product.category.replace('-', ' ')}
          </span>
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
          <span className="text-gray-800 font-medium truncate max-w-xs">
            {product.title}
          </span>
        </nav>
      </div>

      <div className="container mx-auto px-5 py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                <img
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {(product.images || [product.image]).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-gray-100 rounded-xl overflow-hidden h-20 flex items-center justify-center border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-[#27A0C9] ring-2 ring-[#27A0C9] ring-opacity-30' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & Title */}
              <div>
                <span className="inline-block bg-lavender-100 text-[#27A0C9] py-1 px-4 rounded-full text-sm font-medium mb-3">
                  {product.category.replace('-', ' ')}
                </span>
                <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 mb-3">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className="w-5 h-5 text-yellow-400" 
                      />
                    ))}
                    <span className="ml-2 text-gray-600">(4.8)</span>
                  </div>
                  <span className="text-green-600 font-medium">✓ In Stock</span>
                </div>
              </div>

              {/* Price & Availability */}
              <div className="bg-gradient-to-r from-lavender-50 to-cream-50 rounded-2xl p-6">
                <div className="flex items-baseline space-x-3 mb-4">
                  <span className="text-3xl font-bold text-[#27A0C9]">$99.99</span>
                  <span className="text-xl text-gray-500 line-through">$129.99</span>
                  <span className="bg-red-100 text-red-600 py-1 px-3 rounded-full text-sm font-medium">
                    23% OFF
                  </span>
                </div>
                <p className="text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-[#27A0C9]" />
                  <span className="text-gray-700">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 text-[#27A0C9]" />
                  <span className="text-gray-700">1 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#27A0C9]" />
                  <span className="text-gray-700">Export Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#27A0C9]" />
                  <span className="text-gray-700">Certified</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-gray-800">Quantity</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
                    <button
                      onClick={handleDecrement}
                      className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="w-12 h-12 flex items-center justify-center font-semibold text-gray-800">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">Minimum order: 1 piece</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-white border-2 border-[#27A0C9] text-[#27A0C9] py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#27A0C9] hover:text-white hover:shadow-lg flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faShoppingBag} className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Buy Now
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#27A0C9] transition-colors duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#27A0C9] transition-colors duration-300">
                  <FontAwesomeIcon icon={faShare} className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex overflow-x-auto">
              {['description', 'specifications', 'shipping'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-[#27A0C9] border-b-2 border-[#27A0C9] bg-blue-50'
                      : 'text-gray-600 hover:text-[#27A0C9] hover:bg-gray-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-lavender-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.tags.map((tag, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#27A0C9] flex-shrink-0" />
                            <span className="text-gray-700">{tag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-cream-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Quality Assurance</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#27A0C9] flex-shrink-0" />
                          <span className="text-gray-700">Premium Quality Materials</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#27A0C9] flex-shrink-0" />
                          <span className="text-gray-700">Export Standard Packaging</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#27A0C9] flex-shrink-0" />
                          <span className="text-gray-700">International Quality Standards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications || {
                      'Material': 'Premium Quality Materials',
                      'Style': 'Export Standard',
                      'Care Instructions': 'As per product requirements',
                      'Size': 'Multiple sizes available',
                      'Color': 'Various colors available',
                      'Quality': 'Export Grade A'
                    }).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Shipping & Returns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">Shipping Information</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-[#27A0C9] mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-700">Free Shipping</span>
                            <p className="text-gray-600 text-sm">On orders above $200</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-[#27A0C9] mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-700">Express Delivery</span>
                            <p className="text-gray-600 text-sm">2-3 business days</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">Return Policy</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#27A0C9] mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-700">30-Day Returns</span>
                            <p className="text-gray-600 text-sm">Easy return process</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#27A0C9] mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-700">Quality Guarantee</span>
                            <p className="text-gray-600 text-sm">100% quality assured</p>
                          </div>
                        </li>
                      </ul>
                    </div>
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

export default ProductDetail;