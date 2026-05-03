"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crosshair, Shield, Zap, ArrowRight, Database, Cpu, Target, Brain } from "lucide-react";

export default function Hero() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-x-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,148,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,148,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] lg:w-[1100px] lg:h-[1100px] rounded-full bg-brand-accent/8 blur-[150px] sm:blur-[200px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl lg:max-w-7xl mx-auto relative z-10"
      >
        {/* Mythos badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6 sm:mb-8">
            <Crosshair className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">
              The Mythos Threat: Autonomous AI compressing weeks of attacks into minutes
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent leading-[1.1]">
            Fight Mythos-Level Threats
            <br />
            <span className="bg-gradient-to-r from-brand-accent via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              With Autonomous Red-Teaming.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-2 max-w-4xl mx-auto leading-relaxed px-4">
            Test your <span className="text-brand-accent font-semibold">AI Agents</span>, <span className="text-brand-accent font-semibold">RAG Systems</span>, <span className="text-brand-accent font-semibold">MCPs</span>, and <span className="text-brand-accent font-semibold">AI Dies</span> before adversaries do.
          </p>
        </motion.div>

        {/* SVG Attack Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-brand-gray/50 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden">
            <svg viewBox="0 0 900 320" className="w-full h-auto" style={{ maxHeight: '320px' }}>
              {/* Background grid */}
              <defs>
                <pattern id="grid2" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="900" height="320" fill="url(#grid2)" />

              {/* TEST TARGETS Section */}
              <g transform="translate(30, 40)">
                <text x="80" y="0" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle" fontFamily="system-ui" fontWeight="600">TEST TARGETS</text>

                {/* AI Agent box */}
                <rect x="10" y="15" width="140" height="55" rx="8" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
                <text x="80" y="38" fill="#3b82f6" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">AI Agents</text>
                <text x="80" y="55" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle" fontFamily="system-ui">LangChain, CrewAI, AutoGen</text>

                {/* RAG box */}
                <rect x="10" y="85" width="140" height="55" rx="8" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5"/>
                <text x="80" y="108" fill="#a855f7" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">RAG Systems</text>
                <text x="80" y="125" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle" fontFamily="system-ui">Vector DB + LLM Pipelines</text>

                {/* MCP box */}
                <rect x="10" y="155" width="140" height="55" rx="8" fill="rgba(236,72,153,0.1)" stroke="rgba(236,72,153,0.5)" strokeWidth="1.5"/>
                <text x="80" y="178" fill="#ec4899" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">MCP Servers</text>
                <text x="80" y="195" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle" fontFamily="system-ui">Model Context Protocol</text>

                {/* AI Die box */}
                <rect x="10" y="225" width="140" height="50" rx="8" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5"/>
                <text x="80" y="248" fill="#f97316" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">AI Dies / OCI</text>
                <text x="80" y="263" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle" fontFamily="system-ui">GPU Instances</text>
              </g>

              {/* Arrow from targets to attack engine */}
              <g transform="translate(195, 150)">
                <path d="M 0 0 L 70 0" stroke="rgba(0,255,148,0.6)" strokeWidth="2.5" strokeDasharray="6 3"/>
                <polygon points="70,-8 85,0 70,8" fill="rgba(0,255,148,0.6)"/>
                <text x="35" y="-12" fill="rgba(0,255,148,0.6)" fontSize="9" fontFamily="system-ui">ATTACK</text>
              </g>

              {/* Yali Attack Engine */}
              <g transform="translate(280, 30)">
                <rect x="0" y="0" width="200" height="240" rx="14" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.5)" strokeWidth="2"/>
                <text x="100" y="28" fill="#00FF94" fontSize="16" textAnchor="middle" fontWeight="700" fontFamily="system-ui">YALI ENGINE</text>
                <text x="100" y="45" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle" fontFamily="system-ui">Autonomous Red-Teaming Platform</text>

                {/* Multi-Agent Pipeline */}
                <rect x="15" y="60" width="85" height="40" rx="8" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.5)" strokeWidth="1"/>
                <text x="57" y="78" fill="#00d4ff" fontSize="11" textAnchor="middle" fontWeight="600" fontFamily="system-ui">PLANNER</text>
                <text x="57" y="92" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle" fontFamily="system-ui">Decompose goals</text>

                <path d="M 100 80 L 115 80" stroke="rgba(0,255,148,0.5)" strokeWidth="2"/>
                <polygon points="115,77 122,80 115,83" fill="rgba(0,255,148,0.5)"/>

                <rect x="125" y="60" width="60" height="40" rx="8" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.5)" strokeWidth="1"/>
                <text x="155" y="78" fill="#22c55e" fontSize="11" textAnchor="middle" fontWeight="600" fontFamily="system-ui">EXEC</text>
                <text x="155" y="92" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle" fontFamily="system-ui">Attack</text>

                {/* Verifier */}
                <rect x="15" y="115" width="170" height="35" rx="8" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.5)" strokeWidth="1"/>
                <text x="100" y="138" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">VERIFIER — eBPF Kernel Telemetry</text>

                {/* Attack Coverage Badges */}
                <text x="100" y="175" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">COVERAGE</text>

                <rect x="15" y="185" width="45" height="22" rx="4" fill="rgba(0,255,148,0.15)" stroke="rgba(0,255,148,0.4)" strokeWidth="1"/>
                <text x="37" y="200" fill="#00FF94" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">OWASP</text>

                <rect x="68" y="185" width="55" height="22" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
                <text x="95" y="200" fill="#a855f7" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">MITRE</text>

                <rect x="130" y="185" width="55" height="22" rx="4" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
                <text x="157" y="200" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">CWE</text>

                {/* OWASP ASI Labels */}
                <text x="100" y="230" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle" fontFamily="system-ui">ASI01-10 Coverage</text>
              </g>

              {/* Arrow from engine to findings */}
              <g transform="translate(500, 150)">
                <path d="M 0 0 L 70 0" stroke="rgba(0,255,148,0.6)" strokeWidth="2.5" strokeDasharray="6 3"/>
                <polygon points="70,-8 85,0 70,8" fill="rgba(0,255,148,0.6)"/>
                <text x="35" y="-12" fill="rgba(0,255,148,0.6)" fontSize="9" fontFamily="system-ui">FIND</text>
              </g>

              {/* Findings Report */}
              <g transform="translate(600, 30)">
                <text x="130" y="0" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle" fontFamily="system-ui" fontWeight="600">FINDINGS REPORT</text>

                <rect x="10" y="15" width="240" height="230" rx="12" fill="rgba(220,38,38,0.06)" stroke="rgba(220,38,38,0.3)" strokeWidth="1.5"/>

                {/* Finding items with severity */}
                <g transform="translate(25, 40)">
                  <rect x="0" y="0" width="12" height="12" rx="2" fill="#dc2626"/>
                  <text x="20" y="10" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="system-ui">Prompt Injection — ASI01</text>
                  <text x="20" y="22" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="system-ui">CVSS 9.1 — Critical</text>
                </g>

                <g transform="translate(25, 75)">
                  <rect x="0" y="0" width="12" height="12" rx="2" fill="#dc2626"/>
                  <text x="20" y="10" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="system-ui">Data Exfiltration — ASI09</text>
                  <text x="20" y="22" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="system-ui">CVSS 8.7 — High</text>
                </g>

                <g transform="translate(25, 110)">
                  <rect x="0" y="0" width="12" height="12" rx="2" fill="#f97316"/>
                  <text x="20" y="10" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="system-ui">MCP Privilege Escalation</text>
                  <text x="20" y="22" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="system-ui">CVSS 7.5 — Medium</text>
                </g>

                <g transform="translate(25, 145)">
                  <rect x="0" y="0" width="12" height="12" rx="2" fill="#f97316"/>
                  <text x="20" y="10" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="system-ui">Memory Poisoning — ASI06</text>
                  <text x="20" y="22" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="system-ui">CVSS 6.8 — Medium</text>
                </g>

                {/* Compliance badges */}
                <g transform="translate(25, 185)">
                  <rect x="0" y="0" width="70" height="24" rx="4" fill="rgba(0,255,148,0.15)" stroke="rgba(0,255,148,0.4)" strokeWidth="1"/>
                  <text x="35" y="16" fill="#00FF94" fontSize="9" textAnchor="middle" fontWeight="600" fontFamily="system-ui">SARIF Ready</text>

                  <rect x="80" y="0" width="70" height="24" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
                  <text x="115" y="16" fill="#a855f7" fontSize="9" textAnchor="middle" fontWeight="600" fontFamily="system-ui">STIX 2.1</text>
                </g>

                <g transform="translate(25, 218)">
                  <rect x="0" y="0" width="70" height="20" rx="4" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
                  <text x="35" y="13" fill="#3b82f6" fontSize="9" textAnchor="middle" fontWeight="600" fontFamily="system-ui">MITRE ATLAS</text>

                  <rect x="80" y="0" width="70" height="20" rx="4" fill="rgba(249,115,22,0.15)" stroke="rgba(249,115,22,0.4)" strokeWidth="1"/>
                  <text x="115" y="13" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Remediation</text>
                </g>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Test Targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-center text-white/50 text-sm mb-4">Test your entire AI stack:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { label: "AI Agents", icon: Brain, color: "#3b82f6", desc: "LangChain, CrewAI, AutoGen" },
              { label: "RAG Systems", icon: Database, color: "#a855f7", desc: "Vector DB + LLM" },
              { label: "MCP Servers", icon: Zap, color: "#ec4899", desc: "Tool protocols" },
              { label: "AI Dies / OCI", icon: Target, color: "#f97316", desc: "GPU instances" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-brand-gray/40 border border-white/10 rounded-full hover:border-brand-accent/30 transition-all">
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                  <span className="text-white/70 text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 bg-brand-accent text-brand-black hover:bg-brand-accent/90 w-full sm:w-auto" onClick={scrollToDemo}>
            Request Early Access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
            <a href="https://github.com/EngramAI-io" target="_blank" rel="noopener noreferrer">
              <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {[
            { value: "10/10", label: "OWASP ASI", color: "#00FF94" },
            { value: "ALL", label: "MITRE ATLAS", color: "#a855f7" },
            { value: "0", label: "LLM Self-Report", color: "#dc2626" },
            { value: "100%", label: "Kernel Telemetry", color: "#f97316" },
            { value: "VPC", label: "Your Data Home", color: "#3b82f6" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 sm:p-4 bg-brand-gray/30 border border-white/5 rounded-xl">
              <div className="text-base sm:text-lg lg:text-xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}