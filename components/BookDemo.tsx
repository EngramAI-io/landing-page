"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Calendar,
  MessageSquare,
  Building2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Cpu,
} from "lucide-react";

const demoIncludes = [
  "Yali platform architecture walkthrough",
  "Planner/Executor/Verifier role demonstration",
  "Dataset pipeline overview (104K+ samples)",
  "Integration and deployment planning",
  "Q&A with engineering team",
];

const useCases = [
  {
    icon: Shield,
    title: "Security Teams",
    description: "Validate AI agent safety controls before production deployment.",
  },
  {
    icon: Cpu,
    title: "AI Platform Teams",
    description: "Identify vulnerabilities in multi-agent orchestration systems.",
  },
  {
    icon: Zap,
    title: "Red Team Operators",
    description: "Automate attack campaigns with consistent, reproducible results.",
  },
];

export default function BookDemo() {
  return (
    <section id="demo" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/[0.05] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6"
            >
              <Calendar className="w-4 h-4 text-brand-accent" />
              <span className="text-sm text-brand-accent font-medium">Early Access Program</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Get Started with
              <span className="text-brand-accent"> Yali</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-8 leading-relaxed">
              Request early access to Yali&apos;s autonomous red-teaming platform. We&apos;ll define pilot goals,
              scope, and integration steps with your team.
            </p>

            {/* What&apos;s included */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">What&apos;s included:</h3>
              <div className="space-y-3">
                {demoIncludes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold mb-4">Perfect for:</h3>
              {useCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-brand-gray/30 border border-white/5 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{useCase.title}</h4>
                      <p className="text-white/50 text-sm">{useCase.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-emerald-500/20 rounded-3xl blur-xl" />

              <div className="relative bg-brand-gray/80 backdrop-blur-sm border border-brand-accent/30 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-accent to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-brand-black" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Let&apos;s Talk
                  </h3>
                  <p className="text-white/60">
                    Reach out to request an early access intake call
                  </p>
                </div>

                {/* Email CTA */}
                <div className="space-y-4">
                  <a href="mailto:hello@engramai.io?subject=Early Access Request - Yali" className="block">
                    <Button size="lg" className="w-full text-lg py-6 bg-brand-accent text-brand-black hover:bg-brand-accent/90 group">
                      <Mail className="w-5 h-5 mr-2" />
                      hello@engramai.io
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <p className="text-center text-white/40 text-sm">
                    We typically respond within 1 business day
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-white/30 text-sm">or</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Alternative contact */}
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://github.com/EngramAI-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-brand-accent transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="mailto:security@engramai.io?subject=Security Question - Yali"
                    className="flex items-center gap-2 text-white/60 hover:text-brand-accent transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Security</span>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-brand-accent">104K+</div>
                      <div className="text-[10px] text-white/40">Training Samples</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">3 SLMs</div>
                      <div className="text-[10px] text-white/40">Specialized</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">99.4%</div>
                      <div className="text-[10px] text-white/40">Schema Valid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}