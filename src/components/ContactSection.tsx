"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "business.gaarv@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Magnetic Button Effect Variables
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const leetcodeRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, ref: React.RefObject<HTMLAnchorElement | null>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    // Smooth translation using CSS variables
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLAnchorElement | null>) => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <footer className="relative z-10 bg-[#0a0a0a] pt-32 pb-16 px-6 md:px-12 text-white border-t border-white/5 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
            Let's build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
              something together.
            </span>
          </h2>
        </motion.div>

        <motion.button
          onClick={handleCopy}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="group flex items-center gap-4 px-8 py-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 mb-20"
        >
          <span className="text-xl md:text-2xl font-mono tracking-tight">{email}</span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300 text-neutral-400">
            {copied ? <CheckCircle2 size={20} className="text-green-400 group-hover:text-black" /> : <Copy size={20} />}
          </div>
        </motion.button>

        {/* Links & Magnetic Buttons */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/10 gap-8">

          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Garv Chouhan. All rights reserved.
          </div>

          <div className="flex gap-4 md:gap-6 flex-wrap justify-center mt-8 md:mt-0">

            <motion.a
              ref={linkedinRef}
              href="https://www.linkedin.com/in/garv-chouhan/"
              target="_blank"
              rel="noreferrer"
              onMouseMove={(e) => handleMouseMove(e, linkedinRef)}
              onMouseLeave={() => handleMouseLeave(linkedinRef)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-colors duration-300 ease-out"
              style={{ transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), background 0.3s, border 0.3s" }}
            >
              LinkedIn <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-white" />
            </motion.a>

            <motion.a
              ref={githubRef}
              href="https://github.com/GarvonGit"
              target="_blank"
              rel="noreferrer"
              onMouseMove={(e) => handleMouseMove(e, githubRef)}
              onMouseLeave={() => handleMouseLeave(githubRef)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors duration-300 ease-out"
              style={{ transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), background 0.3s, border 0.3s" }}
            >
              GitHub <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-white" />
            </motion.a>

            <motion.a
              ref={leetcodeRef}
              href="https://leetcode.com/u/Supastriker/"
              target="_blank"
              rel="noreferrer"
              onMouseMove={(e) => handleMouseMove(e, leetcodeRef)}
              onMouseLeave={() => handleMouseLeave(leetcodeRef)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#ffa116]/50 hover:bg-[#ffa116]/10 hover:shadow-[0_0_20px_rgba(255,161,22,0.3)] transition-colors duration-300 ease-out"
              style={{ transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), background 0.3s, border 0.3s" }}
            >
              LeetCode <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-white" />
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
}
