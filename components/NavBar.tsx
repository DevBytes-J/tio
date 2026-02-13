"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Listings", href: "/listings" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-[30px] bg-[#F5F2EB] sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Desktop Nav */}
      <div className="hidden min-[1110px]:block">
        <ul className="flex gap-15 text-[14px] font-space-grotesk">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href ? "text-[#2F2F2F]" : "text-[#2F2F2FB8]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="min-[1110px]:hidden text-3xl text-[#2F2F2F] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <HiMenuAlt3 />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#F5F2EB] p-8 shadow-xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-12">
            <button
              className="text-3xl text-[#2F2F2F] cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
          </div>

          <ul className="flex flex-col gap-8 text-[14px] font-space-grotesk">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-2xl font-medium transition-colors block ${
                    pathname === link.href
                      ? "text-[#2F2F2F]"
                      : "text-[#2F2F2FB8]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
