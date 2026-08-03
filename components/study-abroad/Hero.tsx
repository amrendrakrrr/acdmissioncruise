"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Plane,
  ArrowRight,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
              <Globe className="text-blue-600" size={18} />
              <span className="text-sm font-medium text-slate-700">
                Study in 25+ Countries
              </span>
            </div>

            <div>
              <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Study Abroad
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Build Your Global Future
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Discover world-class universities, scholarships, visa guidance,
                and expert counselling for studying in the USA, UK, Canada,
                Australia, Germany, Ireland, and more.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Free Counselling
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/countries"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore Countries
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={18} />
                <span>500+ Universities</span>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={18} />
                <span>Scholarship Support</span>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={18} />
                <span>Visa Assistance</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] bg-white p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-cyan-100/40" />

              <div className="relative flex h-[500px] flex-col items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl">
                  <GraduationCap size={56} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  Your Journey Starts Here
                </h3>

                <p className="mt-4 max-w-sm text-center leading-7 text-slate-600">
                  Let us help you navigate the path to your dream university abroad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}