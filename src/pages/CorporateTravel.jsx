import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlaneDeparture,
  FaHotel,
  FaBriefcase,
  FaGlobe,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaClock,
  FaCity,
} from "react-icons/fa";

const corporateHighlights = [
  {
    title: "End-to-End Corporate Travel Management",
    text: "We handle flights, hotels, airport transfers and basic visa coordination so your HR and admin teams can focus on operations instead of logistics.",
  },
  {
    title: "GCC, Asia & UK Focus",
    text: "Specialized routes and support for Saudi Arabia, UAE, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand, Japan and the United Kingdom for business and project travel.",
  },
  {
    title: "Dedicated Relationship Support",
    text: "Direct WhatsApp and phone support for your travel coordinators so last-minute changes, flight disruptions and rebookings are handled smoothly.",
  },
];

const coreServices = [
  {
    icon: FaPlaneDeparture,
    title: "Corporate Flight Bookings",
    points: [
      "International and regional flights for executives and staff",
      "Flexible options for date and time changes where airline policy allows",
      "Strong focus on Saudi Arabia, UAE, Qatar, Bahrain and Japan business routes",
    ],
  },
  {
    icon: FaHotel,
    title: "Business Hotel & Stay Planning",
    points: [
      "Hotels near business districts, event venues and corporate hubs",
      "Mix of budget, mid-range and premium properties based on your travel policy",
      "Preference tracking for frequent travelers and repeat destinations",
    ],
  },
  {
    icon: FaBriefcase,
    title: "Group & Event Travel",
    points: [
      "Travel arrangements for teams attending meetings, trade fairs and conferences",
      "Itinerary planning and tracking for multiple travelers on the same trip",
      "Airport–hotel–venue transfers where available through our partners",
    ],
  },
  {
    icon: FaHandshake,
    title: "Visa & Documentation Coordination",
    points: [
      "Basic guidance for visit and business visas to supported countries",
      "Document checklists and appointment coordination support",
      "Japan work permit travel sequencing aligned with official requirements",
    ],
  },
];

const industries = [
  {
    title: "Small & Mid-Size Businesses",
    text: "Companies that do not have an in-house travel desk but want organized, professional business travel support for their teams.",
  },
  {
    title: "Agencies & Consultants",
    text: "Recruitment, HR, education and business consultants whose clients frequently travel to Saudi Arabia, UAE, Qatar, Japan or the UK.",
  },
  {
    title: "Family-Owned & Owner-Managed Businesses",
    text: "Businesses where owners and family members travel regularly for meetings, investments and events and want a trusted long-term partner.",
  },
];

const countrySupport = [
  {
    country: "Saudi Arabia",
    focus: "Umrah plus business visits, meetings and corporate add-ons in key cities.",
  },
  {
    country: "United Arab Emirates",
    focus: "Dubai and Abu Dhabi corporate events, expos, meetings and New Year packages.",
  },
  {
    country: "Qatar",
    focus: "Short business stays, transit meetings and conference visits in Doha.",
  },
  {
    country: "Bahrain",
    focus: "Weekend business and leisure trips for GCC-based teams and clients.",
  },
  {
    country: "Azerbaijan",
    focus: "Corporate retreats and incentive trips around Baku, Gabala and nearby regions.",
  },
  {
    country: "Malaysia",
    focus: "Conferences, education-related visits, inspections and longer business stays.",
  },
  {
    country: "Thailand",
    focus: "Team offsites, incentive travel and business-plus-leisure programs around Bangkok and the islands.",
  },
  {
    country: "Japan",
    focus: "Work-permit candidates, initial arrival travel and short tours around work schedules.",
  },
  {
    country: "United Kingdom",
    focus: "Business meetings, client visits and combined trips for families and students.",
  },
];

const processSteps = [
  "Share your company profile, key travel countries and approximate monthly travel volume.",
  "Define a simple travel policy – cabin preferences, hotel categories and approval flow.",
  "Set up a communication channel with our team (WhatsApp and email for your coordinators).",
  "Start with a few trial bookings – flights, hotels or business + Umrah / holiday combinations.",
  "Review the experience together and refine the process for a long-term partnership.",
];

const CorporateTravel = () => {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      {/* HERO SECTION WITH BACKGROUND */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/corporate/corporate-hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/90 to-blue-900/70" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-5 py-2 mb-5">
              <FaBriefcase className="text-yellow-500" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-yellow-400">
                Corporate Travel Solutions – Al Madina Travels
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Corporate Travel Solutions for{" "}
              <span className="text-yellow-500">GCC & Global Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              For business trips, meetings, events or Japan work-permit travel, manage{" "}
              <span className="text-yellow-400 font-semibold">
                Saudi Arabia, United Arab Emirates, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand,
                Japan and United Kingdom travel
              </span>{" "}
              with one experienced partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS / SEO COPY BLOCK */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With{" "}
              <span className="text-yellow-500">Al Madina Travels</span> for Corporate Travel?
            </h2>
            <p className="text-gray-300">
              Our goal is not just to book tickets – we help you balance{" "}
              <span className="text-yellow-400">
                travel cost control, policy compliance and traveler comfort
              </span>
              . Your HR and admin teams save time while your executives, staff and work-permit
              candidates get smoother journeys.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {corporateHighlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CORPORATE SERVICES */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Core <span className="text-yellow-500">Corporate Travel Services</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We structure your company&apos;s travel around clear services so every booking –
              whether for Saudi, Dubai, Qatar, Japan or the UK – follows a consistent workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-2xl">
                      <Icon className="text-yellow-500 text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start space-x-2">
                        <FaCheckCircle className="mt-0.5 text-yellow-500" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Corporate Travel Solutions for{" "}
              <span className="text-yellow-500">Modern Businesses</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Whether you are a{" "}
              <span className="text-yellow-400">
                growing company, a consulting agency or a family-owned business
              </span>
              , we turn your travel into a predictable, documented process instead of last-minute
              firefighting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                  <FaUsers className="text-yellow-500" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-sm md:text-base text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRY SUPPORT GRID */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Countries Covered Under{" "}
              <span className="text-yellow-500">Corporate Travel Support</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We focus deeply on a defined set of destinations so that{" "}
              <span className="text-yellow-400">pricing, routes and on-ground support</span> remain
              consistent and reliable for your travelers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {countrySupport.map((item) => (
              <motion.div
                key={item.country}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center space-x-2">
                  <FaCity className="text-yellow-500" />
                  <span>{item.country}</span>
                </h3>
                <p className="text-sm md:text-base text-gray-300">{item.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS + CTA WITH BACKGROUND */}
      <section className="relative pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/corporate/corporate-cta-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/95 to-gray-900" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                A Simple Process to Start a{" "}
                <span className="text-yellow-500">Corporate Travel Partnership</span>
              </h3>
              <p className="text-gray-300 mb-4">
                We define a clear, step-by-step workflow for your company so every future booking
                becomes faster, cleaner and more consistent.
              </p>
              <ul className="space-y-3">
                {processSteps.map((step) => (
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
                <FaGlobe className="text-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wide text-yellow-400">
                  Umrah, flights, Japan work, Dubai events
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Speak to Our Corporate Travel Desk
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-5">
                Share your company name, industry, key travel destinations (for example Saudi
                Arabia, UAE, Qatar, Japan, UK) and approximate monthly trips. We will come back to
                you with a{" "}
                <span className="text-yellow-400 font-semibold">
                  tailored corporate travel proposal
                </span>{" "}
                that fits your requirements.
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-7 py-3 rounded-lg font-semibold text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Contact Corporate Desk</span>
                  <FaPlaneDeparture className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-xs text-gray-400 flex items-center space-x-2">
                  <FaClock className="text-yellow-500" />
                  <span>
                    Ideal for Umrah + business combination trips, Dubai New Year corporate groups,
                    Japan work-permit travelers and GCC to UK business visits.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTravel;
