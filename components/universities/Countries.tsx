"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const countries = [
  {
    name: "India",
    code: "IN",
    description:
      "Explore top Central, State, Private and Deemed Universities across India.",
    href: "/study-india",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "United States",
    code: "US",
    description:
      "Study at globally ranked universities with world-class research opportunities.",
    href: "/study-abroad",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    name: "United Kingdom",
    code: "GB",
    description:
      "Choose from prestigious universities offering globally recognized degrees.",
    href: "/study-abroad",
    gradient: "from-sky-600 to-blue-600",
  },
  {
    name: "Canada",
    code: "CA",
    description:
      "Affordable education, excellent quality of life and post-study work opportunities.",
    href: "/study-abroad",
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Australia",
    code: "AU",
    description:
      "Study at leading Australian universities with strong career prospects.",
    href: "/study-abroad",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Germany",
    code: "DE",
    description:
      "Discover affordable education and renowned engineering & technology programs.",
    href: "/study-abroad",
    gradient: "from-slate-700 to-slate-900",
  },
];

export default function Countries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Explore Destinations
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Study in India or Abroad
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find universities that match your career goals, preferred country,
            and academic interests.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link
                href={country.href}
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`bg-gradient-to-r ${country.gradient} p-8 text-white`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      title={country.name}
                      style={{
                        width: "52px",
                        height: "52px",
                      }}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {country.name}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="leading-7 text-slate-600">
                    {country.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                      <MapPin size={16} />
                      Universities
                    </span>

                    <span className="inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3">
                      Explore
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}