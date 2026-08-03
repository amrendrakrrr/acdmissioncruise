"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  IndianRupee,
  Globe2,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Building2,
  Users,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Affordable Tuition Fees",
    description:
      "Study MBBS at internationally recognized universities with tuition fees significantly lower than many private medical colleges.",
  },
  {
    icon: Globe2,
    title: "Globally Recognised Degrees",
    description:
      "Earn degrees accepted by NMC, WHO, ECFMG and other international medical bodies, opening opportunities worldwide.",
  },
  {
    icon: GraduationCap,
    title: "English-Medium Programs",
    description:
      "Most partner universities offer complete MBBS courses in English, making learning easier for international students.",
  },
  {
    icon: Stethoscope,
    title: "Excellent Clinical Exposure",
    description:
      "Gain practical experience through affiliated teaching hospitals with modern laboratories and healthcare facilities.",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description:
      "Study with updated medical curricula, advanced research opportunities, and technology-enabled classrooms.",
  },
  {
    icon: Building2,
    title: "World-Class Infrastructure",
    description:
      "Experience modern campuses equipped with digital libraries, simulation labs, hostels, and research centres.",
  },
  {
    icon: BadgeCheck,
    title: "Simple Admission Process",
    description:
      "AdmissionCruise assists you throughout documentation, university applications, admission letters, and visa processing.",
  },
  {
    icon: Users,
    title: "Dedicated Student Support",
    description:
      "Receive complete guidance before departure and continued support throughout your academic journey abroad.",
  },
];

export default function WhyStudyMBBS() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose MBBS Abroad?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Build a Successful Medical Career
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Studying MBBS abroad offers quality education, global exposure,
            affordable tuition fees, and internationally recognised medical
            qualifications. AdmissionCruise helps you choose the right
            university and supports you throughout the admission process.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center text-white lg:p-14">
          <h3 className="text-3xl font-bold">
            Your Journey to Becoming a Doctor Starts Here
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            From selecting the right medical university to visa assistance,
            travel guidance, accommodation support, and post-arrival help,
            AdmissionCruise provides end-to-end assistance for your MBBS
            abroad journey.
          </p>
        </div>
      </div>
    </section>
  );
}