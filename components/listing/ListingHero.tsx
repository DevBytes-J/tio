"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ListingHero() {
  return (
    <section className="relative w-full h-[70vh] lg:h-[85vh] min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/listing/hero.png"
          alt="The Horizon Loft"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container p-6 h-full flex flex-col justify-between">
        {/* Back Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-[#E8E4D9] transition-colors"
          >
            <GoArrowLeft className="text-2xl" />
          </Link>
        </div>

        {/* Title Text */}
        <div className="">
          <p
            className={`${spaceGrotesk.className} text-[#F5F2EB] text-[18px] mb-4`}
          >
            The Horizon Loft
          </p>
          <h1
            className={`${playfairDisplay.className} text-[#F5F2EB] text-4xl md:text-[64px] italic leading-tight max-w-4xl`}
          >
            Where Modern <br />
            Elegance Meets <br />
            Timeless Comfort<span className="text-[#C47A5D]">.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
