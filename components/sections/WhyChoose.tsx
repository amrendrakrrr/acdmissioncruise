"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BadgeCheck,
  Users,
  Globe,
  BookOpen,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Counselling",
    description:
      "Personalized admission guidance from experienced education consultants.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Universities",
    description:
      "We work with reputed Government, Private and International Universities.",
  },
  {
    icon: Users,
    title: "1,500+ Students Guided",
    description:
      "Thousands of students have trusted AdmissionCruise for their future.",
  },
  {
    icon: Globe,
    title: "India & Abroad",
    description:
      "Admission support for Indian universities and international destinations.",
  },
  {
    icon: BookOpen,
    title: "Scholarship Guidance",
    description:
      "Discover scholarship opportunities and reduce your education expenses.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description:
      "Our counsellors are always ready to answer your admission queries.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Why Students Trust AdmissionCruise
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just help students get admission—we help them choose the
            right career path with honest guidance and complete support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-blue-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon size={32} className="text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
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