"use client";

import { Phone, Mail, Globe } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#061A5B] via-[#0A2E8A] to-[#1EA7FF] text-white text-sm">

      <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">

        {/* Left Side */}

        <div className="flex items-center gap-6">

          <a
            href="https://wa.me/917909004266"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Phone size={15} />
            +91 7909004266
          </a>

          <a
            href="mailto:info@admissioncruise.com"
            className="hidden md:flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Mail size={15} />
            info@admissioncruise.com
          </a>

          <a
            href="https://www.admissioncruise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Globe size={15} />
            www.admissioncruise.com
          </a>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-6">

          <a
            href="https://instagram.com/admissioncruise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-300 transition"
          >
            <FaInstagram size={16} />
            <span className="hidden md:inline">
              @admissioncruise
            </span>
          </a>

          <a
            href="https://facebook.com/AdmissionCruise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-200 transition"
          >
            <FaFacebookF size={16} />
            <span className="hidden md:inline">
              AdmissionCruise
            </span>
          </a>

          <a
            href="https://linkedin.com/company/admissioncruise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaLinkedinIn size={16} />
            <span className="hidden md:inline">
              AdmissionCruise
            </span>
          </a>

        </div>

      </div>

    </div>
  );
}