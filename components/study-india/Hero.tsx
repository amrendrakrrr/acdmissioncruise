"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">

              <Star
                className="fill-yellow-400 text-yellow-400"
                size={16}
              />

              <span className="text-sm font-medium text-slate-700">
                Trusted by 1,500+ Students
              </span>

            </div>

            {/* Heading */}

            <div>

              <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">

                Study in

                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

                  India's Top

                </span>

                Universities

              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">

                Explore India's leading universities,
                compare courses,
                discover scholarships and receive expert
                admission guidance for a successful academic journey.

              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Link
                href="/universities"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Universities
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                Book Free Counselling
              </Link>

            </div>{/* Features */}

            <div className="flex flex-wrap gap-6">

              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={18} />
                <span className="font-medium">
                  500+ Universities
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={18} />
                <span className="font-medium">
                  100+ Courses
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={18} />
                <span className="font-medium">
                  Scholarship Assistance
                </span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Main Card */}

            <div className="relative overflow-hidden rounded-[36px] bg-white p-8 shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-cyan-100/40" />

              <div className="relative flex h-[500px] flex-col items-center justify-center">

                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl">

                  <GraduationCap size={56} />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  Start Your Dream Career
                </h3>

                <p className="mt-4 max-w-sm text-center leading-7 text-slate-600">
                  Get personalised counselling, university shortlisting,
                  admission guidance and scholarship support from experts.
                </p>{/* Floating Card - Students */}

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-0 top-8 rounded-2xl bg-white p-5 shadow-xl"
                >
                  <p className="text-3xl font-bold text-blue-600">
                    1,500+
                  </p>

                  <p className="text-sm text-slate-600">
                    Students Guided
                  </p>
                </motion.div>

                {/* Floating Card - Universities */}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute right-0 top-24 rounded-2xl bg-white p-5 shadow-xl"
                >
                  <p className="text-3xl font-bold text-cyan-600">
                    500+
                  </p>

                  <p className="text-sm text-slate-600">
                    Partner Universities
                  </p>
                </motion.div>

                {/* Floating Card - Success */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 left-12 rounded-2xl bg-white p-5 shadow-xl"
                >
                  <p className="text-3xl font-bold text-green-600">
                    95%
                  </p>

                  <p className="text-sm text-slate-600">
                    Admission Success
                  </p>
                </motion.div>

              </div>

            </div></motion.div>

        </div>

      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}