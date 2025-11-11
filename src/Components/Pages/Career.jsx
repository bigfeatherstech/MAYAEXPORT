import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faUsers, 
  faGraduationCap,
  faHeart,
  faSearch,
  faMapMarkerAlt,
  faClock,
  faBriefcase,
  faArrowRight,
  faPlay,
  faPause,
  faQuoteLeft,
  faAward,
  faShieldHalved,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Career = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Job categories
  const categories = [
    { id: 'all', label: 'All Positions', count: 12 },
    { id: 'design', label: 'Design & Creative', count: 4 },
    { id: 'tech', label: 'Technology', count: 3 },
    { id: 'operations', label: 'Operations', count: 3 },
    { id: 'sales', label: 'Sales & Marketing', count: 2 }
  ];

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Product Designer',
      category: 'design',
      type: 'Full-time',
      location: 'Mumbai, India',
      experience: '5+ years',
      description: 'Lead the design of innovative export products and create compelling user experiences for our global clients.',
      skills: ['UI/UX Design', 'Figma', 'Product Strategy', 'User Research'],
      featured: true,
      salary: '₹12L - ₹18L',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      category: 'tech',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      description: 'Build scalable web applications and digital platforms that power our global export operations.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      featured: true,
      salary: '₹10L - ₹15L',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Export Operations Manager',
      category: 'operations',
      type: 'Full-time',
      location: 'Delhi, India',
      experience: '6+ years',
      description: 'Oversee international shipping, logistics, and ensure seamless export operations across 40+ countries.',
      skills: ['Logistics', 'Supply Chain', 'International Trade', 'Team Management'],
      featured: false,
      salary: '₹15L - ₹22L',
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      category: 'sales',
      type: 'Full-time',
      location: 'Bangalore, India',
      experience: '3+ years',
      description: 'Drive brand awareness and lead generation through digital channels for international markets.',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      featured: false,
      salary: '₹8L - ₹12L',
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Quality Assurance Engineer',
      category: 'tech',
      type: 'Full-time',
      location: 'Chennai, India',
      experience: '4+ years',
      description: 'Ensure the highest quality standards for our digital products and export management systems.',
      skills: ['Testing', 'Automation', 'Quality Control', 'Agile'],
      featured: false,
      salary: '₹9L - ₹14L',
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'International Sales Manager',
      category: 'sales',
      type: 'Full-time',
      location: 'Dubai, UAE',
      experience: '7+ years',
      description: 'Expand our market presence in Middle East and European markets through strategic partnerships.',
      skills: ['Sales Strategy', 'Client Relations', 'Market Research', 'Negotiation'],
      featured: true,
      salary: '$60K - $85K',
      posted: 'Just now'
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: faRocket,
      title: 'Career Growth',
      description: 'Structured career paths with regular promotions and skill development programs',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: faGraduationCap,
      title: 'Learning & Development',
      description: 'Annual training budget, certification support, and mentorship programs',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: faUsers,
      title: 'Great Team Culture',
      description: 'Collaborative environment with team events and cross-functional projects',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: faHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and flexible work arrangements',
      gradient: 'from-orange-500 to-red-400'
    }
  ];

  // Employee testimonials
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Senior Export Manager',
      tenure: '4 years',
      quote: 'The growth opportunities at Maya Exports are incredible. I started as a junior executive and now lead international operations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Rahul Verma',
      role: 'Tech Lead',
      tenure: '3 years',
      quote: 'The work-life balance and learning culture here helped me grow both personally and professionally.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Anjali Patel',
      role: 'Product Designer',
      tenure: '2 years',
      quote: 'Creative freedom and supportive leadership make Maya Exports the perfect place for innovators.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Filter jobs based on category and search
  const filteredJobs = jobOpenings.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleApplyClick = (position) => {
    const prefillMessage = encodeURIComponent(
      `Hello Maya Exports Team,\n\nI would like to apply for the "${position}" position. Please find my details below:\n\n- Name:\n- Experience:\n- Portfolio/Resume link:\n\nRegards,`
    );
    navigate(`/contact?message=${prefillMessage}`);
  };

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div data-aos="fade-up">
              <div className="section-tag mb-4">
                <span className="inline-block bg-blue-100 text-[#27A0C9] py-2 px-6 rounded-full text-sm font-medium">
                  Join Our Team
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gray-800 leading-tight">
                Build Your Career at <span className="text-[#27A0C9]">Maya Exports</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join a global team that's shaping the future of international trade. 
                Grow your career while making an impact across 40+ countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-4 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#27A0C9]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#27A0C9]/40"
                >
                  View Open Positions
                </button>
                <button 
                  onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-[#27A0C9] text-[#27A0C9] py-4 px-8 rounded-full font-medium transition-all duration-300 hover:bg-[#27A0C9] hover:text-white"
                >
                  Why Join Us?
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#27A0C9] hover:scale-110 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 rotate-90" />
          </button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Team Members' },
              { number: '40+', label: 'Countries' },
              { number: '25+', label: 'Years Excellence' },
              { number: '12', label: 'Open Positions' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#27A0C9] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="container-fluid mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities that match your skills and ambitions. Help us revolutionize global trade.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12" data-aos="fade-up">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-none focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-[#27A0C9] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={job.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    job.featured ? 'border-[#27A0C9]' : 'border-transparent'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {job.featured && (
                    <div className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-2 px-4 text-sm font-medium">
                      ⭐ Featured Position
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-blue-100 text-[#27A0C9] py-1 px-3 rounded-full text-sm font-medium">
                            {job.type}
                          </span>
                          <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-sm font-medium">
                            {job.experience}
                          </span>
                          {job.featured && (
                            <span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-sm font-medium">
                              Urgent Hiring
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#27A0C9] mb-1">{job.salary}</div>
                        <div className="text-sm text-gray-500">{job.posted}</div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 py-1 px-3 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-gradient-to-r from-[#27A0C9] to-[#4ab8e0] text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#27A0C9]/30"
                      >
                        Apply Now
                      </button>
                      <button className="text-[#27A0C9] font-medium hover:text-[#1e8ab3] transition-colors duration-300">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16" data-aos="fade-up">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faSearch} className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No positions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                  className="bg-[#27A0C9] text-white py-3 px-6 rounded-full font-medium hover:bg-[#1e8ab3] transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Why Join Maya Exports?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our people's growth and well-being. Here's what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Hear From Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Maya Exports a great place to build your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 text-[#27A0C9] mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-[#27A0C9] text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.tenure} at Maya Exports</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100 text-xl">
              Join a team that values innovation, collaboration, and personal growth. 
              Your next career adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#27A0C9] py-4 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30"
              >
                Browse All Positions
              </button>
              <a 
                href="/contact" 
                className="border-2 border-white text-white py-4 px-8 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-[#27A0C9]"
              >
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;