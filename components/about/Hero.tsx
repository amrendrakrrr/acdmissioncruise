"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowRight,
  Globe,
  Users,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About AdmissionCruise
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Guiding Students
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Towards Brighter Futures
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AdmissionCruise is committed to helping students make confident
              academic decisions through trusted counselling, university
              admissions, scholarship guidance, and end-to-end support for both
              Indian and international education.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/study-abroad"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore Study Abroad
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                icon: Users,
                title: "1,500+",
                text: "Students Guided",
              },
              {
                icon: Globe,
                title: "15+",
                text: "Study Destinations",
              },
              {
                icon: Award,
                title: "100+",
                text: "Partner Universities",
              },
              {
                icon: GraduationCap,
                title: "Expert",
                text: "Admission Counselling",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon
                      className="text-blue-600"
                      size={30}
                    />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}