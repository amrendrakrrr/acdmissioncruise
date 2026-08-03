"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  ArrowRight,
  Star,
} from "lucide-react";

const universities = [
  {
    name: "Lovely Professional University",
    location: "Punjab",
    ranking: "NAAC A++",
  },
  {
    name: "Chandigarh University",
    location: "Punjab",
    ranking: "NAAC A+",
  },
  {
    name: "Amity University",
    location: "Noida",
    ranking: "Top Private University",
  },
  {
    name: "Sharda University",
    location: "Greater Noida",
    ranking: "Global Campus",
  },
  {
    name: "UPES",
    location: "Dehradun",
    ranking: "Industry Focused",
  },
  {
    name: "Bennett University",
    location: "Greater Noida",
    ranking: "Times Group",
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Top Universities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Explore India's Best Universities
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Compare leading universities, rankings, locations and admission opportunities.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {universities.map((uni, index) => (

            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500">

                <GraduationCap
                  size={70}
                  className="text-white"
                />

              </div>

              <div className="p-8">

                <div className="mb-3 flex items-center gap-2 text-yellow-500">

                  <Star size={18} fill="currentColor" />

                  <span className="text-sm font-semibold">
                    {uni.ranking}
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {uni.name}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-600">

                  <MapPin size={18} />

                  <span>{uni.location}</span>

                </div>

                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">

                  View Details

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}