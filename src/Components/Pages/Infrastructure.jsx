

import React from "react";

import image6 from "../../assets/image6.JPG";
import image5 from "../../assets/image5.JPG";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";

const Infrastructure = () => {
  const sections = [
    {
      title: "State-of-the-Art Production Facility",
      description:
        "Our garment manufacturing unit is equipped with advanced machinery for stitching, cutting, and finishing. Each process is optimized to ensure precision, quality, and efficiency.",
      image: image6,
    },
    {
      title: "Expert Tailoring & Stitching Units",
      description:
        "Our skilled tailors and technicians blend traditional craftsmanship with modern techniques, ensuring every stitch speaks perfection and durability.",
      image: image5,
    },
    {
      title: "Embroidery, Printing & Finishing",
      description:
        "With modern embroidery machines and expert artisans, we deliver detailed embellishments, intricate threadwork, and flawless finishes that elevate every design.",
      image: image8,
    },
  ];

  return (
    <section className="infrastructure bg-gradient-to-b from-[#fff8f0] via-[#fffdfb] to-[#fff8f0] mt-20 relative overflow-hidden">
      {/* ===== Hero Banner ===== */}
      <div className="relative w-full h-[45vh] md:h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src={image9}
          alt="Infrastructure Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-3 animate-bounce-custom">
            Infrastructure
          </h1>
          <p className="text-base md:text-lg text-[#ffd700] max-w-2xl mx-auto font-poppins">
            At <span className="text-[#ffcc33] font-semibold">Frolic Exports</span>, innovation meets craftsmanship in every thread — powered by modern technology and world-class facilities.
          </p>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-10 space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-700 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 flex justify-center">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#d4af37]/40 to-[#ffcf5f]/40 rounded-2xl blur-sm opacity-20 hover:opacity-40 transition-all duration-700"></div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="relative w-full max-w-[460px] rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left animate-fadeInUp">
                <h2 className="text-2xl md:text-3xl font-playfair text-[#d4af37] mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-800 text-sm md:text-base font-poppins leading-relaxed tracking-wide">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thin Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

      {/* Inline Animation Styles */}
      <style>
        {`
          @keyframes bounceCustom {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }

          .animate-bounce-custom {
            animation: bounceCustom 2s ease-in-out infinite;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Infrastructure;








// import React from "react";
// import image3 from "../../assets/image3.png";
// import image5 from "../../assets/image5.JPG";
// import image8 from "../../assets/image8.jpg";
// import image9 from "../../assets/image9.jpg"; // <-- Add your banner image here

// const Infrastructure = () => {
//   const sections = [
//     {
//       title: "State-of-the-Art Production Facility",
//       description:
//         "Our garment manufacturing unit is equipped with advanced machinery for stitching, cutting, and finishing. Each process is optimized to ensure precision, quality, and efficiency.",
//       image: image3,
//     },
//     {
//       title: "Expert Tailoring & Stitching Units",
//       description:
//         "Our skilled tailors and technicians blend traditional craftsmanship with modern techniques, ensuring every stitch speaks perfection and durability.",
//       image: image5,
//     },
//     {
//       title: "Embroidery, Printing & Finishing",
//       description:
//         "With modern embroidery machines and expert artisans, we deliver detailed embellishments, intricate threadwork, and flawless finishes that elevate every design.",
//       image: image8,
//     },
//   ];

//   return (
//     <section className="infrastructure bg-gradient-to-b from-[#fff8f0] via-[#fffdfb] to-[#fff8f0] mt-20 relative overflow-hidden">
//       {/* ===== Hero Banner ===== */}
//       <div className="relative w-full h-[60vh] md:h-[45vh] flex flex-col items-center justify-center text-center overflow-hidden">
//         {/* Background Image */}
//         <img
//           src={image9}
//           alt="Infrastructure Banner"
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105 animate-pulse"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Text Content */}
//         <div className="relative z-10 px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4 animate-bounce">
//             Infrastructure
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fadeInUp">
//             At <span className="text-[#ffd700] font-semibold">Frolic Exports</span>, 
//             innovation meets craftsmanship in every thread — powered by modern technology 
//             and world-class facilities.
//           </p>
//         </div>
//       </div>

//       {/* ===== Main Content ===== */}
//       <div className="py-20 md:py-28 relative z-10">
//         <div className="container mx-auto px-4 md:px-10 space-y-24">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${
//                 index % 2 === 1 ? "lg:flex-row-reverse" : ""
//               }`}
//               data-aos="fade-up"
//             >
//               {/* Image Section */}
//               <div className="relative w-full lg:w-1/2 flex justify-center">
//                 <div className="absolute -inset-[1px] bg-gradient-to-r from-[#d4af37]/40 to-[#ffcf5f]/40 rounded-2xl blur-sm opacity-20 hover:opacity-40 transition duration-700"></div>
//                 <img
//                   src={section.image}
//                   alt={section.title}
//                   className="relative w-full max-w-[480px] rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* Text Section */}
//               <div className="w-full lg:w-1/2 text-center lg:text-left">
//                 <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#d4af37] mb-4">
//                   {section.title}
//                 </h2>
//                 <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide">
//                   {section.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Thin Bottom Border */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-pulse"></div>
//     </section>
//   );
// };

// export default Infrastructure;











