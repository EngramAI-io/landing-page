"use client";

import Nav from "@/components/Nav";
import MemGuardSection from "@/components/MemGuardSection";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function MemGuardPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <div className="pt-24" />
      <MemGuardSection />
      <BookDemo />
      <Footer />
    </main>
  );
}
