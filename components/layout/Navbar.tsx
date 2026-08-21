"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Study in India", href: "/study-india" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "MBBS Abroad", href: "/mbbs-abroad" },
    { name: "Universities", href: "/universities" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-md">
        <div className="mx-auto flex h-[82px] max-w-screen-2xl items-center px-4 sm:px-6 lg:h-[92px] lg:px-8">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="AdmissionCruise"
              width={320}
              height={80}
              priority
              className="h-auto w-[180px] object-contain transition duration-300 hover:scale-105 sm:w-[210px] lg:w-[225px] xl:w-[240px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 justify-center px-4 lg:flex">
            <ul className="flex items-center gap-4 whitespace-nowrap text-[14px] font-bold xl:gap-5">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group relative flex h-14 items-center px-1 transition-all duration-300 hover:-translate-y-0.5 ${
                        active
                          ? "text-[#1E88E5]"
                          : "text-gray-700 hover:text-[#1E88E5]"
                      }`}
                    >
                      {item.name}

                      <span
                        className={`absolute bottom-3 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#1E88E5] transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">

            {/* WhatsApp */}
            <a
              href="https://wa.me/917909004266"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition hover:scale-105"
            >
              WhatsApp
            </a>

            {/* Apply Now - FIXED */}
            <Link
              href="/#apply-form"
              className="shrink-0 whitespace-nowrap rounded-full bg-gradient-to-r from-[#0A2C8B] via-[#1A4FD8] to-[#29A9FF] px-6 py-2.5 text-[13px] font-bold text-white shadow-lg transition hover:scale-105"
            >
              Apply Now
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-7 w-7 text-slate-800" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-[60] flex h-screen w-[85%] max-w-[340px] flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
                <Image
                  src="/logo.png"
                  alt="AdmissionCruise"
                  width={170}
                  height={42}
                  className="h-auto w-[150px]"
                />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 transition hover:bg-slate-100"
                >
                  <X className="h-7 w-7 text-slate-800" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href ||
                          pathname.startsWith(`${item.href}/`);

                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                            active
                              ? "bg-blue-50 text-[#1E88E5]"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom Buttons */}
              <div className="border-t border-slate-200 p-5">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917909004266"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mb-3 flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
                >
                  WhatsApp
                </a>

                {/* Apply Now */}
                <Link
                  href="/#apply-form"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0A2C8B] via-[#1A4FD8] to-[#29A9FF] px-5 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Apply Now
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}