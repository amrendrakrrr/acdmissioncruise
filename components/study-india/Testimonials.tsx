"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech Student",
    university: "Lovely Professional University",
    review:
      "AdmissionCruise made my admission process extremely smooth. The counselling team guided me at every step and helped me choose the right university.",
  },
  {
    name: "Priya Verma",
    course: "MBA Student",
    university: "Chandigarh University",
    review:
      "From university selection to document verification, everything was handled professionally. I highly recommend AdmissionCruise.",
  },
  {
    name: "Aman Singh",
    course: "BCA Student",
    university: "Sharda University",
    review:
      "The scholarship guidance saved me a significant amount on tuition fees. The team was supportive throughout the admission journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            What Our Students Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Thousands of students have trusted AdmissionCruise to achieve their
            academic goals. Here's what some of them have to say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote className="mb-6 text-blue-600" size={42} />

              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-blue-600 font-medium">
                  {item.course}
                </p>

                <p className="text-slate-500">
                  {item.university}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}