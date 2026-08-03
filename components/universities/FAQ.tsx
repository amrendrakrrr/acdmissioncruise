"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I choose the right university?",
    answer:
      "Our expert counsellors evaluate your academic background, career goals, budget, and preferred destination to recommend the universities that best match your profile.",
  },
  {
    question: "Do you assist with admissions in Indian universities?",
    answer:
      "Yes. We help students secure admissions in Central, State, Private, and Deemed Universities across India with complete application support.",
  },
  {
    question: "Do you provide study abroad guidance?",
    answer:
      "Absolutely. We assist with university selection, applications, SOPs, LORs, scholarships, visa guidance, and pre-departure support for international education.",
  },
  {
    question: "Can you help me apply for scholarships?",
    answer:
      "Yes. Our team identifies scholarship opportunities offered by universities and guides you through the application process to improve your chances of receiving financial assistance.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The timeline varies depending on the university and country. Indian admissions may take a few weeks, while international admissions generally require several months for applications, offers, and visa processing.",
  },
  {
    question: "How do I start my admission journey?",
    answer:
      "Simply contact AdmissionCruise for a free counselling session. Our experts will guide you through every step, from choosing a university to completing your admission successfully.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about university
            admissions, scholarships, counselling, and study abroad.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={22}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-6 py-5">
                        <p className="leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}