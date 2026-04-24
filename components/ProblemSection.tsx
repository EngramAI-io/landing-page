"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Eye, GitBranch, Brain } from "lucide-react";

const gaps = [
  {
    icon: Eye,
    title: "EDR Sees the Syscall",
    description: "CrowdStrike / SentinelOne / Cortex XDR / Defender capture every process exec, file open, and network connection on Linux with sub-millisecond precision.",
    color: "text-white/70",
    bg: "bg-white/5",
    border: "border-white/10",
  },
  {
    icon: AlertTriangle,
    title: "But Not the Intent That Caused It",
    description: "None of them know the Python process was a LangChain agent. None of them know the user asked it to 'look up a support ticket'. None of them can tell whether opening /etc/shadow was authorised.",
    color: "text-red-400",
    bg: "bg-red-500/5",
    border: "border-red-500/20",
  },
  {
    icon: GitBranch,
    title: "Prompt Injection Closes the Gap — Invisibly",
    description: "A malicious instruction hidden in a ticket, email, or database record hijacks the agent mid-task. The declared intent says 'lookup'. The kernel sees credential access and a reverse shell. No tool today bridges these two realities.",
    color: "text-red-400",
    bg: "bg-red-500/5",
    border: "border-red-500/20",
  },
  {
    icon: Brain,
    title: "Lineage Closes That Gap",
    description: "Lineage joins the agent's Langfuse intent trace with your existing EDR's kernel events. Every syscall is tagged with the agent run, declared intent, and semantic alignment score — then the verdict writes back into your EDR console.",
    color: "text-brand-accent",
    bg: "bg-brand-accent/5",
    border: "border-brand-accent/20",
  },
];

const stats = [
  { value: "trace_id", label: "Attach each host event to the originating agent run" },
  { value: "policy-first", label: "Deterministic policy remains enforcement authority" },
  { value: "writeback", label: "Send attributed verdict context into existing SOC workflows" },
];

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4 sm:mb-6"
          >
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-xs sm:text-sm text-red-400 font-medium">The Attribution Gap</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            The <span className="text-white">AI Attribution Gap</span> in SOC Workflows.
            <br />
            <span className="text-brand-accent">Lineage Adds Agent Intent Context to Host Events.</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-8 px-2">
            The moment you deploy AI agents on Linux, you create a blind spot between the kernel and the LLM. 
            CrowdStrike Falcon captures the syscall. It has no way to know the Python process was a LangChain agent 
            acting on a prompt injection — and that the user never authorised what just happened.
          </p>

          {/* The concrete example */}
          <div className="max-w-2xl mx-auto bg-brand-gray/40 border border-white/10 rounded-xl p-4 sm:p-6 text-left font-mono text-xs sm:text-sm mb-8 overflow-x-auto">
            <div className="text-white/40 mb-2 font-sans text-[10px] uppercase tracking-wider">What your SOC sees today</div>
            <div className="space-y-1 whitespace-nowrap min-w-max">
              <div><span className="text-white/30">falcon_detect:</span> <span className="text-yellow-400/80">python3</span> → <span className="text-red-400">openat(/etc/shadow)</span></div>
              <div><span className="text-white/30">falcon_detect:</span> <span className="text-yellow-400/80">python3</span> → <span className="text-red-400">connect(198.51.100.10:4444)</span></div>
            </div>
            <div className="border-t border-white/10 mt-3 pt-3">
              <div className="text-white/40 mb-2 font-sans text-[10px] uppercase tracking-wider">What Lineage adds</div>
              <div className="space-y-1 whitespace-nowrap min-w-max">
                <div><span className="text-brand-accent">lineage:</span> agent=<span className="text-white">langchain:support-bot</span> trace=<span className="text-white/60">abc123</span></div>
                <div><span className="text-brand-accent">lineage:</span> declared_intent=<span className="text-white">&ldquo;look up ticket #4821&rdquo;</span></div>
                <div><span className="text-brand-accent">lineage:</span> verdict=<span className="text-red-400 font-bold">MALICIOUS</span> risk=<span className="text-red-400">95</span> policy=<span className="text-red-400">VIOLATED</span></div>
                <div><span className="text-brand-accent">lineage:</span> reason=<span className="text-white/70">INTENT_ACTION_MISMATCH · SECRET_ACCESS · EXFIL_SHAPE</span></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-brand-gray/40 border border-white/10 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-accent mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-white/50 text-xs sm:text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gap cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {gaps.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group ${g.bg} border ${g.border} rounded-xl p-4 sm:p-6 hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${g.bg} border ${g.border} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${g.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${g.color}`}>{g.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{g.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
