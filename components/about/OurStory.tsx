"use client";

import { motion } from "framer-motion";
import { Target, Rocket, GraduationCap, Globe } from "lucide-react";

const milestones = [
  {
    icon: Rocket,
    year: "Our Beginning",
    title: "AdmissionCruise Started",
    description:
      "Founded with the vision of simplifying higher education admissions and helping students make informed academic decisions.",
  },
  {
    icon: GraduationCap,
    year: "Growing Network",
    title: "University Partnerships",
    description:
      "Expanded collaborations with leading universities across India and international study destinations.",
  },
  {
    icon: Globe,
    year: "Global Expansion",
    title: "Study Abroad Services",
    description:
      "Introduced comprehensive overseas admission support, including university applications, scholarships, and visa guidance.",
  },
  {
    icon: Target,
    year: "Today",
    title: "Student-Centric Approach",
    description:
      "Continuing to guide students with transparent counselling, personalised support, and career-focused admission solutions.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Helping Students Build Successful Futures
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              AdmissionCruise was established with a simple mission—to make the
              admission process transparent, accessible, and stress-free for
              every student.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether it's choosing the right university, securing
              scholarships, applying abroad, or receiving complete admission
              support, we believe every student deserves reliable guidance from
              experienced professionals.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Today, AdmissionCruise continues to help aspiring students explore
              educational opportunities with confidence, clarity, and expert
              mentorship.
            </p>
          </motion.div>

          {/* Right Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon size={30} className="text-blue-600" />
                  </div>

                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}