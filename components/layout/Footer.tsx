"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-[#243B68] via-[#1F3358] to-[#182A45] text-white">
      <div className="h-px bg-blue-400/30" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block group">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20">
                <Image
                  src="/logo.png"
                  alt="AdmissionCruise"
                  width={280}
                  height={75}
                  priority
                  className="h-auto w-56 object-contain"
                />
              </div>
            </Link>

            <p className="mt-3 max-w-sm leading-7 text-slate-300">
              Helping students choose the right university with trusted
              admission guidance across India and abroad.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+917909004266"
                className="flex items-center gap-3 text-slate-300 transition hover:text-blue-400"
              >
                <Phone size={18} />
                <span>+91 7909004266</span>
              </a>

              <a
                href="mailto:info@admissioncruise.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-blue-400"
              >
                <Mail size={18} />
                <span>info@admissioncruise.com</span>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/study-india"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Study in India
                </Link>
              </li>

              <li>
                <Link
                  href="/study-abroad"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Study Abroad
                </Link>
              </li>

              <li>
                <Link
                  href="/mbbs-abroad"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  MBBS Abroad
                </Link>
              </li>

              <li>
                <Link
                  href="/universities"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Universities
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/#apply-form"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Admission Counselling
                </Link>
              </li>

              <li>
                <Link
                  href="/#apply-form"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Career Guidance
                </Link>
              </li>

              <li>
                <Link
                  href="/scholarships"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Scholarships
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-bold tracking-wide text-white">
              Connect
            </h3>

            <div className="space-y-4">
              <a
                href="https://instagram.com/admissioncruise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-pink-500"
              >
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>

              <a
                href="https://facebook.com/admissioncruise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-blue-500"
              >
                <FaFacebook size={18} />
                <span>Facebook</span>
              </a>

              <a
                href="https://linkedin.com/company/admissioncruise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-sky-400"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://youtube.com/@admissioncruiseedutech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-red-500"
              >
                <FaYoutube size={18} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 border-t border-slate-700 pt-2">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} AdmissionCruise Edutech Pvt. Ltd. All
            Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-3 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-700"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}