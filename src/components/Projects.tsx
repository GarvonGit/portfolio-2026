import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const PROJECTS = [
    { title: "SSIP AKAM Hackathon", category: "Winner", year: "2023" },
    { title: "Dance Club", category: "Head (80+ members)", year: "2023" },
    { title: "TEDxIIITV", category: "Head of Design", year: "2022" },
  ];

  return (
    <section className="relative z-10 bg-[#121212] py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Achievements & Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between p-8 h-[320px] rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-sm font-mono text-neutral-400">{project.year}</span>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-sm text-cyan-400 mb-2 uppercase tracking-wider font-semibold">{project.category}</p>
                <h4 className="text-2xl font-semibold tracking-tight">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
