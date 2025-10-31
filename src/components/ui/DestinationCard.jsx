import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'

const DestinationCard = ({ destination, index }) => {
  const { name, description, image, services, path } = destination

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-primary-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-gold/10"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 bg-primary-gold text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
            <FaMapMarkerAlt />
            <span>{name}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        {/* Services */}
        <div className="mb-4">
          <h4 className="text-primary-gold font-semibold mb-2">Services:</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, idx) => (
              <span
                key={idx}
                className="bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={path}
          className="inline-flex items-center space-x-2 text-primary-gold font-semibold hover:text-yellow-400 transition-colors duration-300 group/btn"
        >
          <span>Explore {name}</span>
          <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}

export default DestinationCard