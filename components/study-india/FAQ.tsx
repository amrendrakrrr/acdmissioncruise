"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can AdmissionCruise help me?",
    answer:
      "AdmissionCruise provides expert counselling, university shortlisting, application assistance, documentation support, scholarship guidance, and end-to-end admission assistance.",
  },
  {
    question: "Is the counselling session free?",
    answer:
      "Yes. Our initial counselling session is completely free and helps you understand the best universities and courses according to your profile.",
  },
  {
    question: "Can you help with scholarships?",
    answer:
      "Absolutely. We help students identify merit-based scholarships, university fee waivers, and government scholarship opportunities.",
  },
  {
    question: "Which universities do you work with?",
    answer:
      "We work with 500+ reputed universities across India offering Engineering, Management, Medical, Law, Computer Science, Arts, and many other programmes.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The timeline depends on the university, but most admissions are completed within a few days after successful document verification and fee submission.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FAQs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know about admissions, counselling,
            scholarships and our services.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
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

              <AnimatePresence>

                {open === index && (

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