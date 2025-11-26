// File: src/components/home/TopServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaKaaba,
  FaPlaneDeparture,
  FaGlobeAsia,
  FaFireAlt,
} from "react-icons/fa";

// Note: FaKaaba is not in all icon sets; if it gives error, replace FaKaaba with FaMosque from react-icons/fa.
const services = [
  {
    label: "Umrah Packages",
    description: "21 days premium Umrah plans from Lahore",
    path: "/umrah-packages",
    Icon: FaKaaba, // or FaMosque
  },
  {
    label: "Worldwide Flight Booking",
    description: "Cheap fares for GCC, Asia & UK routes",
    path: "/flights",
    Icon: FaPlaneDeparture,
  },
  {
    label: "Japan Work Permit Travel",
    description: "Flights & travel support for approved candidates",
    path: "/japan-work-permit", // update if your route name is different
    Icon: FaGlobeAsia,
  },
  {
    label: "Dubai New Year Packages",
    description: "Limited seats – Burj views & premium stays",
    path: "/holiday-tour-packages", // update to your actual Dubai New Year / Holiday page route
    Icon: FaFireAlt,
  },
];

const TopServicesSection = () => {
  return (
    <section className="bg-gray-900 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left text */}
          <div className="md:w-1/4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-yellow-400 mb-1">
              Top Services
            </p>
            <p className="text-sm text-gray-300">
              Quick access to our most in-demand services right now.
            </p>
          </div>

          {/* Services pills */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {services.map((service) => (
                <motion.div
                  key={service.label}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={service.path}
                    className="flex items-start space-x-3 bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 hover:border-yellow-500/70 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
                  >
                    <div className="mt-1">
                      <service.Icon className="text-yellow-500 text-base" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-snug">
                        {service.label}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopServicesSection;
