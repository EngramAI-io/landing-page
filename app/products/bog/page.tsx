"use client";

import Nav from "@/components/Nav";
import BOGSection from "@/components/BOGSection";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function BOGPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <div className="pt-24" />
      <BOGSection />
      <BookDemo />
      <Footer />
    </main>
  );
}
