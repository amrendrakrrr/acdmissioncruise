"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileText,
  CheckCircle2,
  Stamp,
  Plane,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Free Counselling",
    description:
      "Discuss your career goals with our expert counsellors and receive personalized guidance.",
  },
  {
    icon: Search,
    title: "University Selection",
    description:
      "Choose the best medical university based on your budget, eligibility, and career aspirations.",
  },
  {
    icon: FileText,
    title: "Application & Documentation",
    description:
      "Complete your application and submit all required academic and personal documents.",
  },
  {
    icon: CheckCircle2,
    title: "Admission Letter",
    description:
      "Receive your official admission letter from your selected medical university.",
  },
  {
    icon: Stamp,
    title: "Visa Assistance",
    description:
      "Our experts assist with visa documentation, interview preparation, and approvals.",
  },
  {
    icon: Plane,
    title: "Travel & Departure",
    description:
      "Receive complete pre-departure guidance, travel planning, accommodation, and airport assistance.",
  },
  {
    icon: GraduationCap,
    title: "Start Your MBBS Journey",
    description:
      "Arrive at your university and begin your medical education with ongoing student support.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Admission Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Your MBBS Abroad Journey in 7 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AdmissionCruise simplifies every stage of your admission process,
            ensuring a smooth transition from counselling to university
            enrollment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-blue-100 lg:block" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="relative flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-start"
                >
                  {/* Step Number & Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Icon size={26} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                        Step {index + 1}
                      </span>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="leading-8 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Card */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            We Handle the Process, You Focus on Your Dream
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            From counselling and documentation to visa processing and
            post-arrival assistance, AdmissionCruise is with you every step
            of the way.
          </p>
        </div>
      </div>
    </section>
  );
}