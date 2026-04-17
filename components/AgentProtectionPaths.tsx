"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Shield,
  ScanSearch,
  Zap,
  Lock,
  Fingerprint,
} from "lucide-react";

const phases = [
  {
    phase: "PHASE 01",
    title: "Identity & Intent Capture",
    description:
      "Every action starts with a cryptographic agent identity and a signed statement of intent—who is acting, why, and for what objective.",
    icon: ScanSearch,
    accent: "from-sky-400/20 via-brand-accent/10 to-transparent",
  },
  {
    phase: "PHASE 02",
    title: "Policy-Driven Guardrails",
    description:
      "EngramAI evaluates the request against your policies, blast-radius limits, and environment context—blocking ambiguous or unsafe actions before execution.",
    icon: Shield,
    accent: "from-emerald-400/20 via-brand-accent/10 to-transparent",
  },
  {
    phase: "PHASE 03",
    title: "Just-In-Time Execution",
    description:
      "When approved, agents receive ephemeral credentials and execute with least privilege—then keys self-destruct and the trail is auditable end-to-end.",
    icon: Zap,
    accent: "from-violet-400/20 via-brand-accent/10 to-transparent",
  },
];

const controls = [
  "A-ID / signed identity",
  "Semantic intent firewall",
  "Scoped permissions",
  "JIT credentials",
  "A2A behavior scoring",
  "Audit & provenance",
];

const objectives = [
  "DATA EXFILTRATION",
  "PRIVILEGE ESCALATION",
  "SECRETS LEAKS",
  "MALICIOUS TOOL USE",
  "PROMPT INJECTION",
  "SUPPLY CHAIN ABUSE",
];

export default function AgentProtectionPaths() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: sticky narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="text-xs tracking-widest text-white/60">
                  Built for agent defense
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-[1.05]">
                Built to protect
                <br />
                <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
                  real paths to compromise
                </span>
              </h2>

              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Attackers chain small weaknesses into kill chains. A compromised
                agent does the same—tool call by tool call. EngramAI identifies
                those paths and enforces trust before any damaging step executes.
              </p>
            </motion.div>

            {/* Mini “graphic” (static) */}
            <div className="bg-brand-gray/35 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <Fingerprint className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Agent request
                    </div>
                    <div className="text-xs text-white/50">
                      identity + intent attached
                    </div>
                  </div>
                </div>

                <div className="h-px flex-1 bg-gradient-to-r from-brand-accent/50 via-white/10 to-white/0" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-white">
                      Enforced execution
                    </div>
                    <div className="text-xs text-white/50">
                      ephemeral access only
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-white/50">
                <ArrowDown className="w-4 h-4" />
                <span className="text-xs">
                  Scroll the phases to see how it works
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-brand-black/20 border border-white/10 rounded-2xl p-6">
                <div className="text-xs tracking-widest text-white/50 mb-3">
                  SECURITY STACK / CONTROLS
                </div>
                <div className="flex flex-wrap gap-2">
                  {controls.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-brand-gray/40 border border-white/10 text-white/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-brand-black/20 border border-white/10 rounded-2xl p-6">
                <div className="text-xs tracking-widest text-white/50 mb-3">
                  PROTECTS AGAINST
                </div>
                <div className="flex flex-wrap gap-2">
                  {objectives.map((o) => (
                    <span
                      key={o}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-accent/10 border border-brand-accent/20 text-brand-accent/90"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: scrollable “block” with timeline */}
          <div className="lg:col-span-7">
            <div className="relative bg-brand-gray/25 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="text-sm font-semibold text-white/80">
                    How EngramAI identifies & blocks paths
                  </div>
                  <div className="text-xs text-white/45">Contained timeline</div>
                </div>

                <div className="relative">
                  {/* subtle edge fades to imply scroll */}
                  <div className="pointer-events-none absolute left-0 right-0 top-0 h-10 bg-gradient-to-b from-brand-black/70 to-transparent rounded-t-2xl z-10" />
                  <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-14 bg-gradient-to-t from-brand-black/70 to-transparent rounded-b-2xl z-10" />

                  <div className="relative h-[420px] md:h-[460px] overflow-y-scroll pr-4 scroll-smooth snap-y snap-mandatory">
                  {/* timeline track */}
                  <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-accent/60 via-white/10 to-white/0" />

                  <div className="space-y-6">
                    {phases.map((p, idx) => {
                      const Icon = p.icon;
                      return (
                        <motion.div
                          key={p.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ amount: 0.4 }}
                          transition={{ duration: 0.5 }}
                          className="relative pl-12 snap-start"
                        >
                          {/* node */}
                          <div className="absolute left-[10px] top-6 w-6 h-6 rounded-full bg-brand-black border border-brand-accent/40 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-brand-accent" />
                          </div>

                          <div className="relative overflow-hidden bg-brand-black/30 border border-white/10 rounded-2xl p-6 md:p-7 hover:border-brand-accent/25 transition-colors min-h-[260px]">
                            <div
                              className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${p.accent}`}
                            />
                            <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />

                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <div className="text-xs tracking-widest text-white/50">
                                  {p.phase}
                                </div>
                                <div className="text-2xl font-bold text-white">
                                  {p.title}
                                </div>
                              </div>
                              <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-brand-accent" />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                              <div className="md:col-span-7">
                                <p className="text-white/60 leading-relaxed">
                                  {p.description}
                                </p>

                                <div className="mt-5 grid grid-cols-2 gap-2">
                                  <div className="px-3 py-2 rounded-lg bg-brand-gray/30 border border-white/10 text-xs text-white/60">
                                    Verified context
                                  </div>
                                  <div className="px-3 py-2 rounded-lg bg-brand-gray/30 border border-white/10 text-xs text-white/60">
                                    Least privilege
                                  </div>
                                  <div className="px-3 py-2 rounded-lg bg-brand-gray/30 border border-white/10 text-xs text-white/60">
                                    Deterministic policies
                                  </div>
                                  <div className="px-3 py-2 rounded-lg bg-brand-gray/30 border border-white/10 text-xs text-white/60">
                                    Auditable trail
                                  </div>
                                </div>
                              </div>

                              {/* Creative graphic */}
                              <div className="md:col-span-5">
                                <div className="relative h-[150px] md:h-full min-h-[150px] rounded-2xl bg-brand-gray/25 border border-white/10 overflow-hidden">
                                  <div className="absolute inset-0 opacity-70 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,148,0.18),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_40%_90%,rgba(56,189,248,0.14),transparent_50%)]" />

                                  {/* dotted grid */}
                                  <div className="absolute inset-0 pointer-events-none opacity-[0.18] [background-image:radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:18px_18px]" />

                                  {/* nodes + links */}
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-[210px] h-[120px]">
                                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-brand-black/60 border border-white/10 flex items-center justify-center">
                                        <Fingerprint className="w-5 h-5 text-white/70" />
                                      </div>

                                      <div className="absolute left-1/2 top-5 -translate-x-1/2 w-10 h-10 rounded-2xl bg-brand-black/60 border border-brand-accent/25 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-brand-accent/90" />
                                      </div>

                                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-brand-black/60 border border-white/10 flex items-center justify-center">
                                        <Lock className="w-5 h-5 text-white/70" />
                                      </div>

                                      <svg
                                        className="absolute inset-0"
                                        viewBox="0 0 210 120"
                                        fill="none"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M40 60 C 70 60, 75 35, 105 35 C 135 35, 140 60, 170 60"
                                          stroke="rgba(0,255,148,0.35)"
                                          strokeWidth="2"
                                        />
                                        <path
                                          d="M40 60 C 70 60, 75 85, 105 85 C 135 85, 140 60, 170 60"
                                          stroke="rgba(255,255,255,0.12)"
                                          strokeWidth="2"
                                        />
                                      </svg>

                                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-accent/10 blur-xl" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

