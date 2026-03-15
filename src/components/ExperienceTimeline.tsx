"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Menstrupedia",
    period: "Recent",
    description: "Led a team of 4 engineers. Architected and rebuilt the cart and checkout flow, resulting in a significantly improved user experience.",
    metrics: ["35% improvement in engagement", "40% boost in overall user engagement"],
  },
  {
    role: "Frontend Intern",
    company: "Kuizlo",
    period: "Past",
    description: "Developed interactive frontend components and optimized web performance for consumer-facing features.",
    metrics: ["Delivered responsive UI metrics", "Optimized Web Vitals"],
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative z-10 bg-[#121212] py-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Experience</h3>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Main vertical track */}
          <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Glowing active line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[15px] md:left-1/2 md:-ml-[2px] top-0 w-[4px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full origin-top" 
          />

          <div className="flex flex-col gap-24">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full bg-[#121212] border-2 border-neutral-600 group-hover:border-cyan-400 group-hover:scale-150 transition-all duration-300 z-10" />

                  {/* Left Side (or Top on Mobile) */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:order-2'} mb-4 md:mb-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-1 block">{exp.period}</span>
                      <h4 className="text-2xl md:text-3xl font-semibold tracking-tight">{exp.role}</h4>
                      <h5 className="text-lg text-neutral-400 mt-1 font-medium">{exp.company}</h5>
                    </motion.div>
                  </div>

                  {/* Right Side (or Bottom on Mobile) */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right md:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
                    >
                      <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.metrics.map((metric, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-cyan-200">
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                             {metric}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
