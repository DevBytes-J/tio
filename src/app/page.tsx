"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/landing/hero";
import InsideOutSection from "@/components/landing/InsideOutSection";
import ListingsSection from "@/components/landing/ListingsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FindHomeSection from "@/components/landing/FindHomeSection";
import FAQSection from "@/components/landing/FAQSection";
import BeyondWallsSection from "@/components/landing/BeyondWallsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <InsideOutSection />
      <ListingsSection />
      <FeaturesSection />
      <FindHomeSection />
      <FAQSection />
      <BeyondWallsSection />
      <CTASection />
      <Footer />
    </>
  );
}
