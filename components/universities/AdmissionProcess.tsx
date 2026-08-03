"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileText,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Career Counselling",
    description:
      "Discuss your interests, academic background, career goals, and budget with our experienced counsellors.",
  },
  {
    icon: Search,
    step: "02",
    title: "University & Course Selection",
    description:
      "Shortlist the best universities and programs based on your profile, eligibility, and future aspirations.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Application & Documentation",
    description:
      "Complete applications with expert assistance for SOPs, LORs, transcripts, and required documents.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Admission Confirmation",
    description:
      "Receive your admission offer, complete fee formalities, and secure your seat in your preferred university.",
  },
  {
    icon: GraduationCap,
    step: "05",
    title: "Visa & Enrollment Support",
    description:
      "For international admissions, receive visa guidance and pre-departure assistance. For Indian admissions, we support enrollment and onboarding.",
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
            Your Journey Starts Here
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We simplify the admission process with expert guidance at every
            stage, ensuring a smooth and stress-free experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 hidden h-full w-1 rounded-full bg-blue-100 md:block" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl md:ml-24 md:flex-row md:items-center"
                >
                  {/* Icon */}
                  <div className="absolute -left-[72px] hidden h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:flex">
                    <Icon size={30} />
                  </div>

                  {/* Mobile Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 md:hidden">
                    <Icon className="text-blue-600" size={30} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-sm font-bold tracking-widest text-blue-600">
                      STEP {step.step}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="text-5xl font-extrabold text-blue-100">
                    {step.step}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}