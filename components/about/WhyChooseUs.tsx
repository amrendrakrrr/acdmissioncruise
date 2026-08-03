"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Award,
  Users,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Admission Counselling",
    description:
      "Receive one-to-one guidance from experienced counsellors to choose the right course and university.",
  },
  {
    icon: Globe2,
    title: "India & Study Abroad",
    description:
      "Explore top universities across India as well as leading destinations like the USA, UK, Canada, Australia, Germany, and more.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Get assistance in finding scholarships, tuition fee waivers, and financial aid opportunities.",
  },
  {
    icon: Users,
    title: "Personalised Support",
    description:
      "Every student receives customised counselling based on academic goals, interests, and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "We believe in ethical counselling with complete transparency at every stage of the admission journey.",
  },
  {
    icon: Headphones,
    title: "End-to-End Assistance",
    description:
      "From counselling to applications, documentation, visas, and final admission—we stay with you throughout the journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose AdmissionCruise
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Everything You Need for a Successful Admission
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine expert counselling, trusted university partnerships,
            and personalised guidance to help every student make confident
            academic decisions.
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