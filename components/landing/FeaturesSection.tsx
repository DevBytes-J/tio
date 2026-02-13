"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { GoPlay } from "react-icons/go";
import {
  PiDoorOpenThin,
  PiLightbulbFilamentThin,
  PiHeartThin,
} from "react-icons/pi"; // Using Pi icons for thin look

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const features = [
  {
    title: "See Beyond Square Footage",
    description:
      "Designed to be felt, we highlight the warmth and flow of every space, so you can picture the inside before you step in.",
    icon: PiDoorOpenThin,
  },
  {
    title: "Designed for Decision-Making",
    description:
      "Our listings highlight how soon you can settle in and match homes to your style, making it easier to find a space that truly feels like yours.",
    icon: PiLightbulbFilamentThin,
  },
  {
    title: "Experience Before You Step In",
    description:
      "Find a home that feels like yours with immersive storytelling, and carefully curated interiors designed to inspire belonging.",
    icon: PiHeartThin,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#F5F2EB] py-[112px] relative">
      <div className="w-full relative">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/landing/gray1.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-6 pt-[112px] pb-[72px] relative z-10">
          <h2
            className={`${playfairDisplay.className} text-4xl md:text-[40px] text-[#2F2F2F] leading-tight`}
          >
            More Than A Place,
            <br />
            <span className="italic text-[#2F2F2F]">A Feeling</span>
            <span className="italic text-[#C47A5D]">.</span>
          </h2>
        </div>
      </div>

      {/* Video Cover Area */}
      <div className="relative w-full aspect-21/9 min-[1110px]:aspect-[2.5/1] group cursor-pointer overflow-hidden">
        <Image
          src="/landing/feature.jpg"
          alt="Cinematic home tour preview"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-100"
        />
        {/* ... commented out code ... */}
      </div>

      <div className="w-full relative pb-40">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/landing/gray2.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container p-6 relative z-10">
          {/* Features Grid */}
          <div className="grid grid-cols-1 min-[1110px]:grid-cols-3 w-full gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="text-3xl text-[#2F2F2F]">
                  <feature.icon />
                </div>
                <h3
                  className={`${spaceGrotesk.className} font-medium text-[#2F2F2F]`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${spaceGrotesk.className} text-[#2F2F2F]/70 leading-relaxed`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
