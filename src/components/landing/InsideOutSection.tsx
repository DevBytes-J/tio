"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";

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
        <div className="text-center">
          <h2
            className={`${playfairDisplay.className} text-[40px] min-[1300px]:text-[160px] text-[#2F2F2F1F] italic `}
          >
            The Inside-Out
            <span className="text-[#C47A5D]">.</span>
            <span className="text-[2rem] min-[1300px]:text-[4rem] align-top not-italic font-serif text-[#2F2F2F]">
              ™
            </span>
          </h2>
        </div>
      </div>

      {/* Image Layer */}
      <div className="relative w-full aspect-video max-h-[80vh] z-10 mt-15">
        <Image
          src="/landing/middle-sec1.jpg"
          alt="Modern white luxury house exterior"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
