// File: src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPlane, FaPhone } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🔹 Added "Umrah Packages" page
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Flights', path: '/flights' },
    { name: 'Umrah Packages', path: '/umrah-packages' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-yellow-500 p-2 rounded-lg">
              <FaPlane className="text-gray-900 text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">New Al Madina Travels</h1>
              <p className="text-xs text-yellow-500">Premium Travel Experiences</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              // 🔹 ULTRA PREMIUM Contact Button
              if (item.name === 'Contact') {
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 relative"
                  >
                    <Link
                      to="/contact"
                      className="group relative bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-500 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-xl hover:shadow-yellow-500/40 flex items-center space-x-1.5 overflow-hidden border border-yellow-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute inset-0 rounded-md bg-yellow-500/20 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <span className="relative z-10 flex items-center space-x-1.5">
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <FaPhone className="text-xs" />
                        </motion.div>
                        <span className="font-bold text-sm">Contact Us</span>
                      </span>
                      <div className="absolute -inset-1 bg-yellow-500/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </Link>
                  </motion.div>
                )
              }

              // Regular nav links
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-yellow-500'
                      : 'text-white hover:text-[#d4af37]'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:hidden mt-4 bg-gray-800/90 backdrop-blur-md rounded-lg p-4"
          >
            {navItems.map((item) => {
              if (item.name === 'Contact') {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-3 px-4 rounded-lg mb-3 bg-[#d4af37] text-gray-900 font-semibold text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <FaPhone />
                      <span>Contact Us</span>
                    </div>
                  </Link>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 rounded transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-yellow-500 text-gray-900'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
