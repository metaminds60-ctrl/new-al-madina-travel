import React from 'react'
import { Link } from 'react-router-dom'
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="bg-yellow-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlane className="text-gray-900 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                  New Al Madina Travel
                </h3>
                <p className="text-sm text-yellow-500">Premium Travel Experiences</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Providing premium travel experiences across Saudi Arabia, UAE, Qatar, Bahrain, 
              Malaysia, Thailand, Azerbaijan & the UK since 2008.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
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

            {/* Countries We Serve */}
            <div className="mt-6">
              <h5 className="text-md font-semibold text-yellow-500 mb-2">Countries We Serve</h5>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
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

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SSL Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Verified Agency</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-yellow-500">
              <span className="text-sm">Certified Travel Agency</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} New Al Madina Travel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer