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

  return (
    <section
      id="apply-form"
      className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side */}
          <div className="text-white">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              🎓 Free Career Guidance
            </span>

            <h2 className="text-5xl font-bold mt-6">
              Book Your Free Counselling Session
            </h2>

            <p className="mt-6 text-blue-100 text-lg leading-8">
              Get expert admission guidance for Government, Private and
              International Universities. Our counsellors will help you choose
              the best course and university according to your career goals.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Apply Now
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="course"
                placeholder="Preferred Course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold transition"
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