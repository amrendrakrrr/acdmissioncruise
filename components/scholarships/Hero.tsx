"use client";

import Link from "next/link";
import {
  Search,
  ArrowRight,
  Award,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
        <span className="inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
          Scholarships & Financial Aid
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
          Turn Your Dream
          <span className="block text-cyan-200">
            Into an Affordable Education
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Explore scholarships from universities, governments, and
          organizations. Our experts help you identify the right opportunities
          and maximize your chances of receiving financial assistance.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-4 rounded-2xl bg-white p-3 shadow-2xl md:flex-row">
          <div className="flex flex-1 items-center gap-3 px-4">
            <Search className="text-slate-400" size={22} />
            <input
              type="text"
              placeholder="Search scholarships..."
              className="w-full bg-transparent py-3 text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 hover:scale-105 transition"
          >
            Get Free Guidance
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/universities"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
          >
            <GraduationCap size={20} />
            Explore Universities
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <Award className="mx-auto mb-4" size={38} />
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2 text-blue-100">
              Scholarship Opportunities
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <IndianRupee className="mx-auto mb-4" size={38} />
            <h3 className="text-4xl font-bold">₹10 Cr+</h3>
            <p className="mt-2 text-blue-100">
              Scholarship Value
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <GraduationCap className="mx-auto mb-4" size={38} />
            <h3 className="text-4xl font-bold">1500+</h3>
            <p className="mt-2 text-blue-100">
              Students Guided
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}