"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

export default function InsideOutSection() {
  return (
    <section className="bg-[#ffffff] w-full pt-10 md:pt-10 pb-0 relative overflow-hidden flex flex-col items-center">
      <div className="container relative z-10 mb-[-2%] min-[1110px]:mb-[-5%] text-center">
        {/* Typography Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2
            className={`${playfairDisplay.className} text-[40px] min-[1300px]:text-[160px] text-[#2F2F2F1F] italic `}
          >
            The Inside-Out
            <span className="text-[#C47A5D]">.</span>
            <span className="text-[2rem] min-[1300px]:text-[4rem] align-top not-italic font-serif text-[#2F2F2F]">
              ™
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Image Layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full aspect-video max-h-[80vh] z-10 mt-15"
      >
        <Image
          src="/landing/middle-sec1.jpg"
          alt="Modern white luxury house exterior"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
