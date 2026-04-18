"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CoreFeatures from "@/components/CoreFeatures";
import ComplianceBadges from "@/components/ComplianceBadges";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import EnterpriseUseCases from "@/components/EnterpriseUseCases";
import FinalCTA from "@/components/FinalCTA";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <Hero />
      <ProblemSection />
      <CoreFeatures />
      <HowItWorks />
      <EnterpriseUseCases />
      <ComplianceBadges />
      <FinalCTA />
      <BookDemo />
      <Footer />
    </main>
  );
}
