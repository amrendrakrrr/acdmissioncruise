"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, GraduationCap, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur"
        >
          Explore Top Universities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight lg:text-7xl"
        >
          Find the Right University
          <span className="block text-cyan-200">for Your Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-blue-100"
        >
          Explore top universities across India and abroad. Compare courses,
          discover admission requirements, and receive expert guidance to make
          the best decision for your academic journey.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-12 flex w-full max-w-3xl flex-col gap-4 rounded-2xl bg-white p-3 shadow-2xl md:flex-row"
        >
          <div className="flex flex-1 items-center gap-3 px-4">
            <Search className="text-slate-400" size={22} />
            <input
              type="text"
              placeholder="Search universities, courses or locations..."
              className="w-full bg-transparent py-3 text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
            Search
          </button>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Get Free Counselling
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/study-abroad"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <Globe2 size={20} />
            Study Abroad
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <GraduationCap className="mx-auto mb-4" size={36} />
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2 text-blue-100">Partner Universities</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <Globe2 className="mx-auto mb-4" size={36} />
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="mt-2 text-blue-100">Study Destinations</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <Search className="mx-auto mb-4" size={36} />
            <h3 className="text-4xl font-bold">1500+</h3>
            <p className="mt-2 text-blue-100">Students Guided</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}