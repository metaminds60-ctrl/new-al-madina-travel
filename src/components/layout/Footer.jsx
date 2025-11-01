import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaPlane, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp,
  FaClock
} from 'react-icons/fa'

import footerLogo from "../../assets/footer-logo.png";
 // ✅ Make sure image path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Flight Booking', path: '/flights' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Hajj & Umrah Packages',
    'Visa Processing',
    'Flight Booking',
    'Hotel Reservations',
    'Tour Packages',
    'Travel Insurance',
    'Business Travel',
    'Student Visa'
  ]

  const countries = [
    'Saudi Arabia',
    'United Arab Emirates',
    'Qatar',
    'Bahrain',
    'Azerbaijan',
    'Malaysia',
    'Thailand',
    'United Kingdom'
  ]

  const socialLinks = [
    { icon: FaFacebook, url: '#', name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: '#', name: 'Twitter', color: 'hover:text-blue-300' },
    { icon: FaInstagram, url: '#', name: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaLinkedin, url: '#', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaWhatsapp, url: '#', name: 'WhatsApp', color: 'hover:text-green-400' },
  ]

  return (
    <motion.footer 
      className="bg-gray-900 border-t border-gray-800 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Noor Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/5 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <motion.img 
                src={footerLogo} 
                alt="Footer Logo"
                className="w-12 h-12 object-contain rounded-lg shadow-md 
                           transition-all duration-500 group-hover:scale-110 
                           group-hover:shadow-[0_0_25px_#FFD700]"
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div 
                className="flex flex-col"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white 
                               group-hover:text-yellow-400 
                               transition-all duration-300 drop-shadow-[0_0_5px_#FFD700]">
                  New Al Madina Travel
                </h3>
                <p className="text-sm text-yellow-500">Premium Travel Experiences</p>
              </motion.div>
            </Link>

            <p className="text-gray-400 mb-4 leading-relaxed">
              Providing premium travel experiences across Saudi Arabia, UAE, Qatar, Bahrain, 
              Malaysia, Thailand, Azerbaijan & the UK since 2008.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={`Follow us on ${social.name}`}
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon className="text-xl drop-shadow-[0_0_5px_#FFD700]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 transition-all duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_#FFD700]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 transition-all duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_#FFD700]">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 transition-all duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_#FFD700]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <FaMapMarkerAlt className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Kabir Street, Chowk Urdu Bazar, Lahore
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <FaPhone className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  +92 316 049 4679
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <FaEnvelope className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  info@newalmadinatravel.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <FaClock className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Mon-Sat: 8AM-6PM
                </span>
              </div>
            </div>

            {/* Countries */}
            <div className="mt-6">
              <h5 className="text-md font-semibold text-yellow-500 mb-2">Countries We Serve</h5>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} New Al Madina Travel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
