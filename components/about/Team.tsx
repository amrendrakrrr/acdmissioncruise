"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leadership = {
  ceo: {
    name: "Amrendra Yadav",
    role: "CEO & Founder",
    image: "/images/study-india/team/amrendrayadav.jpg",
    description:
      "Leading AdmissionCruise with a vision to simplify higher education through transparent counselling, trusted university partnerships and a student-first approach.",
  },

  gm: {
    name: "Pratiksha Raj",
    role: "General Manager – Admissions & Operations",
    image: "/images/study-india/team/pratiksharaj.jpg",
    description:
      "Oversees admissions operations, counsellor coordination and university partnerships while ensuring every student enjoys a transparent admission journey.",
  },

  specialists: [
    {
      name: "Devagya Singh",
      role: "Study Abroad Specialist",
      image: "/images/study-india/team/devagyasingh.jpg",
      description:
        "Helping students achieve their dream of studying abroad through counselling, scholarships, university applications and visa guidance.",
    },

    {
      name: "Deepak Daksh",
      role: "Student Success Manager",
      image: "/images/study-india/team/deepakdaksh.jpg",
      description:
        "Supporting students from counselling to admission, documentation and successful enrolment.",
    },
  ],
};

export default function Team(): import("react").JSX.Element {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Leadership
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Meet the Experts Behind AdmissionCruise
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dedicated professionals committed to guiding students toward the
            right academic opportunities with transparency, expertise and
            personalised support.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div className="relative h-[680px] w-full rounded-l-[32px] bg-gradient-to-br from-slate-50 to-blue-50">
              <Image
                    src={leadership.ceo.image}
                    alt={leadership.ceo.name}
                    fill
                   priority
                   fetchPriority="high"
                   sizes="(max-width: 1024px) 100vw, 600px"
                   className="object-contain transition duration-500 hover:scale-105"
                   />
            </div>

            <div className="p-8 lg:p-14">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                Leadership
              </span>

              <h3 className="mt-6 text-5xl font-bold text-slate-900">
                {leadership.ceo.name}
              </h3>

              <p className="mt-3 text-2xl font-semibold text-blue-600">
                {leadership.ceo.role}
              </p>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                {leadership.ceo.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6">
                  <h4 className="text-lg font-bold text-slate-900">
                    Vision
                  </h4>

                  <p className="mt-2 text-slate-600">
                    Making quality education accessible through trusted guidance.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <h4 className="text-lg font-bold text-slate-900">
                    Leadership
                  </h4>

                  <p className="mt-2 text-slate-600">
                    Building long-term partnerships with universities across India and abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* General Manager */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg"
        >
          <div className="grid items-center gap-8 lg:grid-cols-5">

            <div className="order-2 p-5 lg:order-1 lg:col-span-3 lg:p-8">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                Operations Leadership
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                {leadership.gm.name}
              </h3>

              <p className="mt-3 text-lg font-semibold text-blue-600">
                {leadership.gm.role}
              </p>

              <p className="mt-5 text-lg leading-6 text-slate-600">
                {leadership.gm.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h4 className="font-bold text-slate-900">Admissions</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Student Guidance
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h4 className="font-bold text-slate-900">Operations</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Process Management
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <h4 className="font-bold text-slate-900">Partnerships</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    University Relations
                  </p>
                </div>

              </div>

            </div>

            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="relative h-[400px] w-full bg-gradient-to-br from-slate-50 to-blue-50">
                <Image
                  src={leadership.gm.image}
                  alt={leadership.gm.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-6 transition duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </motion.div>
        {/* Specialists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mb-10 text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Our Experts
            </span>

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              Dedicated Professionals
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Our experts provide complete support from choosing the right
              university to successful admission and beyond.
            </p>

          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

            {leadership.specialists.map((member, index) => (

              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-6">

                  <div className="relative h-[360px] w-[300px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="300px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                </div>

                <div className="p-5 text-center">

                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-base font-semibold text-blue-600">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {member.description}
                  </p>

                  <div className="mt-5 flex flex-wrap justify-center gap-2">

                    {member.role === "Study Abroad Specialist" ? (
                      <>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Scholarships
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Visa Guidance
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Applications
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Documentation
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Student Support
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Admission Tracking
                        </span>
                      </>
                    )}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}