import { useState, useRef, useEffect } from 'react';

const ProductDetailModal = ({ product, isOpen, onClose, activeImageIndex, onImageChange }) => {
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const zoomLensRef = useRef(null);
  const zoomPreviewRef = useRef(null);
  const modalRef = useRef(null);

  // Configuration
  const ZOOM_LEVEL = 3;
  const LENS_SIZE = 100; // Semi-transparent lens size
  const PREVIEW_SIZE = 500; // Fixed preview size as requested

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Add click outside listener
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle click outside to close modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current || !isZoomActive) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    // Calculate cursor position relative to image
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Constrain position to avoid lens going outside image
    const constrainedX = Math.max(0, Math.min(100, x));
    const constrainedY = Math.max(0, Math.min(100, y));

    setZoomPosition({ x: constrainedX, y: constrainedY });

    // Calculate lens position
    const lensX = e.clientX - left - LENS_SIZE / 2;
    const lensY = e.clientY - top - LENS_SIZE / 2;

    // Constrain lens within image bounds
    const constrainedLensX = Math.max(0, Math.min(width - LENS_SIZE, lensX));
    const constrainedLensY = Math.max(0, Math.min(height - LENS_SIZE, lensY));

    // Update lens position
    if (zoomLensRef.current) {
      zoomLensRef.current.style.left = `${constrainedLensX}px`;
      zoomLensRef.current.style.top = `${constrainedLensY}px`;
    }
  };

  const handleMouseEnter = () => {
    // Only activate zoom on desktop (non-touch devices)
    if (!('ontouchstart' in window)) {
      setIsZoomActive(true);
    }
  };

  const handleMouseLeave = () => {
    setIsZoomActive(false);
  };

  const getProductImages = (product) => {
    return product.images || [
      product.image,
      product.image,
      product.image,
      product.image,
    ];
  };

  if (!isOpen || !product) return null;

  const images = getProductImages(product);
  const isMobile = 'ontouchstart' in window;

  return (
    <div 
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose} // Close when clicking outside
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] transform transition-all duration-300 scale-100 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Compressed Layout - No scrolling needed */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column - Product Images (60%) */}
            <div className="lg:col-span-7 relative bg-gray-50 p-6">
              <div className="flex space-x-4 h-full">
                {/* Thumbnails - Smaller and more compact */}
                <div className="flex flex-col space-y-3 w-20">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => onImageChange(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        activeImageIndex === index 
                          ? 'border-purple-500 shadow-md scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image with Zoom - Only on desktop */}
                <div className="flex-1 relative">
                  <div 
                    ref={imageRef}
                    className="w-full h-full rounded-xl overflow-hidden relative bg-white"
                    onMouseEnter={isMobile ? undefined : handleMouseEnter}
                    onMouseLeave={isMobile ? undefined : handleMouseLeave}
                    onMouseMove={isMobile ? undefined : handleMouseMove}
                    style={{ cursor: isMobile ? 'default' : 'crosshair' }}
                  >
                    <img
                      src={images[activeImageIndex]}
                      alt={product.title}
                      className="w-full h-full object-contain transition-opacity duration-200"
                    />
                    
                    {/* Zoom Lens - Only show on desktop */}
                    {isZoomActive && !isMobile && (
                      <div
                        ref={zoomLensRef}
                        className="absolute  rounded-lg pointer-events-none"
                        style={{
                          width: `${LENS_SIZE}px`,
                          height: `${LENS_SIZE}px`,
                          opacity: isZoomActive ? 1 : 0,
                          transition: 'opacity 0.2s ease',
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Zoom Preview - Only show on desktop */}
                {isZoomActive && !isMobile && (
                  <div
                    ref={zoomPreviewRef}
                    className="absolute left-[calc(100%-35px)] top-1/2 transform -translate-y-1/2 w-[500px] h-[650px] border border-gray-200 rounded-xl shadow-2xl overflow-hidden bg-white z-40 transition-all duration-200"
                    style={{
                      opacity: isZoomActive ? 1 : 0,
                      transform: `translateY(-50%) ${isZoomActive ? 'scale(1)' : 'scale(0.95)'}`,
                    }}
                  >
                    <div
                      className="w-full h-full bg-no-repeat bg-origin-border"
                      style={{
                        backgroundImage: `url(${images[activeImageIndex]})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        backgroundSize: `${100 * ZOOM_LEVEL}%`,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Zoom Instructions - Only show on desktop */}
              {!isMobile && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                  🔍 Hover to zoom
                </div>
              )}
            </div>

            {/* Right Column - Product Details (40%) - Compressed Layout */}
            <div className="lg:col-span-5 p-6 bg-white border-l border-gray-100">
              <div className="h-full flex flex-col">
                {/* Compressed Content - No scrolling needed */}
                <div className="space-y-4 flex-1">
                  {/* Title and Price */}
                  <div>
                    <h1 className="text-xl font-playfair font-semibold text-gray-900 mb-1 leading-tight">
                      {product.title}
                    </h1>
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                      {product.subtitle}
                    </p>
                    <div className="text-2xl font-bold text-purple-600 mb-3">
                      {product.price}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${
                      product.availability === 'In Stock' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-gray-600 text-sm">{product.availability}</span>
                  </div>

                  {/* Short Description - More compact */}
                  <div className="mb-3">
                    <p className="text-gray-700 leading-relaxed text-sm line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Add to Cart Button - Prominent */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-purple-700 hover:to-blue-600 mb-4">
                    Enquire Now
                  </button>

                  {/* Key Specifications - Compact */}
                  <div className="mb-3">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Key Features</h3>
                    <div className="space-y-1 text-sm">
                      {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 font-medium">{key}:</span>
                          <span className="text-gray-900 text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full Description - Collapsible */}
                  <details className="group">
                    <summary className="cursor-pointer text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      Full Description ›
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </details>

                  {/* All Specifications - Collapsible */}
                  <details className="group">
                    <summary className="cursor-pointer text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      All Specifications ›
                    </summary>
                    <div className="mt-2 space-y-1 text-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-gray-600">{key}:</span>
                          <span className="text-gray-900 text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>

                {/* Action Icons - Compact footer */}
                <div className="flex justify-around pt-4 border-t border-gray-200 mt-4">
                  <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-purple-600 transition-all duration-200 group">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-xs">Save</span>
                  </button>
                  <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-purple-600 transition-all duration-200 group">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <span className="text-xs">Share</span>
                  </button>
                  <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-blue-500 transition-all duration-200 group">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <span className="text-xs">Tweet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

// import { useState, useRef, useEffect } from 'react';

// const ProductDetailModal = ({ product, isOpen, onClose, activeImageIndex, onImageChange }) => {
//   const [isZoomActive, setIsZoomActive] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
//   const [zoomPreviewPosition, setZoomPreviewPosition] = useState({ x: 0, y: 0 });
//   const imageRef = useRef(null);
//   const zoomLensRef = useRef(null);
//   const zoomPreviewRef = useRef(null);

//   const ZOOM_LEVEL = 2;
//   const LENS_SIZE = 150;

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   const handleMouseMove = (e) => {
//     if (!imageRef.current || !isZoomActive) return;

//     const { left, top, width, height } = imageRef.current.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;

//     // Constrain position to avoid lens going outside image
//     const constrainedX = Math.max(0, Math.min(100, x));
//     const constrainedY = Math.max(0, Math.min(100, y));

//     setZoomPosition({ x: constrainedX, y: constrainedY });

//     // Calculate lens position
//     const lensX = e.clientX - left - LENS_SIZE / 2;
//     const lensY = e.clientY - top - LENS_SIZE / 2;

//     // Constrain lens within image bounds
//     const constrainedLensX = Math.max(0, Math.min(width - LENS_SIZE, lensX));
//     const constrainedLensY = Math.max(0, Math.min(height - LENS_SIZE, lensY));

//     if (zoomLensRef.current) {
//       zoomLensRef.current.style.left = `${constrainedLensX}px`;
//       zoomLensRef.current.style.top = `${constrainedLensY}px`;
//     }

//     // Calculate zoom preview position (opposite side of cursor)
//     if (zoomPreviewRef.current) {
//       const previewWidth = zoomPreviewRef.current.offsetWidth;
//       const previewHeight = zoomPreviewRef.current.offsetHeight;
      
//       // Position preview on the right if there's space, otherwise on the left
//       const hasSpaceOnRight = (window.innerWidth - e.clientX) > previewWidth + 20;
//       const previewX = hasSpaceOnRight ? e.clientX + 20 : e.clientX - previewWidth - 20;
      
//       // Position preview vertically centered relative to cursor
//       const previewY = e.clientY - previewHeight / 2;
      
//       setZoomPreviewPosition({ x: previewX, y: previewY });
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsZoomActive(true);
//   };

//   const handleMouseLeave = () => {
//     setIsZoomActive(false);
//   };

//   const getProductImages = (product) => {
//     return product.images || [
//       product.image,
//       product.image,
//       product.image,
//       product.image,
//     ];
//   };

//   if (!isOpen || !product) return null;

//   const images = getProductImages(product);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
//       <div 
//         className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-scroll transform transition-all duration-300 scale-100"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
//           >
//             <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           <div className="grid grid-cols-1 lg:grid-cols-10 h-[90vh]">
//             {/* Left Column - Product Images (70%) */}
//             <div className="lg:col-span-7 relative bg-gray-50 p-8">
//               <div className="flex space-x-6 h-full">
//                 {/* Thumbnails */}
//                 <div className="flex flex-col space-y-4 w-24">
//                   {images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => onImageChange(index)}
//                       className={`relative w-24 h-24 rounded-xl overflow-hidden border-3 transition-all duration-300 transform ${
//                         activeImageIndex === index 
//                           ? 'border-purple-500 shadow-lg scale-105' 
//                           : 'border-gray-200 hover:border-gray-300 hover:scale-102'
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`${product.title} view ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                       {activeImageIndex === index && (
//                         <div className="absolute inset-0 border-2 border-white rounded-xl"></div>
//                       )}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Main Image with Zoom */}
//                 <div className="flex-1 relative">
//                   <div 
//                     ref={imageRef}
//                     className="w-full h-full rounded-2xl overflow-hidden relative cursor-crosshair bg-white"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     onMouseMove={handleMouseMove}
//                   >
//                     <img
//                       src={images[activeImageIndex]}
//                       alt={product.title}
//                       className="w-full h-full object-contain transition-opacity duration-300"
//                       style={{ opacity: isZoomActive ? 0 : 1 }}
//                     />
                    
//                     {/* Zoom Lens */}
//                     {isZoomActive && (
//                       <div
//                         ref={zoomLensRef}
//                         className="absolute border-2 border-white rounded-lg shadow-2xl pointer-events-none transition-opacity duration-200"
//                         style={{
//                           width: `${LENS_SIZE}px`,
//                           height: `${LENS_SIZE}px`,
//                         //   background: 'rgba(255, 255, 255, 0.3)',
//                           backdropFilter: 'blur(4px)',
//                           opacity: isZoomActive ? 1 : 0,
//                         }}
//                       />
//                     )}
//                   </div>

//                   {/* Zoom Preview */}
//                   {isZoomActive && (
//                     <div
//                       ref={zoomPreviewRef}
//                       className="absolute left-full ml-4 top-0 w-80 h-80 border-2 border-white rounded-2xl shadow-2xl overflow-hidden pointer-events-none z-50 transition-opacity duration-200"
//                       style={{
//                         opacity: isZoomActive ? 1 : 0,
//                         left: 'auto',
//                         right: '100%',
//                         marginLeft: '0',
//                         marginRight: '1rem',
//                         transform: `translate(${zoomPreviewPosition.x}px, ${zoomPreviewPosition.y}px)`
//                       }}
//                     >
//                       <div
//                         className="w-full h-full bg-cover bg-no-repeat"
//                         style={{
//                           backgroundImage: `url(${images[activeImageIndex]})`,
//                           backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//                           backgroundSize: `${100 * ZOOM_LEVEL}%`,
//                           transform: 'scale(1.1)',
//                         }}
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Zoom Instructions */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
//                 🔍 Hover to zoom • Scroll to see zoomed area
//               </div>
//             </div>

//             {/* Right Column - Product Details (30%) */}
//             <div className="lg:col-span-3 p-8 overflow-y-auto bg-gradient-to-b from-white to-gray-50">
//               <div className="space-y-6">
//                 {/* Title and Subtitle */}
//                 <div>
//                   <h1 className="text-2xl font-playfair font-semibold text-gray-900 mb-2 leading-tight">
//                     {product.title}
//                   </h1>
//                   <p className="text-base text-gray-600 mb-3 leading-relaxed">
//                     {product.subtitle}
//                   </p>
//                   <div className="text-2xl font-bold text-purple-600">
//                     {product.price}
//                   </div>
//                 </div>

//                 {/* Short Description */}
//                 <div>
//                   <p className="text-gray-700 leading-relaxed text-sm">
//                     {product.shortDescription}
//                   </p>
//                 </div>

//                 {/* Full Description */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
//                   <p className="text-gray-600 leading-relaxed text-sm">
//                     {product.description}
//                   </p>
//                 </div>

//                 {/* Specifications */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
//                   <div className="space-y-3">
//                     {Object.entries(product.specifications).map(([key, value]) => (
//                       <div key={key} className="flex justify-between items-start border-b border-gray-100 pb-2">
//                         <span className="text-gray-600 font-medium text-sm flex-1">{key}:</span>
//                         <span className="text-gray-900 text-sm text-right flex-1">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Availability */}
//                 <div className="flex items-center space-x-2">
//                   <div className={`w-3 h-3 rounded-full ${
//                     product.availability === 'In Stock' ? 'bg-green-500' : 'bg-red-500'
//                   }`}></div>
//                   <span className="text-gray-600 text-sm">{product.availability}</span>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-purple-700 hover:to-blue-600">
//                   Add to Cart
//                 </button>

//                 {/* Action Icons */}
//                 <div className="flex justify-between pt-4 border-t border-gray-200">
//                   <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-purple-600 transition-all duration-200 group">
//                     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                     </div>
//                     <span className="text-xs">Wishlist</span>
//                   </button>
//                   <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-purple-600 transition-all duration-200 group">
//                     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                       </svg>
//                     </div>
//                     <span className="text-xs">Share</span>
//                   </button>
//                   <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-500 transition-all duration-200 group">
//                     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                       </svg>
//                     </div>
//                     <span className="text-xs">Twitter</span>
//                   </button>
//                   <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-pink-600 transition-all duration-200 group">
//                     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-pink-50 transition-colors">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                       </svg>
//                     </div>
//                     <span className="text-xs">Instagram</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailModal;