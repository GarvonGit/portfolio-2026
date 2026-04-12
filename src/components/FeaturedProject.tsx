"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, Activity, ShieldCheck, Database, Layers,
  Gamepad2, Trophy, Medal,
  Bot, FileText, Sparkles, Terminal,
  ShoppingCart, Smartphone,
  CloudSun, Chrome, ListTodo, Plus, Github,
  Code2, Wrench, Globe, Hotel, CalendarDays, TrendingUp, BedDouble, Zap, LayoutDashboard,
  ExternalLink, BarChart3, AlertTriangle, MapPin, Users
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated Category Header                                          */
/* ------------------------------------------------------------------ */
function CategoryHeader({ icon, label, title, gradient }: { icon: React.ReactNode; label: string; title: React.ReactNode; gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16 md:mb-24 px-4 relative z-10"
    >
      <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${gradient} font-mono text-sm mb-6`}>
        {icon} {label}
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{title}</h2>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Split-Screen Project Row (for featured projects)                  */
/* ------------------------------------------------------------------ */
function ProjectRow({
  reverse = false,
  badge, badgeColor, badgeIcon,
  title, description, extra,
  ctaLabel, ctaHref, githubHref, detailHref,
  mockup, delay = 0,
}: {
  reverse?: boolean;
  badge: string; badgeColor: string; badgeIcon: React.ReactNode;
  title: React.ReactNode; description: string; extra?: React.ReactNode;
  ctaLabel: string; ctaHref: string; githubHref?: string; detailHref?: string;
  mockup: React.ReactNode; delay?: number;
}) {
  return (
    <div className={`w-full max-w-6xl mx-auto flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20 px-4 md:px-8`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeColor} font-mono text-sm mb-6 self-start`}>
          {badgeIcon} {badge}
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">{title}</h3>
        <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-6">{description}</p>
        {extra}
        <div className="flex items-center gap-4 mt-2 flex-wrap">
          {ctaHref !== "#" ? (
            <a href={ctaHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform duration-300 group">
              {ctaLabel} <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm opacity-60 cursor-default">
              {ctaLabel}
            </span>
          )}
          {githubHref && (
            <a href={githubHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold text-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <Github size={16} /> Source
            </a>
          )}
          {detailHref && (
            <Link
              href={detailHref}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold text-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 group/detail"
            >
              <ExternalLink size={14} className="group-hover/detail:scale-110 transition-transform" />
              Case Study
            </Link>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -80 : 80, rotateY: reverse ? 5 : -5 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: delay + 0.15 }}
        className="w-full md:w-1/2"
      >
        {mockup}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Compact Tool Card (for smaller tools)                             */
/* ------------------------------------------------------------------ */
function ToolCard({
  icon, title, description,
  liveHref, githubHref, detailHref,
  accentColor, glowColor, index = 0,
}: {
  icon: React.ReactNode; title: string; description: string;
  liveHref?: string; githubHref?: string; detailHref?: string;
  accentColor: string; glowColor: string; index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }}
      className={`relative group rounded-[2rem] border border-white/10 bg-[#111]/80 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-500 ${glowColor}`}
    >
      <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${accentColor}`} />

      <div className="relative z-10">
        <motion.div whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }} transition={{ duration: 0.5 }} className="mb-6 inline-block">
          {icon}
        </motion.div>
        <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h4>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">{description}</p>
      </div>

      <div className="relative z-10 flex items-center gap-3 flex-wrap">
        {liveHref && (
          <a href={liveHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:scale-105 transition-transform duration-300 group/btn">
            Live <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {githubHref && (
          <a href={githubHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold hover:bg-white/10 transition-all duration-300">
            <Github size={14} /> Code
          </a>
        )}
        {detailHref && (
          <Link
            href={detailHref}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/detail"
          >
            <ExternalLink size={12} className="group-hover/detail:scale-110 transition-transform" />
            Details
          </Link>
        )}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  MAIN COMPONENT                                                    */
/* ================================================================== */
export default function FeaturedProject() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start end", "end start"] });

  const cardY = useTransform(scrollYProgress, [0.1, 0.4], [300, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const attendanceRaw = useTransform(scrollYProgress, [0.3, 0.6], [0, 85]);
  const errorRaw = useTransform(scrollYProgress, [0.3, 0.6], [0, 95]);
  const attendanceNum = useTransform(attendanceRaw, (v) => Math.round(v));
  const errorNum = useTransform(errorRaw, (v) => Math.round(v));

  return (
    <>
      {/* ============================================================ */}
      {/* HERO: Aankh System (Sticky Reveal)                           */}
      {/* ============================================================ */}
      <section ref={heroRef} className="relative z-10 bg-[#0a0a0a] min-h-[150vh] pt-32 border-t border-white/5">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] origin-top z-0" />

        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 z-10">
          <div className="text-center mb-16 max-w-3xl relative z-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm mb-6">
                <Activity size={16} /> Featured Project
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Aankh <span className="text-neutral-500">System</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Smart E-Beat Management System engineered for the <span className="text-white font-medium">Gujarat Police</span>. A mission-critical dashboard that monitors police personnel duty performance, tracks automated attendance, and reduces manual errors — improving operational efficiency by <span className="text-white font-medium">85%</span> and cutting error rates by <span className="text-white font-medium">95%</span>.
              </p>
            </motion.div>
          </div>

          <motion.div style={{ y: cardY, opacity: cardOpacity }} className="relative w-full max-w-5xl rounded-t-[40px] border border-white/10 bg-[#151515] shadow-2xl overflow-hidden will-change-transform">
            <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-[#1a1a1a]">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-xs text-neutral-500 font-mono flex items-center gap-2">
                <ShieldCheck size={12} /> police.gujarat.gov.in/aankh
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="col-span-1 p-6 rounded-2xl bg-[#1e1e1e] border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Database size={64} /></div>
                  <p className="text-neutral-400 text-sm font-semibold uppercase tracking-wider mb-2">Efficiency Rating</p>
                  <div className="flex items-baseline gap-1 text-white">
                    <motion.span className="text-6xl font-bold tracking-tighter">{attendanceNum}</motion.span>
                    <span className="text-3xl font-medium text-neutral-500">%</span>
                  </div>
                  <p className="text-blue-400 text-sm mt-4 font-mono">↑ Attendance recording</p>
                </div>
                <div className="col-span-1 p-6 rounded-2xl bg-[#1e1e1e] border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-red-400"><Layers size={64} /></div>
                  <p className="text-neutral-400 text-sm font-semibold uppercase tracking-wider mb-2">Error Reduction</p>
                  <div className="flex items-baseline gap-1 text-white">
                    <motion.span className="text-6xl font-bold tracking-tighter">{errorNum}</motion.span>
                    <span className="text-3xl font-medium text-neutral-500">%</span>
                  </div>
                  <p className="text-green-400 text-sm mt-4 font-mono">↓ Manual entries eliminated</p>
                </div>
                <div className="col-span-1 h-full rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#121212] border border-white/5 relative overflow-hidden flex items-center justify-center gap-3 flex-col p-4">
                  <a href="https://github.com/GarvonGit/aankh" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <Github size={16} /> Source Code
                  </a>
                  <Link href="/projects/aankh" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-sm hover:bg-blue-500/20 transition-all duration-300">
                    <ExternalLink size={14} /> Case Study
                  </Link>
                </div>
              </div>
              <div className="w-full h-32 rounded-xl bg-[#1e1e1e] border border-white/5 relative overflow-hidden p-4 flex items-end gap-2">
                {[...Array(24)].map((_, i) => (
                  <motion.div key={i} className="w-full bg-blue-500/20 hover:bg-blue-400/50 rounded-sm transition-colors duration-300" initial={{ height: "10%" }} whileInView={{ height: `${Math.random() * 80 + 20}%` }} transition={{ duration: 1, delay: i * 0.05 }} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#151515] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CATEGORY 1: WEB DEVELOPMENT                                  */}
      {/* ============================================================ */}
      <section className="relative z-10 bg-[#060606] py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

        <CategoryHeader
          icon={<Globe size={16} />}
          label="Web Development"
          title={<>Web & Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experiences</span></>}
          gradient="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
        />

        {/* Roomora — Hotel Management SaaS */}
        <div className="mb-32 md:mb-48">
          <ProjectRow
            badge="SaaS / AI Pricing Engine"
            badgeColor="bg-orange-500/10 border border-orange-500/20 text-orange-400"
            badgeIcon={<Hotel size={16} />}
            title={<>Roo<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">mora</span></>}
            description="A full-featured hotel management SaaS platform built for independent hoteliers. Features an AI-powered dynamic pricing engine (Ollama), OTA channel management, a real-time calendar with profit/loss visualization, Indian holiday integration, and a stunning Supabase-backed authentication system."
            extra={
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Supabase", "Ollama AI", "FastAPI", "Python"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono">{t}</span>
                ))}
              </div>
            }
            ctaLabel="View Dashboard"
            ctaHref="https://roomora-xi.vercel.app"
            githubHref="https://github.com/GarvonGit/roomora"
            detailHref="/projects/roomora"
            mockup={
              <div className="w-full aspect-[16/10] rounded-[24px] border border-white/10 bg-[#0f0f0f] shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* ── Browser top bar ── */}
                <div className="h-9 border-b border-white/5 flex items-center px-3 gap-2 bg-[#141414] shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <div className="mx-auto flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                    <span className="text-[9px] text-neutral-500 font-mono">roomora-xi.vercel.app/dashboard</span>
                  </div>
                </div>

                {/* ── App shell ── */}
                <div className="flex flex-1 overflow-hidden">

                  {/* Sidebar */}
                  <div className="w-9 bg-[#0a0a0a] border-r border-white/5 flex flex-col items-center py-3 gap-3 shrink-0">
                    {/* Logo */}
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mb-1">
                      <Hotel size={10} className="text-white" />
                    </div>
                    <div className="w-full h-px bg-white/5 my-0.5" />
                    {/* Nav items */}
                    {[
                      { icon: <LayoutDashboard size={12} />, active: true },
                      { icon: <CalendarDays size={12} />, active: false },
                      { icon: <BedDouble size={12} />, active: false },
                      { icon: <TrendingUp size={12} />, active: false },
                    ].map((item, i) => (
                      <div key={i} className={`relative w-7 h-7 rounded-lg flex items-center justify-center ${item.active ? "bg-orange-500/20 text-orange-400" : "text-neutral-600 hover:text-neutral-400"}`}>
                        {item.active && <div className="absolute -left-[1px] top-1 bottom-1 w-0.5 rounded-full bg-orange-400" />}
                        {item.icon}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col overflow-hidden bg-[#0d0d0d]">

                    {/* Top bar */}
                    <div className="h-8 border-b border-white/5 flex items-center px-3 gap-2 shrink-0 bg-[#0d0d0d]">
                      <p className="text-[9px] font-bold text-white">Dashboard</p>
                      <span className="text-neutral-700 text-[8px]">/</span>
                      <p className="text-[9px] text-neutral-500">April 2026</p>
                      <div className="ml-auto flex items-center gap-1.5">
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                          <Zap size={7} className="text-orange-400" />
                          <span className="text-[7px] text-orange-400 font-mono">AI Active</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                          <span className="text-[7px] font-bold text-white">G</span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-2.5 flex flex-col gap-2 overflow-hidden">

                      {/* KPI row */}
                      <div className="grid grid-cols-4 gap-1.5 shrink-0">
                        {[
                          { label: "Occupancy", value: "87%", delta: "+4%", color: "text-orange-400", glow: "bg-orange-500/10 border-orange-500/20" },
                          { label: "RevPAR", value: "₹4,820", delta: "+12%", color: "text-amber-400", glow: "bg-amber-500/10 border-amber-500/20" },
                          { label: "AI Suggest", value: "₹6,200", delta: "↑ surge", color: "text-green-400", glow: "bg-green-500/10 border-green-500/20" },
                          { label: "Bookings", value: "34", delta: "+8 today", color: "text-sky-400", glow: "bg-sky-500/10 border-sky-500/20" },
                        ].map((s) => (
                          <div key={s.label} className={`rounded-lg border ${s.glow} p-1.5 flex flex-col gap-0.5`}>
                            <p className="text-[7px] text-neutral-500 uppercase tracking-wider">{s.label}</p>
                            <p className={`text-[11px] font-bold leading-none ${s.color}`}>{s.value}</p>
                            <p className="text-[7px] text-neutral-600">{s.delta}</p>
                          </div>
                        ))}
                      </div>

                      {/* Middle row: chart + calendar */}
                      <div className="flex gap-2 flex-1 min-h-0">

                        {/* Revenue bar chart */}
                        <div className="flex-1 rounded-xl bg-[#131313] border border-white/5 p-2 flex flex-col gap-1.5 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-[8px] font-semibold text-neutral-400 uppercase tracking-wide">Revenue · Week</p>
                            <p className="text-[7px] text-green-400 font-mono">+18% vs last wk</p>
                          </div>
                          <div className="flex-1 flex items-end gap-1 pb-1">
                            {[42, 65, 38, 80, 55, 90, 72].map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: "5%" }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="flex-1 rounded-sm"
                                style={{ background: i === 5 ? "linear-gradient(to top, #f97316, #fbbf24)" : "rgba(249,115,22,0.2)" }}
                              />
                            ))}
                          </div>
                          <div className="flex justify-between">
                            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                              <span key={i} className="flex-1 text-center text-[6px] text-neutral-600 font-mono">{d}</span>
                            ))}
                          </div>
                        </div>

                        {/* Pricing Calendar */}
                        <div className="w-[52%] rounded-xl bg-[#131313] border border-white/5 p-2 flex flex-col gap-1.5 shrink-0">
                          <div className="flex items-center justify-between">
                            <p className="text-[8px] font-semibold text-neutral-400 uppercase tracking-wide flex items-center gap-1">
                              <CalendarDays size={7} /> Pricing · Apr 2026
                            </p>
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            </div>
                          </div>
                          {/* Day headers */}
                          <div className="grid grid-cols-7 gap-0.5">
                            {["S","M","T","W","T","F","S"].map((d,i)=>(
                              <div key={i} className="text-center text-[5px] text-neutral-600 font-bold uppercase">{d}</div>
                            ))}
                          </div>
                          {/* Date cells */}
                          <div className="grid grid-cols-7 gap-0.5 flex-1">
                            {[...Array(2)].map((_, i) => <div key={`e${i}`} />)}
                            {[...Array(30)].map((_, i) => {
                              const weekend = [0,6].includes((i + 2) % 7);
                              const holiday = [13, 14].includes(i);
                              const surge = [4,5,11,12,18,19,25,26].includes(i);
                              const today = i === 6;
                              return (
                                <div key={i} className={`rounded aspect-square flex items-center justify-center text-[6px] font-mono transition-all ${
                                  today ? "bg-orange-500 text-white font-bold ring-1 ring-orange-300/30" :
                                  holiday ? "bg-amber-500/25 border border-amber-500/40 text-amber-300" :
                                  surge ? "bg-orange-500/15 border border-orange-500/25 text-orange-300" :
                                  weekend ? "bg-white/[0.04] border border-white/8 text-neutral-500" :
                                  "bg-white/[0.02] border border-white/5 text-neutral-600"
                                }`}>{i + 1}</div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Room availability strip */}
                      <div className="shrink-0 rounded-xl bg-[#131313] border border-white/5 p-2">
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-[8px] font-semibold text-neutral-400 uppercase tracking-wide">Room Availability</p>
                          <p className="text-[7px] text-neutral-600 font-mono">12 / 14 occupied</p>
                        </div>
                        <div className="flex gap-1">
                          {[
                            {name:"101", status:"occupied"}, {name:"102", status:"occupied"}, {name:"103", status:"vacant"},
                            {name:"201", status:"occupied"}, {name:"202", status:"checkin"}, {name:"203", status:"occupied"},
                            {name:"301", status:"occupied"}, {name:"302", status:"occupied"}, {name:"303", status:"vacant"},
                            {name:"401", status:"occupied"}, {name:"402", status:"occupied"}, {name:"403", status:"occupied"},
                          ].map((r) => (
                            <div key={r.name} className={`flex-1 rounded-md py-1 flex flex-col items-center gap-0.5 ${
                              r.status === "occupied" ? "bg-orange-500/15 border border-orange-500/20" :
                              r.status === "checkin" ? "bg-green-500/15 border border-green-500/20" :
                              "bg-white/[0.03] border border-white/5"
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                r.status === "occupied" ? "bg-orange-400" :
                                r.status === "checkin" ? "bg-green-400" : "bg-neutral-600"
                              }`} />
                              <p className={`text-[5px] font-mono ${
                                r.status === "occupied" ? "text-orange-400" :
                                r.status === "checkin" ? "text-green-400" : "text-neutral-600"
                              }`}>{r.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Gearlogy */}
        <div className="mb-32 md:mb-48">
          <ProjectRow
            reverse
            badge="E-Commerce / Full Stack"
            badgeColor="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
            badgeIcon={<ShoppingCart size={16} />}
            title={<>Gear<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">logy</span></>}
            description="Your premier online destination for electronic gadgets. Discover cutting-edge tech products from smartphones to smart home devices. Shop confidently and experience innovation like never before."
            ctaLabel="Visit Store"
            ctaHref="https://gearlogy.netlify.app/"
            githubHref="https://github.com/GarvonGit/Gearlogy"
            detailHref="/projects/gearlogy"
            mockup={
              <div className="w-full aspect-[16/10] rounded-[24px] border border-white/10 bg-[#111] shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#161616]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <div className="mx-auto px-3 py-0.5 rounded bg-white/5 text-[10px] text-neutral-500 font-mono">gearlogy.netlify.app</div>
                </div>
                <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                  {[
                    { name: "Wireless Earbuds", price: "$49", color: "bg-violet-500/20 border-violet-500/30" },
                    { name: "Smart Watch", price: "$199", color: "bg-emerald-500/20 border-emerald-500/30" },
                    { name: "Drone Pro", price: "$799", color: "bg-orange-500/20 border-orange-500/30" },
                  ].map((item) => (
                    <div key={item.name} className={`rounded-xl border ${item.color} p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300`}>
                      <Smartphone size={32} className="text-neutral-400" />
                      <p className="text-xs text-neutral-300 font-semibold text-center">{item.name}</p>
                      <span className="text-emerald-400 font-bold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>

        {/* PDF Insider */}
        <div className="mb-32 md:mb-48">
          <ProjectRow
            badge="Generative AI / LLM"
            badgeColor="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
            badgeIcon={<Bot size={16} />}
            title={<>PDF <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insider</span></>}
            description="A lightweight NotebookLM clone. Upload and interact with PDF documents through a natural language chat interface powered locally by TinyLLaMA via Ollama."
            extra={
              <p className="text-sm text-neutral-500 leading-relaxed mb-4 border-l-2 border-white/10 pl-4 py-1 italic">
                Built with React, FastAPI, and advanced RAG processing.
              </p>
            }
            ctaLabel="Start Chatting"
            ctaHref="https://pdf-insider.onrender.com"
            githubHref="https://github.com/GarvonGit/notebooklm-clone"
            detailHref="/projects/pdf-insider"
            mockup={
              <div className="w-full aspect-square rounded-[24px] border border-white/10 bg-[#111] shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-12 border-b border-white/5 flex items-center px-4 gap-4 bg-[#161616]">
                  <Bot size={20} className="text-cyan-400" />
                  <span className="text-sm font-semibold text-neutral-300 tracking-wide">PDF Insider <span className="text-neutral-600 font-normal">v1.2</span></span>
                </div>
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-1/3 border-r border-white/5 bg-[#0f0f0f] p-4 flex flex-col gap-3">
                    <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-wider">Indexed Docs</p>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                      <FileText size={14} className="text-orange-400" /> report_24.pdf
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg text-xs text-neutral-500">
                      <FileText size={14} /> manual.pdf
                    </div>
                  </div>
                  <div className="w-2/3 bg-[#131313] p-4 flex flex-col relative">
                    <div className="flex-1 flex flex-col gap-4 mt-4">
                      <div className="self-end max-w-[80%] p-3 rounded-2xl rounded-tr-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 text-xs leading-relaxed">
                        Can you summarize page 4?
                      </div>
                      <div className="self-start max-w-[90%] p-3 rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 text-neutral-300 text-xs leading-relaxed flex gap-3 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                        <div className="flex-1">
                          <Sparkles size={14} className="text-cyan-400 mb-2" />
                          Operational efficiency increased by 35% after implementing the new matching infrastructure.
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-auto h-10 rounded-full bg-white/5 border border-white/10 flex items-center px-4 gap-2">
                      <Terminal size={14} className="text-neutral-500" />
                      <div className="h-4 w-[2px] bg-cyan-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Portfolio 2026 */}
        <div className="mb-32 md:mb-48">
          <ProjectRow
            reverse
            badge="Next.js / Framer Motion"
            badgeColor="bg-violet-500/10 border border-violet-500/20 text-violet-400"
            badgeIcon={<Code2 size={16} />}
            title={<>Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">2026</span></>}
            description="My personal developer portfolio — the very site you're browsing right now. Built with Next.js, Framer Motion, and TailwindCSS featuring scroll-driven animations, horizontal storytelling, glassmorphism, and a hyper-modern dark aesthetic."
            ctaLabel="You're Here!"
            ctaHref="#"
            githubHref="https://github.com/GarvonGit/portfolio-2026"
            mockup={
              <div className="w-full aspect-[16/10] rounded-[24px] border border-white/10 bg-[#111] shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#161616]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <div className="mx-auto px-3 py-0.5 rounded bg-white/5 text-[10px] text-neutral-500 font-mono">garvchouhan.dev</div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-full h-12 rounded-lg bg-gradient-to-r from-violet-500/10 to-pink-500/10 border border-white/5 flex items-center px-4">
                     <div className="w-24 h-4 rounded bg-white/10" />
                    <div className="ml-auto flex gap-2">
                      <div className="w-8 h-3 rounded bg-white/10" />
                      <div className="w-8 h-3 rounded bg-white/10" />
                      <div className="w-8 h-3 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="flex gap-4 flex-1">
                    <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/5 p-4 flex flex-col gap-2">
                      <div className="w-3/4 h-3 rounded bg-violet-500/20" />
                      <div className="w-1/2 h-3 rounded bg-white/5" />
                      <div className="mt-auto w-16 h-6 rounded-full bg-violet-500/20 border border-violet-500/30" />
                    </div>
                    <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/5 p-4 flex flex-col gap-2">
                      <div className="w-2/3 h-3 rounded bg-pink-500/20" />
                      <div className="w-1/2 h-3 rounded bg-white/5" />
                      <div className="mt-auto w-16 h-6 rounded-full bg-pink-500/20 border border-pink-500/30" />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Agendo — Productivity System */}
        <div className="mb-16">
          <ProjectRow
            badge="Productivity / React"
            badgeColor="bg-amber-500/10 border border-amber-500/20 text-amber-400"
            badgeIcon={<ListTodo size={16} />}
            title={<>Ag<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">endo</span></>}
            description="A minimalist, elegant Productivity System built with React.js. Features real-time updates, responsive design, and full CRUD operations for high-efficiency task management."
            ctaLabel="Try Agendo"
            ctaHref="https://garvongit.github.io/Agendo/"
            githubHref="https://github.com/GarvonGit/Agendo"
            detailHref="/projects/agendo"
            mockup={
              <div className="w-full aspect-[16/10] rounded-[24px] border border-white/10 bg-[#0d0d0d] shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#151515]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <div className="mx-auto px-3 py-0.5 rounded bg-white/5 text-[10px] text-neutral-500 font-mono">agendo.v1</div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-full flex justify-between items-center mb-2">
                    <div className="w-24 h-5 rounded bg-amber-500/10 border border-amber-500/20" />
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/5" />
                      <div className="w-6 h-6 rounded-full bg-white/5" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    {[
                      { text: "Finish portfolio case studies", done: true, p: "H" },
                      { text: "Optimize React state loops", done: false, p: "M" },
                      { text: "Implement drag-to-sort", done: false, p: "M" },
                    ].map((task, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${task.done ? 'bg-amber-500/5 border-amber-500/20' : 'bg-white/[0.02] border-white/5'}`}>
                        <div className={`w-4 h-4 rounded-full border ${task.done ? 'bg-amber-500 border-amber-500' : 'border-white/10'}`} />
                        <span className={`text-[10px] flex-1 ${task.done ? 'line-through text-neutral-600' : 'text-neutral-400'}`}>{task.text}</span>
                        <span className="text-[8px] font-mono text-neutral-600">{task.p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center px-4 gap-2">
                    <Plus size={12} className="text-amber-500" />
                    <div className="w-20 h-3 rounded bg-white/5" />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* CATEGORY 2: GAME DEVELOPMENT                                 */}
      {/* ============================================================ */}
      <section className="relative z-10 bg-[#050508] py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

        <CategoryHeader
          icon={<Gamepad2 size={16} />}
          label="Game Development"
          title={<>Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Experiences</span></>}
          gradient="bg-purple-500/10 border border-purple-500/20 text-purple-400"
        />

        <ProjectRow
          badge="Godot Engine"
          badgeColor="bg-purple-500/10 border border-purple-500/20 text-purple-400"
          badgeIcon={<Gamepad2 size={16} />}
          title={<>Flappy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Jet</span></>}
          description="A fast-paced arcade-style flying game built in the Godot Engine. Tap, flap, and keep your jet airborne while dodging obstacles and chasing high scores. Features robust score tracking, dynamic medal rewards, and responsive physics controls."
          ctaLabel="Play the Game"
          ctaHref="https://effulgent-licorice-34ac18.netlify.app/"
          githubHref="https://github.com/GarvonGit/FlapJet"
          detailHref="/projects/flappy-jet"
          mockup={
            <div className="w-full aspect-[4/3] rounded-[32px] border-[8px] border-[#1e1e1e] bg-[#2a2a2a] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center pointer-events-none group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-2 border-[4px] border-[#111] rounded-[22px] pointer-events-none z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-20" />
              <div className="absolute top-0 right-16 w-12 h-24 bg-green-500/30 border-4 border-green-400/50 rounded-b-lg" />
              <div className="absolute bottom-0 left-16 w-12 h-32 bg-green-500/30 border-4 border-green-400/50 rounded-t-lg" />
              <motion.div animate={{ y: [-15, 15, -15], rotateZ: [-5, 15, -5] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="relative z-10 mt-8">
                <div className="w-16 h-12 bg-white rounded-r-full rounded-tl-full shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-end pr-3">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                </div>
                <motion.div animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.2 }} className="absolute top-1/2 -left-8 w-8 h-4 bg-orange-500 rounded-l-full -translate-y-1/2 origin-right" />
              </motion.div>
              <div className="absolute top-6 flex w-full justify-between px-8 z-10 text-white font-mono font-bold text-xl drop-shadow-md">
                <span>SCORE: 42</span>
                <Trophy className="text-yellow-400" />
              </div>
              <div className="absolute bottom-6 flex items-center gap-2 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-yellow-500 font-bold z-10">
                <Medal size={20} /> GOLD RANK
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] pointer-events-none z-30 opacity-50" />
            </div>
          }
        />
      </section>

      {/* ============================================================ */}
      {/* CATEGORY 3: QUICK TOOLS & UTILITIES                          */}
      {/* ============================================================ */}
      <section className="relative z-10 bg-[#0a0a0a] py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

        <CategoryHeader
          icon={<Wrench size={16} />}
          label="Tools & Extensions"
          title={<>Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Tools</span></>}
          gradient="bg-amber-500/10 border border-amber-500/20 text-amber-400"
        />

        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ToolCard
            index={0}
            icon={<CloudSun size={40} className="text-sky-400" />}
            title="Weatherly"
            description="A sleek React.js weather app fetching real-time API data including humidity, sunset time, pressure, wind speed, and date-time for any city."
            liveHref="https://garvongit.github.io/weatherly/"
            githubHref="https://github.com/GarvonGit/weatherly"
            detailHref="/projects/weatherly"
            accentColor="bg-sky-500"
            glowColor="hover:shadow-[0_0_60px_rgba(56,189,248,0.15)]"
          />
          <ToolCard
            index={1}
            icon={<Chrome size={40} className="text-green-400" />}
            title="Live BatS"
            description="A Chrome extension for cricket lovers. Get instant live scores from worldwide leagues and tournaments directly in your browser with one click."
            githubHref="https://github.com/GarvonGit/LIVE-BATS"
            detailHref="/projects/live-bats"
            accentColor="bg-green-500"
            glowColor="hover:shadow-[0_0_60px_rgba(74,222,128,0.15)]"
          />
        </div>
      </section>
    </>
  );
}
