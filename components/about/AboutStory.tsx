"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { LuDoorOpen } from "react-icons/lu";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function AboutStory() {
  return (
    <section className="py-16 lg:py-[112px] px-6 bg-[#F5F2EB]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[110px]">
        {/* Left Column: Top Left Image */}
        <div className="shrink-0 w-full lg:w-auto flex justify-center lg:block">
          <div className="w-[298px] h-[301px] shrink-0 relative">
            <div className="relative w-full h-full">
              <Image
                src="/about/list1.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Center Column: Text Content */}
        <div className="flex-1 flex flex-col w-full">
          {/* Story Text */}
          <div className="w-full flex flex-col">
            <span
              className={`${spaceGrotesk.className} text-[#2F2F2F]/60 tracking-wide mb-4 block`}
            >
              Our Story
            </span>
            <h2
              className={`${playfairDisplay.className} italic text-[40px] leading-tight text-[#2F2F2F] mb-6`}
            >
              A New Way to Find Home <span className="text-[#C47A5D]">.</span>
            </h2>
            <p
              className={`${spaceGrotesk.className} text-[#2F2F2F]/70 leading-relaxed`}
            >
              We started with a simple idea: real estate should be about how a
              home feels, not just its square footage. That's why we showcase
              homes in a way that priorities warmth, design, and
              atmosphere—because where you live should inspire you every day.
            </p>
          </div>

          {/* Approach Text */}
          <div className=" flex flex-col mt-[80px]">
            <span
              className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm uppercase tracking-wide mb-4 block`}
            >
              Our Approach
            </span>
            <h2
              className={`${playfairDisplay.className} italic text-[40px] leading-tight text-[#2F2F2F] mb-6`}
            >
              Made for the Way You Live{" "}
              <span className="text-[#C47A5D]">.</span>
            </h2>
            <p
              className={`${spaceGrotesk.className} text-[#2F2F2F]/70 leading-relaxed mb-10`}
            >
              A home is more than walls and square footage—it's an experience.
              We showcase spaces in their true form, capturing the interplay of
              light, texture, and atmosphere to help you connect with a piece
              before you even step inside.
            </p>

            {/* List */}
            <div className="flex flex-col gap-8 w-full max-w-lg text-left">
              <div className="flex gap-4 items-start">
                <span
                  className={`${playfairDisplay.className} text-[#2F2F2F] text-[20px] mt-1`}
                >
                  <LuDoorOpen />
                </span>
                <div>
                  <h4
                    className={`${spaceGrotesk.className} text-[20px] text-[#2F2F2F] mb-1`}
                  >
                    Interior-Centric Storytelling.
                  </h4>
                  <p
                    className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed`}
                  >
                    Every home is presented with a focus on its warmth,
                    character, and ambiance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span
                  className={`${playfairDisplay.className} text-[#2F2F2F] text-[20px] mt-1`}
                >
                  <LuDoorOpen />
                </span>
                <div>
                  <h4
                    className={`${spaceGrotesk.className} text-[20px] text-[#2F2F2F] mb-1`}
                  >
                    Thoughtful Lighting & Composition.
                  </h4>
                  <p
                    className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed`}
                  >
                    We highlight natural light, reflections, and architectural
                    warmth to being depth to each space.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span
                  className={`${playfairDisplay.className} text-[#2F2F2F] text-[20px] mt-1`}
                >
                  <LuDoorOpen />
                </span>
                <div>
                  <h4
                    className={`${spaceGrotesk.className} text-[20px] text-[#2F2F2F] mb-1`}
                  >
                    Minimal & Editorial Aesthetic.
                  </h4>
                  <p
                    className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed`}
                  >
                    Clean, refined visuals that feel immersive yet effortless.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span
                  className={`${playfairDisplay.className} text-[#2F2F2F] text-[20px] mt-1`}
                >
                  <LuDoorOpen />
                </span>
                <div>
                  <h4
                    className={`${spaceGrotesk.className} text-[20px] text-[#2F2F2F] mb-1`}
                  >
                    A Seamless, Visual Experience.
                  </h4>
                  <p
                    className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed`}
                  >
                    Listings that don't just show homes but invite you into
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bottom Right Image */}
        <div className="shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-end justify-end">
          <div className="relative w-[298px] h-[301px] shrink-0">
            <Image
              src="/about/list2.jpg"
              alt="Our Approach"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
