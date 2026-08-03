"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { GraduationCap, Wallet, Calendar, ArrowRight } from "lucide-react";

const countries = [
  {
    code: "US",
    short: "USA",
    name: "United States",
    universities: "180+ Universities",
    tuition: "$15k - $60k / year",
    intake: "Fall • Spring",
  },
  {
    code: "CA",
    short: "Canada",
    name: "Canada",
    universities: "100+ Universities",
    tuition: "$15k - $35k / year",
    intake: "Fall • Winter",
  },
  {
    code: "GB",
    short: "UK",
    name: "United Kingdom",
    universities: "120+ Universities",
    tuition: "$15k - $40k / year",
    intake: "September • January",
  },
  {
    code: "AU",
    short: "Australia",
    name: "Australia",
    universities: "90+ Universities",
    tuition: "$20k - $45k / year",
    intake: "February • July",
  },
  {
    code: "DE",
    short: "Germany",
    name: "Germany",
    universities: "80+ Universities",
    tuition: "$5k - $20k / year",
    intake: "October • April",
  },
  {
    code: "IE",
    short: "Ireland",
    name: "Ireland",
    universities: "60+ Universities",
    tuition: "$15k - $30k / year",
    intake: "September • January",
  },
];

export default function Countries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Choose Your Dream Destination
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore top countries offering world-class education, excellent
            career opportunities, scholarships, and global exposure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    {country.short}
                  </div>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    {country.name}
                  </h3>
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 shadow-sm">
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "3rem",
                      height: "3rem",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={18}
                    className="text-blue-600"
                  />
                  <span>{country.universities}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Wallet
                    size={18}
                    className="text-blue-600"
                  />
                  <span>{country.tuition}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar
                    size={18}
                    className="text-blue-600"
                  />
                  <span>{country.intake}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}