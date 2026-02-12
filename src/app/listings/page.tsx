"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";
import ListingHero from "@/components/listing/ListingHero";
import ListingDetails from "@/components/listing/ListingDetails";
import ListingGallery from "@/components/listing/ListingGallery";
import CTASection from "@/components/landing/CTASection";

export default function ListingPage() {
  return (
    <main className="relative bg-[#F5F2EB] min-h-screen">
      <NavBar />
      <ListingHero />
      <ListingDetails />
      <ListingGallery />
      <CTASection />
      <Footer />
    </main>
  );
}