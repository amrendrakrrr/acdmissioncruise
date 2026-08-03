"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which countries can I study in through AdmissionCruise?",
    answer:
      "We assist students with admissions to top universities in the USA, Canada, United Kingdom, Australia, Germany, Ireland, and several other popular study destinations.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes. We provide complete visa guidance including documentation, financial guidance, interview preparation, and pre-departure support.",
  },
  {
    question: "Can you help me get a scholarship?",
    answer:
      "Absolutely. Our counsellors help identify merit-based scholarships, tuition fee waivers, and financial aid opportunities offered by universities.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The timeline varies by country and university, but most applications are completed within a few weeks once all required documents are submitted.",
  },
  {
    question: "Do I need IELTS, TOEFL or PTE?",
    answer:
      "It depends on the university and country. Some universities accept alternative English proficiency tests or may even waive language requirements under specific conditions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about studying abroad with
            AdmissionCruise.
          </p>
        </div>

        {/* FAQ Items */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}