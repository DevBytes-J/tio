"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";
import ListingHero from "@/components/listing/ListingHero";
import ListingDetails from "@/components/listing/ListingDetails";
import ListingGallery from "@/components/listing/ListingGallery";
import CTASection from "@/components/landing/CTASection";

import { listings } from "@/data/listings";

export default function ListingPage() {
  return (
    <main className="relative bg-[#F5F2EB] min-h-screen">
      <NavBar />
      <ListingHero />
      <ListingDetails listing={listings[0]} />
      <ListingGallery />
      <CTASection />
      <Footer />
    </main>
  );
}
