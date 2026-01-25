"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Eye, 
  Users,
  Shield, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Github,
  Zap,
  Lock,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "bog",
    name: "BOG",
    fullName: "Behavioral Orchestration Graph",
    tagline: "Multi-Agent Consensus Validation",
    description: "Validate coordinated AI agent actions using Weighted Byzantine Fault Tolerance. Prevent rogue agents from executing unauthorized operations through distributed consensus.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    accentColor: "blue",
    badge: "Enterprise",
    features: [
      "Weighted Byzantine Fault Tolerance (WBFT)",
      "Intent Extraction & Validation",
      "Bayesian Risk Inference",
      "Multi-Agent Coordination",
      "Action Catalog Enforcement"
    ],
    stats: [
      { value: "200ms", label: "Validation" },
      { value: "5,000", label: "RPS" },
      { value: "99.9%", label: "Accuracy" }
    ],
    cta: "Learn More",
    ctaLink: "#bog"
  },
  {
    id: "memguard",
    name: "MemGuard",
    fullName: "Memory Poisoning Detection",
    tagline: "RAG Security & Integrity",
    description: "Protect AI agents from AgentPoison attacks with 100% detection accuracy. Multi-layer detection pipeline identifies poisoned embeddings before they compromise your system.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    accentColor: "violet",
    badge: "Enterprise",
    features: [
      "AgentPoison Attack Detection",
      "Embedding Cluster Analysis",
      "Mahalanobis Distance Scoring",
      "Self-Learning from Feedback",
      "Sub-100ms Detection"
    ],
    stats: [
      { value: "100%", label: "Detection" },
      { value: "100ms", label: "Latency" },
      { value: "<3%", label: "False Pos" }
    ],
    cta: "Learn More",
    ctaLink: "#memguard"
  },
  {
    id: "sentinel",
    name: "Sentinel",
    fullName: "MCP Observability Sidecar",
    tagline: "Open Source • Transparent • Fail-Open",
    description: "A transparent, fail-open observability sidecar for Model Context Protocol (MCP). See every agent-tool interaction with cryptographic audit trails you can verify offline.",
    icon: Eye,
    color: "from-brand-accent to-emerald-400",
    accentColor: "accent",
    badge: "Open Source",
    features: [
      "Canonical Ordered Event Stream",
      "Session & Trace Identity",
      "Ed25519 Cryptographic Signing",
      "Real-time WebSocket UI",
      "Zero Execution Impact"
    ],
    stats: [
      { value: "<1ms", label: "Overhead" },
      { value: "100%", label: "Visibility" },
      { value: "MIT", label: "License" }
    ],
    cta: "View on GitHub",
    ctaLink: "https://github.com/EngramAI-io/sentinel",
    isOpenSource: true
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Products() {
  return (
    <section id="products" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6"
          >
            <Shield className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-brand-accent font-medium">Security Products</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Three Products.
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
              Complete Defense.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Each product addresses a critical security layer. Deploy individually 
            or together on the Defense Layer platform for comprehensive protection.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const Icon = product.icon;
            const isAccent = product.accentColor === "accent";
            const isBlue = product.accentColor === "blue";
            const isViolet = product.accentColor === "violet";
            
            const colorClass = isAccent ? 'text-brand-accent' : isBlue ? 'text-blue-400' : 'text-violet-400';
            const bgColorClass = isAccent ? 'bg-brand-accent' : isBlue ? 'bg-blue-500' : 'bg-violet-500';
            const borderColorClass = isAccent ? 'border-brand-accent/30' : isBlue ? 'border-blue-500/30' : 'border-violet-500/30';
            
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative bg-brand-gray/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${product.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      product.isOpenSource 
                        ? 'bg-brand-accent/20 text-brand-accent' 
                        : 'bg-white/10 text-white/70'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/50 mb-2">{product.fullName}</p>
                    <p className={`text-sm font-medium ${colorClass}`}>
                      {product.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${colorClass}`} />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-brand-black/40 rounded-xl border border-white/5">
                    {product.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-lg font-bold ${colorClass}`}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-white/40 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className={`w-full group/btn ${
                      isAccent 
                        ? 'bg-brand-accent text-brand-black hover:bg-brand-accent/90' 
                        : isBlue
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-violet-500 text-white hover:bg-violet-600'
                    }`}
                    asChild={product.isOpenSource}
                  >
                    {product.isOpenSource ? (
                      <a href={product.ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="w-4 h-4 mr-2" />
                        {product.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <>
                        {product.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-brand-gray/50 border border-white/10">
            <Layers className="w-5 h-5 text-brand-accent" />
            <span className="text-white/70">
              All products run on the{" "}
              <a href="#platform" className="text-brand-accent hover:underline font-medium">
                Defense Layer Platform
              </a>
              {" "}with unified API, auth, and observability
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
