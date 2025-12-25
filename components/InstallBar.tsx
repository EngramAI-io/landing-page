"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";

const installCommand =
  "curl -sSL https://raw.githubusercontent.com/EngramAI-io/Core/main/install.sh | bash";

const runCommand =
  'sentinel run --ws-bind "127.0.0.1:3000" --ws-token "secret123" -- npx -y @modelcontextprotocol/server-filesystem';

export default function InstallBar() {
  const [copied, setCopied] = useState<"install" | "run" | null>(null);

  const handleCopy = async (which: "install" | "run") => {
    const cmd = which === "install" ? installCommand : runCommand;
    const success = await copyToClipboard(cmd);
    if (success) {
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <section id="install" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Install & Run
          </h2>
          <p className="text-xl text-white/50 leading-relaxed max-w-3xl mx-auto">
            Sentinel isn’t “zero-config” in production — you’ll typically set a{" "}
            <span className="text-white/80">WebSocket bind</span> and{" "}
            <span className="text-white/80">token</span> to protect the
            observability endpoint. Execution stays fail-open either way.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Install */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <TooltipProvider>
              <Tooltip open={copied === "install"}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleCopy("install")}
                    className="w-full text-left bg-brand-gray/50 border border-white/10 rounded-lg p-6 hover:border-brand-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-brand-accent font-mono">$</span>
                        <code className="text-white font-mono text-sm md:text-lg break-all">
                          {installCommand}
                        </code>
                      </div>

                      <AnimatePresence mode="wait">
                        {copied === "install" ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-5 h-5 text-brand-accent" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copied!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <p className="mt-3 text-sm text-white/40">
              Alternative installs: Homebrew (tap + install) or pre-built
              binaries from releases.
            </p>
          </motion.div>

          {/* Run */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <TooltipProvider>
              <Tooltip open={copied === "run"}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleCopy("run")}
                    className="w-full text-left bg-brand-gray/50 border border-white/10 rounded-lg p-6 hover:border-brand-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-brand-accent font-mono">$</span>
                        <code className="text-white font-mono text-sm md:text-lg break-all">
                          {runCommand}
                        </code>
                      </div>

                      <AnimatePresence mode="wait">
                        {copied === "run" ? (
                          <motion.div
                            key="check2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-5 h-5 text-brand-accent" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copied!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
                <p className="text-sm text-white/70 font-medium mb-1">Dashboard</p>
                <p className="text-sm text-white/40">Open http://localhost:3000</p>
              </div>

              <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
                <p className="text-sm text-white/70 font-medium mb-1">WebSocket</p>
                <p className="text-sm text-white/40">
                  ws://localhost:3000/ws?token=secret123
                </p>
              </div>

              <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
                <p className="text-sm text-white/70 font-medium mb-1">Fail-open</p>
                <p className="text-sm text-white/40">
                  UI drops? Proxy still passes traffic.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
