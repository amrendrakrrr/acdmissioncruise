"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const universities = [
  {
    name: "Delhi University",
    location: "New Delhi",
    logo: "/universities/du.png",
  },
  {
    name: "Jawaharlal Nehru University",
    location: "New Delhi",
    logo: "/universities/jnu.png",
  },
  {
    name: "Jamia Millia Islamia",
    location: "New Delhi",
    logo: "/universities/jamia.png",
  },
  {
    name: "Banaras Hindu University",
    location: "Varanasi",
    logo: "/universities/bhu.png",
  },
  {
    name: "Aligarh Muslim University",
    location: "Aligarh",
    logo: "/universities/amu.png",
  },
  {
    name: "Lovely Professional University",
    location: "Punjab",
    logo: "/universities/lpu.png",
  },
];

export default function Universities() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Top Universities
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Universities We Help You Get Into
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-7 text-slate-700 sm:text-lg">
            Admission Guidance for India's Top Government, Private &amp;
            Deemed Universities.
          </p>

        </div>

        {/* ================= UNIVERSITY GRID ================= */}
        <div
          className="
            mt-12
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
          {universities.map((university) => (
            <motion.div
              key={university.name}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-md
                transition-shadow
                duration-300
                hover:shadow-2xl
                sm:rounded-3xl
              "
            >

              {/* ================= LOGO AREA ================= */}
              <div
                className="
                  flex
                  h-32
                  w-full
                  items-center
                  justify-center
                  bg-white
                  px-3
                  pt-5
                  sm:h-44
                  sm:px-5
                  sm:pt-7
                  lg:h-52
                  lg:pt-8
                "
              >
                <div
                  className="
                    relative
                    h-20
                    w-20
                    sm:h-24
                    sm:w-24
                    lg:h-28
                    lg:w-28
                  "
                >
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    fill
                    priority
                    sizes="
                      (max-width: 640px) 80px,
                      (max-width: 1024px) 96px,
                      112px
                    "
                    className="
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>
              </div>

              {/* ================= CARD CONTENT ================= */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  px-3
                  pb-5
                  pt-2
                  text-center
                  sm:px-5
                  sm:pb-6
                  sm:pt-3
                  lg:px-7
                  lg:pb-7
                  lg:pt-4
                "
              >

                {/* University Name */}
                <h3
                  className="
                    min-h-[40px]
                    text-sm
                    font-extrabold
                    leading-5
                    text-slate-950
                    sm:min-h-[48px]
                    sm:text-lg
                    sm:leading-6
                    lg:min-h-[56px]
                    lg:text-2xl
                    lg:leading-7
                  "
                >
                  {university.name}
                </h3>

                {/* Location */}
                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-1
                    text-xs
                    font-semibold
                    text-slate-600
                    sm:mt-3
                    sm:gap-1.5
                    sm:text-sm
                  "
                >
                  <MapPin
                    size={14}
                    strokeWidth={2.5}
                    className="shrink-0 text-blue-600 sm:h-4 sm:w-4"
                  />

                  <span>{university.location}</span>
                </div>

                {/* Button */}
                <div className="mt-auto pt-4 sm:pt-5 lg:pt-6">
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      rounded-full
                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500
                      px-3
                      py-2
                      text-xs
                      font-bold
                      text-white
                      shadow-md
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-lg
                      sm:gap-2
                      sm:px-5
                      sm:py-2.5
                      sm:text-sm
                    "
                  >
                    Apply Now

                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                      className="sm:h-4 sm:w-4"
                    />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}