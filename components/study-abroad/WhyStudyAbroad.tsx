"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Briefcase,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Plane,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Exposure",
    description:
      "Experience diverse cultures, international networking opportunities, and a truly global learning environment.",
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description:
      "Study at globally recognised universities with modern campuses, expert faculty, and industry-focused programmes.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description:
      "Improve your employability through international internships, industry connections, and globally valued degrees.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description:
      "Receive complete guidance for visa applications, interviews, travel preparation, and pre-departure support.",
  },
  {
    icon: Landmark,
    title: "Scholarships",
    description:
      "Explore merit-based scholarships, tuition fee waivers, and financial aid to make overseas education affordable.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    description:
      "From counselling to university selection, applications, visa filing, accommodation, and travel—we're with you throughout.",
  },
];

export default function WhyStudyAbroad() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Study Abroad?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Benefits of Studying Abroad
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Gain a globally recognised education, build an international
            network, and unlock exciting career opportunities with expert
            guidance from AdmissionCruise.
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