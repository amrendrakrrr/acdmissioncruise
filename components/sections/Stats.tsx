"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  University,
  Globe2,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "1,500+",
    label: "Students Guided",
  },
  {
    icon: University,
    number: "500+",
    label: "Universities",
  },
  {
    icon: Globe2,
    number: "30+",
    label: "Countries",
  },
  {
    icon: Award,
    number: "98%",
    label: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center text-white">

          <span className="bg-white/20 px-5 py-2 rounded-full font-semibold">
            Our Achievements
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Numbers That Build Trust
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Thousands of students have trusted AdmissionCruise
            for their higher education journey.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 text-center text-white shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-2xl">
                    <Icon size={36} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold">
                  {item.number}
                </h3>

                <p className="mt-3 text-blue-100">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}