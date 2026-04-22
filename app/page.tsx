"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EDRIntegrationStrip from "@/components/EDRIntegrationStrip";
import ProblemSection from "@/components/ProblemSection";
import CoreFeatures from "@/components/CoreFeatures";
import HowItWorks from "@/components/HowItWorks";
import EnterpriseUseCases from "@/components/EnterpriseUseCases";
import ComplianceBadges from "@/components/ComplianceBadges";
import FinalCTA from "@/components/FinalCTA";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Nav />
      <Hero />
      <HowItWorks />
      <EDRIntegrationStrip />
      <ProblemSection />
      <CoreFeatures />
      <EnterpriseUseCases />
      <ComplianceBadges />
      <FinalCTA />
      <BookDemo />
      <Footer />
    </main>
  );
}
