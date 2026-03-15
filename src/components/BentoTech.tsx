"use client";

import { motion, Variants } from "framer-motion";

const TECH_CATEGORIES = [
  {
    title: "Languages",
    skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    className: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub"],
    className: "col-span-1 md:col-span-2 row-span-1",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function BentoTech() {
  return (
    <section className="relative z-10 bg-[#121212] py-24 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Tools & Tech</h3>
          <p className="text-neutral-400 mt-4 max-w-lg">The ecosystem I use to build high-performance applications and intuitive digital experiences.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-6 auto-rows-[200px]"
        >
          {TECH_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative flex flex-col p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 ${category.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <h4 className="text-xl font-semibold tracking-tight text-cyan-400 mb-6">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 text-neutral-200 border border-white/5 transition-colors group-hover:border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
