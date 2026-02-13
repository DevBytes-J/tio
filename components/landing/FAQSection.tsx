"use client";

import { useState } from "react";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { GoPlus, GoDash } from "react-icons/go";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const faqs = [
  {
    question: "What makes your listings different from others?",
    answer:
      "Our listings focus on interiors, helping you feel the space, not just see it—because a home is more than square footage.",
  },
  {
    question: "Do you offer newly built homes?",
    answer:
      "Absolutely. Our portfolio includes a wide selection of newly constructed homes featuring modern designs and amenities.",
  },
  {
    question: "Can I take virtual tours of properties?",
    answer:
      "Yes, many of our properties offer immersive virtual tours that allow you to explore the space from the comfort of your home.",
  },
  {
    question: "Can I get personalized recommendations?",
    answer:
      "Yes, our team creates curated selections based on your specific preferences, lifestyle, and design tastes.",
  },
  {
    question: "How do I schedule a viewing?",
    answer:
      "Simply click the 'Get in Touch' button on any listing page, and our team will coordinate a time that works best for you.",
  },
  {
    question: "How often are new listings added?",
    answer:
      "We update our portfolio weekly with new, hand-picked properties that meet our strict design and quality standards.",
  },
  {
    question: "Are there financing options available?",
    answer:
      "We work with trusted financial partners to provide you with a range of financing options tailored to your needs.",
  },
  {
    question: "What should I do if I find a home I love?",
    answer:
      "Reach out immediately! Our high-demand properties move quickly. We'll guide you through the offer process step-by-step.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1A1A1A] w-full py-[112px] px-6 text-[#E8E4D9]">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2
            className={`${playfairDisplay.className} text-[40px] italic leading-tight mb-8`}
          >
            Frequently
            <br />
            Asked Questions<span className="text-[#C47A5D]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[1110px]:grid-cols-2 gap-x-12 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-b border-[#E8E4D9]/20 py-[26px] cursor-pointer h-fit"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start py-2">
                <h3
                  className={`${spaceGrotesk.className} text-base md:text-lg font-medium pr-8`}
                >
                  {faq.question}
                </h3>
                <div className="text-xl text-[#E8E4D9]/80 shrink-0">
                  {openIndex === index ? <GoDash /> : <GoPlus />}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`${spaceGrotesk.className} text-sm text-[#E8E4D9]/70 leading-relaxed`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-end gap-6">
          <p
            className={`${spaceGrotesk.className} text-[#E8E4D9]/60 text-right`}
          >
            Still have questions?
          </p>
          <button className="bg-[#E8E4D9] text-[#1A1A1A] px-[18px] py-3 rounded-full text-[14px] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer">
            Get in Touch <MdOutlineKeyboardArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
