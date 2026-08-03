"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Trophy,
  Users,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Student First",
    description:
      "Every recommendation we make is focused on helping students achieve their academic and career goals.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We provide honest, transparent, and ethical guidance throughout the admission journey.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our counselling process using modern tools and industry knowledge.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive to deliver the highest quality admission support and student experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with students, parents, and universities to create successful outcomes.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We connect students with educational opportunities across India and around the world.",
  },
];

export default function Values() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Core Values
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            The Principles That Guide Everything We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AdmissionCruise is built on trust, transparency, and a commitment to
            helping students make confident educational decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}