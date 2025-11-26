import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTags,
  FaPlaneDeparture,
  FaKaaba,
  FaFire,
  FaGlobeAsia,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

// Current & future visa / travel offers are controlled from this array
const offers = [
  {
    id: "umrah",
    title: "Umrah Packages – Limited Season Offers",
    country: "Saudi Arabia",
    tag: "Spiritual Journey Offer",
    icon: FaKaaba,
    highlight:
      "Premium Umrah packages with carefully selected hotels in Makkah and Madinah, flight guidance and on-ground support.",
    bullets: [
      "Multiple hotel categories within walking distance or short transfers",
      "Options for families, couples, elderly and private groups",
      "Suitable for travelers from Pakistan and GCC countries",
    ],
    ctaLabel: "View Umrah Packages",
    ctaLink: "/umrah-packages",
  },
  {
    id: "dubai-new-year",
    title: "Dubai New Year Holiday & Visa Packages",
    country: "UAE",
    tag: "New Year Special",
    icon: FaFire,
    highlight:
      "Celebrate New Year in Dubai with curated stay options, city experiences and visa coordination support.",
    bullets: [
      "Hotel + airport transfers + optional city tours",
      "Access to New Year Eve experiences (subject to availability)",
      "Ideal for couples, families and small corporate groups",
    ],
    ctaLabel: "Request Dubai New Year Plan",
    ctaLink: "/contact",
  },
  {
    id: "japan-work",
    title: "Japan Work Permit – Travel & Initial Stay Support",
    country: "Japan",
    tag: "Work Permit Focus",
    icon: FaGlobeAsia,
    highlight:
      "End-to-end travel planning for approved Japan work permit candidates – flights, routing and early-day stay planning.",
    bullets: [
      "Flight options aligned with work permit timelines and joining dates",
      "Initial stay planning in key cities like Tokyo or Osaka",
      "Clear communication with candidates and recruiters",
    ],
    ctaLabel: "Discuss Japan Work Travel",
    ctaLink: "/contact",
  },
  {
    id: "flights",
    title: "Worldwide Flight Booking Offers",
    country: "Global",
    tag: "Ongoing Offer",
    icon: FaPlaneDeparture,
    highlight:
      "Competitive fares and routing advice for Saudi Arabia, UAE, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand, Japan and the UK.",
    bullets: [
      "One-way, return and multi-city options",
      "Support for business, work, study and holiday travel",
      "24/7 assistance for important flight changes and queries",
    ],
    ctaLabel: "Book a Flight",
    ctaLink: "/flights",
  },
];

const steps = [
  "Review the active visa and travel offers listed on this page.",
  "Choose the offer that matches your destination, travel dates and purpose.",
  "Share your basic details with our team via the Contact page or WhatsApp.",
  "We prepare a custom quotation with the best available options.",
  "Once you confirm, we proceed with bookings and coordination.",
];

const NewVisaOffers = () => {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/visa-offers/visa-offers-hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/92 to-blue-900/95" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-5 py-2 mb-5">
              <FaTags className="text-yellow-500" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-yellow-400">
                Latest Visa & Travel Offers – Al Madina Travels
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              New <span className="text-yellow-500">Visa & Travel Offers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our latest{" "}
              <span className="text-yellow-400 font-semibold">
                Umrah packages, Dubai New Year deals, Japan work-permit travel plans and worldwide
                flight offers
              </span>
              . Future promotions and limited-time visa offers will also appear here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED VISA OFFERS SECTION */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Featured <span className="text-yellow-500">Visa & Travel Offers</span>
              </h2>
              <p className="text-gray-300 max-w-xl">
                This page is your single place to view all active visa and travel promotions from
                Al Madina Travels. As new offers launch, they will be added here.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Ask About an Offer</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 rounded-2xl border border-gray-700 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 p-5 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Icon className="text-yellow-500 text-xl" />
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {offer.title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/40 text-yellow-300">
                        {offer.country}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-200 mb-3">
                      {offer.highlight}
                    </p>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-700/80 border border-gray-600 text-[11px] font-semibold text-yellow-300 mb-3">
                      <FaClock className="mr-1" />
                      <span>{offer.tag}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs md:text-sm text-gray-300 mb-4">
                      {offer.bullets.map((b) => (
                        <li key={b} className="flex items-start space-x-2">
                          <FaCheckCircle className="mt-0.5 text-yellow-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-2">
                    <Link
                      to={offer.ctaLink}
                      className="inline-flex items-center text-sm font-semibold text-yellow-400 hover:text-yellow-300"
                    >
                      <span>{offer.ctaLabel}</span>
                      <FaPlaneDeparture className="ml-2 text-xs" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW OFFERS WORK + CTA WITH BACKGROUND */}
      <section className="relative pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/visa-offers/visa-offers-cta-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/70 to-gray-900" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                How Our <span className="text-yellow-500">Visa & Travel Offers</span> Work
              </h3>
              <p className="text-gray-300 mb-4">
                Every promotion is handled manually by our team to ensure the best routing,
                pricing and suitability for your purpose of travel.
              </p>
              <ul className="space-y-3">
                {steps.map((step) => (
                  <li key={step} className="flex items-start space-x-3">
                    <FaCheckCircle className="mt-1 text-yellow-500" />
                    <p className="text-sm md:text-base text-gray-200">{step}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/90 border border-yellow-500/40 rounded-2xl p-6 md:p-7 shadow-2xl shadow-black/60"
            >
              <div className="inline-flex items-center space-x-2 bg-yellow-500/15 border border-yellow-500/40 rounded-full px-4 py-1 mb-4">
                <FaTags className="text-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wide text-yellow-400">
                  Umrah, Dubai New Year, Japan & Flights
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Get a Custom Quote for Any Offer
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-5">
                Tell us which offer you are interested in, your preferred travel dates, number of
                travelers and departure city. Our team will respond with{" "}
                <span className="text-yellow-400 font-semibold">
                  a tailored quotation and next steps
                </span>
                .
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-7 py-3 rounded-lg font-semibold text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Contact for New Visa Offers</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-xs text-gray-400">
                  Note: All offers are subject to availability, airline policies and the visa
                  rules of the destination country at the time of booking.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewVisaOffers;
