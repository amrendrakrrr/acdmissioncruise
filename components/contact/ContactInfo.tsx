"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 7909004266",
    subtitle: "Mon - Sat | 9:00 AM - 7:00 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@admissioncruise.com",
    subtitle: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "India",
    subtitle: "Online counselling available across India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday - Saturday",
    subtitle: "09:00 AM - 07:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Information
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            We're Here to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Reach out to our admission experts through your preferred channel.
            We're happy to assist you with your academic journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 font-semibold text-blue-600">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://wa.me/917909004266"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
          >
            <MessageCircle size={22} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}