"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Map() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Visit Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Find Our Office
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Visit our office or connect with us online. Our counsellors are
            available to guide you throughout your admission journey.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Office Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <MapPin size={30} className="text-blue-600" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              AdmissionCruise
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              India
              <br />
              Online counselling available across India.
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Navigation size={18} />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-lg lg:col-span-2"
          >
            <iframe
              title="AdmissionCruise Location"
              src="https://www.google.com/maps?q=India&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}