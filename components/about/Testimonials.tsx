"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech Student",
    review:
      "AdmissionCruise made my admission process incredibly smooth. Their counsellors guided me at every step, from university selection to final admission.",
  },
  {
    name: "Priya Verma",
    course: "MBA Aspirant",
    review:
      "The team was professional, transparent, and always available to answer my questions. I received excellent guidance for scholarships and admissions.",
  },
  {
    name: "Aman Singh",
    course: "Study Abroad Student",
    review:
      "From applications to visa assistance, everything was handled professionally. I highly recommend AdmissionCruise to anyone planning to study abroad.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Student Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            What Our Students Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The trust and success of our students inspire us to continue
            delivering the best admission guidance and counselling.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote className="mb-6 text-blue-600" size={40} />

              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="text-blue-600 font-medium">
                  {testimonial.course}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}