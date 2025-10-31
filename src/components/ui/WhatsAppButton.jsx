import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '+923160494679' // Saudi Arabia number format
    const message = 'Hello! I would like to inquire about your travel services and get more information.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
        
        {/* Pulsing Animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-4 border-green-500 rounded-full"
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
        </div>
      </motion.button>

      {/* Notification Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3 }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          !
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default WhatsAppButton