"use client";

import Image from "next/image";

export default function AboutGallery() {
  return (
    <section className="pb-[112px]">
      <div className="flex h-[600px] w-full gap-1 lg:gap-6">
        <div className="flex-3 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/about/middle1.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-2 relative border-r-4 border-[#F5F2EB]">
          <Image
            src="/about/middle2.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/about/middle3.jpg"
            alt="Gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Gray Picture Section */}
      <div className="relative w-full h-[224px] bg-[#F5F2EB]"></div>
    </section>
  );
}
