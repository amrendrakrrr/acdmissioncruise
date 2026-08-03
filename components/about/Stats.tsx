"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Globe2,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1500+",
    title: "Students Guided",
    description: "Students successfully counselled for higher education.",
  },
  {
    icon: GraduationCap,
    number: "100+",
    title: "Partner Universities",
    description: "Leading universities across India and abroad.",
  },
  {
    icon: Globe2,
    number: "15+",
    title: "Study Destinations",
    description: "Popular countries available for international education.",
  },
  {
    icon: Award,
    number: "95%",
    title: "Student Satisfaction",
    description: "Focused on quality guidance and personalised support.",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Numbers That Reflect Our Commitment
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Every student represents a dream, and every admission is a step
            towards building a successful future.
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                  <Icon size={38} />
                </div>

                <h3 className="text-5xl font-extrabold">
                  {item.number}
                </h3>

                <h4 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-blue-100">
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