import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaUmbrella, 
  FaPlane, 
  FaHotel, 
  FaUserTie, 
  FaGraduationCap, 
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaGlobe,
  FaHeadset,
  FaAward
} from 'react-icons/fa'

const Services = () => {
  // All 9 Countries with Detailed Services (Japan added)
  const countries = [
    {
      id: 'saudi-arabia',
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      description: 'Spiritual journeys and business opportunities in the heart of the Middle East. Experience the rich cultural heritage and modern development.',
      image: '/images/countries/saudi-arabia-cover.jpg',
      popularFor: ['Hajj Packages', 'Umrah Packages', 'Business Visas'],
      services: [
        {
          icon: FaUmbrella,
          name: 'Hajj Packages',
          description: 'Complete spiritual journey packages with 5-star accommodations',
          features: ['5-Star Hotels', 'Expert Guides', 'Transportation', 'Ziyarat Tours', 'Medical Support'],
          duration: '14-30 days',
          price: 'Starting from $3,500'
        },
        {
          icon: FaUmbrella,
          name: 'Umrah Packages',
          description: 'Spiritual Umrah journeys with comprehensive support',
          features: ['VIP Treatment', 'Hotel near Haram', 'Guided Tours', '24/7 Support'],
          duration: '7-14 days',
          price: 'Starting from $1,200'
        },
        {
          icon: FaUserTie,
          name: 'Business Visa',
          description: 'Fast-track business visa processing for professionals',
          features: ['Express Processing', 'Document Verification', 'Company Support', 'Multiple Entry'],
          duration: '5-7 days',
          price: 'Starting from $250'
        },
        {
          icon: FaPlane,
          name: 'Tourist Visa',
          description: 'Explore Saudi Arabia\'s rich culture and heritage',
          features: ['e-Visa Service', 'Travel Insurance', 'Hotel Booking', 'Tour Guide'],
          duration: '3-5 days',
          price: 'Starting from $150'
        }
      ]
    },
    {
      id: 'uae',
      name: 'United Arab Emirates',
      flag: '🇦🇪',
      description: 'Experience luxury, innovation, and cultural richness in the UAE. From Dubai\'s skyscrapers to Abu Dhabi\'s heritage.',
      image: '/images/countries/uae-cover.jpg',
      popularFor: ['Luxury Tourism', 'Business Hub', 'Shopping'],
      services: [
        {
          icon: FaPlane,
          name: 'Tourism Visa',
          description: 'Explore Dubai, Abu Dhabi, and other emirates',
          features: ['30/90 Days Visa', 'Family Packages', 'Desert Safari', 'City Tours'],
          duration: '3-5 days',
          price: 'Starting from $180'
        },
        {
          icon: FaUserTie,
          name: 'Work Visa',
          description: 'Employment visa processing and documentation',
          features: ['Labor Contract', 'Medical Test', 'Emirates ID', 'Residency'],
          duration: '7-10 days',
          price: 'Starting from $500'
        },
        {
          icon: FaHotel,
          name: 'Hotel Booking',
          description: 'Luxury hotel reservations across UAE',
          features: ['5-Star Hotels', 'Beach Resorts', 'City Center', 'All Inclusive'],
          duration: 'Instant',
          price: 'Best Prices Guaranteed'
        },
        {
          icon: FaPlane,
          name: 'City Tours',
          description: 'Guided tours and cultural experiences',
          features: ['Burj Khalifa', 'Desert Safari', 'Ferrari World', 'Heritage Sites'],
          duration: 'Flexible',
          price: 'Custom Packages'
        }
      ]
    },
    {
      id: 'qatar',
      name: 'Qatar',
      flag: '🇶🇦',
      description: 'Modern architecture meets traditional culture in this Gulf gem. Experience world-class amenities and rich heritage.',
      image: '/images/countries/qatar-cover.jpg',
      popularFor: ['Business Events', 'Luxury Travel', 'Cultural Tours'],
      services: [
        {
          icon: FaPlane,
          name: 'Entry Visa',
          description: 'Hassle-free Qatar entry visa processing',
          features: ['Online Application', 'Fast Tracking', 'Multiple Entry', 'Airport Assistance'],
          duration: '2-4 days',
          price: 'Starting from $100'
        },
        {
          icon: FaUserTie,
          name: 'Business Visa',
          description: 'Corporate and business visit visas',
          features: ['Company Sponsorship', 'Meeting Arrangements', 'Hotel Booking', 'Transport'],
          duration: '3-5 days',
          price: 'Starting from $200'
        },
        {
          icon: FaHotel,
          name: 'Accommodation',
          description: 'Luxury hotels and apartments in Doha',
          features: ['Beachfront Hotels', 'City Center', 'Business Hotels', 'Family Suites'],
          duration: 'Instant',
          price: 'Competitive Rates'
        },
        {
          icon: FaShieldAlt,
          name: 'Travel Insurance',
          description: 'Comprehensive travel coverage for Qatar',
          features: ['Medical Coverage', 'Trip Cancellation', 'Lost Luggage', '24/7 Support'],
          duration: 'Trip Duration',
          price: 'Starting from $50'
        }
      ]
    },
    {
      id: 'bahrain',
      name: 'Bahrain',
      flag: '🇧🇭',
      description: 'Island nation with rich history and modern amenities. Discover ancient forts and contemporary lifestyle.',
      image: '/images/countries/bahrain-cover.jpg',
      popularFor: ['Business', 'Heritage Tours', 'Pearling History'],
      services: [
        {
          icon: FaPlane,
          name: 'Visit Visa',
          description: 'Tourist and family visit visas',
          features: ['14-30 Days Visa', 'Family Applications', 'Extension Support', 'Online Tracking'],
          duration: '3-5 days',
          price: 'Starting from $80'
        },
        {
          icon: FaUserTie,
          name: 'Business Visa',
          description: 'Business and conference visas',
          features: ['Fast Processing', 'Document Support', 'Multiple Entry', 'Company Registration'],
          duration: '4-6 days',
          price: 'Starting from $150'
        },
        {
          icon: FaHotel,
          name: 'Hotel Reservations',
          description: 'Beach resorts and city hotels',
          features: ['Luxury Resorts', 'Business Hotels', 'Family Rooms', 'Sea View'],
          duration: 'Instant',
          price: 'Best Available Rates'
        },
        {
          icon: FaPlane,
          name: 'Travel Packages',
          description: 'Customized travel itineraries',
          features: ['City Tours', 'Desert Trips', 'Historical Sites', 'Shopping Tours'],
          duration: 'Flexible',
          price: 'Custom Quotes'
        }
      ]
    },
    {
      id: 'azerbaijan',
      name: 'Azerbaijan',
      flag: '🇦🇿',
      description: 'Where East meets West with stunning landscapes and architecture. Explore Baku\'s modern skyline and ancient history.',
      image: '/images/countries/azerbaijan-cover.jpg',
      popularFor: ['Cultural Tourism', 'Adventure', 'Historical Sites'],
      services: [
        {
          icon: FaPlane,
          name: 'Visa Processing',
          description: 'Easy visa processing for Azerbaijan',
          features: ['e-Visa Service', 'Document Preparation', 'Fast Tracking', 'Approval Guarantee'],
          duration: '3-5 days',
          price: 'Starting from $50'
        },
        {
          icon: FaPlane,
          name: 'Travel Support',
          description: 'Full travel assistance and guidance',
          features: ['Airport Pickup', 'Hotel Transfer', 'Local SIM', 'Tour Guide'],
          duration: 'Trip Duration',
          price: 'Package Based'
        },
        {
          icon: FaHotel,
          name: 'Accommodation',
          description: 'Hotels and guest houses across Azerbaijan',
          features: ['Baku Hotels', 'Mountain Resorts', 'Historical Stays', 'Modern Apartments'],
          duration: 'Instant',
          price: 'From $40/night'
        },
        {
          icon: FaPlane,
          name: 'Cultural Tours',
          description: 'Explore Baku and beyond with expert guides',
          features: ['Old City Tour', 'Fire Temple', 'Gobustan Petroglyphs', 'Caspian Sea'],
          duration: '1-7 days',
          price: 'Custom Packages'
        }
      ]
    },
    {
      id: 'malaysia',
      name: 'Malaysia',
      flag: '🇲🇾',
      description: 'Tropical paradise with diverse culture and excellent education. From bustling cities to pristine islands.',
      image: '/images/countries/malaysia-cover.jpg',
      popularFor: ['Education', 'Medical Tourism', 'Beach Holidays'],
      services: [
        {
          icon: FaPlane,
          name: 'Tourist Visa',
          description: 'Malaysia tourist visa assistance',
          features: ['Single/Multiple Entry', 'Family Applications', 'Fast Processing', 'Online Status'],
          duration: '3-5 days',
          price: 'Starting from $60'
        },
        {
          icon: FaGraduationCap,
          name: 'Student Visa',
          description: 'Education visa for universities and colleges',
          features: ['University Admission', 'Document Preparation', 'Visa Processing', 'Accommodation'],
          duration: '2-4 weeks',
          price: 'Starting from $300'
        },
        {
          icon: FaUserTie,
          name: 'Business Visa',
          description: 'Business and investment visas',
          features: ['Meeting Arrangements', 'Company Visits', 'Networking Events', 'Investment Guidance'],
          duration: '5-7 days',
          price: 'Starting from $180'
        },
        {
          icon: FaPlane,
          name: 'Family Tours',
          description: 'Family vacation packages to Malaysia',
          features: ['Langkawi Islands', 'Genting Highlands', 'Pangkor Island', 'Cultural Tours'],
          duration: '7-14 days',
          price: 'Family Packages Available'
        }
      ]
    },
    {
      id: 'thailand',
      name: 'Thailand',
      flag: '🇹🇭',
      description: 'Land of smiles with beautiful beaches and rich culture. Experience tropical paradise and vibrant cities.',
      image: '/images/countries/thailand-cover.jpg',
      popularFor: ['Beach Holidays', 'Cultural Experiences', 'Adventure Tourism'],
      services: [
        {
          icon: FaPlane,
          name: 'Holiday Visa',
          description: 'Tourist and holiday visas for Thailand',
          features: ['30/60 Days Visa', 'Extension Support', 'Multiple Entry', 'Fast Processing'],
          duration: '2-4 days',
          price: 'Starting from $70'
        },
        {
          icon: FaPlane,
          name: 'Tour Packages',
          description: 'Custom tour packages for Thailand',
          features: ['Bangkok City Tour', 'Phuket Beaches', 'Chiang Mai Culture', 'Island Hopping'],
          duration: '5-14 days',
          price: 'Customized Quotes'
        },
        {
          icon: FaHotel,
          name: 'Resort Booking',
          description: 'Beach resorts and city hotels',
          features: ['Beachfront Villas', 'Luxury Resorts', 'City Hotels', 'Mountain Retreats'],
          duration: 'Instant',
          price: 'Best Price Guarantee'
        },
        {
          icon: FaPlane,
          name: 'Island Hopping',
          description: 'Southern island tours and adventures',
          features: ['Phi Phi Islands', 'Similan Islands', 'James Bond Island', 'Snorkeling Tours'],
          duration: '1-3 days',
          price: 'Package Based'
        }
      ]
    },
    {
      id: 'japan',
      name: 'Japan',
      flag: '🇯🇵',
      description: 'Experience the perfect blend of ancient traditions and cutting-edge technology in the Land of the Rising Sun.',
      image: '/images/countries/japan-cover.jpg',
      popularFor: ['Work Permits', 'Cultural Tours', 'Technology'],
      services: [
        {
          icon: FaUserTie,
          name: 'Work Permit',
          description: 'Professional work visa and employment support',
          features: ['Job Placement', 'Document Processing', 'Company Sponsorship', 'Residency Support'],
          duration: '4-8 weeks',
          price: 'Starting from $400'
        },
        {
          icon: FaPlane,
          name: 'Tourist Visa',
          description: 'Explore Tokyo, Kyoto, Osaka and more',
          features: ['Single/Multiple Entry', 'Itinerary Planning', 'JR Pass Assistance', 'Cultural Experiences'],
          duration: '5-7 days',
          price: 'Starting from $120'
        },
        {
          icon: FaGraduationCap,
          name: 'Student Visa',
          description: 'Study in Japanese universities and language schools',
          features: ['University Admission', 'Language School', 'Accommodation', 'Cultural Integration'],
          duration: '3-6 weeks',
          price: 'Starting from $350'
        },
        {
          icon: FaHotel,
          name: 'Accommodation',
          description: 'Traditional ryokans and modern hotels',
          features: ['Tokyo Hotels', 'Kyoto Ryokans', 'Osaka Apartments', 'Onsen Resorts'],
          duration: 'Instant',
          price: 'Various Options'
        }
      ]
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Historic landmarks, world-class education, and cultural experiences. From London to Edinburgh, explore British heritage.',
      image: '/images/countries/uk-cover.jpg',
      popularFor: ['Education', 'Business', 'Cultural Tourism'],
      services: [
        {
          icon: FaPlane,
          name: 'Visit Visa',
          description: 'UK visit visa processing and support',
          features: ['Standard Visitor Visa', 'Family Visit', 'Business Visit', 'Tourist Visa'],
          duration: '15-20 days',
          price: 'Starting from $150'
        },
        {
          icon: FaPlane,
          name: 'Travel Assistance',
          description: 'Complete travel support for UK',
          features: ['Flight Booking', 'Hotel Reservation', 'Travel Insurance', 'Local Support'],
          duration: 'Trip Duration',
          price: 'Service Package'
        },
        {
          icon: FaGraduationCap,
          name: 'Student Visa',
          description: 'University admissions and student visa',
          features: ['University Application', 'CAS Support', 'Visa Processing', 'Accommodation'],
          duration: '4-6 weeks',
          price: 'Starting from $500'
        },
        {
          icon: FaHotel,
          name: 'Accommodation',
          description: 'Hotels and student housing in UK',
          features: ['London Hotels', 'University Dorms', 'Serviced Apartments', 'Homestays'],
          duration: 'Instant',
          price: 'Various Options'
        }
      ]
    }
  ]

  // General Services
  const generalServices = [
    {
      icon: FaPlane,
      title: 'Flight Booking',
      description: 'Domestic and international flight reservations with best airlines',
      features: ['500+ Airlines', 'Best Prices', 'Instant Confirmation', '24/7 Support']
    },
    {
      icon: FaHotel,
      title: 'Hotel Reservations',
      description: 'Luxury hotels, resorts, and apartments worldwide',
      features: ['5-Star Hotels', 'Best Locations', 'Free Cancellation', 'Exclusive Deals']
    },
    {
      icon: FaShieldAlt,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage',
      features: ['Medical Coverage', 'Trip Cancellation', 'Lost Luggage', 'Emergency Support']
    },
    {
      icon: FaUmbrella,
      title: 'Tour Packages',
      description: 'Customized tour packages including all services',
      features: ['All-Inclusive', 'Expert Guides', 'Flexible Itineraries', 'VIP Treatment']
    }
  ]

  // Why Choose Our Services
  const whyChooseUs = [
    {
      icon: FaAward,
      title: '15+ Years Experience',
      description: 'Over 15 years of excellence in travel services'
    },
    {
      icon: FaStar,
      title: '98% Success Rate',
      description: 'Highest visa approval rate in the industry'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    },
    {
      icon: FaCheck,
      title: 'Fast Processing',
      description: 'Quick and efficient service delivery'
    }
  ]

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Item variants for staggered animations
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
     style={{backgroundImage: 'url("/images/services/services-banner.jpg")'}}></div>
        
        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Our <span className="text-yellow-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive travel and visa services across 9 countries. From spiritual journeys to business trips and luxury vacations, we handle every detail with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/flights" 
              className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center group"
            >
              Book Flights
              <FaPlane className="ml-2 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              Get Consultation
              <FaHeadset className="ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* General Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              General <span className="text-yellow-500">Travel Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete travel solutions to make your journey comfortable, secure, and memorable.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {generalServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/5 group backdrop-blur-sm"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-2xl group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <service.icon className="text-3xl text-yellow-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-400">
                      <FaCheck className="text-green-500 text-sm" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose <span className="text-yellow-500">Our Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to providing the highest quality travel services with unmatched expertise and dedication.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-2xl mb-6 group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <item.icon className="text-3xl text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Country Specific Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Country <span className="text-yellow-500">Specific Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored services for each destination with local expertise and personalized attention.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {countries.map((country, countryIndex) => (
              <motion.div
                key={country.id}
                variants={itemVariants}
                id={country.id}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Country Header - FIXED FOR MOBILE */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <motion.img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-auto">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <span className="text-4xl sm:text-5xl flex-shrink-0">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight break-words">
                          {country.name}
                        </h3>
                        <p className="text-gray-200 mt-2 text-sm sm:text-lg leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {country.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {country.popularFor.map((item, idx) => (
                            <span 
                              key={idx} 
                              className="bg-yellow-500/20 text-yellow-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-yellow-500/30 whitespace-nowrap"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="p-4 sm:p-8">
                  <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-4 sm:gap-8"
                  >
                    {country.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        variants={itemVariants}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: 5,
                          transition: { duration: 0.3 }
                        }}
                        className="bg-gray-700/30 rounded-2xl p-4 sm:p-6 border border-gray-600 hover:border-yellow-500/50 transition-all duration-300 group backdrop-blur-sm"
                        style={{
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
                              <service.icon className="text-lg sm:text-xl text-yellow-500" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300 break-words">
                              {service.name}
                            </h4>
                            <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
                              {service.description}
                            </p>
                            
                            <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                                  <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                                  <span className="break-words">{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-xs sm:text-sm">
                              <span className="text-yellow-500 font-semibold whitespace-nowrap">{service.duration}</span>
                              <span className="text-gray-300 text-right break-words ml-2">{service.price}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" 
     style={{backgroundImage: 'url("/images/services/services-cta-bg.jpg")'}}></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our travel experts today and let us create the perfect travel experience tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/flights"
                  className="inline-block border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
                >
                  Book Your Trip
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services