"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Briefcase,
  Stethoscope,
  Cog,
  BrainCircuit,
  Palette,
} from "lucide-react";

const courses = [
  {
    icon: Laptop,
    title: "Computer Science & IT",
    description:
      "Software Engineering, Cyber Security, Cloud Computing, AI and Information Technology programmes.",
  },
  {
    icon: Briefcase,
    title: "Business & MBA",
    description:
      "International Business, Finance, Marketing, Entrepreneurship and MBA programmes.",
  },
  {
    icon: Stethoscope,
    title: "Medicine & Healthcare",
    description:
      "Medicine, Nursing, Public Health, Pharmacy and Allied Healthcare courses.",
  },
  {
    icon: Cog,
    title: "Engineering",
    description:
      "Mechanical, Civil, Electrical, Aerospace, Chemical and Robotics Engineering.",
  },
  {
    icon: BrainCircuit,
    title: "Data Science & AI",
    description:
      "Artificial Intelligence, Machine Learning, Data Analytics and Business Intelligence.",
  },
  {
    icon: Palette,
    title: "Arts & Design",
    description:
      "Architecture, Graphic Design, Fashion, Animation, Film and Creative Arts.",
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Popular Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Choose Your Dream Course
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore globally recognised programmes designed to prepare you for
            successful international careers.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {course.description}
                </p>

                <button className="mt-8 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}