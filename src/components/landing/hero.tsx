"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <>
      <div className="bg-[#F5F2EB] flex flex-col min-[1110px]:flex-row h-auto min-h-[600px] min-[1110px]:h-[75vh] w-full">
        <div className="w-full min-[1110px]:w-1/2 flex flex-col justify-center px-6 py-10 min-[1110px]:py-0">
          <h1
            className={`${playfairDisplay.className} text-4xl min-[1110px]:text-[64px] italic leading-tight`}
          >
            Feel the home<span className="text-[#C47A5D]">.</span>
          </h1>
          <p
            className={`${spaceGrotesk.className} text-base min-[1110px]:text-[18px] mt-4 min-[1110px]:mt-6 max-w-lg text-[#2F2F2F]`}
          >
            Explore homes where every room is designed with comfort and style in
            mind.
          </p>
          <button className="bg-[#2F2F2F] text-white px-[18px] py-[12px] rounded-full mt-6 w-fit flex items-center gap-2 cursor-pointer">
            Get in Touch <GoChevronRight />
          </button>
        </div>
        <div className="w-full min-[1110px]:w-1/2 relative h-[300px] min-[1110px]:h-full">
          <Image
            src="/landing/hero.jpg"
            // ... rest of image props
            alt="Hero"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>
    </>
  );
}
