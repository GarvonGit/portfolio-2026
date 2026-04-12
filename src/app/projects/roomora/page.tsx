import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  Hotel, CalendarDays, TrendingUp, BedDouble, LayoutDashboard,
  Zap, BarChart3, Globe, Lock, Settings, CreditCard, Bell
} from "lucide-react";

export const metadata = {
  title: "Roomora — Garv Chouhan",
  description: "Full-featured hotel management SaaS platform with AI dynamic pricing, OTA channel management, and Supabase auth.",
};

export default function RoomoraPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "Roo",
        subtitle: "mora",
        badge: "SaaS / AI Pricing Engine",
        badgeColor: "bg-orange-500/10 border-orange-500/20 text-orange-400",
        accentFrom: "#f97316",
        accentTo: "#fbbf24",
        heroGlow: "bg-gradient-radial from-orange-600 to-transparent",
        description:
          "A full-featured hotel management SaaS platform built for independent hoteliers. Features an AI-powered dynamic pricing engine, OTA channel management, real-time profit/loss calendar, Indian holiday integration, and a stunning Supabase-backed auth system.",

        techStack: [
          { name: "Next.js", color: "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10" },
          { name: "Supabase", color: "bg-green-500/10 border-green-500/20 text-green-300 hover:bg-green-500/15" },
          { name: "Ollama AI", color: "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/15" },
          { name: "FastAPI", color: "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/15" },
          { name: "Python", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/15" },
          { name: "PostgreSQL", color: "bg-sky-500/10 border-sky-500/20 text-sky-300 hover:bg-sky-500/15" },
          { name: "Framer Motion", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "Tailwind CSS", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15" },
          { name: "Vercel", color: "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10" },
        ],

        highlights: [
          { icon: <TrendingUp size={20} />, label: "Revenue Boost", value: "+22%" },
          { icon: <Globe size={20} />, label: "OTA Channels", value: "5+" },
          { icon: <BedDouble size={20} />, label: "Room Types Managed", value: "∞" },
          { icon: <Zap size={20} />, label: "AI Pricing Calls/Day", value: "1K+" },
        ],

        features: [
          {
            icon: <Zap size={24} className="text-orange-400" />,
            title: "AI Dynamic Pricing",
            description: "Ollama-powered engine analyzes occupancy, demand trends, and competitor data to suggest optimal room prices in real time with safety bounds.",
          },
          {
            icon: <CalendarDays size={24} className="text-amber-400" />,
            title: "Profit/Loss Calendar",
            description: "Interactive monthly calendar with color-coded profit and loss visualization per day, integrated with Indian holiday data for surge pricing.",
          },
          {
            icon: <Globe size={24} className="text-cyan-400" />,
            title: "OTA Channel Manager",
            description: "Manage all major OTA integrations (MakeMyTrip, Booking.com, Airbnb) from a single hub. Sync inventory and prices across channels instantly.",
          },
          {
            icon: <LayoutDashboard size={24} className="text-blue-400" />,
            title: "Real-Time Dashboard",
            description: "Live KPIs including RevPAR, occupancy rate, and booking velocity. Interactive charts show trends week-over-week and month-over-month.",
          },
          {
            icon: <Lock size={24} className="text-green-400" />,
            title: "Supabase Auth",
            description: "Production-ready multi-tenant authentication with email/password and OAuth. Row-level security ensures each hotel sees only their own data.",
          },
          {
            icon: <Settings size={24} className="text-purple-400" />,
            title: "Room & Rate Management",
            description: "Fully CRUD-enabled room management — add, edit, and price room types with custom amenities, images, and seasonal rate plans.",
          },
        ],

        challenges: [
          {
            title: "Multi-Tenant Data Isolation",
            description: "With multiple hotels on shared infrastructure, strict Supabase Row-Level Security policies ensure hotels can never access each other's bookings or pricing data — even through direct API calls.",
          },
          {
            title: "AI Pricing Safety Bounds",
            description: "An unconstrained AI suggesting prices could lead to extreme values. Implemented hard min/max bounds per room type, plus a confidence score filter that only applies suggestions above a threshold.",
          },
          {
            title: "OTA Sync Race Conditions",
            description: "Simultaneous booking updates from 5+ OTA channels could cause double-booking. Solved with a database-level advisory lock and an idempotent booking queue that processes events sequentially.",
          },
          {
            title: "Holiday Price Surge Automation",
            description: "Automatically applying surge prices for 30+ Indian national and regional holidays required a rule engine that evaluates date proximity, existing bookings, and current occupancy before applying multipliers.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Roomora was born from a real problem: independent hoteliers in India are losing revenue to large chains that
              use sophisticated revenue management software they simply cannot afford. Roomora brings enterprise-grade
              hotel management capabilities to boutique and mid-size hotels at a fraction of the cost.
            </p>
            <p>
              The centerpiece is the AI pricing engine — powered by a locally-run Ollama instance (using Llama 3) that
              analyzes real-time occupancy, upcoming event data, and booking velocity to generate dynamic price
              suggestions. Unlike SaaS competitors, this keeps all sensitive hotel data on-premise.
            </p>
            <p>
              The frontend is built with Next.js 14 App Router and Framer Motion, achieving buttery-smooth animations
              throughout the dashboard. Supabase handles auth and the PostgreSQL database with Row-Level Security
              providing hermetic multi-tenant isolation.
            </p>
          </div>
        ),

        liveHref: "https://roomora-xi.vercel.app",
        githubHref: "https://github.com/GarvonGit/roomora",
        ctaLabel: "View Dashboard",

        mockupContent: (
          <div className="w-full bg-[#0d0d0d] min-h-[560px] flex flex-col">
            <div className="h-11 border-b border-white/5 flex items-center px-5 gap-2.5 bg-[#141414]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="mx-auto flex items-center gap-2 px-4 py-1 rounded-md bg-white/5 border border-white/[0.06]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-neutral-500 font-mono">roomora-xi.vercel.app/dashboard</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                <Zap size={9} className="text-orange-400" />
                <span className="text-[10px] text-orange-400 font-mono">AI Active</span>
              </div>
            </div>

            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-56 bg-[#080808] border-r border-white/5 p-4 flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                    <Hotel size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Roomora</p>
                    <p className="text-neutral-600 text-[10px]">The Grand Palace</p>
                  </div>
                </div>
                {[
                  { label: "Dashboard", icon: <LayoutDashboard size={12} />, active: true },
                  { label: "Calendar", icon: <CalendarDays size={12} />, active: false },
                  { label: "Rooms", icon: <BedDouble size={12} />, active: false },
                  { label: "Analytics", icon: <BarChart3 size={12} />, active: false },
                  { label: "OTA Channels", icon: <Globe size={12} />, active: false },
                  { label: "Settings", icon: <Settings size={12} />, active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${
                      item.active
                        ? "bg-orange-500/15 text-orange-300 border border-orange-500/20"
                        : "text-neutral-600"
                    }`}
                  >
                    {item.icon} {item.label}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="flex-1 p-6 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white text-sm font-bold">Good morning, Garv 👋</h2>
                    <p className="text-neutral-600 text-xs">Saturday, April 12 · 14 rooms occupied</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell size={14} className="text-neutral-600" />
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-white">GC</span>
                    </div>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Occupancy", value: "87%", delta: "+4%", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
                    { label: "RevPAR", value: "₹4,820", delta: "+12%", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
                    { label: "AI Suggest", value: "₹6,200", delta: "↑ surge", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
                    { label: "Bookings", value: "34", delta: "+8 today", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
                  ].map((kpi) => (
                    <div key={kpi.label} className={`rounded-xl border ${kpi.bg} p-3`}>
                      <p className="text-neutral-500 text-[10px] uppercase tracking-wide mb-1">{kpi.label}</p>
                      <p className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</p>
                      <p className="text-neutral-600 text-[10px]">{kpi.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-[1fr_180px] gap-4 flex-1">
                  <div className="rounded-xl bg-[#111] border border-white/5 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide">Revenue · 7 Days</p>
                      <p className="text-[10px] text-green-400 font-mono">+18% vs last wk</p>
                    </div>
                    <div className="flex items-end gap-1.5 h-28">
                      {[42, 65, 38, 80, 55, 90, 72].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 5
                              ? "linear-gradient(to top, #f97316, #fbbf24)"
                              : "rgba(249,115,22,0.2)",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span key={i} className="flex-1 text-center text-[9px] text-neutral-700 font-mono">{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Room strip */}
                  <div className="rounded-xl bg-[#111] border border-white/5 p-4">
                    <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide mb-3">Rooms</p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { name: "101", status: "occupied" }, { name: "102", status: "occupied" }, { name: "103", status: "vacant" },
                        { name: "201", status: "occupied" }, { name: "202", status: "checkin" }, { name: "203", status: "occupied" },
                        { name: "301", status: "occupied" }, { name: "302", status: "occupied" }, { name: "303", status: "vacant" },
                      ].map((r) => (
                        <div
                          key={r.name}
                          className={`rounded-md py-1.5 flex flex-col items-center gap-0.5 ${
                            r.status === "occupied" ? "bg-orange-500/15 border border-orange-500/20" :
                            r.status === "checkin" ? "bg-green-500/15 border border-green-500/20" :
                            "bg-white/[0.03] border border-white/5"
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            r.status === "occupied" ? "bg-orange-400" :
                            r.status === "checkin" ? "bg-green-400" : "bg-neutral-600"
                          }`} />
                          <p className={`text-[9px] font-mono ${
                            r.status === "occupied" ? "text-orange-400" :
                            r.status === "checkin" ? "text-green-400" : "text-neutral-600"
                          }`}>{r.name}</p>
                        </div>
                      ))}
                    </div>
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
