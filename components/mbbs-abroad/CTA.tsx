"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-24">
      {/* Background Effects */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur"
        >
          🎓 Start Your MBBS Journey Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl"
        >
          Get Free Expert Guidance
          <span className="block text-cyan-200">
            From AdmissionCruise
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100"
        >
          Our experienced counsellors will help you choose the right
          country, medical university, understand the admission process,
          assist with documentation, visa guidance, and support you until
          you begin your MBBS abroad.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Book Free Counselling
            <ArrowRight size={20} />
          </Link>

          <a
            href="https://wa.me/917909004266"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <Phone className="mx-auto mb-4" size={34} />
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="mt-2 text-blue-100">
              +91 7909004266
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <Mail className="mx-auto mb-4" size={34} />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-2 break-all text-blue-100">
              info@admissioncruise.com
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
            <MessageCircle className="mx-auto mb-4" size={34} />
            <h3 className="text-xl font-bold">Response Time</h3>
            <p className="mt-2 text-blue-100">
              Usually within 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}