"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const universities = [
  {
    name: "Delhi University",
    location: "New Delhi",
    image: "/universities/du.png",
  },
  {
    name: "Jawaharlal Nehru University",
    location: "New Delhi",
    image: "/universities/jnu.png",
  },
  {
    name: "Jamia Millia Islamia",
    location: "New Delhi",
    image: "/universities/jamia.png",
  },
  {
    name: "Banaras Hindu University",
    location: "Varanasi",
    image: "/universities/bhu.png",
  },
  {
    name: "Aligarh Muslim University",
    location: "Aligarh",
    image: "/universities/amu.png",
  },
  {
    name: "Lovely Professional University",
    location: "Punjab",
    image: "/universities/lpu.png",
  },
];

export default function Trusted() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            Top Universities
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Universities We Help You Get Into
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Admission Guidance for India's Top Government,
            Private & Deemed Universities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {universities.map((uni, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center"
            >

              <div className="flex justify-center">

                <Image
                  src={uni.image}
                  alt={uni.name}
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px" }}
                  className="object-contain"
                />

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {uni.name}
              </h3>

              <p className="text-gray-500 mt-2">
                📍 {uni.location}
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
                Apply Now
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}