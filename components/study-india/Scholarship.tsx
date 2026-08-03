"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgePercent,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const scholarships = [
  {
    icon: Award,
    title: "Merit Scholarships",
    description:
      "Earn scholarships based on your academic performance and entrance examination scores.",
  },
  {
    icon: BadgePercent,
    title: "Fee Waivers",
    description:
      "Many universities offer tuition fee concessions for eligible students.",
  },
  {
    icon: BookOpen,
    title: "Government Schemes",
    description:
      "Receive guidance on central and state government scholarship opportunities.",
  },
];

export default function Scholarship() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Scholarships
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Scholarships & Financial Assistance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Don't let finances stop your education. AdmissionCruise helps
              students discover scholarships, fee waivers and financial aid
              offered by universities and government schemes.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Check Eligibility
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Right */}

          <div className="space-y-6">
            {scholarships.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="text-blue-600" size={30} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}