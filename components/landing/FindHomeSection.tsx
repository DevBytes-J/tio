"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const steps = [
  {
    number: "1",
    title: "Explore the Spaces",
    description:
      "Browse through our curated listings, designed to help you feel the home, not just see it.",
  },
  {
    number: "2",
    title: "Get a Closer Look",
  },
  {
    number: "3",
    title: "Connect & Visit",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function FindHomeSection() {
  return (
    <section className="bg-[#ffffff] w-full min-h-screen flex flex-col min-[1110px]:flex-row pb-[112px]">
      {/* Left Content */}
      <div className="w-full min-[1110px]:w-1/2 pl-6 pr-6 min-[1110px]:pr-0 pb-6 flex flex-col justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className={`${playfairDisplay.className} text-[40px] italic leading-tight mb-12 text-[#2F2F2F]`}
          >
            Find A Home That
            <br />
            Does More Than Just Fit <span className="text-[#C47A5D]">.</span>
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col gap-6 mb-16 w-[90%] min-[1110px]:w-full">
            {steps.map((step, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="group border-b border-[#2F2F2F]/20 pb-3"
              >
                <div className="flex items-baseline gap-8">
                  <span
                    className={`${spaceGrotesk.className} font-medium text-[#2F2F2F]`}
                  >
                    {step.number}
                  </span>
                  <div className="ml-0 min-[1110px]:ml-[117px]">
                    <h3
                      className={`${spaceGrotesk.className} font-medium mb-2 ${
                        step.description
                          ? "text-[#2F2F2F]"
                          : "text-[rgba(47,47,47,0.72)]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {step.description && (
                      <p
                        className={`${spaceGrotesk.className} text-[#2F2F2F]/70 leading-relaxed`}
                      >
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-6 items-start min-[1110px]:items-end "
        >
          <p
            className={`${spaceGrotesk.className} text-sm min-[1110px]:text-base text-[#2F2F2F]/80 leading-relaxed italic text-left min-[1110px]:text-right w-full min-[1110px]:w-[35%]`}
          >
            Your perfect space is more than just a listing — it&apos;s a feeling.
            Let&apos;s help you find a home that speaks to you.
          </p>

          <button className=" text-[#2F2F2F] border border-[#2F2F2F] px-[18px] py-3 rounded-full text-[14px] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer">
            Get in Touch <MdOutlineKeyboardArrowRight className="text-lg" />
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full min-[1110px]:w-1/2 min-h-[50vh] min-[1110px]:min-h-screen p-6 flex flex-col"
      >
        <div className="relative w-full h-full flex-1 rounded-sm overflow-hidden">
          <Image
            src="/landing/content.jpg"
            alt="Warm interior living room with fireplace"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
