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
    location: "New Delhi, India",
    rank: "Top Public University",
    courses: ["B.Tech", "B.Sc", "B.Com"],
    href: "/contact",
  },
  {
    name: "Jawaharlal Nehru University",
    location: "New Delhi, India",
    rank: "Top Public University",
    courses: ["Arts", "Science", "Management"],
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
];

export default function UniversityGrid() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Featured Universities
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Top Universities for Every Career
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Browse leading universities across India and the world.
            Compare locations, explore popular courses, and take the next
            step toward your academic goals.
          </p>

        </div>


        {/* ================= UNIVERSITY GRID ================= */}

        <div
          className="gap-4 sm:gap-6 lg:gap-8"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >

          {universities.map((university, index) => (

            <motion.div
              key={university.name}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}

              viewport={{
                once: true,
              }}

              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl"
            >

              {/* ================= BANNER ================= */}

              <div className="flex h-28 items-center justify-center bg-gradient-to-br from-blue-700 to-sky-500 sm:h-40 lg:h-48">

                <GraduationCap
                  size={48}
                  className="text-white opacity-90 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
                />

              </div>


              {/* ================= CONTENT ================= */}

              <div className="p-4 sm:p-6 lg:p-8">

                {/* Rank + Rating */}

                <div className="flex items-center justify-between gap-2">

                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-[9px] font-semibold text-yellow-700 sm:px-3 sm:text-xs">
                    {university.rank}
                  </span>

                  <div className="flex shrink-0 items-center gap-1 text-yellow-500">

                    <Star
                      size={14}
                      fill="currentColor"
                      className="sm:h-4 sm:w-4"
                    />

                    <span className="text-xs font-semibold sm:text-sm">
                      4.9
                    </span>

                  </div>

                </div>


                {/* University Name */}

                <h3 className="mt-4 text-lg font-bold leading-tight text-slate-900 sm:mt-5 sm:text-xl lg:text-2xl">
                  {university.name}
                </h3>


                {/* Location */}

                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 sm:mt-3 sm:gap-2 sm:text-sm">

                  <MapPin
                    size={14}
                    className="shrink-0 sm:h-4 sm:w-4"
                  />

                  <span>
                    {university.location}
                  </span>

                </div>


                {/* Courses */}

                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">

                  {university.courses.map((course) => (

                    <span
                      key={course}
                      className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 sm:px-3 sm:text-xs lg:text-sm"
                    >
                      {course}
                    </span>

                  ))}

                </div>


                {/* View Details */}

                <Link
                  href={university.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 sm:mt-8 sm:text-base"
                >

                  View Details

                  <ArrowRight
                    size={16}
                    className="sm:h-[18px] sm:w-[18px]"
                  />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}