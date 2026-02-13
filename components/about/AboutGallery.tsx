"use client";

import Image from "next/image";

export default function AboutGallery() {
  return (
    <section className="pb-[112px]">
      <div className="flex flex-col min-[1110px]:flex-row h-auto min-[1110px]:h-[600px] w-full mb-10 min-[1110px]:mb-0 gap-6">
        <div className="w-full min-[1110px]:w-auto min-[1110px]:flex-3 h-[300px] min-[1110px]:h-auto relative border-r-0 min-[1110px]:border-r-4 border-[#F5F2EB]">
          <Image
            src="/about/middle1.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full min-[1110px]:w-auto min-[1110px]:flex-2 h-[300px] min-[1110px]:h-auto relative border-r-0 min-[1110px]:border-r-4 border-[#F5F2EB]">
          <Image
            src="/about/middle2.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full min-[1110px]:w-auto min-[1110px]:flex-1 h-[300px] min-[1110px]:h-auto relative">
          <Image
            src="/about/middle3.jpg"
            alt="Gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Gray Picture Section */}
      <div className="relative w-full h-[224px]">
        <Image
          src="/about/gray.png"
          alt="Featured Space"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
