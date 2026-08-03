"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24">
      {/* Background Decoration */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            Start Your Journey Today
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
            Ready to Secure Admission to
            <br />
            Your Dream University?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Let AdmissionCruise guide you through university selection,
            counselling, applications, scholarships, and admissions—
            all with expert support from start to finish.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              <PhoneCall size={18} />
              Book Free Counselling
            </Link>

            <Link
              href="https://wa.me/917909004266"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              <MessageCircle size={18} />
              WhatsApp Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold text-white">1,500+</h3>
              <p className="mt-2 text-blue-100">Students Guided</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="mt-2 text-blue-100">Partner Universities</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="mt-2 text-blue-100">Admission Success</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}