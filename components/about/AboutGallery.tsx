"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
export default function AboutGallery() {
  return (
    <section className="pb-[112px]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex h-[600px] w-full gap-1 lg:gap-6"
      >
        <motion.div variants={imageVariants} className="flex-3 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/about/middle1.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={imageVariants} className="flex-2 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/about/middle2.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={imageVariants} className="flex-1 relative">
          <Image
            src="/about/middle3.jpg"
            alt="Gallery 3"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      {/* Gray Picture Section */}
      <div className="relative w-full h-[224px] bg-[#F5F2EB]"></div>
    </section>
  );
}
