"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-md">
      <div className="mx-auto flex h-[92px] w-full max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="AdmissionCruise"
              width={320}
              height={80}
              priority
              className="h-auto w-[190px] object-contain transition duration-300 hover:scale-105 sm:w-[210px] lg:w-[225px] xl:w-[240px]"
            />
          </Link>
        </div>

        {/* Navigation */}
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

        {/* Right Buttons */}
        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href="https://wa.me/917909004266"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D]"
          >
            WhatsApp
          </a>

          <Link
            href="/#apply-form"
            className="rounded-full bg-gradient-to-r from-[#0A2C8B] via-[#1A4FD8] to-[#29A9FF] px-5 py-2.5 text-[13px] font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}