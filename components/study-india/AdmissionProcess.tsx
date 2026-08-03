"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  FileCheck2,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Course",
    description:
      "Explore universities and select the course that matches your career goals and interests.",
  },
  {
    icon: MessageCircle,
    title: "Free Expert Counselling",
    description:
      "Talk to our admission experts to understand eligibility, fees, scholarships, and career opportunities.",
  },
  {
    icon: FileCheck2,
    title: "Application & Documentation",
    description:
      "Submit your application and required documents. We'll guide you through every step of the admission process.",
  },
  {
    icon: GraduationCap,
    title: "Admission Confirmed",
    description:
      "Receive your admission confirmation and begin your journey toward a successful future.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Admission Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Get Admitted in 4 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We make university admissions simple, transparent and hassle-free.
            Our experts guide you throughout the complete admission journey.
          </p>
        </div>

        {/* Timeline */}
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
                <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
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