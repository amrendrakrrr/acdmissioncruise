"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Stethoscope,
  Landmark,
  BadgeDollarSign,
  BriefcaseBusiness,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study in India",
    description:
      "Expert admission guidance for Central, State, Private, and Deemed Universities across India.",
    href: "/study-india",
  },
  {
    icon: Globe2,
    title: "Study Abroad",
    description:
      "Complete overseas admission support including university selection and applications.",
    href: "/study-abroad",
  },
  {
    icon: Stethoscope,
    title: "MBBS Abroad",
    description:
      "Affordable MBBS admission assistance with documentation and counselling support.",
    href: "/contact",
  },
  {
    icon: Landmark,
    title: "Scholarships",
    description:
      "Discover merit-based, government, and university scholarships to reduce education costs.",
    href: "/contact",
  },
  {
    icon: BadgeDollarSign,
    title: "Education Loan",
    description:
      "Guidance for education loans from leading financial institutions with simplified documentation.",
    href: "/contact",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Counselling",
    description:
      "One-to-one counselling sessions to help students choose the right career path.",
    href: "/contact",
  },
  {
    icon: FileCheck,
    title: "Visa & Documentation",
    description:
      "End-to-end assistance with applications, documentation, SOPs, visas, and compliance.",
    href: "/contact",
  },
  {
    icon: GraduationCap,
    title: "Admission Assistance",
    description:
      "From application submission to final admission confirmation, we support every step.",
    href: "/contact",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Comprehensive Education Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AdmissionCruise provides complete admission and career guidance
            services designed to make your educational journey simple,
            transparent, and successful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}