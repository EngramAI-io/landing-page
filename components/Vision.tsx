"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

interface Neighbor {
  row: number;
  col: number;
}

const DotGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const dots = Array.from({ length: 64 }, (_, i) => i);

  const positions = useMemo(() => {
    return dots.map((dot) => {
      const row = Math.floor(dot / 8);
      const col = dot % 8;

      const offsetX = ((dot * 73) % 200) - 100;
      const offsetY = ((dot * 127) % 150) - 75;
      const startX = 50 + col * 90 + offsetX;
      const startY = 50 + row * 50 + offsetY;

      const endX = 100 + col * 75;
      const endY = 100 + row * 40;

      return { startX, startY, endX, endY, row, col };
    });
  }, [dots]);

  return (
    <div
      className="relative w-full h-96"
      onMouseEnter={() => setIsInView(true)}
      onMouseLeave={() => setIsInView(false)}
    >
      <svg viewBox="0 0 800 400" className="w-full h-full">
        {positions.map((pos, dot) => (
          <motion.circle
            key={dot}
            cx={pos.startX}
            cy={pos.startY}
            r="4"
            fill="#00FF94"
            initial={{ opacity: 0.3 }}
            animate={
              isInView
                ? { cx: pos.endX, cy: pos.endY, opacity: 0.8 }
                : { cx: pos.startX, cy: pos.startY, opacity: 0.3 }
            }
            transition={{
              duration: 1.5,
              delay: dot * 0.02,
              ease: "easeOut",
            }}
          />
        ))}

        {isInView &&
          positions.flatMap((pos, i) => {
            const neighbors: Neighbor[] = [
              pos.col < 7 ? { row: pos.row, col: pos.col + 1 } : null,
              pos.row < 7 ? { row: pos.row + 1, col: pos.col } : null,
            ].filter((n): n is Neighbor => n !== null);

            return neighbors.map((neighbor, idx) => {
              const nX = 100 + neighbor.col * 75;
              const nY = 100 + neighbor.row * 40;

              return (
                <motion.line
                  key={`${i}-${idx}`}
                  x1={pos.endX}
                  y1={pos.endY}
                  x2={nX}
                  y2={nY}
                  stroke="#00FF94"
                  strokeWidth="1"
                  opacity={0.2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 1 + i * 0.01 }}
                />
              );
            });
          })}
      </svg>
    </div>
  );
};

export default function Vision() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            From Observability to Defense.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Sentinel makes agent toolchains{" "}
            <span className="text-brand-accent">visible</span>. EngramAI is
            building the <span className="text-brand-accent">defense layer</span>{" "}
            against agentic AI attacks — where trust comes from verifiable
            records, not blind faith.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <DotGrid />
        </motion.div>
      </div>
    </section>
  );
}
