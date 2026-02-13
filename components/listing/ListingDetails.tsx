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

const features = [
  {
    icon: LuDoorOpen,
    title: "Expansive Interiors",
    description:
      "An open floor plan that maximizes space, flow, and natural illumination.",
  },
  {
    icon: LuDoorOpen,
    title: "Floor-to-Ceiling Windows",
    description:
      "Panoramic views that capture the skyline, bathing your space in golden hues.",
  },
  {
    icon: LuDoorOpen,
    title: "Refined Material Palette",
    description:
      "A blend of rich wood tones, soft neutrals, and premium finishes.",
  },
  {
    icon: LuDoorOpen,
    title: "Smart Home Integration",
    description:
      "Effortless control of lighting, climate, and security at your fingertips.",
  },
  {
    icon: LuDoorOpen,
    title: "Serene Private Spaces",
    description:
      "A tranquil bedroom retreat with soft lighting and minimalist elegance.",
  },
  {
    icon: LuDoorOpen,
    title: "Designer Kitchen",
    description:
      "Crafted for both form and function, featuring sleek cabinetry and high-end appliances.",
  },
];

export interface ListingDetailsProps {
  listing: {
    id: number;
    title: string;
    location: string;
    image: string;
    specs: {
      beds: number;
      baths: number;
      sqft: string;
    };
  };
}

export default function ListingDetails({ listing }: ListingDetailsProps) {
  return (
    <section className="bg-[#F5F2EB] py-[112px]">
      <div className="px-6">
        <div className="flex flex-col min-[1300px]:flex-row gap-12 min-[1300px]:gap-[100px] items-stretch">
          {/* Left Column - Images Stack (Desktop Only) */}
          <div className="hidden min-[1300px]:flex w-[348px] shrink-0 flex-col justify-between">
            <div className="relative w-[348px] h-[351px]">
              <Image
                src="/listing/middle1.png"
                alt="Aerial view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[348px] h-[351px]">
              <Image
                src="/listing/middle3.png"
                alt="Exterior details"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full min-[1300px]:flex-1 pt-2">
            {/* Description */}
            <div className="mb-16 flex flex-col xl:flex-row gap-12 xl:gap-[148px]">
              <div className="flex-1">
                {/* Mobile Image 1 */}
                <div className="block min-[1300px]:hidden w-full md:w-[80%] mx-auto aspect-4/3 relative mb-8">
                  <Image
                    src="/listing/middle1.png"
                    alt="Aerial view"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2
                  className={`${playfairDisplay.className} text-[40px] italic leading-tight text-[#2F2F2F] mb-6`}
                >
                  A Space Designed for the Modern Dweller.
                </h2>
                <p
                  className={`${spaceGrotesk.className} text-[#2F2F2F]/70 text-base leading-relaxed mb-10`}
                >
                  Step into {listing.title}, where sleek modern aesthetics blend
                  effortlessly with warm, inviting comfort. This residence is
                  more than just a home—it's an experience crafted for those who
                  appreciate thoughtful design, natural light, and seamless
                  functionality.
                </p>

                {/* Stats */}
                <div className="flex gap-16 border-t border-b border-[#2F2F2F]/10 py-6">
                  <div className="flex flex-col gap-2">
                    <span
                      className={`${spaceGrotesk.className} text-[#2F2F2F] text-[14px]`}
                    >
                      {listing.specs.beds} Beds
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span
                      className={`${spaceGrotesk.className} text-[#2F2F2F] text-[14px]`}
                    >
                      {listing.specs.baths} Baths
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span
                      className={`${spaceGrotesk.className} text-[#2F2F2F] text-[14px]`}
                    >
                      {listing.specs.sqft}
                    </span>
                  </div>
                </div>
              </div>
              {/* Spacer to align width with features section */}
              <div className="hidden xl:block w-[348px] shrink-0" />
            </div>

            {/* Features List */}
            <div className="mb-20">
              {/* Mobile Image 2 */}
              <div className="block min-[1300px]:hidden w-full md:w-[80%] mx-auto aspect-4/3 relative mb-8">
                <Image
                  src="/listing/middle2.png"
                  alt="Interior details"
                  fill
                  className="object-cover"
                />
              </div>

              <h3
                className={`${playfairDisplay.className} text-[32px] italic text-[#2F2F2F] mb-12`}
              >
                Features & Highlights
              </h3>
              <div className="flex flex-col xl:flex-row gap-12 xl:gap-[148px]">
                {/* Features Column */}
                <div className="flex-1 flex flex-col gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-5 items-start">
                      <div className="text-2xl text-[#2F2F2F] mt-1 shrink-0">
                        <feature.icon className="stroke-1" />
                      </div>
                      <div>
                        <h4
                          className={`${spaceGrotesk.className}  text-[#2F2F2F] text-[20px] mb-2`}
                        >
                          {feature.title}
                        </h4>
                        <p
                          className={`${spaceGrotesk.className} text-sm text-[#2F2F2F]/60 leading-relaxed max-w-sm`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Image (Desktop Only) */}
                <div className="hidden min-[1300px]:block w-full xl:w-auto shrink-0">
                  <div className="sticky top-24">
                    <div className="relative w-[348px] h-[351px]">
                      <Image
                        src="/listing/middle2.png"
                        alt="Interior details"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div>
              {/* Mobile Image 3 */}
              <div className="block min-[1300px]:hidden w-full md:w-[80%] mx-auto aspect-4/3 relative mb-8">
                <Image
                  src="/listing/middle3.png"
                  alt="Exterior details"
                  fill
                  className="object-cover"
                />
              </div>

              <h3
                className={`${playfairDisplay.className} text-[32px] italic text-[#2F2F2F] mb-6`}
              >
                A Location That <br /> Complements the Lifestyle
              </h3>
              <p
                className={`${spaceGrotesk.className} text-[#2F2F2F]/70 text-sm leading-relaxed max-w-xl`}
              >
                Nestled in {listing.location}, this home offers a balance of
                urban energy and personal retreat. Enjoy the convenience of
                being near vibrant cafes, cultural hubs, and serene parks—all
                while having your own peaceful sanctuary above the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
