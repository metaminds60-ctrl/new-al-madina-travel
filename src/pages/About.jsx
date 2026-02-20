import React from 'react'
import SeoHead from '../components/seo/SeoHead'
import { motion } from 'framer-motion'
import { 
  FaAward, 
  FaUsers, 
  FaGlobeAmericas, 
  FaHandshake,
  FaRocket,
  FaEye,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa'

const About = () => {
  // Company Statistics
  const statistics = [
    { icon: FaUsers, number: '10,000+', label: 'Happy Customers', suffix: '' },
    { icon: FaGlobeAmericas, number: '8', label: 'Countries', suffix: '+' },
    { icon: FaAward, number: '15', label: 'Years Experience', suffix: '+' },
    { icon: FaHandshake, number: '98', label: 'Visa Success Rate', suffix: '%' }
  ]

  // Our Values
  const values = [
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We believe in honest and transparent dealings with all our clients and partners.',
      features: ['Transparent Pricing', 'Honest Advice', 'Ethical Practices']
    },
    {
      icon: FaUsers,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their satisfaction is our success.',
      features: ['24/7 Support', 'Personalized Service', 'Customer Satisfaction']
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.',
      features: ['Quality Service', 'Continuous Improvement', 'Professional Excellence']
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Continuously innovating to provide cutting-edge travel solutions and experiences.',
      features: ['Modern Solutions', 'Technology Driven', 'Creative Approaches']
    }
  ]

  // Team Members
  const teamMembers = [
    {
      name: 'Farhan Basharat',
      position: 'Founder & CEO',
      experience: '20+ years in travel industry',
      image: '/images/team/ceo-farhan.png',
      description: 'Visionary leader with extensive experience in international travel and visa services.',
      specialties: ['Strategic Planning', 'Business Development', 'Client Relations']
    },
    {
      name: 'Mahim Makhdoom',
      position: 'Operations Director',
      experience: '15+ years in operations',
      image: '/images/team/director-mahim-makhdoom.png',
      description: 'Expert in streamlining operations and ensuring seamless customer experiences.',
      specialties: ['Process Optimization', 'Quality Control', 'Team Management']
    },
    {
      name: 'Mohammed Hassan',
      position: 'Visa Services Manager',
      experience: '12+ years in visa processing',
      image: '/images/team/manager-mohammed.png',
      description: 'Specialist in visa regulations and documentation for multiple countries.',
      specialties: ['Visa Regulations', 'Documentation', 'Compliance']
    },
    {
      name: 'Fatima Al-Rashid',
      position: 'Customer Experience Manager',
      experience: '10+ years in customer service',
      image: '/images/team/manager-fatima.png',
      description: 'Dedicated to providing exceptional customer service and building lasting relationships.',
      specialties: ['Customer Service', 'Relationship Building', 'Problem Solving']
    }
  ]

  // Why Choose Us Features
  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Our experienced professionals have in-depth knowledge of visa regulations and travel requirements.',
      icon: '👨‍💼'
    },
    {
      title: 'Personalized Service',
      description: 'We tailor our services to meet your specific needs and preferences.',
      icon: '🎯'
    },
    {
      title: 'Competitive Pricing',
      description: 'Premium services at competitive prices without compromising quality.',
      icon: '💰'
    },
    {
      title: 'Fast Processing',
      description: 'Quick and efficient visa processing with regular status updates.',
      icon: '⚡'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your travel needs and emergencies.',
      icon: '📞'
    },
    {
      title: 'Trusted Partner',
      description: 'Years of experience and thousands of satisfied customers trust us.',
      icon: '🤝'
    }
  ]

  // Client Testimonials
  const testimonials = [
    {
      name: 'Dr. Ali Rahman',
      position: 'Medical Professional',
      text: 'New Al Madina Travels made my family\'s Hajj journey seamless. Their attention to detail and professional service was exceptional.',
      rating: 5
    },
    {
      name: 'Fatima Hassan',
      position: 'Business Owner',
      text: 'Outstanding visa processing service for our company trips to Malaysia. Fast, reliable, and very professional.',
      rating: 5
    },
    {
      name: 'Saad Ibrahim',
      position: 'University Professor',
      text: 'The student visa process for my daughter was handled perfectly. Their expertise made everything smooth and stress-free.',
      rating: 5
    }
  ]

  return (
  <>
    <SeoHead
      title="About New Al Madina Travels | Trusted Travel Agency in Lahore"
      description="Learn about New Al Madina Travels, a leading travel agency in Lahore, Pakistan specializing in Umrah packages, Hajj services, visa processing, corporate travel and international flight bookings."
      path="/about"
    />
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
     style={{backgroundImage: 'url("/images/about/about-banner.jpg")'}}></div>
        
        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            About <span className="text-yellow-500">New Al Madina Travels</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            For over 15 years, we have been providing premium travel experiences across multiple countries, 
            helping thousands of customers fulfill their travel dreams with seamless visa processing and 
            exceptional service.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-yellow-500">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in 2008, New Al Madina Travels began as a small travel agency with a big vision: 
                  to make international travel accessible and enjoyable for everyone. What started as a 
                  humble office in the heart of the city has now grown into a trusted name in travel 
                  services across 8 countries.
                </p>
                <p>
                  Our journey began with a focus on Hajj and Umrah services, helping families fulfill 
                  their spiritual dreams. As we grew, we expanded our services to include visa processing, 
                  flight bookings, and luxury travel packages to multiple destinations.
                </p>
                <p>
                  Today, we are proud to have served over 10,000 satisfied customers and maintained a 
                  98% visa success rate. Our commitment to excellence and customer satisfaction remains 
                  the driving force behind everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-center text-white">
                <FaAward className="text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Award Winning Service</h3>
                <p className="text-yellow-100">
                  Recognized as the "Best Travel Agency 2023" for exceptional customer service and innovation in travel solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">2008</div>
                  <div className="text-gray-300">Year Established</div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
                  <div className="text-gray-300">Corporate Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-2xl mb-4 group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <stat.icon className="text-3xl text-yellow-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}<span className="text-yellow-500">{stat.suffix}</span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <FaRocket className="text-2xl text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To provide seamless, premium travel experiences that exceed customer expectations through 
                innovative solutions, personalized service, and unwavering commitment to quality.
              </p>
              <ul className="space-y-3">
                {[
                  'Deliver exceptional customer service',
                  'Provide innovative travel solutions',
                  'Ensure seamless travel experiences',
                  'Maintain highest quality standards'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <FaEye className="text-2xl text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To be the most trusted and preferred travel partner globally, recognized for our excellence 
                in service delivery, innovation in travel solutions, and commitment to customer satisfaction.
              </p>
              <ul className="space-y-3">
                {[
                  'Global recognition and trust',
                  'Industry leadership in innovation',
                  'Unmatched customer satisfaction',
                  'Sustainable business growth'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our <span className="text-yellow-500">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-2xl mb-4 group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <value.icon className="text-2xl text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {value.description}
                </p>
                <ul className="space-y-2">
                  {value.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why <span className="text-yellow-500">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what sets us apart and makes us the preferred choice for travel services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-yellow-500">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our dedicated team of travel experts is committed to making your journey unforgettable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-400 text-sm mb-3">{member.experience}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs mr-2 mb-2"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our <span className="text-yellow-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <FaQuoteLeft className="text-yellow-500 text-2xl mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-yellow-500 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" 
     style={{backgroundImage: 'url("/images/about/about-cta-bg.jpg")'}}></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have trusted us with their travel dreams. 
              Let's create your perfect journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
  </>
  )
}

export default About