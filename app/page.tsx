"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatIs from "@/components/WhatIs";
import Comparison from "@/components/Comparison";
import Security from "@/components/Security";
import Vision from "@/components/Vision";
import InstallBar from "@/components/InstallBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <Hero />
      <Features />
      <WhatIs />
      <Comparison />
      <Security />
      <Vision />
      <InstallBar />
      <Footer />
    </main>
  );
}
