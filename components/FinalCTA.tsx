"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/[0.05] via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block mb-10">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-full blur-2xl" />
            <Shield className="w-16 h-16 text-brand-accent relative" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            We Don&#39;t Build Agents.
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
              We Build The Reason Enterprises Trust Them.
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-lg md:text-xl mb-10">
            <span className="text-white/70">Identity first</span>
            <span className="text-brand-accent">•</span>
            <span className="text-white/70">Task scoped</span>
            <span className="text-brand-accent">•</span>
            <span className="text-white/70">Self destructing</span>
          </div>

          <p className="text-white/50 text-lg mb-10">
            That is the Engram Protocol standard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-12 bg-brand-accent text-brand-black hover:bg-brand-accent/90" asChild>
              <a href="mailto:hello@engramai.io?subject=Demo Request - EngramAI">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>

            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="https://github.com/EngramAI-io" target="_blank" rel="noopener noreferrer">
                Read the Architecture
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
