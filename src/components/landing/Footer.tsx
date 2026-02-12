"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],

  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#E8E4D9] p-6 border-t border-[#E8E4D9]/10 relative z-10 overflow-hidden">
      <div className="container mx-auto flex flex-col justify-between min-h-[50vh]">
        {/* Top Header */}
        <div className="flex flex-col min-[1110px]:flex-row justify-between items-center gap-8 mb-12 relative">
          <div className="flex items-center gap-4 w-full min-[1110px]:w-1/3 justify-center min-[1110px]:justify-start">
            <div className="flex items-center gap-4">
              <Image src="/logo2.png" alt="Logo" width={50} height={50} />
            </div>
          </div>

          <nav className="w-full min-[1110px]:w-1/3 flex justify-center">
            <ul className="flex flex-wrap gap-8 min-[1110px]:gap-12 justify-center">
              {["Home", "Listings", "About us", "Contact us"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About us"
                          ? "/about"
                          : item === "Contact us"
                            ? "/contact"
                            : `/${item.toLowerCase()}`
                    }
                    className={`${spaceGrotesk.className} text-sm text-[#E8E4D9]/60 hover:text-white transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-[26px] w-full min-[1110px]:w-1/3 justify-center min-[1110px]:justify-end items-center">
            {/* ... icons ... */}
            <a
              href="#"
              className="text-[#E8E4D9]/60 hover:text-white transition-colors text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-[#E8E4D9]/60 hover:text-white transition-colors text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-[#E8E4D9]/60 hover:text-white transition-colors text-lg"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-[#E8E4D9]/60 hover:text-white transition-colors text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-[#E8E4D9]/60 hover:text-white transition-colors text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Big Text */}
        <div className="text-center py-[60px] min-[1110px]:py-[112px]">
          <h2
            className={`${playfairDisplay.className} text-[40px] min-[1300px]:text-[160px] leading-none italic text-[rgba(245,242,235,0.08)] whitespace-nowrap`}
          >
            The Inside-Out
            <span className="text-[#C47A5D] leading-none ">.</span>
            <span className="align-top relative -top-4 min-[1300px]:-top-8 font-normal text-[#F5F2EB]">
              ™
            </span>
          </h2>
        </div>

        {/* Bottom Footer */}
        <div className="pt-[33px] pb-[64px] border-t border-[#E8E4D9]/10 flex flex-col min-[1110px]:flex-row justify-between items-center gap-4">
          <p className={`${spaceGrotesk.className} text-xs text-[#E8E4D9]/40`}>
            © {currentYear} Relume. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`${spaceGrotesk.className} text-xs text-[#E8E4D9]/40 hover:text-white transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
