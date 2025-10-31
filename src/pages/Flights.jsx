import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaPlane, FaCalendarAlt, FaUser, FaHeadset, FaStar, FaCheck } from 'react-icons/fa'

const Flights = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
    tripType: 'one-way'
  })

  // CORRECTED: Using only valid icons
  const features = [
    {
      icon: FaPlane,
      title: '500+ Airlines',
      description: 'Partnership with all major international airlines'
    },
    {
      icon: FaSearch,
      title: 'Instant Booking', 
      description: 'Real-time availability and instant confirmation'
    },
    {
      icon: FaCheck,
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock support for any changes'
    }
  ]

  const popularRoutes = [
    { from: 'Riyadh (RUH)', to: 'Dubai (DXB)', price: 'SAR 850', airline: 'Saudia' },
    { from: 'Jeddah (JED)', to: 'Kuala Lumpur (KUL)', price: 'SAR 1,200', airline: 'Malaysia Airlines' },
    { from: 'Dubai (DXB)', to: 'London (LHR)', price: 'SAR 2,500', airline: 'Emirates' },
    { from: 'Doha (DOH)', to: 'Bangkok (BKK)', price: 'SAR 1,800', airline: 'Qatar Airways' },
    { from: 'Manama (BAH)', to: 'Istanbul (IST)', price: 'SAR 1,100', airline: 'Turkish Airlines' },
    { from: 'Kuala Lumpur (KUL)', to: 'Jeddah (JED)', price: 'SAR 1,300', airline: 'Saudia' }
  ]

  const airlines = [
    { name: 'Saudia', rating: 4.5 },
    { name: 'Emirates', rating: 4.8 },
    { name: 'Qatar Airways', rating: 4.9 },
    { name: 'Turkish Airlines', rating: 4.6 },
    { name: 'Malaysia Airlines', rating: 4.4 },
    { name: 'Thai Airways', rating: 4.3 }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Flight search functionality would connect to real flight API in production')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Book <span className="text-yellow-500">Flights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Find the best flight deals to 1000+ destinations worldwide. Compare prices, choose your preferred airline, and book with confidence.
          </motion.p>
        </div>
      </section>

      {/* Flight Search Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Search <span className="text-yellow-500">Flights</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trip Type */}
              <div className="flex gap-4 justify-center">
                {['one-way', 'round-trip'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value={type}
                      checked={formData.tripType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.tripType === type
                        ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}>
                      {type === 'one-way' ? 'One Way' : 'Round Trip'}
                    </div>
                  </label>
                ))}
              </div>

              {/* From & To */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    From
                  </label>
                  <div className="relative">
                    <FaPlane className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select departure city</option>
                      <option value="Riyadh (RUH)">Riyadh (RUH)</option>
                      <option value="Jeddah (JED)">Jeddah (JED)</option>
                      <option value="Dubai (DXB)">Dubai (DXB)</option>
                      <option value="Abu Dhabi (AUH)">Abu Dhabi (AUH)</option>
                      <option value="Doha (DOH)">Doha (DOH)</option>
                      <option value="Manama (BAH)">Manama (BAH)</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    To
                  </label>
                  <div className="relative">
                    <FaPlane className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 rotate-90" />
                    <select
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select destination city</option>
                      <option value="Riyadh (RUH)">Riyadh (RUH)</option>
                      <option value="Jeddah (JED)">Jeddah (JED)</option>
                      <option value="Dubai (DXB)">Dubai (DXB)</option>
                      <option value="Abu Dhabi (AUH)">Abu Dhabi (AUH)</option>
                      <option value="Doha (DOH)">Doha (DOH)</option>
                      <option value="Manama (BAH)">Manama (BAH)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Departure Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {formData.tripType === 'round-trip' && (
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Return Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="return"
                        value={formData.return}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Passengers */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Passengers
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <FaSearch />
                <span>Search Flights</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Book <span className="text-yellow-500">With Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide the best flight booking experience with exclusive benefits and premium service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-2xl mb-6 group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <feature.icon className="text-3xl text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
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

      {/* Popular Routes */}
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
              Popular <span className="text-yellow-500">Routes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out our most frequently booked routes with competitive pricing and best airlines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <h3 className="font-semibold text-white group-hover:text-yellow-500 transition-colors duration-300">
                      {route.from}
                    </h3>
                    <div className="w-8 h-0.5 bg-yellow-500 my-2"></div>
                    <h3 className="font-semibold text-white group-hover:text-yellow-500 transition-colors duration-300">
                      {route.to}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-yellow-500">{route.price}</span>
                    <p className="text-sm text-gray-400">starting from</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{route.airline}</span>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-300 text-sm">4.5+</span>
                  </div>
                </div>
                <button className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FaSearch />
                  <span>View Flights</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Airlines */}
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
              Partner <span className="text-yellow-500">Airlines</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with the world's leading airlines to bring you the best flight options and exclusive deals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airlines.map((airline, index) => (
              <motion.div
                key={airline.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {airline.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 font-semibold">{airline.rating}</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(airline.rating / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <FaCheck className="text-green-500" />
                  <span>Available for booking</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Flights