import { useState, useEffect } from 'react';

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-7 right-5 z-50">
      {/* Main Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
       bg-gradient-to-br from-[#2ca0c9] via-[#2389b3] to-[#1e6f8d]
          text-white
          rounded-2xl
          shadow-2xl
          transition-all duration-500
          transform
          hover:shadow-3xl
          border-2 border-white border-opacity-20
          backdrop-blur-sm
          ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'}
          ${isHovered ? 'scale-110 -translate-y-1' : 'scale-100'}
        `}
        aria-label="Scroll to top"
      >
        {/* Animated Arrow Icon */}
        <div className={`transform transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''}`}>
          <svg 
            className="w-6 h-6 md:w-7 md:h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </div>

        {/* Pulse Animation Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2ca0c9] to-[#2389b3] opacity-0 animate-ping"></div>
        
        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2ca0c9] to-[#2389b3] blur-md opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-30' : ''}`}></div>
      </button>

    </div>
  );
};

export default BottomToTop;