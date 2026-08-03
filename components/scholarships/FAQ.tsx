"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply for scholarships?",
    answer:
      "Scholarships are available for students based on academic merit, financial need, sports achievements, research, leadership, and other eligibility criteria. The requirements vary by scholarship provider.",
  },
  {
    question: "Can AdmissionCruise help me find suitable scholarships?",
    answer:
      "Yes. Our counsellors evaluate your academic profile, preferred course, destination, and financial background to recommend scholarships that best match your eligibility.",
  },
  {
    question: "Are scholarships available for studying abroad?",
    answer:
      "Absolutely. Many universities, governments, and private organizations offer scholarships for international students. We guide you through identifying and applying for these opportunities.",
  },
  {
    question: "Do I need a separate application for scholarships?",
    answer:
      "It depends on the scholarship. Some are automatically considered during the admission process, while others require a separate application along with supporting documents.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Common documents include academic transcripts, identity proof, income certificate (if applicable), statement of purpose (SOP), recommendation letters, resume, and certificates of achievements.",
  },
  {
    question: "Can I apply for multiple scholarships?",
    answer:
      "Yes. In many cases, students can apply for multiple scholarships if they meet the eligibility criteria. Our counsellors can help you identify compatible opportunities.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Scholarship FAQs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Get answers to the most common questions about scholarships,
            eligibility, applications, and financial aid.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
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
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
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