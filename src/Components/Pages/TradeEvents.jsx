import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt,
  faMapMarkerAlt,
  faGlobe,
  faUsers,
  faRocket,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
  faQuoteLeft,
  faAward,
  faHandshake,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your assets
import trade1 from "../../assets/Trade1.jpg";
import trade2 from "../../assets/Trade2.jpg";
import trade3 from "../../assets/Trade3.jpg";
import trade4 from "../../assets/Trade4.jpg";
import trade5 from "../../assets/Trade5.jpg";
import trade6 from "../../assets/Trade6.jpg";
import logo from "../../assets/logo.png";

const TradeEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeEvent, setActiveEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const autoPlayRef = useRef(null);

  const tradeShows = [
    {
      id: 1,
      title: "International Garment Expo",
      location: "Dubai, UAE",
      year: "2025",
      image: trade1,
      description: "Showcased our latest garment innovations and established key partnerships across the Middle East market.",
      category: "upcoming",
      attendees: "15,000+",
      partnerships: "45+",
      featured: true
    },
    {
      id: 2,
      title: "India International Trade Fair",
      location: "New Delhi, India",
      year: "2024",
      image: trade2,
      description: "Presented premium quality collections and sustainable fabrics to global fashion distributors and buyers.",
      category: "past",
      attendees: "25,000+",
      partnerships: "60+",
      featured: true
    },
    {
      id: 3,
      title: "Paris Fashion Connect",
      location: "Paris, France",
      year: "2023",
      image: trade3,
      description: "Introduced high-fashion export lines and expanded presence across European retail networks.",
      category: "past",
      attendees: "12,000+",
      partnerships: "35+",
      featured: false
    },
    {
      id: 4,
      title: "Global Apparel Business Meet",
      location: "Singapore",
      year: "2022",
      image: trade4,
      description: "Engaged with international partners to strengthen B2B trade collaborations and supply chain expansion.",
      category: "past",
      attendees: "18,000+",
      partnerships: "50+",
      featured: true
    },
    {
      id: 5,
      title: "World Textile Expo",
      location: "Istanbul, Turkey",
      year: "2021",
      image: trade5,
      description: "Exhibited innovative textile solutions and sustainable fashion fabrics for international markets.",
      category: "past",
      attendees: "20,000+",
      partnerships: "40+",
      featured: false
    },
    {
      id: 6,
      title: "Asian Fashion Week",
      location: "Tokyo, Japan",
      year: "2020",
      image: trade6,
      description: "Showcased luxury fashion wear blending modern technology with traditional craftsmanship.",
      category: "past",
      attendees: "22,000+",
      partnerships: "55+",
      featured: true
    }
  ];

  const upcomingEvents = [
    {
      title: "Asia Apparel Expo 2026",
      date: "March 15-18, 2026",
      location: "Bangkok, Thailand",
      image: trade1,
      focus: "Sustainable Fashion & Innovation"
    },
    {
      title: "Textile World Summit",
      date: "June 22-25, 2026",
      location: "London, UK",
      image: trade2,
      focus: "Digital Transformation in Textiles"
    },
    {
      title: "Global Fashion Connect",
      date: "September 10-13, 2026",
      location: "New York, USA",
      image: trade3,
      focus: "Luxury & Premium Collections"
    }
  ];

  const stats = [
    { icon: faGlobe, value: "25+", label: "Countries Reached" },
    { icon: faUsers, value: "40+", label: "Global Exhibitions" },
    { icon: faHandshake, value: "120+", label: "International Partners" },
    { icon: faChartLine, value: "30+", label: "Years Experience" }
  ];

  // Auto-play functionality for featured events
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveEvent(prev => (prev + 1) % tradeShows.length);
      }, 4000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying, tradeShows.length]);

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

  const filteredEvents = activeFilter === 'all' 
    ? tradeShows 
    : tradeShows.filter(event => event.category === activeFilter);

  const featuredEvents = tradeShows.filter(event => event.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${featuredEvents[activeEvent]?.image || trade1})` }}
        />
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div data-aos="fade-up">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
                <div className="w-2 h-2 bg-[#27A0C9] rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-medium text-sm">Global Trade Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0]">Trade Events</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                Showcasing innovation, building partnerships, and expanding horizons across global markets
              </p>

              {/* Event Navigator */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="w-4 h-4" />
                </button>
                
                <div className="flex space-x-2">
                  {featuredEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveEvent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeEvent === index ? 'bg-[#27A0C9] scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Event Info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-5">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" data-aos="fade-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {featuredEvents[activeEvent]?.title}
                </h3>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
                    <span>{featuredEvents[activeEvent]?.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-2" />
                    <span>{featuredEvents[activeEvent]?.year}</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#27A0C9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e8ab3] transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery with Filter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Our Trade Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local exhibitions to international showcases, each event represents our commitment to global excellence
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {[
              { id: 'all', label: 'All Events' },
              { id: 'upcoming', label: 'Upcoming' },
              { id: 'past', label: 'Past Events' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#27A0C9] text-white shadow-2xl shadow-[#27A0C9]/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-lg'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    event.category === 'upcoming' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-[#27A0C9] text-white'
                  }`}>
                    {event.category === 'upcoming' ? 'Coming Soon' : 'Completed'}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.attendees}</span>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faHandshake} className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.partnerships} Partners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#27A0C9] transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                    <span className="mx-2">•</span>
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.year}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <button className="w-full bg-gray-100 text-[#27A0C9] py-3 rounded-xl font-semibold hover:bg-[#27A0C9] hover:text-white transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center">
                      View Event Details
                      <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] text-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us in our future endeavors as we continue to expand our global footprint
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-blue-100">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-3" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="bg-white/20 rounded-xl p-3 mb-4">
                  <p className="text-sm text-blue-100">Focus: {event.focus}</p>
                </div>

                <button className="w-full bg-white text-[#27A0C9] py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  Register Interest
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                <img
                  src={logo}
                  alt="Maya Exports Global Impact"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">
                Global Impact Through Trade
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over three decades, Maya Exports has been at the forefront of international trade exhibitions, 
                showcasing the finest quality products and building lasting partnerships across continents.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Strategic partnerships with 120+ international companies",
                  "Presence in 25+ countries across 5 continents",
                  "40+ successful trade exhibitions and counting",
                  "Continuous innovation in sustainable fashion exports"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#27A0C9] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faAward} className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-8 rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Explore Our Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center">
        <div className="container mx-auto px-5">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Ready to Meet Us at the Next Event?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our team, explore partnership opportunities, and discover how Maya Exports can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#27A0C9] text-white py-4 px-8 rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Meeting
              </button>
              <button className="border-2 border-white text-white py-4 px-8 rounded-2xl font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
                Download Event Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeEvents;