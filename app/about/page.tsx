"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutGallery from "@/components/about/AboutGallery";
import AboutStory from "@/components/about/AboutStory";
import FAQ from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";

export default function AboutPage() {
  return (
    <main className="bg-[#F5F2EB] min-h-screen">
      <NavBar />
      <AboutHero />
      <AboutStats />
      <AboutGallery />
      <AboutStory />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
