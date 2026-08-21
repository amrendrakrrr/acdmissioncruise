"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Counselling() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Enquiry submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          message: "",
        });
      } else {
        alert(data.error || "Submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border-2 border-slate-300 bg-white px-5 py-4 text-base font-medium text-slate-900 placeholder:text-slate-500 placeholder:font-medium outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100";

  return (
    <section
      id="apply-form"
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
        >
          {/* ================= LEFT SIDE ================= */}
          <div className="text-white">
            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              🎓 Free Career Guidance
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Book Your Free Counselling Session
            </h2>

            <p className="mt-5 text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
              Get expert admission guidance for Government, Private and
              International Universities. Our counsellors will help you choose
              the best course and university according to your career goals.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-3xl bg-white p-5 shadow-2xl sm:p-8 lg:p-9">
            <h3 className="mb-7 text-center text-3xl font-bold text-slate-900">
              Apply Now
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />

              {/* Mobile Number */}
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClass}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />

              {/* Course */}
              <input
                type="text"
                name="course"
                placeholder="Preferred Course"
                value={formData.course}
                onChange={handleChange}
                required
                className={inputClass}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading ? "Submitting..." : "Book Free Counselling"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}