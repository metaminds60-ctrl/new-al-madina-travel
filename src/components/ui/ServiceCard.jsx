import React from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, description, features } = service

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-primary-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-gold/5"
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-gold/20 rounded-2xl group-hover:bg-primary-gold/30 transition-colors duration-300">
          <Icon className="text-3xl text-primary-gold" />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard