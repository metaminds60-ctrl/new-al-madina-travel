// File: src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaPlane } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // dropdown state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 MAIN NAV ITEMS (Visa Services removed)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Flights", path: "/flights" },
    { name: "Umrah Packages", path: "/umrah-packages" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔹 Services dropdown sub-items
  const serviceSubItems = [
    { name: "All Services", path: "/services" },
    { name: "Holiday & Tour Packages", path: "/holiday-packages" },
    { name: "Corporate Travel Solutions", path: "/corporate-travel" },
    { name: "New Visa Offers", path: "/new-visa-offers" },
    { name: "Document & Attestation Services", path: "/document-attestation" },
  ];

  // helper – kisi bhi services-related route pe ho tu Services active dikhe
  const servicesActivePaths = serviceSubItems.map((s) => s.path);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-gray-900/80 backdrop-blur-sm py-2 md:py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 🔱 LOGO + TEXT WITH NOOR EFFECT */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Noor Effect Glow */}
            <motion.div
              className="absolute -inset-2 rounded-full blur-lg bg-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            ></motion.div>

            {/* Logo */}
            <motion.img
              src={logo}
              alt="New Al Madina Travels Logo"
              className="h-14 w-auto object-contain drop-shadow-lg relative z-10"
              whileHover={{
                rotate: [0, 8, -8, 0],
                scale: 1.1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />

            {/* Text with Icon */}
            <div className="flex items-center space-x-2 relative z-10">
              <motion.div
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaPlane className="text-yellow-400 text-base" />
              </motion.div>
              <span className="text-white text-lg font-semibold tracking-wide group-hover:text-yellow-400 transition-colors duration-500">
                New Al Madina Travels
              </span>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              // 🔸 Contact button (as before)
              if (item.name === "Contact") {
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
                );
              }

              // 🔸 Services dropdown (desktop)
              if (item.name === "Services") {
                const isActive = servicesActivePaths.includes(location.pathname);
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`relative font-medium transition-all duration-300 inline-flex items-center ${
                        isActive ? "text-yellow-500" : "text-white hover:text-[#d4af37]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="ml-1 text-xs">▾</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                        />
                      )}
                    </button>

                    {isServicesOpen && (
                      <div
                        className="absolute right-0 top-full mt-2 w-72 bg-gray-900/95 border border-gray-700 rounded-xl shadow-xl py-2 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}   // ✅ keep open while inside
                        onMouseLeave={() => setIsServicesOpen(false)}  // ✅ close when leaving menu
                      >
                        {serviceSubItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsServicesOpen(false)}
                            className={`block px-4 py-2.5 text-sm text-left transition-colors duration-200 ${
                              location.pathname === sub.path
                                ? "bg-yellow-500 text-gray-900 font-semibold"
                                : "text-gray-200 hover:bg-white/10"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // 🔸 Normal links (Home, About, Flights, Umrah Packages)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-yellow-500"
                      : "text-white hover:text-[#d4af37]"
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
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:hidden mt-4 bg-gray-800/90 backdrop-blur-md rounded-lg p-4"
          >
            {navItems.map((item) => {
              // Contact button mobile
              if (item.name === "Contact") {
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
                );
              }

              // Mobile: Services + sub-links
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="mb-3">
                    <div className="py-2 px-4 text-white font-semibold">
                      Services
                    </div>
                    {serviceSubItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block py-2 px-4 rounded text-sm mb-1 transition-all duration-300 ${
                          location.pathname === sub.path
                            ? "bg-yellow-500 text-gray-900"
                            : "text-gray-200 hover:bg:white/10"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                );
              }

              // Normal items (Home, About, Flights, Umrah Packages)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 rounded transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-yellow-500 text-gray-900"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
