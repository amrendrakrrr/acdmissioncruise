"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Start Your Journey Today
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl">
            Your Dream University
            <span className="block">Is Just One Step Away</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're planning to study in India or abroad, our expert
            counsellors are ready to help you choose the right university,
            complete your applications, and achieve your academic goals.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Get Free Counselling
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+917909004266"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall size={20} />
              Call Now
            </a>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">1500+</h3>
              <p className="mt-2 text-blue-100">Students Guided</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="mt-2 text-blue-100">Partner Universities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="mt-2 text-blue-100">Study Destinations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}