import React from "react";
import SeoHead from "../components/seo/SeoHead";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaKaaba,
  FaPlaneDeparture,
  FaUmbrellaBeach,
  FaFire,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaGlobe,
  FaCity,
} from "react-icons/fa";

const priorityPackages = [
  {
    id: "umrah",
    label: "Umrah Packages",
    badge: "Saudi Arabia",
    icon: FaKaaba,
    highlight:
      "Premium Umrah packages from GCC & Pakistan with flights, hotels and ground services.",
    details: [
      "Multiple hotel categories near Haram",
      "Group & private arrangements available",
      "Guidance for families, couples and elderly",
    ],
    link: "/umrah-packages",
    cta: "View Umrah Packages",
  },
  {
    id: "flights",
    label: "Worldwide Flight Booking",
    badge: "Global",
    icon: FaPlaneDeparture,
    highlight:
      "International & domestic flights for Saudi Arabia, UAE, Qatar, Bahrain, Malaysia, Thailand, Japan & the UK.",
    details: [
      "One-way, return and multi-city options",
      "Best routes for work, study & holidays",
      "24/7 assistance for changes & support",
    ],
    link: "/flights",
    cta: "Book a Flight",
  },
  {
    id: "japan",
    label: "Japan Work Permit + Travel",
    badge: "Japan",
    icon: FaGlobe,
    highlight:
      "Support for Japan work permit candidates with pre-arrival travel planning and initial stay arrangements.",
    details: [
      "Flight planning from GCC & Pakistan",
      "Temporary stay plans on arrival",
      "Guidance aligned with your work permit timeline",
    ],
    link: "/contact",
    cta: "Discuss Japan Plan",
  },
  {
    id: "dubai-new-year",
    label: "Dubai New Year Packages",
    badge: "United Arab Emirates",
    icon: FaFire,
    highlight:
      "Limited New Year packages for Dubai – fireworks, Marina cruise, city tours and family-friendly stays.",
    details: [
      "Hotel + airport transfers + city tours",
      "New Year Eve experience options",
      "Ideal for couples, friends & families",
    ],
    link: "/contact",
    cta: "Reserve New Year Slot",
  },
];

const countryPackages = [
  {
    country: "Saudi Arabia",
    tag: "Umrah & Spiritual Trips",
    description:
      "Umrah-focused stays in Makkah & Madinah with add-on visits to historical sites and optional Saudi city tours.",
    bestFor: "Families, groups, spiritual travelers",
    duration: "5–14 days",
  },
  {
    country: "United Arab Emirates",
    tag: "Dubai & Abu Dhabi Holidays",
    description:
      "Desert safari, Burj Khalifa, New Year events, shopping and premium hotel options across Dubai & Abu Dhabi.",
    bestFor: "Couples, families, New Year trips",
    duration: "3–7 days",
  },
  {
    country: "Qatar",
    tag: "Doha City Breaks",
    description:
      "Short Doha stopovers and holidays with Corniche views, museums, Souq Waqif and modern skyline experiences.",
    bestFor: "Transit travelers, weekend trips",
    duration: "2–5 days",
  },
  {
    country: "Bahrain",
    tag: "Calm Weekend Escapes",
    description:
      "Relaxed Bahrain getaways with seafront stays, malls and family-friendly activities for GCC residents.",
    bestFor: "Short family or couple trips",
    duration: "2–4 days",
  },
  {
    country: "Azerbaijan",
    tag: "Baku & Mountains",
    description:
      "Modern Baku, historic old town and day trips to Gabala with scenic cable cars and nature spots.",
    bestFor: "Friends, families, photography",
    duration: "4–7 days",
  },
  {
    country: "Malaysia",
    tag: "Kuala Lumpur & Nature",
    description:
      "City + nature combo with KL, Genting Highlands and island options, with halal food easily available.",
    bestFor: "Families, honeymoon, students",
    duration: "5–10 days",
  },
  {
    country: "Thailand",
    tag: "Bangkok & Islands",
    description:
      "Bangkok shopping, Phuket islands and family-oriented tours with careful hotel and location selection.",
    bestFor: "Couples, groups, leisure trips",
    duration: "5–9 days",
  },
  {
    country: "Japan",
    tag: "Work + Short Touring",
    description:
      "Pre- or post-work-permit short stays in cities like Tokyo & Osaka, with itinerary aligned to work schedules.",
    bestFor: "Work permit holders & students",
    duration: "3–7 days",
  },
  {
    country: "United Kingdom",
    tag: "City & Countryside",
    description:
      "London and beyond – city tours, day trips and family-friendly itineraries for visit visa and student families.",
    bestFor: "Family visits, students, couples",
    duration: "5–12 days",
  },
];

const includes = [
  "Custom itinerary planning based on your exact dates and number of travelers",
  "Hotel options from budget to premium categories in key city locations",
  "Flight guidance with best routes for Saudi Arabia, UAE, Qatar, Bahrain, Malaysia, Thailand, Japan & the UK",
  "Airport transfers and local transport options (where available)",
  "Add-on tours and experiences like desert safari, cruises, historical sites and city tours",
  "Travel coordination support via WhatsApp and phone for ongoing assistance",
];

const HolidayPackages = () => {
  const countryMeta = {
  "saudi-arabia": {
    title: "Saudi Arabia Holiday & Umrah Packages from Lahore",
    description:
      "Book Umrah and Saudi Arabia holiday packages from Lahore with hotel options near Haram, flights and guided support."
  },
  "united-arab-emirates": {
    title: "Dubai & UAE Holiday Packages from Lahore",
    description:
      "Premium Dubai holiday packages including New Year tours, desert safari, Marina cruises and luxury hotel stays."
  },
  "japan": {
    title: "Japan Travel & Work Related Trips from Pakistan",
    description:
      "Japan short stay and work-related travel planning from Pakistan with flights and pre-arrival arrangements."
  },
  "malaysia": {
    title: "Malaysia Holiday Packages from Lahore",
    description:
      "Kuala Lumpur, Genting Highlands and island holiday packages with flight and hotel coordination."
  }
};
const [dynamicMeta, setDynamicMeta] = useState({
  title: "Holiday Packages from Lahore | Dubai, Umrah & Worldwide Tours",
  description:
    "Book premium holiday packages from Lahore including Umrah trips, Dubai New Year packages, Japan work travel and worldwide tours."
});

useEffect(() => {

  const updateMetaFromHash = () => {
    const hash = window.location.hash.replace("#", "");

    if (countryMeta[hash]) {
      setDynamicMeta(countryMeta[hash]);
    } else {
      setDynamicMeta({
        title: "Holiday Packages from Lahore | Dubai, Umrah & Worldwide Tours",
        description:
          "Book premium holiday packages from Lahore including Umrah trips, Dubai New Year packages, Japan work travel and worldwide tours."
      });
    }
  };

  // Run once on page load
  updateMetaFromHash();

  // Listen for hash change
  window.addEventListener("hashchange", updateMetaFromHash);

  // Cleanup listener
  return () => {
    window.removeEventListener("hashchange", updateMetaFromHash);
  };

}, []);
  return (
  <>
   <SeoHead
  title={dynamicMeta.title}
  description={dynamicMeta.description}
  path="/holiday-packages"
  image="/images/og-holiday.jpg"
/>
    <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Holiday & Tour Packages",
    "provider": {
      "@type": "TravelAgency",
      "name": "New Al Madina Travels",
      "@id": "https://www.newalmadinatravels.com/#organization"
    },
    "areaServed": ["Pakistan", "Saudi Arabia", "UAE", "Malaysia", "Thailand", "Japan", "United Kingdom"],
    "description": "Customized international holiday packages from Lahore including Dubai tours, Japan travel and worldwide vacation planning.",
    "url": "https://www.newalmadinatravels.com/holiday-packages"
  })}
</script>
    <div className="pt-20 bg-gray-900 min-h-screen">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0 bg-[url('/images/holiday/holiday-hero-bg.jpg')] bg-cover bg-center" />
        {/* dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/90 to-blue-900/70" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-5 py-2 mb-5">
              <FaUmbrellaBeach className="text-yellow-500" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-yellow-400">
                Holiday & Tour Packages by Al Madina Travels
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          
              Premium{" "}
              <span className="text-yellow-500">Holiday & Tour Packages</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              From{" "}
              <span className="text-yellow-400 font-semibold">
                Umrah journeys in Saudi Arabia to Dubai New Year, Japan work-related trips and
                worldwide flights
              </span>
              – plan everything with one trusted agency.
            </p>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
  Looking for dedicated <Link to="/umrah-packages" className="text-yellow-400 hover:underline">Umrah packages from Lahore</Link>, 
  international <Link to="/flights" className="text-yellow-400 hover:underline">flight booking services</Link> 
  or personalized travel planning? Explore our complete 
  <Link to="/services" className="text-yellow-400 hover:underline"> travel services</Link> 
  designed for customers in Pakistan and Saudi Arabia.
</p>
          </motion.div>
        </div>
      </section>

      {/* PRIORITY SERVICES HIGHLIGHT */}
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
                Focused <span className="text-yellow-500">Signature Packages</span>
              </h2>
              {/* 🔻 requested line removed here */}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Get Custom Holiday Plan</span>
              <FaPlaneDeparture className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {priorityPackages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
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
                          {pkg.label}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/40 text-yellow-300">
                        {pkg.badge}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-200 mb-3">
                      {pkg.highlight}
                    </p>
                    <ul className="space-y-1.5 text-xs md:text-sm text-gray-300 mb-4">
                      {pkg.details.map((d) => (
                        <li key={d} className="flex items-start space-x-2">
                          <FaCheckCircle className="mt-0.5 text-yellow-500" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-2">
                    <Link
                      to={pkg.link}
                      className="inline-flex items-center text-sm font-semibold text-yellow-400 hover:text-yellow-300"
                    >
                      <span>{pkg.cta}</span>
                      <FaPlaneDeparture className="ml-2 text-xs" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COUNTRY-BASED HOLIDAY GRID */}
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
              Holiday Packages Across{" "}
              <span className="text-yellow-500">Saudi Arabia & Worldwide</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Plan trips covering Saudi Arabia, United Arab Emirates, Qatar, Bahrain, Azerbaijan,
              Malaysia, Thailand, Japan and the United Kingdom – sab kuch ek hi jagah se coordinate
              hota hai.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryPackages.map((item, index) => (
              <motion.div
  key={item.country}
  id={item.country.toLowerCase().replace(/\s+/g, "-")}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-900/80 rounded-2xl border border-gray-700 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center space-x-2">
                      <FaCity className="text-yellow-500" />
                      <span>{item.country}</span>
                    </h3>
                    <span className="text-xs text-yellow-400 font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm text-gray-300 mt-2 pt-2 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-yellow-500" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-yellow-500" />
                    <span>{item.bestFor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-900 border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h3 className="text-2xl font-bold text-white mb-4">
      Explore More Travel Services in Lahore
    </h3>
    <p className="text-gray-400 mb-6">
      New Al Madina Travels offers complete travel solutions including 
      Hajj & Umrah arrangements, visa processing, corporate travel 
      and international tour planning from Lahore.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link to="/umrah-packages" className="text-yellow-400 hover:underline font-semibold">
        Umrah Packages
      </Link>
      <Link to="/flights" className="text-yellow-400 hover:underline font-semibold">
        Flight Booking
      </Link>
      <Link to="/about" className="text-yellow-400 hover:underline font-semibold">
        About Our Agency
      </Link>
      <Link to="/contact" className="text-yellow-400 hover:underline font-semibold">
        Contact Travel Experts
      </Link>
    </div>
  </div>
</section>

      {/* WHAT'S INCLUDED + CTA – WITH BG IMAGE + EXTRA GAP */}
      <section className="relative mt-16 pb-20 bg-gray-900 overflow-hidden">
        {/* background cover image for this section */}
        <div className="absolute inset-0 bg-[url('/images/holiday/holiday-included-bg.jpg')] bg-cover bg-center opacity-30" />
        {/* dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/95 to-gray-900" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What&apos;s Included in{" "}
                <span className="text-yellow-500">Our Holiday & Tour Plans?</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Har client ka plan custom hota hai, lekin aam tor par hum in core cheezon par focus
                karte hain taa-ke trip stress-free rahe.
              </p>
              <ul className="space-y-3">
                {includes.map((point) => (
                  <li key={point} className="flex items-start space-x-3">
                    <FaCheckCircle className="mt-1 text-yellow-500" />
                    <p className="text-sm md:text-base text-gray-200">{point}</p>
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
                  Ready to plan Umrah, Dubai New Year or Japan?
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Get a Custom Holiday & Travel Quote
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-5">
                Apna destination, approximate dates, travelers ki count aur budget range share karein.
                Hum aap ko{" "}
                <span className="text-yellow-400 font-semibold">
                  Umrah, flights, Japan work travel & Dubai New Year
                </span>{" "}
                ke liye tailored options bhejenge.
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-7 py-3 rounded-lg font-semibold text-base hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>Contact Holiday Team</span>
                  <FaPlaneDeparture className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-xs text-gray-400">
                  Note: Prices vary based on dates (specially for New Year in Dubai & peak Umrah
                  seasons). Early inquiry se better options milte hain.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HolidayPackages;
