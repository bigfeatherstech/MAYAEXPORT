import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const popupRef = useRef(null);

  useEffect(() => {
    // Check if user has visited before
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore) {
      // Show popup after a short delay for first-time visitors
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleStockClick = () => {
    markAsVisited();
    setIsOpen(false);
  };

  const handleOrderClick = () => {
    markAsVisited();
    setIsOpen(false);
    navigate('/stock');
  };

  const handleClose = () => {
    markAsVisited();
    setIsOpen(false);
  };

  const markAsVisited = () => {
    // Set flag in localStorage that user has visited
    localStorage.setItem('hasVisitedBefore', 'true');
  };

  // Don't render anything if popup shouldn't be shown
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        ref={popupRef}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 relative"
      >
        {/* Close Button - Half outside */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200 z-10 border border-gray-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] rounded-t-2xl p-6 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-2">Welcome to Our Store</h2>
          <p className="opacity-90">Choose your preferred view</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">
              How would you like to explore our products?
            </p>
          </div>

          <div className="space-y-4">
            {/* Stock Button */}
            <button
              onClick={handleStockClick}
              className="w-full bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Browse Stock Products
            </button>

            {/* Order to Make Button */}
            <button
              onClick={handleOrderClick}
              className="w-full bg-white border-2 border-[#27A0C9] text-[#27A0C9] py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-[#27A0C9] hover:text-white hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Order to Make Products
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="w-full mt-6 text-gray-500 hover:text-gray-700 transition-colors duration-200 py-2"
          >
            I'll decide later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;