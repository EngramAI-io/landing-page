"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Platform from "@/components/Platform";
import BOGSection from "@/components/BOGSection";
import MemGuardSection from "@/components/MemGuardSection";
import SentinelSection from "@/components/SentinelSection";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <Hero />
      <Benefits />
      <Products />
      <Platform />
      <BOGSection />
      <MemGuardSection />
      <SentinelSection />
      <BookDemo />
      <Footer />
    </main>
  );
}
