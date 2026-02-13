"use client";

import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ContactHero() {
  return (
    <section className="bg-[#ffffff] w-full lg:min-h-[600px] flex flex-col lg:flex-row">
      {/* Left Side: Textured Background & Text */}
      <div className="relative w-full lg:w-[60%] min-h-[250px] lg:h-auto">
        {/* Overlay Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 lg:px-20 py-16">
          <h1
            className={`${playfairDisplay.className} italic text-4xl lg:text-[64px] leading-tight text-[#2F2F2F] mb-6`}
          >
            Let's Talk - <br /> We're Here to Help
            <span className="text-[#C47A5D]">.</span>
          </h1>
          <p
            className={`${spaceGrotesk.className} text-[#2F2F2F]/60 max-w-md text-sm lg:text-base leading-relaxed`}
          >
            Have questions or inquiries? Whether you're looking for the perfect
            space or need assistance, we're just a message away.
          </p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 lg:px-24 py-16 bg-[#F5F2EB]">
        <form className="flex flex-col gap-6 w-full max-w-lg mx-auto lg:mx-0">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className={`${spaceGrotesk.className} text-xs uppercase tracking-wide text-[#2F2F2F]/60 font-medium`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder=""
              className="w-full bg-transparent border border-[#2F2F2F]/10 rounded-lg h-12 px-4 focus:outline-none focus:border-[#2F2F2F]/40 transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className={`${spaceGrotesk.className} text-xs uppercase tracking-wide text-[#2F2F2F]/60 font-medium`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder=""
              className="w-full bg-transparent border border-[#2F2F2F]/10 rounded-lg h-12 px-4 focus:outline-none focus:border-[#2F2F2F]/40 transition-colors"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className={`${spaceGrotesk.className} text-xs uppercase tracking-wide text-[#2F2F2F]/60 font-medium`}
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message..."
              className={`${spaceGrotesk.className} w-full bg-[#F9F8F6] border border-[#2F2F2F]/5 rounded-lg h-40 p-4 resize-none focus:outline-none focus:border-[#2F2F2F]/40 transition-colors text-sm text-[#2F2F2F]/80 placeholder:text-[#2F2F2F]/30`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#2F2F2F] text-white px-8 py-3 rounded-full w-fit flex items-center gap-2 hover:bg-black transition-colors self-start "
          >
            <span className={`${spaceGrotesk.className} text-sm font-medium`}>
              Submit
            </span>
            <GoArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
}
