"use client";

import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

const services = [
  {
    icon: (
      <ReactCountryFlag
        countryCode="IN"
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
        }}
      />
    ),
    title: "Study in India",
    description:
      "Admission guidance for Top Government, Private and Deemed Universities.",
  },
  {
    icon: "🌍",
    title: "Study Abroad",
    description:
      "Get admission assistance for universities across 30+ countries.",
  },
  {
    icon: "🩺",
    title: "MBBS Abroad",
    description:
      "Affordable MBBS admissions with complete documentation support.",
  },
  {
    icon: "🎓",
    title: "Scholarships",
    description:
      "Find government and university scholarships for deserving students.",
  },
  {
    icon: "💰",
    title: "Education Loan",
    description:
      "Quick education loan assistance from leading financial institutions.",
  },
  {
    icon: "👨‍🏫",
    title: "Career Counselling",
    description:
      "One-to-one counselling to choose the right career and university.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Everything You Need For Admission
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            AdmissionCruise provides complete admission support from counselling
            to final admission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100"
            >
              <div className="flex items-center justify-center text-6xl h-16">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {service.description}
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}