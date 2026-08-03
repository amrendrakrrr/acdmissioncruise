"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is MBBS abroad valid in India?",
    answer:
      "Yes. MBBS degrees from NMC-recognized universities are valid in India. Graduates must comply with the latest NMC regulations and licensing requirements applicable at the time of practice.",
  },
  {
    question: "What is the eligibility for studying MBBS abroad?",
    answer:
      "Generally, students must have completed 10+2 with Physics, Chemistry, and Biology. Eligibility criteria may vary by country and university, and NEET qualification may be required as per Indian regulations.",
  },
  {
    question: "How much does MBBS abroad cost?",
    answer:
      "The total cost depends on the country and university. Tuition fees generally start from around ₹3 lakh per year, while living expenses vary based on the destination.",
  },
  {
    question: "Do I need IELTS or TOEFL?",
    answer:
      "Many universities offering MBBS abroad do not require IELTS or TOEFL. However, admission requirements differ between universities and countries.",
  },
  {
    question: "Can I work while studying MBBS abroad?",
    answer:
      "Part-time work opportunities depend on the country's student visa rules and the university's policies. Always verify the latest regulations before planning employment.",
  },
  {
    question: "Does AdmissionCruise provide complete admission support?",
    answer:
      "Yes. AdmissionCruise assists with counselling, university selection, applications, documentation, admission letters, visa guidance, travel planning, and pre-departure support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Here are answers to some of the most common questions students ask
            before applying for MBBS abroad.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

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
                    >
                      <div className="border-t border-slate-100 px-6 pb-6 pt-5">
                        <p className="leading-8 text-slate-600">
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