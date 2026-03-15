"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [100, 0, -100]);

  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [100, 0, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none text-white">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8 z-10"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-center">
          Garv Chouhan.<br/>
          <span className="text-cyan-400">Software Engineer.</span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24 z-10"
      >
        <h2 className="text-4xl md:text-7xl font-semibold max-w-3xl text-left">
          I build digital experiences.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 z-10"
      >
        <h2 className="text-4xl md:text-7xl font-semibold max-w-3xl text-right">
          Bridging design <br/> and engineering.
        </h2>
      </motion.div>
      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <div className="w-7 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono"
        >
          Scroll
        </motion.span>
      </motion.div>
    </div>
  );
}
