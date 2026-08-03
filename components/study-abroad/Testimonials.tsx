"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    country: "Canada 🇨🇦",
    university: "University of Toronto",
    course: "Master of Computer Science",
    review:
      "AdmissionCruise guided me throughout the admission and visa process. Their team made studying abroad simple and stress-free.",
  },
  {
    name: "Ananya Gupta",
    country: "United Kingdom 🇬🇧",
    university: "University of Oxford",
    course: "MBA",
    review:
      "From university selection to scholarship guidance, every step was handled professionally. I highly recommend AdmissionCruise.",
  },
  {
    name: "Rohan Verma",
    country: "Australia 🇦🇺",
    university: "University of Melbourne",
    course: "Bachelor of Engineering",
    review:
      "The counsellors were always available to answer my questions. My visa process was completed smoothly and on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Student Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Hear From Our Students
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover how AdmissionCruise has helped students achieve their
            dream of studying abroad.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote
                className="mb-6 text-blue-600"
                size={42}
              />

              <div className="mb-5 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-600">
                "{student.review}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {student.name}
                </h3>

                <p className="mt-1 font-medium text-blue-600">
                  {student.course}
                </p>

                <p className="text-slate-500">
                  {student.university}
                </p>

                <p className="mt-1 text-sm font-medium">
                  {student.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}