import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faUser,
  faTag,
  faComment,
  faCheckCircle,
  faExclamationCircle,
  faSpinner,
  faArrowRight,
  faBuilding,
  faGlobe,
  faHeadset,
  faRocket,
  faShieldAlt,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('form');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prefillMessage = params.get("message");

    if (prefillMessage) {
      setFormData((prev) => ({
        ...prev,
        message: decodeURIComponent(prefillMessage),
        subject: `Job Application – ${decodeURIComponent(
          prefillMessage.match(/"(.*?)"/)?.[1] || prefillMessage
        )}`,
      }));

      setTimeout(() => {
        setActiveTab('form');
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 600);
    }
  }, [location.search]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/43189e22c68124815ee9f188d7c6e0d9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
          _autoresponse: 'Thank you for contacting Maya Exports! We will get back to you soon.',
          _next: 'https://mayaexports.com/thank-you'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Floating particles effect
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#27A0C9] rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Contact features
  const contactFeatures = [
    {
      icon: faRocket,
      title: 'Fast Response',
      description: 'Get responses within 2 hours during business hours',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for international clients',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: faShieldAlt,
      title: 'Secure Communication',
      description: 'End-to-end encrypted messages for your business data',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: faStar,
      title: 'Premium Service',
      description: 'Dedicated account managers for enterprise clients',
      color: 'from-orange-500 to-red-400'
    }
  ];

  // Social links
  const socialLinks = [
    { icon: faWhatsapp, url: '#', color: 'hover:bg-green-500', label: 'WhatsApp' },
    { icon: faTelegram, url: '#', color: 'hover:bg-blue-400', label: 'Telegram' },
    { icon: faLinkedin, url: '#', color: 'hover:bg-blue-600', label: 'LinkedIn' },
    { icon: faTwitter, url: '#', color: 'hover:bg-sky-400', label: 'Twitter' }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-bounce"></div>
        <FloatingParticles />
      </div> */}

      {/* Custom cursor follower */}
      <div
        className="fixed w-6 h-6 bg-[#27A0C9] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPosition.x - 12}px`,
          top: `${cursorPosition.y - 12}px`,
          transform: 'scale(1)',
        }}
      />

      {/* Hero Section with 3D effect */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-100 shadow-lg">
                <div className="w-2 h-2 bg-[#27A0C9] rounded-full mr-3 animate-ping"></div>
                <span className="text-[#27A0C9] font-medium text-sm">We're Here to Help</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 text-gray-800 leading-tight">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0]">Connect</span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Your gateway to premium export solutions. Start a conversation that transforms your business.
              </p>

              {/* Interactive tab selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  { id: 'form', label: 'Send Message', icon: faPaperPlane },
                  { id: 'info', label: 'Contact Info', icon: faMapMarkerAlt },
                  { id: 'map', label: 'Find Us', icon: faGlobe }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${activeTab === tab.id
                        ? 'bg-[#27A0C9] text-white shadow-2xl shadow-[#27A0C9]/30 transform scale-105'
                        : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-lg backdrop-blur-sm'
                      }`}
                  >
                    <FontAwesomeIcon
                      icon={tab.icon}
                      className={`mr-3 transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'
                        }`}
                    />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 relative">
        <div className="container mx-auto px-5">

          {/* Tab Content */}
          <div className="max-w-7xl mx-auto">

            {/* Contact Form Tab */}
            {activeTab === 'form' && (
              <div data-aos="fade-up" ref={formRef}>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                  {/* Features Sidebar */}
                  <div className="space-y-6">
                    {contactFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 transition-all duration-500 hover:shadow-xl hover:scale-105"
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Main Form */}
                  <div className="xl:col-span-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-playfair font-bold text-gray-800">Send Your Message</h2>
                        <div className="flex gap-2">
                          {socialLinks.map((social, index) => (
                            <a
                              key={index}
                              href={social.url}
                              className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                              title={social.label}
                            >
                              <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 w-5 h-5" />
                          Thank you! Your message has been sent successfully.
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center">
                          <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500 mr-3 w-5 h-5" />
                          Sorry, there was an error. Please try again.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            label="Full Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            icon={faUser}
                            placeholder="Enter your full name"
                            disabled={isSubmitting}
                          />
                          <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            icon={faEnvelope}
                            placeholder="Enter your email"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            icon={faPhone}
                            placeholder="Enter your phone"
                            disabled={isSubmitting}
                          />
                          <FormField
                            label="Subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            icon={faTag}
                            placeholder="What is this regarding?"
                            disabled={isSubmitting}
                          />
                        </div>

                        <FormField
                          label="Your Message"
                          name="message"
                          type="textarea"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          icon={faComment}
                          placeholder="Tell us about your requirements..."
                          rows={6}
                          disabled={isSubmitting}
                        />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          {isSubmitting ? (
                            <span className="flex items-center justify-center relative z-10">
                              <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3 w-5 h-5" />
                              Sending Message...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center relative z-10">
                              Send Message
                              <FontAwesomeIcon icon={faPaperPlane} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info Tab */}
            {activeTab === 'info' && (
              <div data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Cards */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: faMapMarkerAlt,
                        title: 'Head Office',
                        details: ['C-129, Hosiery Complex', 'Phase-2, Noida-201305', 'Uttar Pradesh, India'],
                        gradient: 'from-blue-500 to-cyan-400'
                      },
                      {
                        icon: faPhone,
                        title: 'Phone',
                        details: ['+91 9818620740', '+91 120 4234567'],
                        gradient: 'from-purple-500 to-pink-500'
                      },
                      {
                        icon: faEnvelope,
                        title: 'Email',
                        details: ['info@mayaexports.com', 'export@mayaexports.com'],
                        gradient: 'from-green-500 to-emerald-400'
                      },
                      {
                        icon: faClock,
                        title: 'Business Hours',
                        details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
                        gradient: 'from-orange-500 to-red-400'
                      }
                    ].map((card, index) => (
                      <div
                        key={index}
                        className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                            <FontAwesomeIcon icon={card.icon} className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                            <div className="space-y-1">
                              {card.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats & Info */}
                  <div className="bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-3xl p-8 text-white shadow-2xl">
                    <h3 className="text-2xl font-playfair font-bold mb-6">Why Choose Maya Exports?</h3>
                    <div className="space-y-6">
                      {[
                        { stat: '25+', label: 'Years Experience' },
                        { stat: '40+', label: 'Countries Served' },
                        { stat: '500+', label: 'Happy Clients' },
                        { stat: '98%', label: 'Success Rate' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-white/20 last:border-b-0">
                          <span className="text-3xl font-bold">{item.stat}</span>
                          <span className="text-white/80">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <p className="text-sm text-white/90">
                        "We don't just export products; we build lasting partnerships with quality and trust."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Map Tab */}
            {activeTab === 'map' && (
              <div data-aos="fade-up">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div ref={mapRef} className="h-96 rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d269.2489188419394!2d77.19591338024652!3d28.657002685979798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%204%2C%202nd%20Floor%2CBuilding%20No.%208577%2C%20New%20Rohtak%20Road%20%2CNear%20Jain%20Indian%20Oil%20Petrol%20Pump%2C%20New%20Delhi%2C%20Karol%20Bagh%20110005%2C%20INDIA!5e1!3m2!1sen!2sin!4v1762837591463!5m2!1sen!2sin"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full border-0"
                        ></iframe>
                      </div>

                    </div>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                        <div className="space-y-3">
                          <p className="text-white/90">C-129, Hosiery Complex</p>
                          <p className="text-white/90">Phase-2, Noida-201305</p>
                          <p className="text-white/90">Uttar Pradesh, India</p>
                        </div>
                        <button className="w-full mt-4 bg-white text-[#27A0C9] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                          Get Directions
                        </button>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                        <h4 className="font-bold text-gray-800 mb-3">Transport Options</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>🚇 Nearest Metro: Noida Sector 15</p>
                          <p>🚌 Bus Stop: 200m walk</p>
                          <p>🅿️ Parking: Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-8 right-8 z-40">
        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/919818620740"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
            title="Chat on WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
          </a>
          <a
            href="tel:+919818620740"
            className="w-14 h-14 bg-[#27A0C9] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300"
            title="Call Us"
          >
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
          </a>
        </div>
      </div> */}

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

// Form Field Component
const FormField = ({ label, name, type, value, onChange, required, icon, placeholder, rows, disabled }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-[#27A0C9] focus:ring-2 focus:ring-[#27A0C9]/20 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-[#27A0C9] focus:ring-2 focus:ring-[#27A0C9]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        )}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon icon={icon} className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;