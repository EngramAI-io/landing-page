"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AgentArchitecture from "@/components/AgentArchitecture";
import ExecutionSandbox from "@/components/ExecutionSandbox";
import Comparison from "@/components/Comparison";
import FinalCTA from "@/components/FinalCTA";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black overflow-x-hidden">
      <Nav />
      <Hero />
      <AgentArchitecture />
      <ExecutionSandbox />
      <Comparison />
      <FinalCTA />
      <BookDemo />
      <Footer />
    </main>
  );
}