"use client";

import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { motion, Variants } from "framer-motion";



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function ListingGallery() {
  return (
    <section className="bg-[#F5F2EB] pt-[112px] pb-[224px]">
      {/* Gallery Row */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex h-[600px] w-full mb-20 gap-1 lg:gap-6 "
      >
        <motion.div variants={imageVariants} className="flex-3 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/listing/last1.png"
            alt="Interior view 1"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={imageVariants} className="flex-2 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/listing/last2.png"
            alt="Interior view 2"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={imageVariants} className="flex-1 relative">
          <Image
            src="/listing/last3.png"
            alt="Interior view 3"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col items-left text-left max-w-2xl mx-auto px-6"
      >
        <p
          className={`${spaceGrotesk.className} text-[#2F2F2F]/70 text-lg leading-relaxed`}
        >
          Schedule a private viewing and step into a home where modern elegance
          meets timeless comfort.
        </p>
        <button className="bg-[#2F2F2F] text-white px-[18px] py-[12px] rounded-full mt-6 w-fit flex items-center gap-2 cursor-pointer hover:bg-black transition-colors">
          Get in Touch <GoChevronRight />
        </button>
      </motion.div>
    </section>
  );
}
