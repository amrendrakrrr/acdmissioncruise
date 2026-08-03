"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  Star,
  MapPin,
} from "lucide-react";

const universities = [
  {
    name: "Harvard University",
    country: "USA 🇺🇸",
    ranking: "QS Top Ranked",
  },
  {
    name: "University of Toronto",
    country: "Canada 🇨🇦",
    ranking: "Top Research University",
  },
  {
    name: "University of Oxford",
    country: "United Kingdom 🇬🇧",
    ranking: "World Top University",
  },
  {
    name: "University of Melbourne",
    country: "Australia 🇦🇺",
    ranking: "Global Top University",
  },
  {
    name: "Technical University of Munich",
    country: "Germany 🇩🇪",
    ranking: "Leading Engineering",
  },
  {
    name: "Trinity College Dublin",
    country: "Ireland 🇮🇪",
    ranking: "Top Irish University",
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Top Universities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Study at World-Class Universities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore globally recognised universities offering outstanding
            education, research opportunities, and excellent career prospects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Banner */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500">
                <GraduationCap
                  size={72}
                  className="text-white"
                />
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center gap-2 text-yellow-500">
                  <Star
                    size={18}
                    fill="currentColor"
                  />
                  <span className="text-sm font-semibold">
                    {university.ranking}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {university.name}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  <span>{university.country}</span>
                </div>

                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore University
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