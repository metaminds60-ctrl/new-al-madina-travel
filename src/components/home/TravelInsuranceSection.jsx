// File: src/components/home/TravelInsuranceSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaPlaneDeparture } from "react-icons/fa";

const insuranceHighlights = [
  {
    title: "Medical & Emergency Coverage",
    text: "Protect your trip with emergency medical support, hospital coverage and assistance services when you need them most.",
    badge: "Health Protection",
  },
  {
    title: "Baggage & Travel Disruption",
    text: "Coverage options for lost baggage, flight delays and trip interruption so unexpected issues don’t ruin your journey.",
    badge: "Trip Security",
  },
  {
    title: "GCC, Asia & UK Routes",
    text: "Guidance for plans used on routes to Saudi Arabia, UAE, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand, Japan and the United Kingdom.",
    badge: "Route Expertise",
  },
];

const TravelInsuranceSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/15 border border-yellow-500/40 rounded-full px-4 py-1 mb-4">
            <FaShieldAlt className="text-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-wide text-yellow-400">
              Optional protection for your journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Travel <span className="text-yellow-500">Insurance Support</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Along with flights, visas and packages, our team can help you select{" "}
            <span className="text-yellow-400 font-semibold">
              suitable travel insurance options
            </span>{" "}
            for Umrah, holidays, Japan work travel or business trips – so you
            are protected before you even board the flight.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {insuranceHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/40 text-[11px] font-semibold text-yellow-300 mb-3">
                {item.badge}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Ask About Travel Insurance</span>
            <FaPlaneDeparture className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            Coverage is always subject to the final policy terms of the
            insurance provider at the time of purchase.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelInsuranceSection;
