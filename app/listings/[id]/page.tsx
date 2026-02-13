import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";
import ListingHero from "@/components/listing/ListingHero";
import ListingDetails from "@/components/listing/ListingDetails";
import ListingGallery from "@/components/listing/ListingGallery";
import { listings } from "@/data/listings";

export default async function ListingPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const listingId = parseInt(params.id);
  const listing = listings.find((l) => l.id === listingId);

  if (!listing) {
    notFound();
  }

  return (
    <main className="relative bg-[#F5F2EB] min-h-screen">
      <NavBar />
      <ListingHero />
      <ListingDetails listing={listing} />
      <ListingGallery />
      <Footer />
    </main>
  );
}
