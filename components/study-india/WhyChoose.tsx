"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Users,
  Building2,
  Headphones,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Expert Counselling",
    description:
      "Receive one-to-one guidance from experienced admission experts who help you choose the right course and university.",
  },
  {
    icon: Building2,
    title: "500+ Partner Universities",
    description:
      "Access a wide network of India's leading private, deemed, and autonomous universities.",
  },
  {
    icon: Users,
    title: "Personalised Guidance",
    description:
      "Every student receives customised admission support based on career goals, interests, and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Admission Process",
    description:
      "No hidden charges, honest counselling, and complete transparency throughout your admission journey.",
  },
  {
    icon: Headphones,
    title: "Dedicated Student Support",
    description:
      "From application submission to final admission confirmation, our team is always ready to assist you.",
  },
  {
    icon: GraduationCap,
    title: "Career-Focused Advice",
    description:
      "We help students choose future-ready programmes that match industry demand and long-term career aspirations.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Why Choose AdmissionCruise?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We simplify the admission journey with expert counselling, trusted
            university partnerships, and end-to-end support to help students
            secure admission to their dream universities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}