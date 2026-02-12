"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

export default function AboutHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/hero.png"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 container p-6 h-full flex items-end">
        <h1
          className={`${playfairDisplay.className} text-white text-4xl lg:text-[64px] italic max-w-4xl leading-tight w-full lg:w-[40%]`}
        >
          We Create Spaces that Feel Like Home{" "}
          <span className="text-[#C47A5D]">.</span>
        </h1>
      </div>
    </section>
  );
}
