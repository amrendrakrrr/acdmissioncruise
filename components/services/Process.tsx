"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileCheck,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Counselling",
    description:
      "Speak with our experienced counsellors to discuss your academic goals, interests, and budget.",
  },
  {
    icon: Search,
    step: "02",
    title: "University Selection",
    description:
      "Choose the best universities and courses based on your profile, preferences, and career aspirations.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Application & Documentation",
    description:
      "We assist with applications, document verification, SOPs, LORs, scholarships, and visa documentation.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Admission Confirmation",
    description:
      "Receive your admission offer and complete the enrollment process with our continued support.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Ongoing Support",
    description:
      "Even after admission, we continue to guide you with travel, accommodation, and pre-departure assistance.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Your Admission Journey in 5 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We simplify the admission process with personalised guidance at
            every stage—from your first consultation to your final enrollment.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-md transition hover:shadow-xl md:flex-row md:items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Icon size={34} className="text-blue-600" />
                </div>

                <div className="flex-1">
                  <span className="text-sm font-bold tracking-widest text-blue-600">
                    STEP {step.step}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>

                <div className="text-5xl font-extrabold text-blue-100">
                  {step.step}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}