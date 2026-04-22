"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crosshair, ArrowRight, Github } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/[0.05] via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block mb-8 sm:mb-10">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-full blur-2xl" />
            <Crosshair className="w-12 h-12 sm:w-16 sm:h-16 text-brand-accent relative" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Ready to Run a CrowdStrike-First Pilot?
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
              Keep Your Existing SOC Workflow.
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-xl mb-6 sm:mb-10">
            <span className="text-white/70">No new sensor</span>
            <span className="text-brand-accent">·</span>
            <span className="text-white/70">No new console</span>
            <span className="text-brand-accent">·</span>
            <span className="text-white/70">One integration</span>
          </div>

          <p className="text-white/50 text-sm sm:text-base lg:text-lg mb-10">
            Start a design-partner evaluation on a real Linux agent workload. We wire into your existing EDR and align pilot success criteria with your SOC team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 w-full sm:w-auto bg-brand-accent text-brand-black hover:bg-brand-accent/90" asChild>
              <a href="mailto:hello@engramai.io?subject=Design Partner Request — Lineage">
                Request Design-Partner Slot
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </a>
            </Button>

            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
              <a href="https://github.com/EngramAI-io/lineage" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
