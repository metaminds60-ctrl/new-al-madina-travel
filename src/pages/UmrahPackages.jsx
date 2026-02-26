import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaHotel, FaBusAlt, FaRegHandshake } from "react-icons/fa";

const UmrahPackages = () => {
  // Offer Popup State
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOffer(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Packages Data
  const packages = [
    {
      id: 1,
      makkahHotel: "THARAWAT MISFILLA OR SIMILAR (Shuttle Service)",
      madinahHotel: "KINAN MADINA OR SIMILAR (900 Meter)",
      nights: "12 Nights Makkah + 8 Nights Madinah",
      flights: ["SV 723 00-ABC 10:40 - 14:55", "SV 726 00-ABC 17:40 - 00:20"],
      prices: {
        sharing: "PKR 287,500",
        quad: "PKR 296,500",
        triple: "PKR 311,700",
        double: "PKR 341,900",
      },
    },
    {
      id: 2,
      makkahHotel: "JEDDAH KHAILIL OR SIMILAR (1200 Meter)",
      madinahHotel: "DYAR SAFA OR SIMILAR (750 Meter)",
      nights: "12 Nights Makkah + 8 Nights Madinah",
      flights: ["SV 723 00-ABC 10:40 - 14:55", "SV 726 00-ABC 17:40 - 00:20"],
      prices: {
        sharing: "PKR 297,400",
        quad: "PKR 309,700",
        triple: "PKR 329,900",
        double: "PKR 368,200",
      },
    },
    {
      id: 3,
      makkahHotel: "JAWRABAIT OR SIMILAR (750 Meter)",
      madinahHotel: "ANSAR PLUS OR SIMILAR (500 Meter)",
      nights: "12 Nights Makkah + 8 Nights Madinah",
      flights: ["SV 723 00-ABC 10:40 - 14:55", "SV 726 00-ABC 17:40 - 00:20"],
      prices: {
        sharing: "PKR 319,500",
        quad: "PKR 337,400",
        triple: "PKR 367,700",
        double: "PKR 428,900",
      },
    },
    {
      id: 4,
      makkahHotel: "SWISS KHAILIL OR SIMILAR (450 Meter)",
      madinahHotel: "ROU AL KHAIR OR SIMILAR (350 Meter)",
      nights: "12 Nights Makkah + 8 Nights Madinah",
      flights: ["SV 723 00-ABC 10:40 - 14:55", "SV 726 00-ABC 17:40 - 00:20"],
      prices: {
        sharing: "PKR 347,100",
        quad: "PKR 368,300",
        triple: "PKR 406,900",
        double: "PKR 483,700",
      },
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-primary-dark text-white pt-32 pb-16">
      <Helmet>
        <title>Umrah Packages | New Al Madina Travel</title>
        <meta
          name="description"
          content="Explore premium 21-day Umrah packages with hotel, flights, visa, and transport. Packages from PKR 287,500."
        />
      </Helmet>

      {/* Offer Popup */}
      {showOffer && (
        <motion.div
          className="fixed top-8 right-8 bg-yellow-500 text-gray-900 px-6 py-3 rounded-2xl shadow-lg z-50 font-semibold"
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          🎉 New Offer! Book Early & Save up to 10% on Umrah Packages!
        </motion.div>
      )}

      {/* HERO COVER (between header & cards) */}
      <section className="relative max-w-7xl mx-auto px-6 mb-12">
        {/* Background image */}
        <div className="absolute inset-0 rounded-3xl bg-[url('/images/umrahpackages/umrah-hero-bg.jpg')] bg-cover bg-center" />
        {/* Overlay to match site style */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/55" />

        {/* Header Content */}
        <motion.div
          className="relative text-center py-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Advance Booking Button */}
          <div className="mb-3">
            <button className="bg-primary-gold/20 border border-primary-gold text-primary-gold px-6 py-2 rounded-full font-semibold hover:bg-primary-gold hover:text-black hover:shadow-[0_0_20px_#ffd700] transition-all duration-300">
              ✨ Advance Booking
            </button>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-white mb-2">
            21 DAYS UMRAH PACKAGES
          </h2>
          <p className="text-gray-200 text-sm md:text-base mb-4">
            <span className="font-semibold text-primary-gold">
              Last Booking Date:
            </span>{" "}
            09 Dec 2025 <br />
            <span className="font-semibold text-primary-gold">
              Travelling Dates:
            </span>{" "}
            15 Dec 2025 – 15 Feb 2026
          </p>

          {/* Airline Logo */}
          <div className="flex flex-col items-center justify-center mt-4">
            <img
              src="/images/umrahpackages/saudi-airlines-logo.png"
              alt="Saudi Airlines Logo"
              className="w-28 h-auto object-contain hover:drop-shadow-[0_0_10px_#ffd700] transition-all duration-300"
            />
            <p className="text-primary-gold mt-2 font-semibold">
              Official Airline: Saudi Airlines
            </p>
          </div>

          <p className="text-gray-200 text-lg mt-4">
            Traveling From Lahore – choose the perfect package for your blessed journey
          </p>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            className="bg-gray-800/70 rounded-2xl shadow-lg border border-yellow-500/40 p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
              Package {pkg.id}
            </h2>
            <p className="text-gray-300 mb-2">{pkg.nights}</p>
            <p className="text-gray-400 text-sm mb-2">{pkg.makkahHotel}</p>
            <p className="text-gray-400 text-sm mb-4">{pkg.madinahHotel}</p>

            <div className="text-sm text-gray-300 mb-4">
              <strong>Flight Schedule:</strong>
              <ul className="mt-1 space-y-1">
                {pkg.flights.map((f, i) => (
                  <li key={i}>✈️ {f}</li>
                ))}
              </ul>
            </div>

            {/* Prices */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {Object.entries(pkg.prices).map(([type, price]) => (
                <div
                  key={type}
                  className="bg-gray-900/50 rounded-xl p-3 border border-yellow-600/30"
                >
                  <p className="text-sm text-gray-400 uppercase">{type}</p>
                  <p className="text-lg font-bold text-yellow-400">{price}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-6 text-yellow-400 text-xl">
              <FaPlaneDeparture />
              <FaHotel />
              <FaBusAlt />
              <FaRegHandshake />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-12 text-gray-400 text-sm px-6">
        <p>
          All packages include: Umrah Visa, Air Ticket, Accommodation & Transport
        </p>
      </div>
    </div>
  );
};

export default UmrahPackages;
