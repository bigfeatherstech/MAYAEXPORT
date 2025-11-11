import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faTwitter,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faQuoteLeft,
  faShieldHalved,
  faRocket,
  faHandshake,
  faChartLine,
  faUsers,
  faAward,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurTeam = () => {
  const [activeDepartment, setActiveDepartment] = useState('leadership');
  const [hoveredMember, setHoveredMember] = useState(null);

  // Team data
  const departments = {
    leadership: [
      {
        id: 1,
        name: 'Rajesh Sharma',
        position: 'Founder & CEO',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: '25+ years of experience in international trade and business development. Visionary leader with expertise in global market expansion.',
        email: 'rajesh@mayaexports.com',
        phone: '+91 98765 43210',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['International Trade', 'Business Strategy', 'Market Expansion'],
        joinDate: '1998'
      },
      {
        id: 2,
        name: 'Priya Patel',
        position: 'Chief Operations Officer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Operations expert with 15+ years in supply chain management and process optimization across multiple continents.',
        email: 'priya@mayaexports.com',
        phone: '+91 98765 43211',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Supply Chain', 'Operations', 'Process Optimization'],
        joinDate: '2005'
      },
      {
        id: 3,
        name: 'Amit Kumar',
        position: 'Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Finance professional with extensive experience in international finance, risk management, and strategic financial planning.',
        email: 'amit@mayaexports.com',
        phone: '+91 98765 43212',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Finance', 'Risk Management', 'Strategic Planning'],
        joinDate: '2008'
      }
    ],
    sales: [
      {
        id: 4,
        name: 'Neha Singh',
        position: 'Sales Director',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Dynamic sales leader with proven track record in international client acquisition and relationship management.',
        email: 'neha@mayaexports.com',
        phone: '+91 98765 43213',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Client Relations', 'Sales Strategy', 'Market Research'],
        joinDate: '2012'
      },
      {
        id: 5,
        name: 'Vikram Mehta',
        position: 'International Sales Manager',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Multilingual sales professional specializing in European and North American markets with 10+ years experience.',
        email: 'vikram@mayaexports.com',
        phone: '+91 98765 43214',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['International Sales', 'Market Analysis', 'Negotiation'],
        joinDate: '2015'
      }
    ],
    operations: [
      {
        id: 6,
        name: 'Sanjay Gupta',
        position: 'Operations Director',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Logistics and operations expert with deep knowledge of international shipping and supply chain management.',
        email: 'sanjay@mayaexports.com',
        phone: '+91 98765 43215',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Logistics', 'Supply Chain', 'Quality Control'],
        joinDate: '2010'
      },
      {
        id: 7,
        name: 'Anita Desai',
        position: 'Quality Assurance Manager',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Quality control specialist with ISO certification expertise and commitment to maintaining highest standards.',
        email: 'anita@mayaexports.com',
        phone: '+91 98765 43216',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Quality Assurance', 'ISO Standards', 'Process Improvement'],
        joinDate: '2013'
      }
    ],
    technical: [
      {
        id: 8,
        name: 'Rahul Joshi',
        position: 'Technical Director',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Technology innovator with expertise in digital transformation and export process automation.',
        email: 'rahul@mayaexports.com',
        phone: '+91 98765 43217',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Digital Transformation', 'Process Automation', 'IT Infrastructure'],
        joinDate: '2018'
      },
      {
        id: 9,
        name: 'Deepika Reddy',
        position: 'Product Development Manager',
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        bio: 'Creative product developer with keen eye for market trends and customer needs analysis.',
        email: 'deepika@mayaexports.com',
        phone: '+91 98765 43218',
        social: {
          linkedin: '#',
          twitter: '#',
          facebook: '#'
        },
        expertise: ['Product Development', 'Market Research', 'Innovation'],
        joinDate: '2019'
      }
    ]
  };

  // Stats data
  const teamStats = [
    { icon: faUsers, value: '50+', label: 'Team Members' },
    { icon: faGlobe, value: '15+', label: 'Languages Spoken' },
    { icon: faAward, value: '20+', label: 'Years Average Experience' },
    { icon: faChartLine, value: '40+', label: 'Countries Expertise' }
  ];

  // Values data
  const teamValues = [
    {
      icon: faShieldHalved,
      title: 'Expertise',
      description: 'Our team brings decades of combined experience in international trade and export management.'
    },
    {
      icon: faRocket,
      title: 'Innovation',
      description: 'We continuously adapt to market changes and implement cutting-edge solutions for our clients.'
    },
    {
      icon: faHandshake,
      title: 'Collaboration',
      description: 'We work as one cohesive unit, ensuring seamless service delivery across all departments.'
    }
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div data-aos="fade-up">
              <div className="section-tag mb-4">
                <span className="inline-block bg-blue-100 text-[#27A0C9] py-2 px-6 rounded-full text-sm font-medium">
                  Meet Our Team
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-gray-800 leading-tight">
                The Minds Behind <span className="text-[#27A0C9]">Maya Exports</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Meet the dedicated professionals who drive our success. Our diverse team of experts 
                brings together decades of experience in international trade, quality control, 
                and customer service to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
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
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Teams</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know the experts behind each department that makes Maya Exports a global leader
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {[
              { id: 'leadership', label: 'Leadership' },
              { id: 'sales', label: 'Sales & Marketing' },
              { id: 'operations', label: 'Operations' },
              { id: 'technical', label: 'Technical' }
            ].map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeDepartment === dept.id
                    ? 'bg-[#27A0C9] text-white shadow-lg shadow-[#27A0C9]/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments[activeDepartment].map((member, index) => (
              <div 
                key={member.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-300">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#27A0C9] hover:bg-[#27A0C9] hover:text-white transition-all duration-300 shadow-lg"
                      >
                        <FontAwesomeIcon 
                          icon={platform === 'linkedin' ? faLinkedin : 
                                platform === 'twitter' ? faTwitter : faFacebook} 
                          className="w-4 h-4" 
                        />
                      </a>
                    ))}
                  </div>

                  {/* Join Date Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#27A0C9] text-white py-1 px-3 rounded-full text-sm font-medium">
                    Since {member.joinDate}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-[#27A0C9] font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-50 text-[#27A0C9] py-1 px-3 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-3 text-[#27A0C9]" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3 text-[#27A0C9]" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Our Team Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that unite our team and drive our collective success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#27A0C9] to-[#4ab8e0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">Team Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our team members say about working at Maya Exports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working at Maya Exports has been an incredible journey of growth and learning. The collaborative environment fosters innovation.",
                author: "Priya Patel",
                position: "COO",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "The leadership team's vision and commitment to excellence creates an inspiring workplace where everyone can thrive.",
                author: "Amit Kumar",
                position: "CFO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "Maya Exports truly values its employees and provides opportunities for professional development and career advancement.",
                author: "Neha Singh",
                position: "Sales Director",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 text-[#27A0C9] mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.author}</div>
                    <div className="text-[#27A0C9] text-sm">{testimonial.position}</div>
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
              Join Our Growing Team
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100 text-xl">
              Interested in being part of our success story? We're always looking for talented 
              individuals to join our dynamic team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="bg-white text-[#27A0C9] py-4 px-8 rounded-full font-medium transition-all duration-300 shadow-lg shadow-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30"
              >
                View Open Positions
              </a>
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

export default OurTeam;