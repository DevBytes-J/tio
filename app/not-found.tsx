import Link from "next/link";
import { Space_Grotesk, Playfair_Display } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F2EB] text-[#2F2F2F] px-4">
      <h1
        className={`${playfairDisplay.className} text-6xl md:text-8xl italic mb-4`}
      >
        404
      </h1>
      <h2
        className={`${spaceGrotesk.className} text-2xl md:text-3xl font-medium mb-6`}
      >
        Page Not Found
      </h2>
      <p
        className={`${spaceGrotesk.className} text-[#2F2F2F]/60 text-center max-w-md mb-8`}
      >
        We couldn't find the page you were looking for. It seems like you've
        ventured a bit too far.
      </p>
      <Link
        href="/"
        className={`${spaceGrotesk.className} text-white bg-[#2F2F2F] px-8 py-3 rounded-full hover:opacity-90 transition-opacity`}
      >
        Return Home
      </Link>
    </div>
  );
}
