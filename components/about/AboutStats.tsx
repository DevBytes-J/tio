"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import CountUp from "../CountUp";
import { motion } from "framer-motion";

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
    <section className="py-20 lg:py-[224px] px-6">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-[148px]">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`${playfairDisplay.className} italic text-[30px]  md:text-[40px] text-[#2F2F2F] leading-tight mb-8`}
          >
            Numbers don&apos;t just measure success—they tell a story
            <span className="text-[#C47A5D]">.</span>
          </motion.h2>
        </div>
        <div className="flex-1 flex flex-col gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 leading-relaxed`}
          >
            Our experience in real estate is built on helping you find places
            that reflect your lifestyle, personality, aspirations and who you
            are. From satisfied homeowners to stunning interiors that elevate
            everyday living, our numbers reflect the journey of turning houses
            into homes.
          </motion.p>
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
