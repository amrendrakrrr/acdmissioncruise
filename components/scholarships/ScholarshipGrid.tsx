"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

const scholarships = [
  {
    title: "Merit Excellence Scholarship",
    provider: "AdmissionCruise Partner Universities",
    amount: "Up to ₹2,00,000",
    eligibility: "80%+ in Previous Qualification",
    deadline: "31 August",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Need-Based Financial Aid",
    provider: "Partner Universities",
    amount: "Up to 100% Tuition Fee",
    eligibility: "Income-Based Eligibility",
    deadline: "15 September",
    color: "from-emerald-600 to-green-500",
  },
  {
    title: "International Student Scholarship",
    provider: "Global Universities",
    amount: "Up to ₹10,00,000",
    eligibility: "Study Abroad Applicants",
    deadline: "30 September",
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Women in STEM Scholarship",
    provider: "Leading Universities",
    amount: "Up to ₹5,00,000",
    eligibility: "Female STEM Students",
    deadline: "15 October",
    color: "from-pink-600 to-rose-500",
  },
  {
    title: "Sports Excellence Scholarship",
    provider: "Sports Partner Institutions",
    amount: "Up to 100% Tuition Fee",
    eligibility: "National / State Level Players",
    deadline: "31 October",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Research & Innovation Grant",
    provider: "International Universities",
    amount: "Up to ₹8,00,000",
    eligibility: "PG & Research Students",
    deadline: "15 November",
    color: "from-slate-700 to-slate-900",
  },
];

export default function ScholarshipGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Featured Scholarships
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Find the Right Scholarship
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore scholarships that can reduce your education costs and help
            you achieve your academic goals with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${scholarship.color} p-8 text-white`}
              >
                <h3 className="text-2xl font-bold">
                  {scholarship.title}
                </h3>

                <p className="mt-2 text-white/90">
                  {scholarship.provider}
                </p>
              </div>

              {/* Body */}
              <div className="space-y-5 p-8">
                <div className="flex items-center gap-3">
                  <IndianRupee
                    className="text-green-600"
                    size={20}
                  />
                  <div>
                    <p className="text-sm text-slate-500">
                      Scholarship Amount
                    </p>
                    <p className="font-semibold text-slate-900">
                      {scholarship.amount}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-blue-600"
                    size={20}
                  />
                  <div>
                    <p className="text-sm text-slate-500">
                      Eligibility
                    </p>
                    <p className="font-semibold text-slate-900">
                      {scholarship.eligibility}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar
                    className="text-red-500"
                    size={20}
                  />
                  <div>
                    <p className="text-sm text-slate-500">
                      Application Deadline
                    </p>
                    <p className="font-semibold text-slate-900">
                      {scholarship.deadline}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}