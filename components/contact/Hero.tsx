"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 lg:py-32">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact AdmissionCruise
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Let's Build Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Academic Future
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you're planning to study in India or abroad, our expert
            counsellors are here to guide you from course selection to final
            admission.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/917909004266"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Link>

            <Link
              href="tel:+917909004266"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
            >
              <PhoneCall size={20} />
              Call Now
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <PhoneCall size={18} className="text-blue-600" />
              <span>+91 7909004266</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} className="text-blue-600" />
              <span>info@admissioncruise.com</span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowRight size={18} className="text-blue-600" />
              <span>Free Career Counselling</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}