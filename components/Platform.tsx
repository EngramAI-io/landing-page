"use client";

import { motion } from "framer-motion";
import { 
  Server, 
  Shield, 
  Zap, 
  Database,
  Cloud,
  Lock,
  Activity,
  Users,
  ArrowRight
} from "lucide-react";

const platformFeatures = [
  {
    icon: Server,
    title: "Kubernetes Native",
    description: "Deploy with Helm charts, auto-scaling HPA, and production-ready manifests."
  },
  {
    icon: Database,
    title: "PostgreSQL + Redis",
    description: "Battle-tested data layer with pgvector for embeddings and Redis for caching."
  },
  {
    icon: Lock,
    title: "Enterprise Auth",
    description: "SSO with Okta, Auth0, Azure AD. RBAC + ABAC with tenant scoping."
  },
  {
    icon: Activity,
    title: "Full Observability",
    description: "Prometheus metrics, OpenTelemetry tracing, structured JSON logging."
  },
  {
    icon: Cloud,
    title: "Terraform IaC",
    description: "One-click AWS deployment with VPC, RDS, and production configurations."
  },
  {
    icon: Users,
    title: "Multi-Tenant Isolation",
    description: "Complete data isolation per tenant with shared or dedicated infrastructure."
  }
];

export default function Platform() {
  return (
    <section id="platform" className="py-32 px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent pointer-events-none" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Server className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-white/70">Platform Architecture</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Built for{" "}
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A distributed Go platform handling 10,000+ requests per second with 
            sub-300ms combined latency across all security modules.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-brand-gray/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              Defense Layer Architecture
            </h3>

            {/* Request Flow */}
            <div className="relative">
              {/* Agent Request */}
              <div className="flex flex-col items-center mb-8">
                <div className="px-6 py-3 bg-violet-500/20 border border-violet-500/30 rounded-xl text-violet-400 font-medium">
                  Agent Request
                </div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-violet-500/50 to-brand-accent/50" />
              </div>

              {/* API Gateway */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-full max-w-2xl px-8 py-4 bg-brand-accent/10 border border-brand-accent/30 rounded-xl text-center">
                  <div className="text-brand-accent font-bold text-lg mb-1">REST API Gateway (Go)</div>
                  <div className="text-white/50 text-sm">/api/v1/* endpoints</div>
                </div>
                <div className="w-0.5 h-8 bg-brand-accent/50" />
              </div>

              {/* Three Modules */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center"
                >
                  <div className="text-blue-400 font-bold mb-1">BOG</div>
                  <div className="text-white/50 text-sm mb-2">Consensus Validation</div>
                  <div className="text-xs text-blue-400/70">~200ms</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-violet-500/10 border border-violet-500/30 rounded-xl text-center"
                >
                  <div className="text-violet-400 font-bold mb-1">MemGuard</div>
                  <div className="text-white/50 text-sm mb-2">Poison Detection</div>
                  <div className="text-xs text-violet-400/70">~100ms</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-brand-accent/10 border border-brand-accent/30 rounded-xl text-center"
                >
                  <div className="text-brand-accent font-bold mb-1">Sentinel</div>
                  <div className="text-white/50 text-sm mb-2">MCP Observability</div>
                  <div className="text-xs text-brand-accent/70">&lt;1ms overhead</div>
                </motion.div>
              </div>

              {/* Unified Response */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-brand-accent/50" />
                <div className="px-8 py-4 bg-brand-gray/60 border border-white/20 rounded-xl text-center">
                  <div className="text-white font-bold mb-1">Unified Response</div>
                  <div className="text-white/50 text-sm">Decision + Risk Score + Audit Trail</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-6 hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-brand-gray/30 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">Technology Stack</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Go 1.22+",
              "PostgreSQL 15",
              "Redis 7",
              "Kubernetes",
              "Terraform",
              "Prometheus",
              "OpenTelemetry",
              "gRPC"
            ].map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-brand-black/40 border border-white/10 rounded-lg text-white/70 text-sm font-mono"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
