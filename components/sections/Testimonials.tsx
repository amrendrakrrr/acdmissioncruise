"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    university: "Delhi University",
    course: "B.Com (Hons.)",
    review:
      "AdmissionCruise made my admission process very easy. The counsellors guided me throughout the admission process.",
  },
  {
    name: "Anjali Verma",
    university: "Jamia Millia Islamia",
    course: "MBA",
    review:
      "Excellent counselling and honest guidance. I got admission into my dream university.",
  },
  {
    name: "Aman Singh",
    university: "Jawaharlal Nehru University",
    course: "M.A.",
    review:
      "Professional team with quick support. Highly recommended for admission guidance.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Student Testimonials
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted by thousands of students across India.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-xl p-8 border">

                <div className="text-yellow-500 text-xl mb-4">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-600">
                  "{item.review}"
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-blue-600">
                    {item.course}
                  </p>

                  <p className="text-gray-500">
                    {item.university}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}