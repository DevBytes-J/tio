"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function BeyondWallsSection() {
  return (
    <section className="bg-[#F5F2EB] py-[112px] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col min-[1110px]:flex-row gap-6">
          {/* Left Image Area */}
          <div className="w-full min-[1110px]:w-1/2 relative">
            <div className="relative aspect-3/4 w-full">
              <Image
                src="/landing/content-2.jpg"
                alt="Modern home entrance with warm lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full min-[1110px]:w-1/2 flex flex-col justify-between">
            <div className="max-w-lg mb-12">
              <h2
                className={`${playfairDisplay.className} text-[40px] italic leading-tight text-[#2F2F2F] mb-6`}
              >
                Beyond Walls, A Space That Fits You
                <span className="text-[#C47A5D]">.</span>
              </h2>
              <p
                className={`${spaceGrotesk.className} text-[#2F2F2F]/70 text-sm min-[1110px]:text-base leading-relaxed`}
              >
                Our homes are more than structure—their thought about
                functionality, comfort, and a space that aligns with your
                lifestyle. We help you find a home that truly works for you.
              </p>
            </div>

            <div className="w-full">
              <div className="flex flex-row gap-6 items-start">
                <div className="relative w-40 h-32 min-[1110px]:w-48 min-[1110px]:h-40 shrink-0">
                  <Image
                    src="/landing/content-3.jpg"
                    alt="Aerial view of modern home at night"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className={`${spaceGrotesk.className} text-xs text-[#2F2F2F]/60 leading-relaxed`}
                >
                  Beyond aesthetics, we prioritize how a home feels, ensuring
                  it's a place that supports your daily life, reflects your
                  personality, and enhances your well-being. Whether it's the
                  perfect lighting, an intuitive layout, or a warm, inviting
                  atmosphere, we help you find a home that isn't just a space -
                  but a place that truly works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
