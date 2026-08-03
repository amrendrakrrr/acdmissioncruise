"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  BookOpen,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "1,500+",
    label: "Students Guided",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Partner Universities",
  },
  {
    icon: BookOpen,
    value: "100+",
    label: "Courses Available",
  },
  {
    icon: BadgeCheck,
    value: "95%",
    label: "Admission Success",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}