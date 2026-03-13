"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustDiagram from "@/components/TrustDiagram";
import CoreFeatures from "@/components/CoreFeatures";
import ComplianceBadges from "@/components/ComplianceBadges";
import BusinessValue from "@/components/BusinessValue";
import ProblemSection from "@/components/ProblemSection";
import AgentPassport from "@/components/AgentPassport";
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
      <TrustDiagram />
      <CoreFeatures />
      <ComplianceBadges />
      <BusinessValue />
      <ProblemSection />
      <AgentPassport />
      <HowItWorks />
      <EnterpriseUseCases />
      <FinalCTA />
      <BookDemo />
      <Footer />
    </main>
  );
}
