"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface ProjectDetail {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  accentFrom: string;
  accentTo: string;
  heroGlow: string;
  description: string;
  longDescription: React.ReactNode;
  techStack: { name: string; color: string }[];
  highlights: { icon: React.ReactNode; label: string; value: string }[];
  challenges: { title: string; description: string }[];
  features: { icon: React.ReactNode; title: string; description: string }[];
  liveHref?: string;
  githubHref?: string;
  ctaLabel?: string;
  mockupContent: React.ReactNode;
}

export default function ProjectPageLayout({ project }: { project: ProjectDetail }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden">
      {/* ── Back Nav ── */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[#080808]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            Back to Portfolio
          </Link>
          <span className="text-white/10">|</span>
          <span className={`text-sm font-mono ${project.badgeColor}`}>{project.badge}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background glow */}
        <div className={`absolute inset-0 ${project.heroGlow} opacity-30 blur-[200px] pointer-events-none`} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-mono mb-8 ${project.badgeColor}`}>
              {project.badge}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
          >
            {project.title}{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
            >
              {project.subtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {project.liveHref && (
              <a
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                {project.ctaLabel ?? "Live Demo"}
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.githubHref && (
              <a
                href={project.githubHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold text-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <Github size={16} /> Source Code
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-600 font-mono uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Mockup Showcase ── */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div
              className={`absolute -inset-4 ${project.heroGlow} opacity-20 blur-[80px] rounded-[40px] pointer-events-none`}
            />
            <div className="relative rounded-[32px] border border-white/10 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
              {project.mockupContent}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Highlights / Stats ── */}
      {project.highlights.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold">By the Numbers</h2>
              <p className="text-neutral-500 mt-3">Key metrics and achievements</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-center overflow-hidden hover:border-white/15 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3 text-neutral-500">{h.icon}</div>
                    <p className="text-4xl font-bold text-white mb-1">{h.value}</p>
                    <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{h.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tech Stack ── */}
      <section className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
            <p className="text-neutral-500 mt-3">Built with the right tools for the job</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`px-5 py-2.5 rounded-full border font-mono text-sm font-medium transition-all duration-300 ${tech.color}`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      {project.features.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Core Features</h2>
              <p className="text-neutral-500 mt-3">What makes this project stand out</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 overflow-hidden hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-4">{f.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Deep Dive ── */}
      {project.longDescription && (
        <section className="py-20 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Deep Dive</h2>
              <p className="text-neutral-500 mt-3">The story behind the build</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-8 md:p-12 prose prose-invert prose-neutral max-w-none"
            >
              {project.longDescription}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Challenges ── */}
      {project.challenges.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Challenges & Solutions</h2>
              <p className="text-neutral-500 mt-3">Problems encountered and how they were solved</p>
            </motion.div>
            <div className="space-y-6">
              {project.challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group flex gap-6 p-7 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{c.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer CTA ── */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
        <div className={`absolute inset-0 ${project.heroGlow} opacity-10 blur-[200px] pointer-events-none`} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to see more?</h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              Check out the source code or visit the live project. Feel free to reach out if you have any questions.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  <ExternalLink size={16} />
                  {project.ctaLabel ?? "Live Demo"}
                </a>
              )}
              {project.githubHref && (
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold text-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold text-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <ArrowLeft size={16} /> All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
