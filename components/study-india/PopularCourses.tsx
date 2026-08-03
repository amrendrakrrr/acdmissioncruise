"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Stethoscope,
  Scale,
  Cog,
  Briefcase,
  Palette,
} from "lucide-react";

const courses = [
  {
    title: "Engineering",
    icon: Cog,
    description: "B.Tech, M.Tech and diploma programmes from top universities.",
  },
  {
    title: "Medical",
    icon: Stethoscope,
    description: "MBBS, BDS, Nursing, Pharmacy and allied health sciences.",
  },
  {
    title: "Management",
    icon: Briefcase,
    description: "BBA, MBA and business management programmes.",
  },
  {
    title: "Law",
    icon: Scale,
    description: "LLB, BA LLB and specialised legal education.",
  },
  {
    title: "Computer Science",
    icon: Laptop,
    description: "BCA, MCA, AI, Data Science and Cyber Security.",
  },
  {
    title: "Arts & Design",
    icon: Palette,
    description: "Fine Arts, Fashion Design, Animation and Media studies.",
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Popular Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Explore India's Most Popular Courses
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Find the right programme for your career with expert admission
            guidance from AdmissionCruise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {course.description}
                </p>

                <button className="mt-8 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}