"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the counselling session free?",
    answer:
      "Yes. AdmissionCruise offers a free initial counselling session to help you choose the right course, university, and career path.",
  },
  {
    question: "Can you help with both India and Abroad admissions?",
    answer:
      "Absolutely. We provide complete admission guidance for universities in India as well as top international destinations including the USA, UK, Canada, Australia, Germany, Ireland, and more.",
  },
  {
    question: "Do you provide scholarship guidance?",
    answer:
      "Yes. Our experts help students explore merit scholarships, tuition fee waivers, financial aid opportunities, and education loan options.",
  },
  {
    question: "How can I contact AdmissionCruise?",
    answer:
      "You can reach us by phone, WhatsApp, email, or by submitting the enquiry form on this page. Our team will get back to you as soon as possible.",
  },
  {
    question: "How soon will I receive a response?",
    answer:
      "We usually respond within 24 hours, and often much sooner during business hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Got Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the questions students ask us most often.
          </p>
        </div>

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
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
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