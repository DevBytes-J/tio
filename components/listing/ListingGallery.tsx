"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ListingGallery() {
  return (
    <section className="bg-[#F5F2EB] pt-[112px] pb-[224px]">
      {/* Gallery Row */}
      <div className="flex h-[600px] w-full mb-20 gap-1 lg:gap-6 ">
        <div className="flex-3 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/listing/last1.png"
            alt="Interior view 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-2 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/listing/last2.png"
            alt="Interior view 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/listing/last3.png"
            alt="Interior view 3"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-left text-left max-w-2xl mx-auto px-6">
        <p
          className={`${spaceGrotesk.className} text-[#2F2F2F]/70 text-lg leading-relaxed`}
        >
          Schedule a private viewing and step into a home where modern elegance
          meets timeless comfort.
        </p>
        <button className="bg-[#2F2F2F] text-white px-[18px] py-[12px] rounded-full mt-6 w-fit flex items-center gap-2 cursor-pointer">
          Get in Touch <GoChevronRight />
        </button>
      </div>
    </section>
  );
}
