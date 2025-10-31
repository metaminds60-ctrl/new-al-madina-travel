import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaHeadset,
  FaCheck,
  FaStar
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Contact Information
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      details: ['+92 316 049 4679', '+966 55 732 4894'],
      description: 'Call us for immediate assistance',
      color: 'green'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: ['info@newalmadinatravel.com', 'support@newalmadinatravel.com'],
      description: 'Send us your query anytime!',
      color: 'blue'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office Address',
      details: ['Kabir Street #3', 'Chowk Urdu Bazar', 'Lahore 54000, Pakistan'],
      description: 'Visit our office',
      color: 'yellow'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Monday  - Saturday: 8:00 AM - 6:00 PM', 'Friday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      description: 'We are here to help you',
      color: 'purple'
    }
  ]

  // Services for contact form
  const services = [
    'Visa Processing',
    'Flight Booking',
    'Hotel Reservation',
    'Hajj & Umrah Packages',
    'Tour Packages',
    'Travel Insurance',
    'Business Travel',
    'Student Visa',
    'Family Visit Visa',
    'Other'
  ]

  // Why Contact Us
  const whyContactUs = [
    {
      icon: '⚡',
      title: 'Instant Response',
      description: 'Get immediate answers to your travel queries'
    },
    {
      icon: '👨‍💼',
      title: 'Expert Consultation',
      description: 'Free consultation from travel experts'
    },
    {
      icon: '💰',
      title: 'Best Price Guarantee',
      description: 'We offer the most competitive prices'
    },
    {
      icon: '🛡️',
      title: '100% Secure',
      description: 'Your information is safe with us'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 5000)
  }

  const handleWhatsApp = () => {
    const phoneNumber = '+923160494679'
    const message = `Hello! I would like to inquire about: ${formData.subject || 'travel services'}. My name is ${formData.name || 'a potential customer'}.`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  // Color classes for icons
  const colorClasses = {
    green: 'bg-green-500/20 text-green-500',
    blue: 'bg-blue-500/20 text-blue-500',
    yellow: 'bg-yellow-500/20 text-yellow-500',
    purple: 'bg-purple-500/20 text-purple-500'
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
     style={{backgroundImage: 'url("/images/contact/contact-banner.jpg")'}}></div>
        
        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Contact <span className="text-yellow-500">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Get in touch with our travel experts. We're here to help you plan your perfect journey 
            and answer any questions you may have about our services.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                Get in <span className="text-yellow-500">Touch</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Have questions about our services? Ready to start planning your next adventure? 
                Our team is here to assist you every step of the way. Reach out to us through any 
                of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group p-4 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${colorClasses[info.color]}`}>
                        <info.icon className="text-xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                      <p className="text-yellow-500 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Quick Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <FaWhatsapp className="text-3xl text-green-500" />
                  <h3 className="text-xl font-bold text-white">Quick WhatsApp Support</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Get instant answers on WhatsApp. Our team is available to help you with quick queries and instant bookings.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Chat on WhatsApp</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-gray-400 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-3xl text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-300 mb-4">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <p className="text-yellow-500 text-sm">
                      You can also reach us directly at +966 12 345 6789
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="+966 12 345 6789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your travel needs, preferred destinations, dates, and any specific requirements..."
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-500 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-gray-400 text-sm text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
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
              Why Contact <span className="text-yellow-500">Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of working with our expert travel consultants for your next journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyContactUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Visit Our <span className="text-yellow-500">Office</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Come see us in person. Our friendly staff will be happy to assist you with all your travel needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
{/* ULTIMATE Premium Google Maps */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="lg:col-span-2 group relative"
>
  {/* Glow Effect Container */}
  <div className="relative rounded-2xl overflow-hidden h-96">
    {/* Outer Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
    
    {/* Main Map Container */}
    <div className="relative rounded-2xl overflow-hidden h-full border border-gray-700 group-hover:border-yellow-500/50 transition-all duration-500 bg-gray-900 shadow-2xl">
      
      {/* Dark Theme Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-blue-900/30 z-10 pointer-events-none rounded-2xl"></div>
      
      {/* Gold Accent Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500/20 transition-all duration-500 pointer-events-none"></div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.147863235104!2d74.3079056746989!3d31.574992844443027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca7484f0a9d%3A0x2a509ed8cfe92206!2s3%20Kabeer%20St%2C%20Urdu%20Bazar%20chok%2C%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1761899792845!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ 
          border: 0,
          filter: 'grayscale(40%) contrast(120%) saturate(70%) brightness(85%)',
          borderRadius: '14px',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        className="group-hover:scale-105 group-hover:grayscale(0%) group-hover:brightness(100%) group-hover:saturate(100%)"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="New Al Madina Travel - Premium Office Location in Lahore, Pakistan"
      />
      
      {/* Premium Badge */}
      <div className="absolute top-4 right-4 z-20">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900/95 backdrop-blur-md text-yellow-500 px-4 py-2 rounded-lg font-semibold border border-yellow-500/40 shadow-2xl flex items-center space-x-2"
        >
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span>📍 Our Office</span>
        </motion.div>
      </div>
      
      {/* Loading Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none rounded-2xl z-30"></div>
    </div>
  </div>
</motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Office Location</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-yellow-500" />
                    <span className="text-gray-300">Kabir Street #3, Chowk Urdu Bazar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-yellow-500 opacity-0" />
                    <span className="text-gray-300">Lahore 54000, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Parking Information</h3>
                <p className="text-gray-300">
                  Free parking available in the building basement. Visitor parking spots are marked near the main entrance.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Public Transport</h3>
                <p className="text-gray-300">
                  Easily accessible by bus and taxi. Nearest metro station: Al Balad Station (5 min walk).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaHeadset className="text-3xl text-red-500" />
              <h2 className="text-3xl font-bold text-white">24/7 Emergency Support</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              For urgent travel emergencies outside business hours, our dedicated emergency support team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold">
                Emergency Hotline: +92 316 0494679
              </div>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <FaWhatsapp />
                <span>Emergency WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact