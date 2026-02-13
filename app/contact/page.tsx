"use client";

import ContactHero from "@/components/contact/ContactHero";
import NavBar from "@/components/NavBar";
import ContactImage from "@/components/contact/ContactImage";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#F5F2EB]">
      <NavBar />
      <ContactHero />
      <ContactImage />
      <ContactInfo />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
