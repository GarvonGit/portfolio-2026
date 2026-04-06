"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Users, Rocket, ShieldCheck, LayoutDashboard, Activity } from "lucide-react";

export default function Career() {
  return (
    <div className="bg-[#0a0a0a] overflow-x-clip">
      {/* Section Header */}
      <div className="text-center pt-24 md:pt-32 pb-8 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Work <span className="text-neutral-500">Experience</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
            <span className="hidden md:inline">Scroll horizontally through each chapter of my career.</span>
            <span className="md:hidden">Each chapter of my career.</span>
          </p>
        </motion.div>
      </div>
      <MenstrupediaChapter />
      <KuizloChapter />
    </div>
  );
}

/* ─── Shared mobile card ─── */
function MobileCard({
  glow, title, icon, big, bigClass, sub, delay = 0,
}: {
  glow: string; title: string; icon: React.ReactNode;
  big: string; bigClass?: string; sub: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, delay }}
      className="rounded-[24px] bg-white/[0.03] border border-white/10 p-5 flex flex-col gap-3 relative overflow-hidden"
    >
      <div className={`absolute -top-8 -right-8 w-32 h-32 ${glow} rounded-full blur-[50px] pointer-events-none`} />
      <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wide">{title}</p>
      <div className="text-neutral-600">{icon}</div>
      <p className={`text-3xl font-black tracking-tighter leading-none ${bigClass ?? "text-white"}`}>{big}</p>
      <p className="text-xs text-neutral-400 leading-relaxed">{sub}</p>
    </motion.div>
  );
}

function MenstrupediaChapter() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={targetRef} className="relative border-t border-white/5 h-auto md:h-[250vh]">

      {/* ── MOBILE layout ── */}
      <div className="md:hidden px-4 py-12 flex flex-col gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-2"
        >
          <p className="text-cyan-400 font-mono tracking-widest uppercase text-[10px] mb-2">Jan 2024 – Present</p>
          <h2 className="text-[2.6rem] font-bold tracking-tighter text-white leading-[1.05]">
            Software<br /><span className="text-neutral-600 italic font-serif">Engineer.</span>
          </h2>
          <p className="text-sm text-neutral-400 mt-3">Leading the architecture and rebuilding the entire web platform at Menstrupedia.</p>
        </motion.div>

        <MobileCard delay={0.05} glow="bg-cyan-500/15" title="Full Platform Rebuild"
          icon={<Users size={28} />}
          big="Team of 4"
          sub="Rebuilt the entire web platform from scratch, migrating legacy code to a modern React.js stack with SSR." />

        <MobileCard delay={0.1} glow="bg-violet-500/15" title="Checkout Conversions"
          icon={<ShoppingCart size={28} />}
          big="+35% Engagement"
          bigClass="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
          sub="Integrated Delhivery, Ekart, Meta, WhatsApp API, and Algolia to streamline checkout and retain users." />

        <MobileCard delay={0.15} glow="bg-green-500/15" title="Website Performance"
          icon={<Rocket size={28} />}
          big="2× Faster  ·  75+ LH"
          bigClass="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"
          sub="Optimized Core Web Vitals — lazy loading, code splitting, image optimization across the platform." />

        <MobileCard delay={0.2} glow="bg-blue-500/15" title="Gamified Learning"
          icon={<LayoutDashboard size={28} />}
          big="Trubuddy Quiz"
          sub="Engineered the Trubuddy Quiz app & critical internal dashboards to streamline content operations." />
      </div>

      {/* ── DESKTOP: horizontal scroll ── */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-cyan-500/5 whitespace-nowrap pointer-events-none select-none"
          style={{ x: backgroundX }}
        >
          MENSTRUPEDIA
        </motion.div>

        <motion.div style={{ x }} className="flex items-center h-screen gap-12 px-32 w-max">

          <div className="w-[50vw] h-[65vh] shrink-0 flex flex-col justify-center">
            <p className="text-cyan-400 font-mono tracking-widest uppercase mb-4 text-sm">Jan 2024 - Present</p>
            <h2 className="text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
              Software<br /><span className="text-neutral-600 italic font-serif">Engineer.</span>
            </h2>
            <p className="text-2xl text-neutral-400 max-w-md">Leading the architecture and rebuilding the entire web platform.</p>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Full Platform Rebuild</h3>
            <div>
              <Users size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-cyan-400 transition-all duration-700" />
              <p className="text-8xl font-black tracking-tighter text-white">Team of 4</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Architected and rebuilt the entire web platform from scratch migrating legacy code to a modern React.js stack with server-side rendering.</p>
            </div>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Checkout Conversions</h3>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-violet-500/20 group-hover:rotate-12 transition-all duration-500">
                  <ShoppingCart size={32} className="text-white" />
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 font-mono text-xs">
                  Delhivery / Ekart / Meta / WhatsApp / Algolia
                </div>
              </div>
              <p className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">+35%</p>
              <p className="text-xl text-neutral-400 mt-2 font-mono uppercase">Engagement Boost</p>
              <p className="text-lg text-neutral-400 mt-4 max-w-sm">Integrated Delhivery & Ekart shipping, Meta, WhatsApp Business API, and Algolia to streamline checkout and boost user retention.</p>
            </div>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Website Performance</h3>
            <div>
              <Rocket size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-green-400 transition-all duration-500" />
              <div className="flex items-end gap-8">
                <div>
                  <p className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">2x</p>
                  <p className="text-xs text-neutral-500 font-mono uppercase mt-2">Faster Load</p>
                </div>
                <div>
                  <p className="text-8xl font-black tracking-tighter text-white">75+</p>
                  <p className="text-xs text-neutral-500 font-mono uppercase mt-2">Lighthouse</p>
                </div>
              </div>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Optimized Core Web Vitals, implemented lazy loading, code splitting, and image optimization across the entire platform.</p>
            </div>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Gamified Learning</h3>
            <div>
              <LayoutDashboard size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-blue-400 transition-all duration-500" />
              <p className="text-5xl font-black tracking-tighter text-white leading-tight">Trubuddy Quiz &<br />Admin Panels</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm leading-tight">Engineered the gamified Trubuddy Quiz app and built critical internal dashboards and support systems.</p>
            </div>
          </div>

          <div className="w-[5vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}

function KuizloChapter() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={targetRef} className="relative border-t border-white/5 h-auto md:h-[250vh]">

      {/* ── MOBILE layout ── */}
      <div className="md:hidden px-4 py-12 flex flex-col gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-2"
        >
          <p className="text-orange-400 font-mono tracking-widest uppercase text-[10px] mb-2">May – Jul 2023</p>
          <h2 className="text-[2.6rem] font-bold tracking-tighter text-white leading-[1.05]">
            Frontend<br /><span className="text-neutral-600 italic font-serif">Intern.</span>
          </h2>
          <p className="text-sm text-neutral-400 mt-3">Designing responsive layouts and secure auth infrastructure at Kuizlo.</p>
        </motion.div>

        <MobileCard delay={0.05} glow="bg-orange-500/15" title="Landing Conversions"
          icon={<Rocket size={28} />}
          big="+25% Sign-ups"
          sub="Redesigned responsive landing pages with optimized CTAs and A/B tested layouts." />

        <MobileCard delay={0.1} glow="bg-green-500/15" title="Auth Infrastructure"
          icon={<ShieldCheck size={28} />}
          big="-30% Breaches"
          sub="JWT auth + RBAC reduced unauthorized access attempts within month one." />

        <MobileCard delay={0.15} glow="bg-green-500/15" title="Site Performance"
          icon={<Activity size={28} />}
          big="+45%"
          bigClass="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400"
          sub="Improved page speed via asset compression, responsive optimization, and efficient rendering." />

        <MobileCard delay={0.2} glow="bg-pink-500/15" title="Matching Platform"
          icon={<Rocket size={28} />}
          big="Task Allocation"
          sub="Pages to match students with experts, radically improving turnaround time." />
      </div>

      {/* ── DESKTOP: horizontal scroll ── */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-orange-500/5 whitespace-nowrap pointer-events-none select-none"
          style={{ x: backgroundX }}
        >
          KUIZLO
        </motion.div>

        <motion.div style={{ x }} className="flex items-center h-screen gap-12 px-32 w-max">

          <div className="w-[50vw] h-[65vh] shrink-0 flex flex-col justify-center">
            <p className="text-orange-400 font-mono tracking-widest uppercase mb-4 text-sm">May - Jul 2023</p>
            <h2 className="text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
              Frontend<br /><span className="text-neutral-600 italic font-serif">Intern.</span>
            </h2>
            <p className="text-2xl text-neutral-400 max-w-md">Designing responsive layouts and secure auth infrastructure.</p>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Landing Conversions</h3>
            <div>
              <Rocket size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-orange-400 transition-all duration-700" />
              <div className="flex items-end gap-8">
                <div>
                  <p className="text-8xl font-black tracking-tighter text-white">+25%</p>
                  <p className="text-xs text-neutral-500 font-mono uppercase mt-2">Sign-ups</p>
                </div>
                <div>
                  <p className="text-8xl font-black tracking-tighter text-white">+40%</p>
                  <p className="text-xs text-neutral-500 font-mono uppercase mt-2">Engagement</p>
                </div>
              </div>
              <p className="text-lg text-neutral-400 mt-4 max-w-sm leading-tight">Redesigned responsive landing pages with optimized CTAs and A/B tested layouts, driving higher sign-ups and engagement.</p>
            </div>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Auth Infrastructure</h3>
            <div>
              <ShieldCheck size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-green-400 transition-all duration-500" />
              <p className="text-8xl font-black tracking-tighter text-white">-30%</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm leading-tight">Reduction in unauthorized access attempts within month one. Implemented secure JWT-based authentication and role-based access control.</p>
            </div>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Site Performance</h3>
            <div>
              <Activity size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-green-400 transition-all duration-500" />
              <p className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">+45%</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm leading-tight">Improved page load speed through responsive design optimization, asset compression, and efficient rendering strategies.</p>
            </div>
          </div>

          <div className="w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-semibold text-white">Matching Platform</h3>
            <div>
              <Rocket size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-pink-400 transition-all duration-500" />
              <p className="text-5xl font-black tracking-tighter text-white leading-tight">Academic Task Allocation</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm leading-tight">Developed dedicated pages to seamlessly match students with experts, radically improving turnaround time.</p>
            </div>
          </div>

          <div className="w-[10vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
