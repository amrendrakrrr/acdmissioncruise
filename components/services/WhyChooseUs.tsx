"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Globe2,
  Award,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "Receive honest, transparent, and ethical counselling throughout your admission journey.",
  },
  {
    icon: Users,
    title: "Experienced Counsellors",
    description:
      "Our expert team helps students choose the right universities and career paths.",
  },
  {
    icon: Globe2,
    title: "India & Abroad",
    description:
      "Explore admission opportunities across India and leading international destinations.",
  },
  {
    icon: Award,
    title: "Scholarship Support",
    description:
      "Get expert assistance in identifying and applying for scholarships and financial aid.",
  },
  {
    icon: Clock3,
    title: "Fast Process",
    description:
      "We simplify applications, documentation, and admissions to save you valuable time.",
  },
  {
    icon: BadgeCheck,
    title: "End-to-End Assistance",
    description:
      "From counselling to enrollment, our team supports you at every stage of your educational journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Your Trusted Education Partner
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AdmissionCruise combines expert counselling, trusted university
            partnerships, and personalised support to help students make
            confident academic decisions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
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