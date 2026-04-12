import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  Gamepad2, Trophy, Medal, Zap,
  BarChart3, Users, Timer, Star,
  Target, Cpu, Volume2, Layers
} from "lucide-react";

export const metadata = {
  title: "Flappy Jet — Garv Chouhan",
  description: "A fast-paced arcade flying game built in the Godot Engine — tap, flap, and chase high scores with dynamic medal rewards.",
};

export default function FlappyJetPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "Flappy",
        subtitle: "Jet",
        badge: "Game Development / Godot",
        badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
        accentFrom: "#a78bfa",
        accentTo: "#818cf8",
        heroGlow: "bg-gradient-radial from-purple-600 to-transparent",
        description:
          "A fast-paced arcade-style flying game built in the Godot Engine. Tap, flap, and keep your jet airborne while dodging obstacles and chasing high scores. Features robust score tracking, dynamic medal rewards, and responsive physics controls.",

        techStack: [
          { name: "Godot 4", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "GDScript", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/15" },
          { name: "HTML5 Export", color: "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/15" },
          { name: "Netlify", color: "bg-teal-500/10 border-teal-500/20 text-teal-300 hover:bg-teal-500/15" },
          { name: "Physics Engine", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15" },
          { name: "Audio Bus", color: "bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/15" },
        ],

        highlights: [
          { icon: <Trophy size={20} />, label: "High Score", value: "99+" },
          { icon: <Users size={20} />, label: "Difficulty Tiers", value: "3" },
          { icon: <Timer size={20} />, label: "Physics FPS", value: "60" },
          { icon: <Star size={20} />, label: "Medal Ranks", value: "4" },
        ],

        features: [
          {
            icon: <Gamepad2 size={24} className="text-purple-400" />,
            title: "Responsive Tap Physics",
            description: "Fine-tuned RigidBody2D physics with gravity and impulse forces carefully calibrated so the jet feels weighty but responsive to every tap.",
          },
          {
            icon: <Target size={24} className="text-cyan-400" />,
            title: "Procedural Obstacles",
            description: "Pipe gaps are procedurally generated with random heights and increasing frequency as score rises — ensuring every run feels unique.",
          },
          {
            icon: <Trophy size={24} className="text-amber-400" />,
            title: "Dynamic Medal System",
            description: "Players earn Bronze, Silver, Gold, or Platinum medals based on score thresholds, with animated reward screens and persistent high-score tracking.",
          },
          {
            icon: <BarChart3 size={24} className="text-green-400" />,
            title: "Score Persistence",
            description: "High scores saved to Godot's built-in save system using binary serialization — survives browser refresh and session end.",
          },
          {
            icon: <Volume2 size={24} className="text-rose-400" />,
            title: "Dynamic Audio",
            description: "Procedurally pitched sound effects — flap, score, and crash audio all pitch-shift slightly each play for a non-repetitive feel.",
          },
          {
            icon: <Layers size={24} className="text-blue-400" />,
            title: "Parallax Backgrounds",
            description: "Multi-layer parallax scrolling cityscape background with three depth layers — clouds, buildings, and ground — all moving at different speeds.",
          },
        ],

        challenges: [
          {
            title: "HTML5 Export Performance",
            description: "Godot's HTML5 export has overhead on WebAssembly initialization. Implemented a loading screen with async wasm loading and reduced texture atlases to keep initial load under 2 seconds.",
          },
          {
            title: "Physics Feel Calibration",
            description: "The gap between feeling too floaty and too heavy is tiny. Spent significant time tweaking gravity scale, jump impulse, and max downward velocity independently for each difficulty mode.",
          },
          {
            title: "Collision Precision at High Speeds",
            description: "At high scores, pipe speeds increased enough that the jet could tunnel through thin collision margins. Switched to CCD (Continuous Collision Detection) on the jet body to eliminate ghosting.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Flappy Jet is my first complete game — a love letter to the classic Flappy Bird formula with a jet-powered
              aesthetic and a polished progression system. Built entirely in Godot 4 using GDScript, it was my deep-dive
              into game development, physics simulation, and scene management.
            </p>
            <p>
              The game is exported as an HTML5 WebAssembly bundle and deployed on Netlify, making it instantly playable
              in any browser without installation. The Godot export process required careful optimization of texture atlases
              and audio compression to keep the bundle small.
            </p>
            <p>
              Beyond the core mechanic, I built a full game loop: main menu, gameplay, and a game-over screen with medal
              awards — all with smooth scene transitions and polished animations. The medal thresholds are score-based and
              designed to give even casual players a Bronze medal, while Platinum requires genuine mastery.
            </p>
          </div>
        ),

        liveHref: "https://effulgent-licorice-34ac18.netlify.app/",
        githubHref: "https://github.com/GarvonGit/FlapJet",
        ctaLabel: "Play the Game",

        mockupContent: (
          <div className="w-full bg-gradient-to-b from-sky-900/40 to-indigo-950/60 flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: 500 }}>
            {/* Game HUD */}
            <div className="w-full max-w-lg mx-auto relative">
              {/* Score header */}
              <div className="flex items-center justify-between px-8 py-4">
                <div className="text-white font-mono font-bold text-2xl drop-shadow-md">
                  SCORE: <span className="text-yellow-400">42</span>
                </div>
                <Trophy className="text-yellow-400 w-6 h-6" />
              </div>

              {/* Game viewport */}
              <div className="relative mx-6 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl" style={{ height: 340 }}>
                {/* Sky background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-blue-600/30" />

                {/* Clouds */}
                <div className="absolute top-8 left-12 w-20 h-8 rounded-full bg-white/15 blur-sm" />
                <div className="absolute top-16 right-20 w-14 h-6 rounded-full bg-white/10 blur-sm" />
                <div className="absolute top-4 right-6 w-24 h-8 rounded-full bg-white/10 blur-sm" />

                {/* Buildings parallax */}
                <div className="absolute bottom-0 left-0 right-0 h-24 flex gap-3 items-end px-4">
                  {[60, 90, 45, 80, 55, 100, 70, 65, 85, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-purple-900/40 border-t border-purple-700/30 rounded-t-sm" style={{ height: h }} />
                  ))}
                </div>

                {/* Left pipe */}
                <div className="absolute left-1/3 top-0 w-12 bg-green-600/80 border border-green-400/40 rounded-b-lg" style={{ height: 80 }}>
                  <div className="absolute bottom-0 -left-2 -right-2 h-6 bg-green-500/80 border border-green-400/40 rounded-b-lg" />
                </div>
                {/* Bottom pipe gap */}
                <div className="absolute left-1/3 bottom-24 w-12 bg-green-600/80 border border-green-400/40 rounded-t-lg" style={{ height: 90 }}>
                  <div className="absolute top-0 -left-2 -right-2 h-6 bg-green-500/80 border border-green-400/40 rounded-t-lg" />
                </div>

                {/* Right pipe */}
                <div className="absolute right-1/4 top-0 w-12 bg-green-600/80 border border-green-400/40 rounded-b-lg" style={{ height: 120 }}>
                  <div className="absolute bottom-0 -left-2 -right-2 h-6 bg-green-500/80 border border-green-400/40 rounded-b-lg" />
                </div>
                <div className="absolute right-1/4 bottom-24 w-12 bg-green-600/80 border border-green-400/40 rounded-t-lg" style={{ height: 60 }}>
                  <div className="absolute top-0 -left-2 -right-2 h-6 bg-green-500/80 border border-green-400/40 rounded-t-lg" />
                </div>

                {/* Jet */}
                <div className="absolute top-1/3 left-20 flex items-center">
                  {/* Exhaust */}
                  <div className="w-8 h-3 bg-gradient-to-l from-orange-500 to-transparent rounded-l-full opacity-80 animate-pulse" />
                  {/* Body */}
                  <div className="w-14 h-10 bg-white rounded-r-full rounded-tl-full shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-end pr-3 relative">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                    {/* Wing */}
                    <div className="absolute -bottom-2 left-3 w-5 h-4 bg-neutral-200 rounded-sm skew-x-12" />
                  </div>
                </div>

                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)_50%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0.08))] bg-[length:100%_4px] pointer-events-none opacity-60" />
              </div>

              {/* Medal bar */}
              <div className="flex justify-center mt-4 mb-2">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-yellow-500/30 text-yellow-400 font-bold text-sm">
                  <Medal size={16} className="text-yellow-400" />
                  GOLD RANK
                  <span className="text-yellow-500/60 font-normal text-xs">· Best: 87</span>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
