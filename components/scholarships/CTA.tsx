"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail, Award } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2C8B] via-[#1E40AF] to-[#38BDF8] py-24">
      {/* Background Blur */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Unlock Your Scholarship Opportunities
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl">
            Don't Let Finances
            <span className="block text-cyan-200">
              Stop Your Education
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Our experts help you discover scholarships, prepare winning
            applications, and maximize your chances of receiving financial
            support for your education in India and abroad.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105"
            >
              Apply for Scholarships
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+917909004266"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall size={20} />
              +91 79090 04266
            </a>

            <a
              href="mailto:info@admissioncruise.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={20} />
              info@admissioncruise.com
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div>
              <Award className="mx-auto mb-4" size={38} />
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-blue-100">
                Scholarship Opportunities
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">₹10 Cr+</h3>
              <p className="mt-2 text-blue-100">
                Scholarship Value
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">1500+</h3>
              <p className="mt-2 text-blue-100">
                Students Guided
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}