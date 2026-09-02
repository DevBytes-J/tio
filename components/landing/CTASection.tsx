"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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

export default function CTASection() {
  return (
    <section className="bg-white w-full pt-20 min-[1110px]:pt-[112px] pb-0 overflow-hidden">
      <div className="flex flex-col min-[1110px]:flex-row justify-between">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full min-[1110px]:w-1/3  min-[1110px]:mb-0 flex flex-col justify-center px-6 "
        >
          <h2
            className={`${playfairDisplay.className} text-[40px] italic leading-tight text-[#2F2F2F] mb-4`}
          >
            Ready to find a home that feels right
            <span className="text-[#C47A5D]">?</span>
          </h2>
          <p
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 tracking-widest mb-8`}
          >
            Start your journey - today.
          </p>

          <button className="bg-[#1A1A1A] mb-[92px] text-white px-[18px] py-3 rounded-full flex items-center gap-[10px] text-sm hover:bg-[#333] transition-colors w-fit cursor-pointer">
            Get in Touch <MdOutlineKeyboardArrowRight />
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full min-[1110px]:w-2/3 flex flex-col justify-end items-end"
        >
          <div className="w-full min-[1110px]:w-[80%] h-[380px] relative -mb-20">
            <Image
              src="/landing/last-img.png"
              alt="Grand modern mansion at dusk"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
