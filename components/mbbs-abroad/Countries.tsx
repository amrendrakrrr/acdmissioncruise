"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, IndianRupee, Clock3 } from "lucide-react";
import { CircleFlag } from "react-circle-flags";

const countries = [
  {
    name: "Russia",
    code: "ru",
    duration: "6 Years",
    fee: "From ₹3.5 Lakhs / Year",
    description:
      "Globally recognized medical universities with affordable tuition fees and English-medium MBBS programs.",
    gradient: "from-blue-700 to-sky-500",
  },
  {
    name: "Kazakhstan",
    code: "kz",
    duration: "5 Years",
    fee: "From ₹3 Lakhs / Year",
    description:
      "Affordable education, modern infrastructure, and NMC-recognized universities for Indian students.",
    gradient: "from-cyan-600 to-blue-500",
  },
  {
    name: "Georgia",
    code: "ge",
    duration: "6 Years",
    fee: "From ₹5 Lakhs / Year",
    description:
      "European-standard education with excellent clinical exposure and globally accepted medical degrees.",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    name: "Uzbekistan",
    code: "uz",
    duration: "6 Years",
    fee: "From ₹3 Lakhs / Year",
    description:
      "Rapidly emerging destination offering quality medical education at an affordable cost.",
    gradient: "from-emerald-600 to-green-500",
  },
  {
    name: "Kyrgyzstan",
    code: "kg",
    duration: "6 Years",
    fee: "From ₹3 Lakhs / Year",
    description:
      "One of the most popular destinations among Indian students for affordable MBBS education.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Bangladesh",
    code: "bd",
    duration: "5 Years",
    fee: "From ₹6 Lakhs / Year",
    description:
      "Curriculum closely aligned with India, providing excellent clinical exposure and quality education.",
    gradient: "from-green-700 to-emerald-500",
  },
  {
    name: "Philippines",
    code: "ph",
    duration: "5.5–6 Years",
    fee: "From ₹4 Lakhs / Year",
    description:
      "English-speaking environment with a US-based curriculum and internationally recognized universities.",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    name: "Nepal",
    code: "np",
    duration: "5.5 Years",
    fee: "From ₹8 Lakhs / Year",
    description:
      "Medical education with a curriculum similar to India and strong practical clinical training.",
    gradient: "from-slate-700 to-slate-900",
  },
];

export default function Countries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Popular MBBS Destinations
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Choose Your Dream Destination
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore top countries offering internationally recognized MBBS
            programs with affordable tuition fees, modern infrastructure,
            and excellent career opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${country.gradient} p-8 text-white`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <CircleFlag
                    countryCode={country.code}
                    height={40}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {country.name}
                </h3>
              </div>

              {/* Body */}
              <div className="space-y-5 p-8">
                <div className="flex items-center gap-3">
                  <IndianRupee
                    className="text-green-600"
                    size={18}
                  />
                  <div>
                    <p className="text-sm text-slate-500">
                      Tuition Fee
                    </p>
                    <p className="font-semibold text-slate-900">
                      {country.fee}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3
                    className="text-blue-600"
                    size={18}
                  />
                  <div>
                    <p className="text-sm text-slate-500">
                      Duration
                    </p>
                    <p className="font-semibold text-slate-900">
                      {country.duration}
                    </p>
                  </div>
                </div>

                <p className="leading-7 text-slate-600">
                  {country.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  Explore Country
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}