"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is AdmissionCruise counselling free?",
    answer:
      "Yes. We provide an initial counselling session to understand your academic goals, preferred course, budget, and career aspirations.",
  },
  {
    question: "Do you help with Study Abroad admissions?",
    answer:
      "Absolutely. We assist with university selection, applications, SOPs, scholarships, visa guidance, and pre-departure support.",
  },
  {
    question: "Can you help me get a scholarship?",
    answer:
      "Yes. Our counsellors help identify scholarships and financial aid opportunities offered by universities and other organisations.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We assist students planning to study in countries such as the USA, UK, Canada, Australia, Germany, Ireland, New Zealand, and several other destinations.",
  },
  {
    question: "Do you provide admission support for Indian universities?",
    answer:
      "Yes. We help students secure admissions to leading Central, State, Private, and Deemed Universities across India.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our website, WhatsApp, or phone. Our counsellors will guide you through the complete admission process step by step.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Have Questions? We've Got Answers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our counselling,
            admissions, scholarships, and study abroad services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-200 px-6 py-5">
                  <p className="leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}