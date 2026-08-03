"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  ClipboardCheck,
  Award,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Find the Right Scholarship",
    description:
      "Explore scholarships based on your academic profile, course, destination, and financial requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Check Eligibility",
    description:
      "Review academic requirements, income criteria, nationality, entrance exams, and supporting documents.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Prepare Your Application",
    description:
      "Collect transcripts, recommendation letters, statements of purpose, certificates, and other required documents.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Submit & Track",
    description:
      "Submit your application before the deadline and monitor its status with guidance from our experts.",
    icon: Award,
  },
  {
    step: "05",
    title: "Receive Your Scholarship",
    description:
      "Once approved, complete the admission process and begin your educational journey with financial support.",
    icon: GraduationCap,
  },
];

export default function ApplicationProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Application Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Apply for Scholarships in 5 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We simplify the scholarship application process so you can focus on
            achieving your academic goals while maximizing your chances of
            success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-blue-100 md:block" />

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
                  className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl md:ml-24"
                >
                  {/* Desktop Icon */}
                  <div className="absolute -left-[72px] hidden h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:flex">
                    <Icon size={30} />
                  </div>

                  {/* Mobile Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 md:hidden">
                    <Icon className="text-blue-600" size={30} />
                  </div>

                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
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

                    <div className="text-5xl font-extrabold text-blue-100">
                      {step.step}
                    </div>
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