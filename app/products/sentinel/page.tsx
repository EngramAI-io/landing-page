"use client";

import Nav from "@/components/Nav";
import SentinelSection from "@/components/SentinelSection";
import Features from "@/components/Features";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function SentinelPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <div className="pt-24" />
      <SentinelSection />
      <Features />
      <BookDemo />
      <Footer />
    </main>
  );
}
