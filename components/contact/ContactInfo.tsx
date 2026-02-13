"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { GoMail } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiMapPinLight } from "react-icons/pi";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ContactInfo() {
  return (
    <section className="bg-[#F5F2EB] py-20 lg:py-[112px] px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl">
        {/* Email Column */}
        <div className="flex flex-col gap-[16px]">
          <div className="text-2xl text-[#2F2F2F] mb-2 pl-0.5">
            <GoMail />
          </div>
          <h3
            className={`${playfairDisplay.className} text-xl lg:text-2xl text-[#2F2F2F] font-medium`}
          >
            Email
          </h3>
          <p
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed max-w-xs mb-2`}
          >
            Reach out for inquiries, support, or collaborations. We're here to
            help, always.
          </p>
          <Link
            href="mailto:hello@thestudio.com"
            className={`${spaceGrotesk.className} text-[#C47A5D] text-sm underline underline-offset-4 hover:text-[#A66248] transition-colors`}
          >
            hello@thestudio.com
          </Link>
        </div>

        {/* Phone Column */}
        <div className="flex flex-col gap-[16px]">
          <div className="text-2xl text-[#2F2F2F] mb-2 pl-0.5">
            <MdOutlineLocalPhone />
          </div>
          <h3
            className={`${playfairDisplay.className} text-xl lg:text-2xl text-[#2F2F2F] font-medium`}
          >
            Phone
          </h3>
          <p
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed max-w-xs mb-2`}
          >
            A direct line for quick assistance—because real conversations
            matter.
          </p>
          <Link
            href="tel:+15550000000"
            className={`${spaceGrotesk.className} text-[#C47A5D] text-sm underline underline-offset-4 hover:text-[#A66248] transition-colors`}
          >
            +1 (555) 000-0000
          </Link>
        </div>

        {/* Office Column */}
        <div className="flex flex-col gap-[16px] ">
          <div className="text-2xl text-[#2F2F2F] mb-2">
            <PiMapPinLight />
          </div>
          <h3
            className={`${playfairDisplay.className} text-xl lg:text-2xl text-[#2F2F2F] font-medium`}
          >
            Office
          </h3>
          <p
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-sm leading-relaxed mb-2`}
          >
            Nestled in [Sample Location], our space is designed to welcome
            you—virtually or in person.
          </p>
          <Link
            href="#"
            className={`${spaceGrotesk.className} text-[#C47A5D] text-sm underline underline-offset-4 hover:text-[#A66248] transition-colors`}
          >
            123 Sample St, Sydney NSW 2000 AU
          </Link>
        </div>
      </div>
    </section>
  );
}
