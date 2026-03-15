"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap
} from "framer-motion";
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiReact,
  SiDocker, SiKubernetes, SiMysql, SiPhp, SiHtml5, SiCss, SiGnubash,
  SiLaravel, SiTailwindcss, SiMui, SiBootstrap, SiNodedotjs, SiMongodb, SiSass,
  SiGit, SiGithub, SiBitbucket, SiFirebase, SiWebpack, SiVite, SiBabel,
  SiPostman, SiJira, SiFigma, SiVercel, SiGodotengine,
  SiOpenai, SiAnthropic, SiGooglegemini, SiGithubcopilot, SiOllama, SiLangchain,
  SiGooglecloud, SiGoogleanalytics
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

type TechItem = {
  name: string;
  Icon: React.ElementType;
  colorClass: string;
  shadowClass: string;
};

/* ------------------------------------------------------------------ */
/* ROW 1: Languages & Web Dev Frameworks                              */
/* ------------------------------------------------------------------ */
const LANGUAGES_AND_WEB: TechItem[] = [
  { name: "C++", Icon: SiCplusplus, colorClass: "text-[#00599C]", shadowClass: "hover:shadow-[0_0_30px_rgba(0,89,156,0.6)] hover:border-[#00599C]/50" },
  { name: "Java", Icon: FaJava, colorClass: "text-[#ED8B00]", shadowClass: "hover:shadow-[0_0_30px_rgba(237,139,0,0.6)] hover:border-[#ED8B00]/50" },
  { name: "Python", Icon: SiPython, colorClass: "text-[#3776AB]", shadowClass: "hover:shadow-[0_0_30px_rgba(55,118,171,0.6)] hover:border-[#3776AB]/50" },
  { name: "JavaScript", Icon: SiJavascript, colorClass: "text-[#F7DF1E]", shadowClass: "hover:shadow-[0_0_30px_rgba(247,223,30,0.6)] hover:border-[#F7DF1E]/50" },
  { name: "TypeScript", Icon: SiTypescript, colorClass: "text-[#3178C6]", shadowClass: "hover:shadow-[0_0_30px_rgba(49,120,198,0.6)] hover:border-[#3178C6]/50" },
  { name: "PHP", Icon: SiPhp, colorClass: "text-[#777BB4]", shadowClass: "hover:shadow-[0_0_30px_rgba(119,123,180,0.6)] hover:border-[#777BB4]/50" },
  { name: "HTML5", Icon: SiHtml5, colorClass: "text-[#E34F26]", shadowClass: "hover:shadow-[0_0_30px_rgba(227,79,38,0.6)] hover:border-[#E34F26]/50" },
  { name: "CSS3", Icon: SiCss, colorClass: "text-[#1572B6]", shadowClass: "hover:shadow-[0_0_30px_rgba(21,114,182,0.6)] hover:border-[#1572B6]/50" },
  { name: "SCSS", Icon: SiSass, colorClass: "text-[#CC6699]", shadowClass: "hover:shadow-[0_0_30px_rgba(204,102,153,0.6)] hover:border-[#CC6699]/50" },
  { name: "Bash", Icon: SiGnubash, colorClass: "text-[#4EAA25]", shadowClass: "hover:shadow-[0_0_30px_rgba(78,170,37,0.6)] hover:border-[#4EAA25]/50" },
  { name: "React", Icon: SiReact, colorClass: "text-[#61DAFB]", shadowClass: "hover:shadow-[0_0_30px_rgba(97,218,251,0.6)] hover:border-[#61DAFB]/50" },

  { name: "Node.js", Icon: SiNodedotjs, colorClass: "text-[#339933]", shadowClass: "hover:shadow-[0_0_30px_rgba(51,153,51,0.6)] hover:border-[#339933]/50" },
  { name: "Laravel", Icon: SiLaravel, colorClass: "text-[#FF2D20]", shadowClass: "hover:shadow-[0_0_30px_rgba(255,45,32,0.6)] hover:border-[#FF2D20]/50" },
  { name: "TailwindCSS", Icon: SiTailwindcss, colorClass: "text-[#06B6D4]", shadowClass: "hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:border-[#06B6D4]/50" },
  { name: "MaterialUI", Icon: SiMui, colorClass: "text-[#007FFF]", shadowClass: "hover:shadow-[0_0_30px_rgba(0,127,255,0.6)] hover:border-[#007FFF]/50" },
  { name: "Bootstrap", Icon: SiBootstrap, colorClass: "text-[#7952B3]", shadowClass: "hover:shadow-[0_0_30px_rgba(121,82,179,0.6)] hover:border-[#7952B3]/50" },
  { name: "SQL", Icon: SiMysql, colorClass: "text-[#4479A1]", shadowClass: "hover:shadow-[0_0_30px_rgba(68,121,161,0.6)] hover:border-[#4479A1]/50" },
  { name: "MongoDB", Icon: SiMongodb, colorClass: "text-[#47A248]", shadowClass: "hover:shadow-[0_0_30px_rgba(71,162,72,0.6)] hover:border-[#47A248]/50" },
];

/* ------------------------------------------------------------------ */
/* ROW 2: AI & ML                                                     */
/* ------------------------------------------------------------------ */
const AI: TechItem[] = [
  { name: "OpenAI", Icon: SiOpenai, colorClass: "text-white", shadowClass: "hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/50" },
  { name: "Anthropic", Icon: SiAnthropic, colorClass: "text-[#DCA281]", shadowClass: "hover:shadow-[0_0_30px_rgba(220,162,129,0.6)] hover:border-[#DCA281]/50" },
  { name: "Gemini", Icon: SiGooglegemini, colorClass: "text-[#8E75B2]", shadowClass: "hover:shadow-[0_0_30px_rgba(142,117,178,0.6)] hover:border-[#8E75B2]/50" },
  { name: "Copilot", Icon: SiGithubcopilot, colorClass: "text-white", shadowClass: "hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/50" },
  { name: "Ollama", Icon: SiOllama, colorClass: "text-white", shadowClass: "hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/50" },
  { name: "LangChain", Icon: SiLangchain, colorClass: "text-white", shadowClass: "hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/50" },
  { name: "Vercel AI", Icon: SiVercel, colorClass: "text-white", shadowClass: "hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/50" },
];

/* ------------------------------------------------------------------ */
/* ROW 3: Dev Tools & Technologies                                    */
/* ------------------------------------------------------------------ */
const DEVTOOLS: TechItem[] = [
  { name: "AWS", Icon: FaAws, colorClass: "text-[#FF9900]", shadowClass: "hover:shadow-[0_0_30px_rgba(255,153,0,0.6)] hover:border-[#FF9900]/50" },
  { name: "Docker", Icon: SiDocker, colorClass: "text-[#2496ED]", shadowClass: "hover:shadow-[0_0_30px_rgba(36,150,237,0.6)] hover:border-[#2496ED]/50" },
  { name: "Kubernetes", Icon: SiKubernetes, colorClass: "text-[#326CE5]", shadowClass: "hover:shadow-[0_0_30px_rgba(50,108,229,0.6)] hover:border-[#326CE5]/50" },
  { name: "Git", Icon: SiGit, colorClass: "text-[#F05032]", shadowClass: "hover:shadow-[0_0_30px_rgba(240,80,50,0.6)] hover:border-[#F05032]/50" },
  { name: "GitHub", Icon: SiGithub, colorClass: "text-white", shadowClass: "hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/50" },
  { name: "Bitbucket", Icon: SiBitbucket, colorClass: "text-[#0052CC]", shadowClass: "hover:shadow-[0_0_30px_rgba(0,82,204,0.6)] hover:border-[#0052CC]/50" },
  { name: "Firebase", Icon: SiFirebase, colorClass: "text-[#FFCA28]", shadowClass: "hover:shadow-[0_0_30px_rgba(255,202,40,0.6)] hover:border-[#FFCA28]/50" },
  { name: "Webpack", Icon: SiWebpack, colorClass: "text-[#8DD6F9]", shadowClass: "hover:shadow-[0_0_30px_rgba(141,214,249,0.6)] hover:border-[#8DD6F9]/50" },
  { name: "Vite", Icon: SiVite, colorClass: "text-[#646CFF]", shadowClass: "hover:shadow-[0_0_30px_rgba(100,108,255,0.6)] hover:border-[#646CFF]/50" },
  { name: "Babel", Icon: SiBabel, colorClass: "text-[#F9DC3E]", shadowClass: "hover:shadow-[0_0_30px_rgba(249,220,62,0.6)] hover:border-[#F9DC3E]/50" },
  { name: "Postman", Icon: SiPostman, colorClass: "text-[#FF6C37]", shadowClass: "hover:shadow-[0_0_30px_rgba(255,108,55,0.6)] hover:border-[#FF6C37]/50" },
  { name: "Jira", Icon: SiJira, colorClass: "text-[#0052CC]", shadowClass: "hover:shadow-[0_0_30px_rgba(0,82,204,0.6)] hover:border-[#0052CC]/50" },
  { name: "Figma", Icon: SiFigma, colorClass: "text-[#F24E1E]", shadowClass: "hover:shadow-[0_0_30px_rgba(242,78,30,0.6)] hover:border-[#F24E1E]/50" },
  { name: "Godot", Icon: SiGodotengine, colorClass: "text-[#478CBF]", shadowClass: "hover:shadow-[0_0_30px_rgba(71,140,191,0.6)] hover:border-[#478CBF]/50" },
  { name: "GCP", Icon: SiGooglecloud, colorClass: "text-[#4285F4]", shadowClass: "hover:shadow-[0_0_30px_rgba(66,133,244,0.6)] hover:border-[#4285F4]/50" },
  { name: "Analytics", Icon: SiGoogleanalytics, colorClass: "text-[#E37400]", shadowClass: "hover:shadow-[0_0_30px_rgba(227,116,0,0.6)] hover:border-[#E37400]/50" },
];

/* ------------------------------------------------------------------ */
/*  Parallax Row Engine                                               */
/* ------------------------------------------------------------------ */
const BASE_COUNT = 14; // normalizing baseline
const BASE_SPEED = 3;

interface ParallaxRowProps {
  items: TechItem[];
  direction: 1 | -1;
  label: string;
}

function ParallaxRow({ items, direction, label }: ParallaxRowProps) {
  const baseVelocity = direction * BASE_SPEED * (BASE_COUNT / items.length);
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const velocityFactor = useRef<number>(baseVelocity);

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    if (isHovered) {
      velocityFactor.current = velocityFactor.current * 0.9 + (baseVelocity * 0.2) * 0.1;
    } else {
      velocityFactor.current = velocityFactor.current * 0.9 + baseVelocity * 0.1;
    }
    baseX.set(baseX.get() + velocityFactor.current * (delta / 1000));
  });

  return (
    <div className="relative">
      {/* Row Label */}
      <div className="absolute left-4 sm:left-8 -top-4 z-20">
        <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-white uppercase tracking-widest backdrop-blur-md shadow-lg">
          {label}
        </span>
      </div>
      <div
        className="flex overflow-hidden m-0 whitespace-nowrap py-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div className="flex shrink-0 gap-8 px-4" style={{ x }}>
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-8">
              {items.map((tech, idx) => {
                const Icon = tech.Icon;
                return (
                  <motion.div
                    key={`${groupIndex}-${idx}`}
                    whileHover={{ scale: 1.25, y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-300 cursor-pointer ${tech.shadowClass}`}
                  >
                    <Icon className={`w-8 h-8 ${tech.colorClass}`} />
                    <span className="text-white font-medium tracking-tight">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN COMPONENT                                                    */
/* ================================================================== */
export default function TechMarquee() {
  return (
    <section className="relative z-10 bg-[#121212] py-24 overflow-hidden border-t border-b border-white/5">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

      <h3 className="text-center text-xl font-mono text-neutral-500 uppercase tracking-[0.3em] mb-12">
        Core Technologies
      </h3>

      <div className="flex flex-col gap-8 relative z-0 origin-center auto-rows-max rotate-[-2deg]">
        <ParallaxRow items={LANGUAGES_AND_WEB} direction={-1} label="Languages & Web Dev" />
        <ParallaxRow items={AI}                 direction={1}  label="AI & Machine Learning" />
        <ParallaxRow items={DEVTOOLS}           direction={-1} label="Tools & Technologies" />
      </div>
    </section>
  );
}
