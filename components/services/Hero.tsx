"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Our Services
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Complete Admission
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Solutions Under One Roof
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From university selection and career counselling to scholarships,
              education loans, visa support, and final admission—we help you
              at every stage of your educational journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Free Counselling
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/study-abroad"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <GraduationCap className="text-blue-600" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                100+
              </h3>

              <p className="mt-2 text-slate-600">
                Partner Universities
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <BriefcaseBusiness className="text-blue-600" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                End-to-End
              </h3>

              <p className="mt-2 text-slate-600">
                Admission Assistance
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl sm:col-span-2 transition hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-slate-900">
                Why Choose AdmissionCruise?
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We provide transparent counselling, personalised guidance,
                scholarship assistance, and complete admission support for
                students planning to study in India or abroad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}