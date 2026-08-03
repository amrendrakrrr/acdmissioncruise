"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  GraduationCap,
} from "lucide-react";

const universities = [
  {
    name: "University of Delhi",
    location: "Delhi, India",
    rank: "Top Public University",
    courses: ["B.Tech", "B.Sc", "B.Com"],
    href: "/contact",
  },
  {
    name: "Lovely Professional University",
    location: "Punjab, India",
    rank: "NAAC A++",
    courses: ["Engineering", "Management", "Law"],
    href: "/contact",
  },
  {
    name: "Amity University",
    location: "Noida, India",
    rank: "Private University",
    courses: ["MBA", "BBA", "Computer Science"],
    href: "/contact",
  },
  {
    name: "University of Toronto",
    location: "Toronto, Canada",
    rank: "Top 25 Worldwide",
    courses: ["Engineering", "Medicine", "Business"],
    href: "/contact",
  },
  {
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    rank: "Top Australian University",
    courses: ["IT", "Health Sciences", "Arts"],
    href: "/contact",
  },
  {
    name: "University of Oxford",
    location: "Oxford, UK",
    rank: "World Top Ranked",
    courses: ["Law", "Medicine", "Humanities"],
    href: "/contact",
  },
];

export default function UniversityGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Featured Universities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Top Universities for Every Career
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse leading universities across India and the world. Compare
            locations, explore popular courses, and take the next step toward
            your academic goals.
          </p>
        </div>

        {/* University Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Banner */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-700 to-sky-500">
                <GraduationCap
                  size={72}
                  className="text-white opacity-90"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    {university.rank}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {university.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={16} />
                  <span>{university.location}</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {university.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                <Link
                  href={university.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  View Details
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