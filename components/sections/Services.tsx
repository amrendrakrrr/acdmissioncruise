"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

const services = [
  {
    icon: (
      <ReactCountryFlag
        countryCode="IN"
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
      />
    ),
    title: "Study in India",
    href: "/study-india",
    description:
      "Admission guidance for Top Government, Private and Deemed Universities.",
  },
  {
    icon: "🌍",
    title: "Study Abroad",
    href: "/study-abroad",
    description:
      "Get admission assistance for universities in international destinations.",
  },
  {
    icon: "🩺",
    title: "MBBS Abroad",
    href: "/mbbs-abroad",
    description:
      "Affordable MBBS admissions with complete documentation support.",
  },
  {
    icon: "🎓",
    title: "Scholarships",
    href: "/scholarships",
    description:
      "Find government and university scholarships for deserving students.",
  },
  {
    icon: "💰",
    title: "Education Loan",
    href: "/#apply-form",
    description:
      "Quick education loan assistance from leading financial institutions.",
  },
  {
    icon: "👨‍🏫",
    title: "Career Counselling",
    href: "/#apply-form",
    description:
      "One-to-one counselling to choose the right career and university.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#f8faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need For Admission
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            AdmissionCruise provides complete admission support from
            counselling to final admission.
          </p>
        </div>

        {/* Services */}
        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-3
            sm:mt-14
            sm:gap-5
            lg:mt-16
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                flex
                min-w-0
                h-full
                flex-col
                rounded-2xl
                border
                border-[#e1e9f5]
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:shadow-xl
                sm:rounded-3xl
                sm:p-6
                lg:p-8
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-2xl
                  shadow-sm
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  sm:h-14
                  sm:w-14
                  sm:rounded-2xl
                  sm:text-4xl
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-4
                  min-h-[40px]
                  text-sm
                  font-bold
                  leading-5
                  text-slate-900
                  sm:mt-6
                  sm:min-h-[48px]
                  sm:text-xl
                  sm:leading-6
                  lg:min-h-[56px]
                  lg:text-2xl
                  lg:leading-7
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  min-h-[60px]
                  text-xs
                  leading-5
                  text-slate-600
                  sm:mt-4
                  sm:min-h-[72px]
                  sm:text-sm
                  sm:leading-6
                  lg:min-h-[84px]
                  lg:text-base
                  lg:leading-7
                "
              >
                {service.description}
              </p>

              {/* Button */}
              <div className="mt-auto pt-4 sm:pt-6">
                <Link
                  href={service.href}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    whitespace-nowrap
                    rounded-full
                    bg-gradient-to-r
                    from-[#174da3]
                    to-[#2465c5]
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-lg
                    sm:px-5
                    sm:py-2.5
                    sm:text-sm
                  "
                >
                  Learn More
                  <span className="ml-1.5">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}