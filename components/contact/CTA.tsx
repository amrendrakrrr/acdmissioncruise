"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Ready to Get Started?
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-6xl">
            Let's Turn Your Dream
            <br />
            Into Reality
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you're planning to study in India or abroad, our admission
            experts are ready to guide you at every step.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/917909004266"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </Link>

            <Link
              href="tel:+917909004266"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              <PhoneCall size={20} />
              Call Now
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold">1500+</h3>
              <p className="mt-2 text-blue-100">Students Guided</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="mt-2 text-blue-100">Partner Universities</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24 hrs</h3>
              <p className="mt-2 text-blue-100">Average Response Time</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>info@admissioncruise.com</span>
            </div>

            <Link
              href="/study-abroad"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:underline"
            >
              Explore Study Abroad
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}