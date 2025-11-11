import { useEffect, useState } from 'react';
import LOGO from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faAward,
  faLeaf,
  faGlobe,
  faStore,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update year automatically
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top Wave Curve */}
      <div className="absolute top-0 left-0 w-full transform translate-y-1 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-white"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 to-lavender-50"></div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#27A0C9]/15 via-transparent to-lavender-200/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-lavender-100/5"></div>

      {/* Animated Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#27A0C9]/10 via-lavender-200/8 to-cream-100/12 animate-pulse"></div>

      {/* Enhanced Decorative Elements with Curves */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-gradient-to-br from-[#27A0C9] to-lavender-200 rounded-full opacity-10 -translate-x-20 -translate-y-20 blur-xl"></div>
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-gradient-to-bl from-lavender-200 to-[#27A0C9] rounded-full opacity-15 translate-x-24 translate-y-24 blur-xl"></div>
      <div
        className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-tr from-cream-200 to-[#27A0C9] rounded-full blur-lg"
        style={{ opacity: 0.1 }}
      ></div>

      {/* Floating Curved Elements */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-tr from-cream-200 to-[#27A0C9] rounded-full blur-lg animate-float" style={{opacity:'0.08'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-tr from-cream-200 to-[#27A0C9] rounded-full opacity-8 blur-lg rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-tr from-cream-200 to-[#27A0C9] rounded-full opacity-8 blur-lg rounded-full animate-float animation-delay-2000"></div>

      {/* Curved Gradient Bars */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#27A0C9] via-lavender-200 to-cream-200"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cream-200 via-lavender-200 to-[#27A0C9] opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 py-8">
        <div className="container mx-auto px-5">
          {/* Logo and Main Section with Curved Background */}
          <div className="relative mb-16">
            <div className="relative text-center py-4">
              <div className="flex justify-center mb-6">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#27A0C9] to-lavender-200 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                    src={LOGO}
                    alt="Maya Exports"
                    className="relative h-16 md:h-20 w-auto transition-transform duration-300 z-10 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text logo */}
                  <div className="hidden relative font-playfair text-3xl md:text-4xl font-bold text-gray-800 z-10">
                    Maya <span className="text-[#27A0C9]">Exports</span>
                  </div>
                </div>
              </div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed relative z-10">
                Your trusted global partner for premium quality dal and pulses exports with 25+ years of excellence.
              </p>
            </div>
          </div>

          {/* Footer Grid with Curved Dividers */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mb-5 relative">
            {/* Curved Divider Lines */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#27A0C9]/20 to-transparent"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-gradient-to-b from-transparent via-lavender-200/20 to-transparent"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-cream-200/20 to-transparent"></div>

            {/* Company Info */}
            <div className="footer-col lg:col-span-2">
              <h3 className="text-2xl font-playfair font-semibold mb-6 bg-gradient-to-r from-[#27A0C9] via-lavender-200 to-cream-200 bg-clip-text text-transparent">
                Maya Exports Ltd
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                Established in 1998, Maya Exports has been at the forefront of pulses export industry,
                blending traditional sourcing with modern quality standards to deliver premium products worldwide.
              </p>
              <div className="social-links flex gap-4">
                {[
                  { 
                    icon: faInstagram, 
                    label: 'Instagram', 
                    color: 'from-[#27A0C9] to-lavender-200',
                    url: 'https://www.instagram.com/' 
                  },
                  { 
                    icon: faLinkedinIn, 
                    label: 'LinkedIn', 
                    color: 'from-lavender-200 to-[#27A0C9]',
                    url: 'https://in.linkedin.com/' 
                  },
                  {
                    icon: faStore,
                    label: 'Google Business',
                    color: 'from-[#27A0C9] to-cream-200',
                    url: 'https://www.google.com/maps/'
                  }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#27A0C9]/20">
                      {social.label}
                    </span>
                    {/* Hover Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="text-xl font-playfair font-semibold mb-6 bg-gradient-to-r from-[#27A0C9] to-lavender-200 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="footer-links">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Products', path: '/products' },
                  { name: 'Quality Standards', path: '/quality' },
                  { name: 'Export Markets', path: '/markets' },
                  { name: 'Certifications', path: '/certifications' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="group flex items-center text-gray-600 hover:text-[#27A0C9] transition-all duration-300 py-1"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-[#27A0C9] to-lavender-200 rounded-full opacity-0 group-hover:opacity-100 mr-3 transition-all duration-300 transform group-hover:scale-125"></span>
                      <span className="hover:pl-2 transition-all duration-300 relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#27A0C9] to-lavender-200 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h3 className="text-xl font-playfair font-semibold mb-6 bg-gradient-to-r from-lavender-200 to-[#27A0C9] bg-clip-text text-transparent">
                Contact Info
              </h3>
              <ul className="footer-links space-y-4">
                <li className="flex items-start group p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 text-[#27A0C9] mt-1 group-hover:scale-110 transition-transform duration-300 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-[#27A0C9] transition-colors duration-300">
                    123 Export Street, Trade District<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </span>
                </li>
                <li className="flex items-center group p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="mr-4 text-[#27A0C9] group-hover:scale-110 transition-transform duration-300 w-4 h-4" />
                  <a href="tel:+912212345678" className="text-gray-600 hover:text-[#27A0C9] transition-colors duration-300">
                    +91 22 1234 5678
                  </a>
                </li>
                <li className="flex items-center group p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-[#27A0C9] group-hover:scale-110 transition-transform duration-300 w-4 h-4" />
                  <a href="mailto:info@mayaexports.com" className="text-gray-600 hover:text-[#27A0C9] transition-colors duration-300">
                    info@mayaexports.com
                  </a>
                </li>
                <li className="flex items-center group p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faClock} className="mr-4 text-[#27A0C9] group-hover:scale-110 transition-transform duration-300 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-[#27A0C9] transition-colors duration-300">
                    Mon - Fri: 9AM - 6PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info Section with Curved Background */}
          <div className="relative mb-12">
            <div className="absolute inset-0 -mx-5 bg-gradient-to-r from-[#27A0C9]/10 to-lavender-200/10 rounded-2xl transform"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#27A0C9] to-lavender-200 rounded-2xl flex items-center cursor-pointer justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h4 className="font-semibold mb-2 bg-gradient-to-r from-[#27A0C9] to-lavender-200 bg-clip-text text-transparent">Quality Certified</h4>
                <p className="text-gray-500 text-sm">ISO 9001:2015 & FSSAI Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto cursor-pointer mb-4 bg-gradient-to-br from-lavender-200 to-[#27A0C9] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h4 className="font-semibold mb-2 bg-gradient-to-r from-lavender-200 to-[#27A0C9] bg-clip-text text-transparent">Pure & Natural</h4>
                <p className="text-gray-500 text-sm">100% Natural Products</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto cursor-pointer mb-4 bg-gradient-to-br from-[#27A0C9] to-cream-200 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <h4 className="font-semibold mb-2 bg-gradient-to-r from-[#27A0C9] to-cream-200 bg-clip-text text-transparent">Worldwide</h4>
                <p className="text-gray-500 text-sm">Global Export Network</p>
              </div>
            </div>
          </div>

          {/* Copyright Section with Curved Top */}
          <div className="copyright relative pt-5 border-t border-gray-300 border-opacity-20">
            {/* Curved Top Border */}
            <div className="absolute top-0 left-0 w-full transform -translate-y-1">
              <svg viewBox="0 0 1200 20" className="w-full h-4 text-[#27A0C9]/10">
                <path d="M0,0 Q600,20 1200,0 L1200,20 L0,20 Z" className="fill-current"></path>
              </svg>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Maya Exports Ltd. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-500 text-sm">
                <a href="/privacy" className="hover:text-[#27A0C9] transition-colors duration-300 hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:text-[#27A0C9] transition-colors duration-300 hover:underline">Terms of Service</a>
                <a href="/sitemap" className="hover:text-[#27A0C9] transition-colors duration-300 hover:underline">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Curve */}
      <div className="absolute bottom-0 left-0 w-full transform -translate-y-1 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-white rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      {/* Add custom styles for lavender and cream colors */}
      <style jsx="true">{`
        .bg-lavender-50 { background-color: #f8f7ff; }
        .bg-lavender-100 { background-color: #f0edff; }
        .bg-lavender-200 { background-color: #e8e4ff; }
        .border-lavender-100 { border-color: #f0edff; }
        
        .bg-cream-50 { background-color: #fefaf6; }
        .bg-cream-100 { background-color: #fdf6f0; }
        .bg-cream-200 { background-color: #fcf2ea; }
        
        .text-lavender-200 { color: #e8e4ff; }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </footer>
  );
};

export default Footer;