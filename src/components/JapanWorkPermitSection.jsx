import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUserTie, FaMapMarkerAlt, FaClock, FaShieldAlt } from "react-icons/fa";

const JapanWorkPermitSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== TOP BANNER WITH IMAGE (ONLY HEADER AREA) ===== */}
        <div className="relative overflow-hidden rounded-2xl mb-10 md:mb-14">
          {/* Background image only for this band */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(15,23,42,0.92), rgba(15,23,42,0.96)), url('/images/japan/japan-work-visa-bg.jpg')",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative text-center py-10 md:py-14 px-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Japan <span className="text-yellow-500">Work Permit Visa</span> Available
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Secure your spot for Japan&apos;s growing workforce. We handle{" "}
              <span className="text-yellow-400 font-semibold">
                documentation, compliance, and step-by-step guidance
              </span>{" "}
              so you can focus on your new career.
            </p>
          </motion.div>
        </div>

        {/* ===== MAIN CARD (NO IMAGE BEHIND THIS PART) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-yellow-500/25 shadow-2xl shadow-black/60 px-6 py-8 md:px-10 md:py-10"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* LEFT SIDE – Info */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-yellow-500/15 border border-yellow-500/40 rounded-full px-4 py-2 mb-4">
                <FaUserTie className="text-yellow-500" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wide text-yellow-400">
                  Skilled & Semi-Skilled Categories
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Move to Japan with a Trusted Work Permit Partner
              </h3>

              <p className="text-gray-300 mb-5 leading-relaxed">
                Al Madina Travels now assists with{" "}
                <span className="text-yellow-400 font-semibold">Japan work permit visas</span> for
                hospitality, factories, agriculture, care workers and more. From initial assessment
                to final stamping, our team manages the process with transparency and compliance.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                      Destination
                    </p>
                    <p className="text-sm md:text-base text-gray-100">
                      Japan – multiple cities & industries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaClock className="mt-1 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                      Limited Slots
                    </p>
                    <p className="text-sm md:text-base text-gray-100">
                      High demand for 2025–2026 intakes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaShieldAlt className="mt-1 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                      Compliance
                    </p>
                    <p className="text-sm md:text-base text-gray-100">
                      Guidance as per official Japan visa rules
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaUserTie className="mt-1 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                      Applicant Profile
                    </p>
                    <p className="text-sm md:text-base text-gray-100">
                      Freshers & experienced candidates welcome
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA – smaller button, one line */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg font-bold text-base sm:text-base whitespace-nowrap hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Contact Us</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-gray-400">
                  Limited seats per month. Contact our team to check your eligibility and start the
                  process.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE – Highlight Box */}
            <div className="bg-gray-800/80 rounded-2xl border border-gray-700 px-5 py-6 md:px-7 md:py-7">
              <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 mb-4">
                Hot Opportunity • 2025
              </p>

              <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                Who is this Japan Work Permit for?
              </h4>

              <ul className="space-y-3 text-sm md:text-base text-gray-200 mb-5">
                <li>• Candidates searching for long-term legal work opportunities in Japan.</li>
                <li>• Applicants willing to learn basic Japanese language & workplace culture.</li>
                <li>• Those looking for transparent processing with documented steps.</li>
                <li>• Candidates ready for medical, document verification and interview.</li>
              </ul>

              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div className="bg-gray-900/80 rounded-xl px-4 py-3 border border-gray-700">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Document Help</p>
                  <p className="font-semibold text-yellow-400">CV, Forms & Checklists</p>
                </div>
                <div className="bg-gray-900/80 rounded-xl px-4 py-3 border border-gray-700">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    End-to-End Support
                  </p>
                  <p className="font-semibold text-yellow-400">From Application to Visa Stamp</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JapanWorkPermitSection;
