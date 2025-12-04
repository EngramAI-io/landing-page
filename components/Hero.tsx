"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          The Neural Network Tab for AI Agents.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stop debugging blindly. Sentinel intercepts, visualizes, and secures your Agent&apos;s thought process in real-time.{" "}
          <span className="text-brand-accent">&lt;1ms latency</span>.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button size="lg" className="text-lg px-12">
            Install Sentinel
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Video */}
      <HeroVideo />
    </section>
  );
}
