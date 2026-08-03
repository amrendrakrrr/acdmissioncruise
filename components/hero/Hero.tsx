"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-white to-[#EAF4FF]">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 h-60 w-60 rounded-full bg-indigo-300/20 blur-[120px]" />

      {/* World Map */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/world-map.png"
          alt="World Map"
          width={1700}
          height={900}
          priority
          className="h-auto w-[95%] object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-5 py-12 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row xl:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="-mt-16 w-full lg:w-1/2"
          >
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-7 py-3 text-lg font-bold text-[#0A2A88] shadow-xl">
              ⭐ Trusted by 1,500+ Students
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl xl:text-7xl">
              Navigate
              <br />
              <span className="bg-gradient-to-r from-[#0A2A88] to-[#2DA8FF] bg-clip-text text-transparent">
                Your Future
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Get expert admission guidance for India's Top Government,
              Central, Private Universities and Study Abroad Programs.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
href="/#apply-form"
scroll={true}                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#0A2A88] via-[#1E88E5] to-[#2DA8FF] px-10 py-4 text-lg font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(30,136,229,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_40px_rgba(30,136,229,0.45)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Apply Now
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                href="/universities"
                className="rounded-full border-2 border-[#0A2A88] px-8 py-4 font-semibold text-[#0A2A88] transition hover:bg-[#0A2A88] hover:text-white"
              >
                Explore Universities
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["500+", "Universities"],
                ["1.5K+", "Students"],
                ["98%", "Success Rate"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl bg-white/90 p-5 text-center shadow-xl backdrop-blur-lg"
                >
                  <h3 className="text-2xl font-bold text-[#0A2A88] sm:text-3xl">
                    {value}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex w-full justify-center lg:w-1/2 lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 rounded-2xl bg-white px-5 py-3 font-semibold shadow-xl">
                🎓 Expert Guidance
              </div>

              <div className="absolute bottom-8 -right-4 rounded-2xl bg-white px-5 py-3 font-semibold shadow-xl">
                🌍 Study Abroad
              </div>

              <Image
                src="/student.png"
                alt="Student"
                width={500}
                height={625}
                priority
                className="h-auto w-[300px] rounded-[35px] shadow-2xl sm:w-[350px] md:w-[380px] lg:w-[400px] xl:w-[460px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}