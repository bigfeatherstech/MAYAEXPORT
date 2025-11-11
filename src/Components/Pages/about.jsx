import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, 
  faGlobe, 
  faUsers, 
  faShieldAlt, 
  faRocket,
  faHandshake,
  faChartLine,
  faCheck ,
  faLeaf,
  faHeart,
  faQuoteLeft,
  faChevronDown,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your images
// import aboutHero from "https://mayaexportsltd.com/static/media/aboutmodel.86d53054495ada6d419d.webp";
// import teamImage from "../../assets/productsimages/cordset1.jpg";
import qualityImage from "../../assets/productsimages/cordset1.jpg";
import sustainabilityImage from "../../assets/productsimages/cordset1.jpg";

const aboutHero = "https://mayaexportsltd.com/static/media/aboutmodel.86d53054495ada6d419d.webp";
const teamImage = "https://mayaexportsltd.com/static/media/aboutCollection.bcb613a19fa2bf6fed5c.jpg";



const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [counterValues, setCounterValues] = useState({
    years: 0,
    countries: 0,
    clients: 0,
    products: 0
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Stats data
  const stats = [
    { icon: faAward, value: counterValues.years, label: 'Years of Excellence', suffix: '+' },
    { icon: faGlobe, value: counterValues.countries, label: 'Countries Served', suffix: '+' },
    { icon: faUsers, value: counterValues.clients, label: 'Happy Clients', suffix: '+' },
    { icon: faChartLine, value: counterValues.products, label: 'Products', suffix: '+' }
  ];

  // Values data
  const values = [
    {
      icon: faShieldAlt,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified processes ensuring premium quality standards across all products.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: faRocket,
      title: 'Innovation',
      description: 'Continuous improvement and adoption of latest technologies in manufacturing and export.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: faHandshake,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust, transparency, and mutual growth.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: faLeaf,
      title: 'Sustainability',
      description: 'Eco-friendly practices and sustainable sourcing for a better future.',
      color: 'from-teal-500 to-cyan-400'
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'Maya Exports Ltd was established with a vision to become a global export leader.'
    },
    {
      year: '2005',
      title: 'Global Expansion',
      description: 'Expanded operations to 20+ countries across Europe and North America.'
    },
    {
      year: '2012',
      title: 'Quality Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management systems.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced digital platforms for seamless global operations.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Became one of the leading export companies serving 40+ countries worldwide.'
    }
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Animate counters
    const animateCounters = () => {
      const targetValues = { years: 25, countries: 40, clients: 500, products: 1000 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetValues).forEach(key => {
        let current = 0;
        const target = targetValues[key];
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounterValues(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    // Start animation when component mounts
    setTimeout(animateCounters, 500);

    // Refresh AOS
    setTimeout(() => {
      AOS.refresh();
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-content" data-aos="fade-right">
              <div className="section-tag mb-4">
                <span className="inline-block bg-blue-100 text-[#27A0C9] py-2 px-6 rounded-full text-sm font-medium">
                  About Maya Exports
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gray-800 leading-tight">
                Building Global <span className="text-[#27A0C9]">Connections</span> Through Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 25 years, Maya Exports Ltd has been at the forefront of global trade, 
                delivering premium quality products and building lasting partnerships across the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#27A0C9]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#27A0C9]/40"
                >
                  Our Story
                </button>
                <button 
                  onClick={() => document.getElementById('values').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-[#27A0C9] text-[#27A0C9] py-4 px-8 rounded-full font-medium transition-all duration-300 hover:bg-[#27A0C9] hover:text-white"
                >
                  Our Values
                </button>
              </div>
            </div>
            <div className="visual-content" data-aos="fade-left" data-aos-delay="200">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutHero}
                    alt="Maya Exports Global Operations"
                    className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-blue-100 max-w-xs">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faAward} className="w-6 h-6 text-[#27A0C9]" />
                    </div>
                    <h4 className="font-semibold text-gray-800">25+ Years Excellence</h4>
                  </div>
                  <p className="text-sm text-gray-600">Trusted global export partner since 1998</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('stats').scrollIntoView({ behavior: 'smooth' })}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#27A0C9] hover:scale-110 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FontAwesomeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a global export powerhouse, our story is one of 
              dedication, innovation, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
              {['mission', 'vision', 'approach'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#27A0C9] text-white shadow-lg shadow-[#27A0C9]/30'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12" data-aos="fade-up">
              {activeTab === 'mission' && (
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={faRocket} className="w-8 h-8 text-[#27A0C9]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    To deliver exceptional quality products through innovative solutions, 
                    building lasting partnerships while maintaining the highest standards 
                    of integrity and customer satisfaction.
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6 inline-block">
                    <p className="text-[#27A0C9] font-semibold italic">
                      "Quality in everything we do, excellence in everything we deliver"
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 text-[#27A0C9]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    To be the world's most trusted export partner, recognized for our 
                    commitment to quality, innovation, and sustainable business practices 
                    that create value for all stakeholders.
                  </p>
                  <div className="bg-purple-50 rounded-2xl p-6 inline-block">
                    <p className="text-[#27A0C9] font-semibold italic">
                      "Connecting markets, building futures"
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 text-[#27A0C9]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Approach</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We believe in collaborative partnerships, transparent communication, 
                    and continuous improvement. Our customer-centric approach ensures that 
                    we understand and exceed the unique requirements of each client.
                  </p>
                  <div className="bg-green-50 rounded-2xl p-6 inline-block">
                    <p className="text-[#27A0C9] font-semibold italic">
                      "Your success is our commitment"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={value.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Our Journey Through Time</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our growth and achievements over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <div className="text-2xl font-bold text-[#27A0C9] mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-[#27A0C9] rounded-full shadow-lg"></div>
                </div>
                <div className="md:w-1/2 md:px-8">
                  {/* Empty space for alignment */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="Maya Exports Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Our Team</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Behind every successful export is a team of dedicated professionals. Our diverse 
                team of experts brings together decades of experience in international trade, 
                quality control, logistics, and customer service.
              </p>
              <div className="space-y-4">
                {[
                  'Expert professionals with 15+ years average experience',
                  'Multilingual support team for global clients',
                  'Dedicated quality assurance specialists',
                  'Logistics and supply chain experts'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-[#27A0C9] mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-white">
              Ready to Partner with Us?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100 text-xl">
              Join our global network of satisfied clients and experience the Maya Exports 
              difference in quality, reliability, and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-[#27A0C9] py-4 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30"
              >
                Get In Touch
              </a>
              <a 
                href="/products" 
                className="border-2 border-white text-white py-4 px-8 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-[#27A0C9]"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;