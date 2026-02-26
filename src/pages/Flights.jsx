import React, { useState } from 'react'
import Breadcrumb from "../components/seo/Breadcrumb";
import SeoHead from '../components/seo/SeoHead'
import { motion } from 'framer-motion'
import { FaSearch, FaPlane, FaHeadset, FaStar, FaCheck } from 'react-icons/fa'
import FlightInquiryForm from '../components/FlightInquiryForm'
import { Link } from "react-router-dom";
const Flights = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
    tripType: 'one-way'
  })

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
  <>
    <SeoHead
      title="Cheap Flight Booking from Lahore | New Al Madina Travels"
      description="Book cheap international and domestic flights from Lahore, Pakistan with best fares, 500+ airlines, secure payment and 24/7 customer support. Get exclusive flight deals worldwide."
      path="/flights"
      image="/images/og-flights.jpg"
    />
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
    <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Flight Booking Services",
  "provider": {
  "@type": "TravelAgency",
  "name": "New Al Madina Travels",
  "@id": "https://www.newalmadinatravels.com/#organization"
  },
  "areaServed": ["Pakistan", "Saudi Arabia", "UAE", "Qatar", "Bahrain"],
  "description": "International and domestic flight booking services with competitive fares and full travel assistance."
})}
</script>
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the cheapest flight from Lahore to Jeddah?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flight prices vary by season, but we help you find the lowest manual fares with trusted airlines."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book one-way and return tickets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer one-way, return and multi-city flight booking options."
      }
    }
  ]
})}
</script>
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4">
  <Breadcrumb />
</div>
            {/* Hero Section */}
<section
  className="relative py-20"
  style={{
    backgroundImage:
      "linear-gradient(to bottom, rgba(3,7,18,0.90), rgba(15,23,42,0.70)), url('/images/flight/flights-hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-6xl mx-auto text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.65)]"
    >
      Book <span className="text-yellow-500">Cheap Flights</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
    >
      Compare routes, share your travel plan and let our team find the{" "}
      <span className="font-semibold text-yellow-300">
        lowest manual fares
      </span>{" "}
      for any destination worldwide.
    </motion.p>
    <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
  Need complete travel planning? Combine your flights with our 
  <Link to="/umrah-packages" className="text-yellow-400 hover:underline"> Umrah packages</Link>, 
  customized <Link to="/holiday-packages" className="text-yellow-400 hover:underline"> holiday tours</Link> 
  or professional <Link to="/services" className="text-yellow-400 hover:underline"> visa processing services</Link>.
</p>
  </div>
</section>
  <section className="py-12 bg-gray-900">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-white mb-6">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4 text-gray-300">
      <div>
        <h3 className="font-semibold text-yellow-500">
          What is the cheapest flight from Lahore to Jeddah?
        </h3>
        <p>
          Flight prices vary by season, but we help you find the lowest manual
          fares with trusted international airlines.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-yellow-500">
          Can I book one-way and return tickets?
        </h3>
        <p>
          Yes, we offer one-way, return and multi-city booking options.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-10 bg-gray-900">
  <div className="max-w-4xl mx-auto px-4 text-gray-300">

    <h2 className="text-2xl font-bold text-white mb-4">
      How can I find the cheapest flight from Lahore to Jeddah?
    </h2>

    <p>
      To find the cheapest flight from Lahore to Jeddah, compare flexible travel dates, 
      early booking options and airline routes. Our team manually checks fare systems 
      to secure competitive rates for Umrah and business travelers.
    </p>

  </div>
</section>
      {/* ✅ Manual Worldwide Flight Inquiry – prominent */}
      <FlightInquiryForm />

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
    </>
  )
}

export default Flights
