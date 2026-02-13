"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

import { listings } from "@/data/listings";

interface ListingsSectionProps {
  showButton?: boolean;
}

export default function ListingsSection({
  showButton = true,
}: ListingsSectionProps) {
  return (
    <section className="bg-[#F5F2EB] pt-10 min-[1110px]:pt-[224px] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col min-[1110px]:flex-row items-baseline mb-8 min-[1110px]:mb-[64px]">
          <div>
            <h2
              className={`${playfairDisplay.className} text-4xl min-[1110px]:text-[40px] italic leading-none`}
            >
              Step Inside<span className="text-[#C47A5D]">.</span>
            </h2>
          </div>
          <div className="w-full min-[1110px]:w-[30%] text-left min-[1110px]:text-left mt-6 min-[1110px]:mt-0 ml-0 min-[1110px]:ml-[250px]">
            <p
              className={`${spaceGrotesk.className} text-[#2F2F2F]/60  md:text-base `}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Discover spaces that speak to you. Our curated listings focus on
              interiors first—where light, texture, and atmosphere come together
              to create a feeling, not just a floor plan. Find the one that
              feels like home.
            </p>
          </div>
        </div>

        <div className="w-full border-t border-[#2F2F2F]/20 mb-6"></div>

        <div className="grid grid-cols-1 min-[1110px]:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Link
              href={`/listings/${listing.id}`}
              key={listing.id}
              className="group cursor-pointer block"
            >
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <h3 className={`${spaceGrotesk.className} text-[20px] `}>
                    {listing.title}
                  </h3>
                  <p
                    className={`${spaceGrotesk.className} text-sm text-[#2F2F2F]/60 flex items-center gap-2`}
                  >
                    <GrLocation />
                    {listing.location}
                  </p>
                </div>
              </div>
              <div className="relative aspect-3/4 overflow-hidden">
                <div
                  className={`${spaceGrotesk.className} 
absolute top-2 left-2 right-2 z-10 flex justify-between text-[14px] font-medium text-[#2F2F2F]/60 bg-[#F5F2EB] p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span>{listing.specs.beds} Beds</span>
                  <span>{listing.specs.baths} Baths</span>
                  <span>{listing.specs.sqft}</span>
                </div>

                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.47)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <div className="text-white flex items-center gap-2">
                    <span
                      className={`${playfairDisplay.className} italic text-lg`}
                    >
                      Shop inside
                    </span>
                    <MdOutlineKeyboardArrowRight className="text-lg" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showButton && (
          <div className="mt-12 flex justify-end">
            <Link href="/listings">
              <button className=" text-[#2F2F2F] bg-[#2F2F2F]/6 px-[18px] py-3 rounded-full text-[14px] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer">
                See all Listings{" "}
                <MdOutlineKeyboardArrowRight className="text-lg" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
