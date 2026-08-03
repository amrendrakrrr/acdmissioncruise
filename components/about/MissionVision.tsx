"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Our Purpose Drives Every Student's Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At AdmissionCruise, our goal is to make quality education more
            accessible by providing honest guidance, expert counselling, and
            complete admission support.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-blue-100 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
              <Target size={38} className="text-blue-600" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              To empower students by simplifying the admission process and
              helping them choose the right universities, courses, and career
              opportunities through transparent, ethical, and personalised
              counselling.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Personalised career guidance",
                "Transparent admission support",
                "Scholarship assistance",
                "End-to-end counselling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <Eye size={38} />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              To become one of India's most trusted education consultancy
              platforms by connecting students with quality educational
              opportunities across India and around the world.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Global education opportunities",
                "Trusted student-first approach",
                "Innovation in counselling",
                "Lifelong learning support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}