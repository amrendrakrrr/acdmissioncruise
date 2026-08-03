"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileCheck,
  PlaneTakeoff,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Free Counselling",
    description:
      "Speak with our overseas education experts to identify the best country, university, and programme for your goals.",
  },
  {
    icon: Search,
    title: "University Shortlisting",
    description:
      "Compare universities based on rankings, tuition fees, scholarships, career opportunities, and eligibility.",
  },
  {
    icon: FileCheck,
    title: "Application & Offer Letter",
    description:
      "Complete your applications with our guidance and receive admission offers from your preferred universities.",
  },
  {
    icon: PlaneTakeoff,
    title: "Visa & Departure",
    description:
      "Get complete visa assistance, accommodation support, travel guidance, and pre-departure orientation.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Admission Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Your Study Abroad Journey in 4 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From choosing the right university to flying abroad, we guide you
            through every stage of your international education journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mt-6 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={36}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}