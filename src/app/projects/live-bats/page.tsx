import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  Chrome, Activity, Wifi, Globe,
  Zap, BarChart2, Bell, Shield,
  RefreshCw, Star, Trophy, Clock
} from "lucide-react";

export const metadata = {
  title: "Live BatS — Garv Chouhan",
  description: "A Chrome extension for cricket lovers — get instant live scores from worldwide leagues directly in your browser.",
};

export default function LiveBatSPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "Live",
        subtitle: "BatS",
        badge: "Chrome Extension",
        badgeColor: "bg-green-500/10 border-green-500/20 text-green-400",
        accentFrom: "#4ade80",
        accentTo: "#22d3ee",
        heroGlow: "bg-gradient-radial from-green-600 to-transparent",
        description:
          "A Chrome extension for cricket lovers. Get instant live scores from worldwide leagues and tournaments directly in your browser toolbar with one click — IPL, BBL, The Ashes, World Cup and more.",

        techStack: [
          { name: "JavaScript (ES6+)", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/15" },
          { name: "Chrome Extension API", color: "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/15" },
          { name: "HTML / CSS", color: "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/15" },
          { name: "Cricbuzz API", color: "bg-green-500/10 border-green-500/20 text-green-300 hover:bg-green-500/15" },
          { name: "Service Worker", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "Manifest V3", color: "bg-red-500/10 border-red-500/20 text-red-300 hover:bg-red-500/15" },
        ],

        highlights: [
          { icon: <Globe size={20} />, label: "Leagues Covered", value: "20+" },
          { icon: <RefreshCw size={20} />, label: "Refresh Interval", value: "30s" },
          { icon: <Zap size={20} />, label: "Popup Load Time", value: "<500ms" },
          { icon: <Bell size={20} />, label: "Wicket Alerts", value: "Instant" },
        ],

        features: [
          {
            icon: <Activity size={24} className="text-green-400" />,
            title: "Real-Time Live Scores",
            description: "Live scores refresh every 30 seconds automatically. Current run rate, wickets, overs, and required rate all shown at a glance.",
          },
          {
            icon: <Globe size={24} className="text-blue-400" />,
            title: "Multi-League Support",
            description: "Covers IPL, BBL, The Ashes, PSL, CPL, ICC World Cup, and all major bilateral series — any match happening anywhere, anytime.",
          },
          {
            icon: <Bell size={24} className="text-amber-400" />,
            title: "Wicket Notifications",
            description: "Opt-in push notifications for wickets and milestones (50s, 100s) — even when the popup is closed, via Chrome's Service Worker API.",
          },
          {
            icon: <BarChart2 size={24} className="text-cyan-400" />,
            title: "Scorecard View",
            description: "Expandable full scorecard showing batting and bowling figures for both innings — full detail without leaving the browser.",
          },
          {
            icon: <Shield size={24} className="text-purple-400" />,
            title: "Manifest V3 Compliant",
            description: "Built to the latest Chrome Extension Manifest V3 spec with declarative net requests, background service workers, and strict CSP headers.",
          },
          {
            icon: <RefreshCw size={24} className="text-rose-400" />,
            title: "Auto-Refresh Badge",
            description: "The extension badge on the Chrome toolbar dynamically updates with the current score — see runs and wickets without even opening the popup.",
          },
        ],

        challenges: [
          {
            title: "Manifest V3 Background Restrictions",
            description: "MV3 replaced persistent background pages with short-lived service workers. The old approach of polling every 30s in a background page no longer worked. Rebuilt using Chrome Alarms API to schedule periodic data fetches within the service worker lifecycle.",
          },
          {
            title: "Badge Text Character Limit",
            description: "Chrome badge text is limited to 4 characters. Designed a smart compression logic — '8/2' for 8 wickets for 2, '142' for 142 runs — cycling between score representations every 10 seconds.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Live BatS was built out of personal frustration — I kept switching browser tabs during important cricket matches.
              The goal was a lightweight extension that puts live scores one click away, with zero friction.
            </p>
            <p>
              The extension uses the Cricbuzz unofficial API for score data, wrapping requests through a simple CORS proxy.
              A Chrome Alarm fires every 30 seconds in the service worker to fetch and cache the latest scores, updating
              the toolbar badge in real time.
            </p>
            <p>
              Migrating to Manifest V3 was the biggest challenge — the old persistent background page model was replaced
              entirely by short-lived service workers, requiring a complete rewrite of the data-fetching and notification
              pipeline.
            </p>
          </div>
        ),

        githubHref: "https://github.com/GarvonGit/LIVE-BATS",
        ctaLabel: "View on GitHub",

        mockupContent: (
          <div className="w-full bg-[#1a1a1a] flex items-start justify-center p-10 gap-8" style={{ minHeight: 420 }}>
            {/* Chrome browser mockup with extension popup */}
            <div className="flex flex-col items-center">
              <p className="text-neutral-600 text-xs font-mono mb-3 uppercase tracking-wider">Chrome Extension Popup</p>
              <div className="w-80 rounded-2xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
                {/* Extension header */}
                <div className="p-4 bg-gradient-to-r from-green-500/15 to-cyan-500/10 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                        <Activity size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Live BatS</p>
                        <p className="text-green-400 text-[10px] font-mono flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                          3 live matches
                        </p>
                      </div>
                    </div>
                    <RefreshCw size={14} className="text-neutral-500" />
                  </div>
                </div>

                {/* Matches */}
                <div className="divide-y divide-white/5">
                  {[
                    {
                      t1: "IND", t2: "AUS", t1s: "287/4", t2s: "220/8",
                      info: "IND need 68 off 54", status: "live", badge: "IPL 2026",
                    },
                    {
                      t1: "MI", t2: "CSK", t1s: "156/6", t2s: "Chasing",
                      info: "CSK yet to bat · T20", status: "live", badge: "IPL",
                    },
                    {
                      t1: "ENG", t2: "PAK", t1s: "340 AO", t2s: "189/3",
                      info: "PAK trail by 151", status: "live", badge: "Test",
                    },
                  ].map((m, i) => (
                    <div key={i} className="px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-mono uppercase">
                          {m.badge}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                          <span className="text-red-400 text-[9px] font-mono">LIVE</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-xs font-bold">{m.t1} <span className="text-green-400">{m.t1s}</span></p>
                          <p className="text-neutral-500 text-xs">{m.t2} <span className="text-neutral-400">{m.t2s}</span></p>
                        </div>
                        <Trophy size={14} className="text-amber-500/50" />
                      </div>
                      <p className="text-neutral-600 text-[10px] mt-1">{m.info}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-4 py-2.5 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between">
                  <span className="text-neutral-600 text-[10px]">Updated 12s ago</span>
                  <Bell size={12} className="text-neutral-600" />
                </div>
              </div>
            </div>

            {/* Browser badge preview */}
            <div className="flex flex-col items-center mt-10">
              <p className="text-neutral-600 text-xs font-mono mb-3 uppercase tracking-wider">Toolbar Badge</p>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Chrome size={32} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-9 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold font-mono">87/3</span>
                </div>
              </div>
              <p className="text-neutral-600 text-[10px] mt-3 text-center">Live score<br />on badge</p>
            </div>
          </div>
        ),
      }}
    />
  );
}
