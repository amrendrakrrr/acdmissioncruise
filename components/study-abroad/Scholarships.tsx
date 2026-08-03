"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgePercent,
  Landmark,
  Wallet,
  ArrowRight,
} from "lucide-react";

const scholarships = [
  {
    icon: Award,
    title: "Merit Scholarships",
    description:
      "Receive scholarships based on academic excellence, entrance exam scores, and extracurricular achievements.",
  },
  {
    icon: BadgePercent,
    title: "Tuition Fee Waivers",
    description:
      "Many universities offer partial or full tuition fee waivers for eligible international students.",
  },
  {
    icon: Landmark,
    title: "Government Funding",
    description:
      "Explore scholarships and grants offered by governments and international organisations.",
  },
  {
    icon: Wallet,
    title: "Education Loan Guidance",
    description:
      "Get assistance with education loans, financial planning, and documentation for overseas education.",
  },
];

export default function Scholarships() {
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
              Make Your Overseas Education Affordable
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help students discover scholarships, tuition fee waivers,
              financial aid, and education loan options to reduce the cost of
              studying abroad.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Explore Scholarships
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Right */}

          <div className="grid gap-6">
            {scholarships.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon
                      className="text-blue-600"
                      size={30}
                    />
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