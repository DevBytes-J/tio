"use client";

import Image from "next/image";

export default function ContactImage() {
  return (
    <section className="relative w-full h-[50vh] min-h-[300px] lg:min-h-[450px]">
      <Image src="/contact/list.jpg" alt="Interior" fill />
    </section>
  );
}
