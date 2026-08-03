"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  HandCoins,
  Landmark,
  Globe2,
  Medal,
  GraduationCap,
} from "lucide-react";

const scholarshipTypes = [
  {
    title: "Merit-Based",
    description:
      "Awarded to students with outstanding academic performance, entrance exam scores, or exceptional achievements.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Need-Based",
    description:
      "Financial assistance for deserving students based on family income and economic background.",
    icon: HandCoins,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Government Scholarships",
    description:
      "Central and State Government scholarship schemes for eligible students across various categories.",
    icon: Landmark,
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "International Scholarships",
    description:
      "Scholarships offered by foreign governments and international universities for global education.",
    icon: Globe2,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Sports Scholarships",
    description:
      "Special scholarships for students with outstanding achievements in sports at national and international levels.",
    icon: Medal,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "University Scholarships",
    description:
      "Institution-specific scholarships based on academics, leadership, research, and extracurricular excellence.",
    icon: GraduationCap,
    color: "from-violet-600 to-purple-700",
  },
];

export default function ScholarshipTypes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Scholarship Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Scholarships for Every Student
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover a wide range of scholarships designed to support your
            educational journey, whether you're studying in India or abroad.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {scholarshipTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}