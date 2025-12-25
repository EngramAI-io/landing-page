"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroVideoProps {
  src?: string;
}

export default function HeroVideo({ src = "/Sentinel_Graph_Demo.gif" }: HeroVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-5xl mx-auto mt-16"
    >
      {/* Mac-style window frame */}
      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-brand-gray/30 backdrop-blur-sm shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-brand-gray/50 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>
        
        {/* Video container with inner glow */}
        <div className="relative aspect-video bg-brand-black overflow-hidden">
          <div className="absolute inset-0 border-[1px] border-brand-accent/20 rounded-sm shadow-[inset_0_0_40px_rgba(0,255,148,0.1)] pointer-events-none z-10"></div>
          
          {/* Placeholder - Replace with actual GIF when available */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/30 text-sm">[WIP] Hero Demo GIF</p>
          </div>
          
          {
          <Image
            src="/Sentinel_Graph_Demo.gif"
            alt="Sentinel Demo"
            fill
            className="object-contain"
            priority
          />
          }
        </div>
      </div>
    </motion.div>
  );
}
