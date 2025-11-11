// import React from "react";

// const TopTicker = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-gray-900 text-[#CDAA53] overflow-hidden h-9 flex items-center border-b border-[#CDAA53]/30 shadow-md z-[9999]">
//       <div className="whitespace-nowrap">
//         <p className="inline-block animate-marquee font-semibold text-sm tracking-wide text-[#CDAA53]">
//           ✨ Since 1994 ✨&nbsp;&nbsp;&nbsp;&nbsp;Exporting Worldwide&nbsp;&nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;&nbsp;Luxury Quality Garments&nbsp;&nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;&nbsp;Exporting Worldwide&nbsp;&nbsp;&nbsp;&nbsp;✨
//         </p>
//       </div>

//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(100%); }
//             100% { transform: translateX(-100%); }
//           }
//           .animate-marquee {
//             animation: marquee 18s linear infinite;
//           }
//           .animate-marquee:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TopTicker;







import React from "react";

const TopTicker = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#F5E1E2]/80 via-[#E8D9A0]/80 to-[#D4AF37]/80 backdrop-blur-md text-[#3C3C3C] overflow-hidden h-10 flex items-center border-b border-[#D4AF37]/30 shadow-md z-[9999]">
      <div className="whitespace-nowrap">
        <p className="inline-block animate-marquee font-medium text-sm md:text-base tracking-wide">
          ✨ Since 1994 ✨&nbsp;&nbsp;&nbsp;&nbsp;Exporting Worldwide&nbsp;&nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;&nbsp;Elegent Quality Garments&nbsp;&nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;&nbsp;Trusted by Global Fashion Brands&nbsp;&nbsp;&nbsp;&nbsp;✨
        </p>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 22s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }

          /* Subtle gradient shine effect over text */
          .animate-marquee {
            background: linear-gradient(90deg, #D4AF37, #3C3C3C, #E8B4B8, #D4AF37);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 400%;
            animation: marquee 22s linear infinite, shimmer 6s linear infinite;
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default TopTicker;
