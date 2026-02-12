"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import CountUp from "../CountUp";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function AboutStats() {
  return (
    <section className="py-20 lg:py-[224px] px-6 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-[148px]">
        <div className="flex-1">
          <h2
            className={`${playfairDisplay.className} italic text-[40px] text-[#2F2F2F] leading-tight mb-8`}
          >
            Numbers don't just <br /> measure success—they tell <br /> a story
            <span className="text-[#C47A5D]">.</span>
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-12">
          <p
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed`}
          >
            Our experience in real estate is built on helping you find places
            that reflect your lifestyle, personality, aspirations and who you
            are. From satisfied homeowners to stunning interiors that elevate
            everyday living, our numbers reflect the journey of turning houses
            into homes.
          </p>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 ">
            <div>
              <span
                className={`${playfairDisplay.className} italic text-5xl text-[#2F2F2F]`}
              >
                <CountUp end={1250} />
                <span className="text-[#C47A5D]">+</span>
              </span>
              <p
                className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm mt-2`}
              >
                Homes Showcased
              </p>
            </div>
            <div>
              <span
                className={`${playfairDisplay.className} italic text-5xl text-[#2F2F2F]`}
              >
                <CountUp end={980} />
                <span className="text-[#C47A5D]">+</span>
              </span>
              <p
                className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm mt-2`}
              >
                Satisfied Buyers
              </p>
            </div>
            <div>
              <span
                className={`${playfairDisplay.className} italic text-5xl text-[#2F2F2F]`}
              >
                <CountUp end={870} />
                <span className="text-[#C47A5D]">+</span>
              </span>
              <p
                className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm mt-2`}
              >
                Interior-Focused Listings
              </p>
            </div>
            <div>
              <span
                className={`${playfairDisplay.className} italic text-5xl text-[#2F2F2F]`}
              >
                <CountUp end={15} />
                <span className="text-[#C47A5D]">+</span>
              </span>
              <p
                className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm mt-2`}
              >
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
