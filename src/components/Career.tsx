"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Users, Rocket, ShieldCheck, LayoutDashboard, Activity } from "lucide-react";

export default function Career() {
  return (
    <div className="bg-[#0a0a0a] overflow-x-clip">
      {/* Section Header */}
      <div className="text-center pt-32 pb-8 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Work <span className="text-neutral-500">Experience</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">Scroll horizontally through each chapter of my career.</p>
        </motion.div>
      </div>
      <MenstrupediaChapter />
      <KuizloChapter />
    </div>
  );
}

function MenstrupediaChapter() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll strictly while the sticky container is pinned (top to bottom)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // -80% safely reveals the 5 items (Intro + 4 Cards)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] border-t border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Massive Background Typography */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-cyan-500/5 whitespace-nowrap pointer-events-none select-none"
          style={{ x: backgroundX }}
        >
          MENSTRUPEDIA
        </motion.div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-32 w-max">

          {/* Intro Plate */}
          <div className="w-[85vw] md:w-[50vw] h-[65vh] shrink-0 flex flex-col justify-center">
            <p className="text-cyan-400 font-mono tracking-widest uppercase mb-4 text-sm">Jan 2024 - Present</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
              Software<br />
              <span className="text-neutral-600 italic font-serif">Engineer.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-md">
              Leading the architecture and rebuilding the entire web platform.
            </p>
          </div>

          {/* Card 1: Platform Rebuild & Performance */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Full Platform Rebuild</h3>
            </div>
            <div>
              <Users size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-cyan-400 transition-all duration-700" />
              <p className="text-7xl md:text-8xl font-black tracking-tighter text-white">Team of 4</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Architected and rebuilt the entire web platform from scratch migrating legacy code to a modern React.js stack with server-side rendering.</p>
            </div>
          </div>

          {/* Card 2: Metrics */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Checkout Conversions</h3>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-violet-500/20 group-hover:rotate-12 transition-all duration-500">
                  <ShoppingCart size={32} className="text-white" />
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 font-mono text-xs hidden md:block">
                  Delhivery / Ekart / Meta / WhatsApp / Algolia
                </div>
              </div>

              <p className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                +35%
              </p>
              <p className="text-xl text-neutral-400 mt-2 font-mono uppercase">Engagement Boost</p>
              <p className="text-lg text-neutral-400 mt-4 max-w-sm">Integrated Delhivery & Ekart shipping, Meta, WhatsApp Business API, and Algolia etc. to streamline the checkout flow and boost user retention.</p>
            </div>
          </div>

          {/* Card 3: Website Performance */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Website Performance</h3>
            </div>
            <div>
              <Rocket size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-green-400 transition-all duration-500" />
              <div className="flex items-end gap-8">
                <div>
                  <p className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">2x</p>
                  <p className="text-sm text-neutral-500 font-mono uppercase mt-2">Faster Load</p>
                </div>
                <div>
                  <p className="text-7xl md:text-8xl font-black tracking-tighter text-white">75+</p>
                  <p className="text-sm text-neutral-500 font-mono uppercase mt-2">Lighthouse</p>
                </div>
              </div>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Optimized Core Web Vitals, implemented lazy loading, code splitting, and image optimization across the entire platform.</p>
            </div>
          </div>

          {/* Card 3: Operations & Tooling */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Gamified Learning</h3>
            </div>
            <div>
              <LayoutDashboard size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-blue-400 transition-all duration-500" />
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">Trubuddy Quiz &<br />Admin Panels</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Engineered the gamified Trubuddy Quiz app and built critical internal dashboards and support systems to streamline content operations.</p>
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

  // Track scroll strictly while the sticky container is pinned
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // -80% safely reveals the 5 items (Intro + 4 Cards)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] border-t border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Massive Background Typography */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-orange-500/5 whitespace-nowrap pointer-events-none select-none"
          style={{ x: backgroundX }}
        >
          KUIZLO
        </motion.div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-32 w-max">

          {/* Intro Plate */}
          <div className="w-[85vw] md:w-[50vw] h-[65vh] shrink-0 flex flex-col justify-center">
            <p className="text-orange-400 font-mono tracking-widest uppercase mb-4 text-sm">May - Jul 2023</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
              Frontend<br />
              <span className="text-neutral-600 italic font-serif">Intern.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-md">
              Designing responsive layouts and secure auth infrastructure.
            </p>
          </div>

          {/* Card 1: Frontend Metrics */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Landing Conversions</h3>
            </div>
            <div>
              <Rocket size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-orange-400 transition-all duration-700" />
              <div className="flex items-end gap-8">
                <div>
                  <p className="text-7xl md:text-8xl font-black tracking-tighter text-white">+25%</p>
                  <p className="text-sm text-neutral-500 font-mono uppercase mt-2">Sign-ups</p>
                </div>
                <div>
                  <p className="text-7xl md:text-8xl font-black tracking-tighter text-white">+40%</p>
                  <p className="text-sm text-neutral-500 font-mono uppercase mt-2">Engagement</p>
                </div>
              </div>
              <p className="text-lg text-neutral-400 mt-4 max-w-sm">Redesigned responsive landing pages with optimized CTAs and A/B tested layouts, driving higher user sign-ups and deeper platform engagement.</p>
            </div>
          </div>

          {/* Card 2: Security Auth */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Auth Infrastructure</h3>
            </div>
            <div>
              <ShieldCheck size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-green-400 transition-all duration-500" />
              <p className="text-7xl md:text-8xl font-black tracking-tighter text-white">-30%</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Reduction in unauthorized access attempts within month one. Implemented secure JWT-based authentication and role-based access control to protect sensitive user data and platform endpoints.</p>
            </div>
          </div>

          {/* Card 3: Website Performance */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Site Performance</h3>
            </div>
            <div>
              <Activity size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-green-400 transition-all duration-500" />
              <p className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">+45%</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Improved page load speed and overall site performance through responsive design optimization, asset compression, and efficient rendering strategies.</p>
            </div>
          </div>

          {/* Card 4: Matching Platform */}
          <div className="w-[85vw] md:w-[45vw] h-[65vh] shrink-0 p-12 rounded-[40px] bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <h3 className="text-4xl font-semibold text-white">Matching Platform</h3>
            </div>
            <div>
              <Rocket size={48} className="text-neutral-600 mb-8 group-hover:scale-110 group-hover:-translate-y-4 group-hover:text-pink-400 transition-all duration-500" />
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">Academic Task Allocation</p>
              <p className="text-xl text-neutral-400 mt-4 max-w-sm">Developed dedicated pages to seamlessly match students with experts, radically improving turnaround time.</p>
            </div>
          </div>

          <div className="w-[10vw] shrink-0" />

        </motion.div>
      </div>
    </section>
  );
}
