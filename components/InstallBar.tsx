"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";

const installCommandUnix =
  "curl -fsSL https://raw.githubusercontent.com/EngramAI-io/sentinel/main/install.sh | sh";

const installCommandWindows =
  "iwr https://raw.githubusercontent.com/EngramAI-io/sentinel/main/install.ps1 -UseBasicParsing | iex";

export default function InstallBar() {
  const [copied, setCopied] = useState<"unix" | "windows" | null>(null);

  const handleCopy = async (which: "unix" | "windows") => {
    const cmd =
      which === "unix" ? installCommandUnix : installCommandWindows;

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
            Install Sentinel
          </h2>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Sentinel installs as a single binary.  
            The core interceptor runs headless; the observability UI connects separately.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Linux / macOS */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <TooltipProvider>
              <Tooltip open={copied === "unix"}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleCopy("unix")}
                    className="w-full text-left bg-brand-gray/50 border border-white/10 rounded-lg p-6 hover:border-brand-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-brand-accent font-mono">$</span>
                        <code className="text-white font-mono text-sm md:text-lg break-all">
                          {installCommandUnix}
                        </code>
                      </div>

                      <AnimatePresence mode="wait">
                        {copied === "unix" ? (
                          <motion.div
                            key="check-unix"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-5 h-5 text-brand-accent" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy-unix"
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

            <p className="mt-3 text-sm text-white/60">(Linux / macOS)</p>
          </motion.div>

          {/* Windows */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <TooltipProvider>
              <Tooltip open={copied === "windows"}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleCopy("windows")}
                    className="w-full text-left bg-brand-gray/50 border border-white/10 rounded-lg p-6 hover:border-brand-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-brand-accent font-mono">$</span>
                        <code className="text-white font-mono text-sm md:text-lg break-all">
                          {installCommandWindows}
                        </code>
                      </div>

                      <AnimatePresence mode="wait">
                        {copied === "windows" ? (
                          <motion.div
                            key="check-win"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-5 h-5 text-brand-accent" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy-win"
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

            <p className="mt-3 text-sm text-white/60">(Windows PowerShell)</p>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-6 text-center"
          >
            <a
              href="https://github.com/EngramAI-io/Core"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-accent hover:underline"
            >
              <span>Detailed install & usage instructions on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
