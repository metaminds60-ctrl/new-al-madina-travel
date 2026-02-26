import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowRight, 
  FaPlaneDeparture, 
  FaStar, 
  FaShieldAlt, 
  FaHeadset, 
  FaGlobe,
  FaUmbrella,
  FaHotel,
  FaUserTie,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaAward,
  FaHandshake
} from 'react-icons/fa'
import JapanWorkPermitSection from '../components/JapanWorkPermitSection'
import TravelInsuranceSection from "../components/home/TravelInsuranceSection";
import HomeFAQSection from "../components/home/HomeFAQSection";
import TopServicesSection from "../components/home/TopServicesSection";
import SeoHead from '../components/seo/SeoHead'
const Home = () => {
  // Featured Destinations
  const featuredDestinations = [
    {
      name: 'Saudi Arabia',
      description: 'Experience spiritual journeys with our premium Hajj & Umrah packages and business visa services.',
      image: '/images/destinations/saudi-arabia.jpg',
      services: ['Hajj Packages', 'Umrah Packages', 'Business Visa', 'Tourist Visa'],
      flag: '🇸🇦'
    },
    {
      name: 'United Arab Emirates',
      description: 'Discover the luxury of Dubai, cultural richness of Sharjah, and business opportunities in Abu Dhabi.',
      image: '/images/destinations/uae.jpg',
      services: ['Tourism Visa', 'Work Visa', 'Hotel Booking', 'City Tours'],
      flag: '🇦🇪'
    },
    {
      name: 'Malaysia',
      description: 'Beautiful landscapes, rich culture, and excellent education opportunities await you in Malaysia.',
      image: '/images/destinations/malaysia.jpg',
      services: ['Tourist Visa', 'Student Visa', 'Business Visa', 'Family Tours'],
      flag: '🇲🇾'
    }
  ]

  // Premium Services
  const premiumServices = [
    {
      icon: FaUmbrella,
      title: 'Hajj & Umrah',
      description: 'Complete spiritual journey packages with 5-star accommodations and expert guidance.',
      features: ['5-Star Hotels', 'Expert Guides', 'Transportation', 'Ziyarat Tours']
    },
    {
      icon: FaGlobe,
      title: 'Visa Processing',
      description: 'Hassle-free visa processing for all destinations with 98% success rate.',
      features: ['Fast Processing', 'Document Assistance', 'Status Tracking', 'Expert Support']
    },
    {
      icon: FaPlaneDeparture,
      title: 'Flight Booking',
      description: 'Best deals on international and domestic flights with instant confirmation.',
      features: ['Best Prices', 'Instant E-Tickets', '24/7 Support', 'Flexible Changes']
    },
    {
      icon: FaHotel,
      title: 'Hotel Booking',
      description: 'Luxury hotels and resorts worldwide with exclusive discounts and amenities.',
      features: ['5-Star Hotels', 'Best Locations', 'Free Breakfast', 'Swimming Pool']
    }
  ]

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: FaAward,
      title: '15+ Years Experience',
      description: 'Over 15 years of excellence in travel and visa services'
    },
    {
      icon: FaUsers,
      title: '10,000+ Happy Customers',
      description: 'Thousands of satisfied customers trust our services'
    },
    {
      icon: FaShieldAlt,
      title: '98% Visa Success Rate',
      description: 'Highest visa approval rate in the industry'
    },
    {
      icon: FaHeadset,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support in multiple languages'
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Riyadh, Saudi Arabia',
      text: 'The Hajj package was exceptionally well-organized. Every detail was taken care of, making our spiritual journey smooth and memorable. Highly recommended!',
      rating: 5,
      image: '/images/clients/client-1.jpg',
    },
    {
      name: 'Sarah Khan',
      location: 'London, UK',
      text: 'Outstanding service for our Thailand vacation! The visa process was seamless and the travel arrangements were perfect. Will definitely use again.',
      rating: 5,
      image: '/images/clients/client-2.jpg',
    },
    {
      name: 'Mohammed Hassan',
      location: 'Dubai, UAE',
      text: 'Professional team that delivered beyond expectations. Our business trip to Malaysia was perfectly arranged with excellent hotel and flight options.',
      rating: 5,
      image: '/images/clients/client-3.jpg',
    }
  ]

  // Statistics
  const statistics = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '8+', label: 'Countries' },
    { number: '98%', label: 'Visa Success' }
  ]

 return (
  <>
  <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why is New Al Madina Travels considered one of the best travel agencies in Lahore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "New Al Madina Travels provides reliable Umrah packages, flight booking and visa services with transparent pricing and professional support from Lahore."
    }
  }]
})}
</script>
    <SeoHead
      title="Travel Agency in Lahore | New Al Madina Travels Pakistan"
      description="Leading travel agency in Lahore, Pakistan offering Umrah packages, Hajj services, visa processing, flight booking and international travel solutions."
      path="/"
    />
    <div className="pt-16">
      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="text-center max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-3 mb-8"
          >
            <FaPlaneDeparture className="text-yellow-500" />
            <span className="text-yellow-500 font-semibold">Premium Travel Experiences Since 2008</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Explore The World <br />
            <span className="text-yellow-500">With Confidence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Your trusted partner for <span className="text-yellow-500">premium travel experiences</span> across 
            Saudi Arabia, UAE, Qatar, Bahrain, Malaysia, Thailand, Japan, Azerbaijan & the UK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              to="/services" 
              className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center group"
            >
              Explore Destinations
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/flights" 
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              Book a Flight
              <FaPlaneDeparture className="ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-500">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
      <section className="py-10 bg-gray-900">
  <div className="max-w-4xl mx-auto px-4 text-gray-300">

    <h2 className="text-2xl font-bold text-white mb-4">
      What is the average Umrah package price from Lahore?
    </h2>

    <p>
      Umrah package prices from Lahore usually start from economy options and increase based on 
      hotel distance from Haram, flight category and travel season. We offer multiple 10, 14 and 
      21-day packages with flexible hotel and airline options.
    </p>

  </div>
</section>
      {/* === TOP SERVICES STRIP (NEW) === */}
      <TopServicesSection />

      {/* === FEATURED DESTINATIONS === */}
      <section id="destinations" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-yellow-500">Destinations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our premium travel destinations with exclusive services and unforgettable experiences across 8 countries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="text-2xl">{destination.flag}</span>
                    <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.name}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{destination.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-yellow-500 font-semibold mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-yellow-500 font-semibold hover:text-yellow-400 transition-colors group/btn"
                  >
                    <span>Explore {destination.name}</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
            >
              <span>View All 10 Countries</span>
              <FaGlobe />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* === JAPAN WORK PERMIT VISA === */}
      <JapanWorkPermitSection />

      {/* === PREMIUM SERVICES === */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-500">Premium Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive travel solutions designed to make your journey seamless, comfortable, and memorable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/5 group"
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
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-yellow-500">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to providing the highest quality travel services with unmatched customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
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
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-yellow-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-yellow-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* === TRAVEL INSURANCE & FAQ (COMPONENTS) === */}
      <TravelInsuranceSection />
      <HomeFAQSection />
      {/* === CTA SECTION === */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
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
              Contact us today and let our travel experts create the perfect experience for you. 
              Your dream vacation is just a click away!
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
                  Book Flight Now
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <FaClock className="text-yellow-500" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="text-yellow-500" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaAward className="text-yellow-500" />
                <span>Award Winning Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
  </>
  )
}

export default Home