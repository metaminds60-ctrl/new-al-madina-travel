import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFileSignature,
  FaStamp,
  FaUniversity,
  FaGlobe,
  FaPlaneDeparture,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

const highlightCards = [
  {
    icon: FaFileSignature,
    title: "End-to-End Coordination",
    text: "We coordinate document attestation from the first checklist to final stamped documents, so you can focus on travel and planning instead of paperwork.",
  },
  {
    icon: FaGlobe,
    title: "GCC & International Routes",
    text: "Support for Saudi Arabia, UAE, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand, Japan and United Kingdom–focused travel requirements.",
  },
  {
    icon: FaShieldAlt,
    title: "Transparent Tracking & Updates",
    text: "Clear timelines, status updates and communication over WhatsApp and email for every stage of your attestation process.",
  },
];

const documentTypes = [
  {
    title: "Education & Academic Documents",
    icon: FaUniversity,
    points: [
      "Degree and diploma attestation for overseas opportunities",
      "Mark sheets and transcripts documentation support",
      "For study, work and skills-based visas (country specific)",
    ],
  },
  {
    title: "Employment & Experience Documents",
    icon: FaUserTie,
    points: [
      "Experience letters and employment certificates",
      "Salary or HR letters for visa and immigration purposes",
      "Support for employer-side documentation when required",
    ],
  },
  {
    title: "Family & Personal Documents",
    icon: FaStamp,
    points: [
      "Marriage, birth and family relationship certificates",
      "Affidavits and declarations required for visa files",
      "Support for family visa and sponsorship documentation",
    ],
  },
  {
    title: "Business & Company Documents",
    icon: FaFileSignature,
    points: [
      "Company letters, invitations and meeting confirmations",
      "Basic documentation support for business visits and events",
      "Coordinated with your company’s HR or admin team",
    ],
  },
  {
    title: "Travel & Visa Support Documents",
    icon: FaPlaneDeparture,
    points: [
      "Hotel and itinerary confirmations for visa processing",
      "Flight plans for work, visit and holiday trips",
      "Support documents for Umrah, Dubai New Year and Japan travel",
    ],
  },
];

const countrySupport = [
  {
    country: "Saudi Arabia",
    text: "Document support linked to Umrah, work and family travel requirements.",
  },
  {
    country: "United Arab Emirates",
    text: "Letters, hotel confirmations and basic documentation for Dubai and Abu Dhabi trips.",
  },
  {
    country: "Qatar",
    text: "Short-visit, meeting and transit-related documentation coordination.",
  },
  {
    country: "Bahrain",
    text: "Weekend business and family-visit documentation support for GCC travelers.",
  },
  {
    country: "Azerbaijan",
    text: "Travel and invitation-related document coordination for visits to Baku and beyond.",
  },
  {
    country: "Malaysia",
    text: "Conference, education and long-stay travel document assistance.",
  },
  {
    country: "Thailand",
    text: "Holiday and incentive-trip document support for Bangkok and islands.",
  },
  {
    country: "Japan",
    text: "Japan work-permit travel documentation and related travel confirmations.",
  },
  {
    country: "United Kingdom",
    text: "Visit, family and business-trip documentation guidance for the UK.",
  },
];

const processSteps = [
  "Share your travel or visa purpose (Umrah, work permit, New Year holiday, business or family visit).",
  "We review which documents are required for your destination and visa type.",
  "You send clear scans or copies of your documents for initial checking.",
  "We coordinate attestation, stamping or supporting letters as per process.",
  "Final documents are handed over or prepared to be used in your visa file and travel plans.",
];

const DocumentAttestation = () => {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/document/document-hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-blue-900/90" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-5 py-2 mb-5">
              <FaStamp className="text-yellow-500" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-yellow-400">
                Document & Attestation Services – Al Madina Travels
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Document & <span className="text-yellow-500">Attestation Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Make your travel and visa process smoother with organised{" "}
              <span className="text-yellow-400 font-semibold">
                document guidance, attestation coordination and supporting letters
              </span>{" "}
              for Saudi Arabia, UAE, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand, Japan and the UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
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
              Why Choose Our{" "}
              <span className="text-yellow-500">Document & Attestation</span> Team?
            </h2>
            <p className="text-gray-300">
              For international travel, the right documents can be as important as your tickets. Our
              team helps you understand what is needed, what sequence to follow and how to keep the
              process organised for your visa file and travel plans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
                >
                  <div className="mb-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-2xl">
                      <Icon className="text-yellow-500 text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCUMENT TYPES */}
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
              Types of{" "}
              <span className="text-yellow-500">Documents We Commonly Support</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Every country and visa type has its own rules, but these are the document categories
              we most frequently help our clients prepare and organise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="w-11 h-11 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                      <Icon className="text-yellow-500 text-xl" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {doc.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {doc.points.map((p) => (
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

      {/* COUNTRY SUPPORT */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Country-Focused{" "}
              <span className="text-yellow-500">Documentation Support</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We do not provide legal advice, but we help organise and coordinate documentation for
              travel related to these key destinations where Al Madina Travels is already active.
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
                className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  <span>{item.country}</span>
                </h3>
                <p className="text-sm md:text-base text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + CTA SECTION */}
      <section className="relative pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/document/document-cta-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/90 to-gray-900" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                How Our{" "}
                <span className="text-yellow-500">Document & Attestation Process</span> Works
              </h3>
              <p className="text-gray-300 mb-4">
                We keep the process clear and predictable, so you always know which step is next and
                what is required from your side.
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
                <FaShieldAlt className="text-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wide text-yellow-400">
                  Documents for Umrah, Work, Holidays & Business Travel
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Speak to Our Documentation Team
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-5">
                Tell us which country you are travelling to, your purpose of travel and what stage
                you are at in the visa process. We will share{" "}
                <span className="text-yellow-400 font-semibold">
                  a clear list of required documents and how we can support your attestation
                </span>
                .
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-7 py-3 rounded-lg font-semibold text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Contact for Document Support</span>
                  <FaPlaneDeparture className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-xs text-gray-400 flex items-center space-x-2">
                  <FaClock className="text-yellow-500" />
                  <span>
                    Note: Processing depends on embassy, consulate and local authority rules at the
                    time of request. We coordinate and guide, but final decisions always rest with
                    official authorities.
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

export default DocumentAttestation;
