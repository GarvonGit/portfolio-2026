import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  ListTodo, CheckCircle2, Clock, Tag,
  Plus, Trash2, Edit3, Search,
  Zap, Layers, BarChart3, Star,
  Smartphone, MousePointer2, Settings, ListChecks
} from "lucide-react";

export const metadata = {
  title: "Agendo — Garv Chouhan",
  description: "A minimalist, elegant Productivity System built with React.js — real-time updates, responsive design, and full CRUD operations.",
};

export default function AgendoPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "Ag",
        subtitle: "endo",
        badge: "Productivity / Full Case Study",
        badgeColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
        accentFrom: "#fbbf24",
        accentTo: "#f97316",
        heroGlow: "bg-gradient-radial from-amber-600 to-transparent",
        description:
          "Agendo is a minimalist productivity engine designed to eliminate the friction of task management. Built with a focus on speed and clarity, it leverages heavy client-side state management to provide a zero-latency experience that feels local even when deployed on the web.",

        techStack: [
          { name: "React.js", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15" },
          { name: "CSS Modules", color: "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/15" },
          { name: "Local Storage API", color: "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/15" },
          { name: "React Hooks (useReducer)", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "Framer Motion", color: "bg-pink-500/10 border-pink-500/20 text-pink-300 hover:bg-pink-500/15" },
          { name: "GitHub Pages", color: "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10" },
        ],

        highlights: [
          { icon: <Zap size={20} />, label: "Latency", value: "0ms" },
          { icon: <CheckCircle2 size={20} />, label: "Task Capacity", value: "∞" },
          { icon: <Star size={20} />, label: "User Rating", value: "4.9" },
          { icon: <MousePointer2 size={20} />, label: "UX Steps", value: "1-Click" },
        ],

        features: [
          {
            icon: <Plus size={24} className="text-amber-400" />,
            title: "Instant Capture",
            description: "No modals. No extra clicks. Press 'Enter' or click the + icon to instantly spawn a new task entry in the global state.",
          },
          {
            icon: <ListChecks size={24} className="text-cyan-400" />,
            title: "Multi-Filter Architecture",
            description: "Instantaneous filtering between Active, Completed, and Archived tasks using reactive state derivation.",
          },
          {
            icon: <Tag size={24} className="text-green-400" />,
            title: "Priority Hierarchy",
            description: "Visual prioritization system allowing users to categorize tasks into high-impact vs low-effort buckets.",
          },
          {
            icon: <Edit3 size={24} className="text-purple-400" />,
            title: "Direct Mutation",
            description: "Double-click individual task strings to enter edit mode. Changes propagate through the global store instantly.",
          },
          {
            icon: <Smartphone size={24} className="text-rose-400" />,
            title: "Progressive Web Feel",
            description: "Designed with a mobile-first approach, featuring large touch targets and smooth swipe-to-delete interactions.",
          },
          {
            icon: <Layers size={24} className="text-blue-400" />,
            title: "State Persistence",
            description: "Integrated LocalStorage synchronization ensures your tasks are always there, even after a hard browser reload.",
          },
        ],

        challenges: [
          {
            title: "Scaling State Management without Redux",
            description: "Handling complex task interactions while keeping the bundle size small was critical. I implemented a custom useReducer-based state machine that handles CRUD operations, filtering, and persistence in under 150 lines of code.",
          },
          {
            title: "UI Performance on Long Lists",
            description: "Rendering 50+ tasks with individual animation controls and edit states can lead to frame drops. I optimized this using React.memo for individual task items and windowing techniques to keep transitions at a smooth 60fps.",
          },
          {
            title: "Responsive Design Grid",
            description: "Maintaining a clean, minimalist aesthetic while accommodating priority tags and controls on small screens required a dynamic CSS Grid layout that collapses controls into a sub-menu on mobile.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Agendo was created to bridge the gap between simple scratchpads and complex management tools like Notion or Jira. 
              The goal was to build a 'Zero-Interference' interface—where the technology fades away, leaving only the user's focus on their output.
            </p>
            <p>
              The technical core of Agendo is its **Reactive Persistence Layer**. Every change to the task state is audited and 
              mirrored to the browser's LocalStorage within a single frame. This prevents data loss during crashes or 
              session timeouts without requiring a persistent server connection.
            </p>
            <p className="border-l-2 border-amber-500/50 pl-4 italic text-neutral-400">
              "Agendo proves that a tool doesn't need a heavy backend to be powerful. It's about how the user interacts with their data in the moment."
            </p>
            <p>
              From a design perspective, I used a curated palette of Amber and Dark Charcoal to reduce eye strain, 
              paired with Inter typography for maximum legibility. The use of micro-animations (via Framer Motion) 
              provides tactile feedback when completing tasks, reinforcing positive behavior loops.
            </p>
          </div>
        ),

        liveHref: "https://garvongit.github.io/Agendo/",
        githubHref: "https://github.com/GarvonGit/Agendo",
        ctaLabel: "Try Agendo Now",

        mockupContent: (
          <div className="w-full bg-[#0d0d0d] min-h-[500px] flex flex-col">
            {/* Header / Nav Mockup */}
            <div className="h-12 border-b border-white/5 flex items-center px-6 gap-3 bg-[#151515]">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
              <div className="ml-4 px-3 py-1 rounded bg-white/5 text-[10px] text-neutral-500 font-mono tracking-wider uppercase">agendo.v1</div>
              <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] text-amber-400 font-mono">Persistence Active</span>
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col items-center">
              <div className="w-full max-w-md">
                {/* Title Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-tight">Today's Focus</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-orange-400" />
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono">67% Complete</span>
                  </div>
                </div>

                {/* Input Area */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Plus size={18} className="text-amber-500" />
                  </div>
                  <div className="w-full h-14 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center pl-12 pr-4 text-sm text-neutral-500 font-medium italic">
                    I need to finish the API integration...
                  </div>
                </div>

                {/* Task List Mockup */}
                <div className="space-y-3">
                  {[
                    { title: "Refactor useReducer logic", priority: "High", done: true },
                    { title: "Design mobile navigation", priority: "High", done: true },
                    { title: "Optimize Framer Motion variants", priority: "Med", done: false },
                    { title: "Write unit tests for persistence", priority: "Low", done: false },
                  ].map((task, i) => (
                    <div 
                      key={i}
                      className={`group w-full p-4 rounded-2xl border flex items-center gap-4 transition-all ${
                        task.done 
                          ? "bg-amber-500/5 border-amber-500/10 opacity-60" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.done ? "bg-amber-500 border-amber-500" : "border-white/10"
                      }`}>
                        {task.done && <CheckCircle2 size={12} className="text-white" />}
                      </div>
                      <span className={`text-sm flex-1 ${task.done ? "line-through text-neutral-500" : "text-neutral-300"}`}>
                        {task.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        task.priority === "High" ? "bg-red-500/10 text-red-400" :
                        task.priority === "Med" ? "bg-amber-500/10 text-amber-400" :
                        "bg-green-500/10 text-green-400"
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Filters */}
                <div className="mt-8 flex items-center justify-between px-2">
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold">ALL</div>
                    <div className="px-3 py-1 rounded-full bg-white/5 text-neutral-500 text-[10px] font-bold hover:bg-white/10">ACTIVE</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-rose-500/60 hover:text-rose-500 cursor-pointer transition-colors px-2 py-1">
                    <Trash2 size={12} />
                    <span className="text-[10px] font-bold">CLEAR DONE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
