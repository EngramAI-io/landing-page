"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TrustDiagram() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-16 px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow behind the image */}
          <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative bg-brand-gray/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 flex items-center justify-center">
            {!imgError ? (
              <Image
                src="/trust-protocol-diagram.jpg"
                alt="Engram AI Trust Protocol — The Trust Layer for Agentic AI"
                width={800}
                height={800}
                className="w-full max-w-[700px] h-auto rounded-xl"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full max-w-[700px] aspect-square flex flex-col items-center justify-center gap-6 py-16">
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-accent/20 rounded-full blur-xl" />
                  <Shield className="w-20 h-20 text-brand-accent relative" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    EngramAI Trust Protocol
                  </h3>
                  <p className="text-white/50 text-sm max-w-md mx-auto">
                    The Trust Layer for Agentic AI — Built on Google A2A, IETF JWT, and MCP-I frameworks
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {[
                    "Immutable Agent Identity",
                    "Transient Session Keys",
                    "Behavioral Score",
                    "Policy Enforcement",
                    "Data Provenance",
                    "Intent Firewall",
                  ].map((item) => (
                    <div key={item} className="px-3 py-2 bg-brand-black/40 border border-white/10 rounded-lg text-white/60 text-xs text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
