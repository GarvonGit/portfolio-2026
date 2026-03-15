"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Users, Presentation } from "lucide-react";

const CARDS = [
  {
    id: 1,
    title: "IIIT Vadodara",
    subtitle: "B.Tech in Computer Science",
    date: "Dec 2020 - Jun 2024",
    icon: <GraduationCap size={48} />,
    color: "from-cyan-500/20 to-transparent",
    accent: "text-cyan-400",
    shadow: "shadow-[0_0_30px_rgba(6,182,212,0.6)]",
    cardGlow: "shadow-[0_0_50px_rgba(6,182,212,0.15)]",
    details: (
      <div className="mt-8 flex flex-col gap-4">
        <p className="text-neutral-300 text-lg leading-relaxed">
          Graduated with a focus on core software engineering principles and scalable systems.
        </p>
        <div>
          <p className="text-cyan-400/80 text-xs font-bold uppercase tracking-widest mb-3">Key Coursework</p>
          <div className="flex flex-wrap gap-2">
            {["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Artificial Intelligence", "Wireless Sensor Network", "Cyber Security"].map(c => (
              <span key={c} className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-sm backdrop-blur-md">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "State Winner",
    subtitle: "SSIP AKAM Hackathon",
    date: "2023",
    icon: <Award size={48} />,
    color: "from-yellow-500/20 to-transparent",
    accent: "text-yellow-400",
    shadow: "shadow-[0_0_30px_rgba(234,179,8,0.6)]",
    cardGlow: "shadow-[0_0_50px_rgba(234,179,8,0.15)]",
    details: (
      <div className="mt-8">
        <p className="text-neutral-300 text-lg leading-relaxed mb-4">
          Led an engineering team of 8 to build a highly scalable, real-time web application MVP in 36 hours.
        </p>
        <ul className="space-y-3 text-neutral-400">
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold">→</span> Designed high-concurrency architecture.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold">→</span> 1st place among 100+ competing teams.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    title: "Head of Dance",
    subtitle: "IIITV Core Committee",
    date: "2022 - 2024",
    icon: <Users size={48} />,
    color: "from-blue-500/20 to-transparent",
    accent: "text-blue-400",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    cardGlow: "shadow-[0_0_50px_rgba(59,130,246,0.15)]",
    details: (
      <div className="mt-8">
        <ul className="space-y-3 text-neutral-400">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">→</span> Mentored 80+ active club members.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">→</span> Organized college events with 500+ attendees.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "Head of Design",
    subtitle: "TEDx IIITV",
    date: "2023",
    icon: <Presentation size={48} />,
    color: "from-red-500/20 to-transparent",
    accent: "text-red-400",
    shadow: "shadow-[0_0_30px_rgba(239,68,68,0.6)]",
    cardGlow: "shadow-[0_0_50px_rgba(239,68,68,0.15)]",
    details: (
      <div className="mt-8">
        <ul className="space-y-3 text-neutral-400">
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">→</span> Led multi-disciplinary UI/UX team.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">→</span> Overhauled TEDx site, heavily boosting conversions.
          </li>
        </ul>
      </div>
    )
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  // The very tall container tracking `400vh` scroll distance.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Massive 400vh height so user scrolls to 'scrub' through the card animations
    <section ref={containerRef} className="relative z-10 bg-[#050505] h-[400vh] border-t border-white/5">

      {/* Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Background Title locked to screen */}
        <h2 className="absolute top-10 left-0 right-0 text-center text-[10vw] md:text-[8vw] font-black tracking-tighter text-white/[0.02] pointer-events-none select-none uppercase">
          Leadership
        </h2>

        {/* Section Title — sits above the card deck */}
        <div className="text-center mb-8 relative z-30 px-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 drop-shadow-lg">
            Education
          </h2>
          <p className="text-neutral-400 text-xl font-serif italic drop-shadow-md">
            A history of academics and foundational leadership.
          </p>
        </div>

        {/* The "Deck" Container centered in the viewport */}
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 h-[500px] flex items-start justify-center">

          {/* Map through CARDS and apply distinct useTransform logic to stack them */}
          {CARDS.map((card, i) => {
            const index = i;
            const targetScale = 1 - (CARDS.length - index) * 0.05;

            // Map the scroll progress for THIS specific card.
            // When progress is between intervalStart and intervalEnd, this card enters the viewport.
            // And then it scales down / gets dim while subsequent cards layer over it.
            const rangeStart = index * 0.25;
            const rangeEnd = rangeStart + 0.25;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardScale = useTransform(scrollYProgress, [rangeStart, 1], [1, targetScale]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardTop = useTransform(scrollYProgress, [rangeStart - 0.25, rangeStart], ["150vh", "0vh"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardOpacity = useTransform(scrollYProgress, [rangeStart, rangeEnd + 0.25], [1, 0.4]);

            // Ensure first card is mostly always on screen before scrolling further
            const startTop = index === 0 ? "0vh" : cardTop;

            return (
              <motion.div
                key={card.id}
                className={`
                  absolute top-0 w-full h-[480px] sm:h-[440px]
                  rounded-[2rem] border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl
                  p-8 sm:p-12 flex flex-col justify-between overflow-hidden
                  ${card.cardGlow}
                `}
                style={{
                  top: startTop,
                  scale: cardScale,
                  opacity: cardOpacity,
                  zIndex: index * 10,
                }}
              >
                {/* Physical Base Glow */}
                <div className={`absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-tl ${card.color} opacity-40 blur-[100px] rounded-full pointer-events-none`} />

                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-[#111] border border-white/5 ${card.shadow} ${card.accent}`}>
                    {card.icon}
                  </div>
                  <span className={`font-mono text-sm font-bold tracking-widest uppercase ${card.accent} opacity-80 mt-2`}>
                    {card.date}
                  </span>
                </div>

                {/* Card Content  */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">{card.title}</h3>
                  <h4 className="text-xl sm:text-2xl text-neutral-500 font-serif italic mb-6">{card.subtitle}</h4>
                  {card.details}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
