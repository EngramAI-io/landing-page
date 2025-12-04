"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import InstallBar from "@/components/InstallBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <Hero />
      <Features />
      <Vision />
      <InstallBar />
      <Footer />
    </main>
  );
}
