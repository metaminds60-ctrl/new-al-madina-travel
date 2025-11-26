// File: src/components/home/HomeFAQSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Do I really need travel insurance for Umrah or holiday trips?",
    answer:
      "We strongly recommend it. Travel insurance protects you against unexpected medical issues, trip delays and other emergencies. For Umrah and international holidays, it gives peace of mind for you and your family.",
  },
  {
    question: "Which countries do you mainly support for travel and visas?",
    answer:
      "We focus on routes related to our core destinations: Saudi Arabia, United Arab Emirates, Qatar, Bahrain, Azerbaijan, Malaysia, Thailand, Japan and the United Kingdom.",
  },
  {
    question: "Can you help me choose flights and hotels within my budget?",
    answer:
      "Yes. Share your travel dates, city of departure, budget range and number of travelers. We recommend suitable flight options and hotel categories to match your budget and comfort level.",
  },
  {
    question: "How do I get a custom quote for Umrah, Dubai New Year or Japan work travel?",
    answer:
      "Use the Contact page form or WhatsApp, mention your destination, expected dates and number of travelers. Our team will prepare a tailored quotation and share next steps.",
  },
  {
    question: "Do you only work with clients from Pakistan?",
    answer:
      "Our main base is Pakistan, but we also support many travelers already working or living in GCC countries who fly from Saudi Arabia, UAE, Qatar and Bahrain to other destinations.",
  },
];

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/15 border border-yellow-500/40 rounded-full px-4 py-1 mb-4">
            <FaQuestionCircle className="text-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-wide text-yellow-400">
              Helpful answers before you travel
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A few quick answers to common questions about our services, travel
            insurance and how we work with clients around the world.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 border border-gray-700 rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/15 flex items-center justify-center">
                    <FaQuestionCircle className="text-yellow-500 text-sm" />
                  </div>
                  <span className="font-semibold text-sm md:text-base text-white">
                    {item.question}
                  </span>
                </div>
                <span className="ml-4 text-yellow-400 text-xl md:text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-gray-300 border-t border-gray-700">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-300">
          Still have a question?{" "}
          <Link
            to="/contact"
            className="text-yellow-400 font-semibold hover:text-yellow-300"
          >
            Send us a message
          </Link>{" "}
          and our team will guide you step-by-step.
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
