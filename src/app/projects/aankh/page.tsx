import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  ShieldCheck, Activity, Users, Database,
  Lock, Zap, BarChart3, Clock,
  Trophy, Medal, MapPin, Smartphone,
  Search, CheckCircle2, Globe, Server,
  MessageSquare, AlertTriangle, FileText
} from "lucide-react";

export const metadata = {
  title: "AANKH — Garv Chouhan",
  description: "An ML-enabled E-Beat Management System for Gujarat Police. 1st Prize Winner at Azadi Ka Amrit Mahotsav Hackathon.",
};

export default function AankhPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "AAN",
        subtitle: "KH",
        badge: "AKAM Hackathon Winner — 1st Prize",
        badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        accentFrom: "#1976d2", // Material UI Blue
        accentTo: "#00bcd4",
        heroGlow: "bg-gradient-radial from-blue-600 to-transparent",
        description:
          "An ML-enabled E-Beat Management System developed for the Gujarat Police. Built during the 36-hour Azadi Ka Amrit Mahotsav Hackathon to digitize departmental movement and public complaint databases.",

        techStack: [
          { name: "React.js", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/15" },
          { name: "Node.js", color: "bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/15" },
          { name: "Express.js", color: "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10" },
          { name: "MongoDB", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/15" },
          { name: "Firebase", color: "bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/15" },
          { name: "Material UI", color: "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/15" },
        ],

        highlights: [
          { icon: <Trophy size={20} />, label: "Status", value: "1st Prize" },
          { icon: <Activity size={20} />, label: "Engine", value: "ML Enabled" },
          { icon: <Clock size={20} />, label: "Hackathon", value: "36 Hours" },
          { icon: <Database size={20} />, label: "Architecture", value: "MERN Stack" },
        ],

        features: [
          {
            icon: <MapPin size={24} className="text-blue-400" />,
            title: "Live 'Track Now'",
            description: "Real-time geolocation tracking of police personnel on beat patrol. Features a high-fidelity map interface with mission-critical coordinate mapping.",
          },
          {
            icon: <BarChart3 size={24} className="text-emerald-400" />,
            title: "Officer Analysis",
            description: "Leverages ML-enabled patterns to analyze officer performance, patrol coverage density, and time-on-duty analytics for optimal resource allocation.",
          },
          {
            icon: <MessageSquare size={24} className="text-cyan-400" />,
            title: "Complaint-Need Database",
            description: "A centralized interface to manage public complaints and departmental needs, bridging the gap between field updates and office records.",
          },
          {
            icon: <AlertTriangle size={24} className="text-amber-400" />,
            title: "Emergency Checkpoints",
            description: "Dynamic checkpoint management allowed senior officials to deploy immediate roadblocks or observation points in high-priority zones.",
          },
          {
            icon: <Users size={24} className="text-purple-400" />,
            title: "Profile Management",
            description: "Robust profile system for officers with detailed duty logs, hierarchy records, and performance medals history.",
          },
          {
            icon: <ShieldCheck size={24} className="text-rose-400" />,
            title: "Gov. Infrastructure",
            description: "Built for the Gujarat Police workflow during the Azadi Ka Amrit Mahotsav Hackathon (2022-23) to digitize manual police registers.",
          },
        ],

        challenges: [
          {
            title: "Real-time Data at Scale",
            description: "Synchronizing high-frequency GPS pings from hundreds of field devices to a centralized MongoDB/Firebase instance required efficient server-side throttling and real-time socket management.",
          },
          {
            title: "Material Design for Public Safety",
            description: "Designed the UI using Material UI to prioritize cognitive clarity under stress. The dashboard needed to highlight emergency alerts and officer locations without visual clutter.",
          },
          {
            title: "Legacy to Digital Migration",
            description: "AANKH was replacing manual paper-based 'Beat' registers. Mapping the traditional police hierarchy and workflow into a digital MERN architecture was a major structural hurdle.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p className="text-lg font-medium text-white italic border-l-4 border-blue-500 pl-6 py-2">
              \"AANKH won the 1st prize at the 2022-23 Azadi Ka Amrit Mahotsav Hackathon for its ability to marry real-time tracking with ML-enabled analysis.\"
            </p>
            <p>
              The project was built over a grueling 36-hour sprint. The challenge was multifaceted: create a tool that not only 
              monitors the movement of the police force but also manages the vast database of complaints and administrative 
              needs that the Gujarat Police handle daily. 
            </p>
            <p>
              Technically, AANKH utilizes the **MERN stack**, leveraging the real-time capabilities of Firebase alongside 
              the flexible document structure of MongoDB. The frontend is a highly customized React deployment utilizing 
              **Material UI** for a clean, professional departmental feel.
            </p>
            <p>
              By implementing an ML-enabled analysis layer, the system can predict which sectors need higher patrol 
              density based on historical complaint patterns, moving the department from a purely reactive model to 
              a more proactive, data-driven policing strategy.
            </p>
          </div>
        ),

        githubHref: "https://github.com/GarvonGit/aankh",
        ctaLabel: "View Source on GitHub",

        mockupContent: (
          <div className="w-full bg-[#f4f7f9] min-h-[500px] flex flex-col relative overflow-hidden text-neutral-800">
            {/* MUI Sidebar */}
            <div className="flex h-full">
              <div className="w-16 md:w-56 bg-[#1976d2] flex flex-col shrink-0">
                <div className="p-4 flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <ShieldCheck size={18} className="text-[#1976d2]" />
                  </div>
                  <span className="hidden md:inline text-white font-bold text-lg tracking-tight">AANKH</span>
                </div>
                
                <div className="flex flex-col gap-1 px-2">
                   {[
                     { icon: <BarChart3 size={18} />, label: "Dashboard", active: true },
                     { icon: <MapPin size={18} />, label: "Track Now", active: false },
                     { icon: <Users size={18} />, label: "Officer Analysis", active: false },
                     { icon: <AlertTriangle size={18} />, label: "Emer. Checkpoints", active: false },
                     { icon: <FileText size={18} />, label: "Complaints", active: false },
                   ].map((item, i) => (
                     <div key={i} className={`flex items-center gap-3 p-3 rounded-md transition-colors ${item.active ? 'bg-white/15 text-white' : 'text-blue-100 hover:bg-white/5'}`}>
                        {item.icon}
                        <span className="hidden md:inline text-xs font-medium">{item.label}</span>
                     </div>
                   ))}
                </div>
                
                <div className="mt-auto p-4 border-t border-white/10">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-400/20" />
                      <div className="hidden md:flex flex-col">
                         <p className="text-[10px] font-bold text-white leading-none">Admin Unit</p>
                         <p className="text-[8px] text-blue-200">Gujarat Police</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="h-16 bg-white border-b border-neutral-200 flex items-center px-8 justify-between">
                   <h4 className="text-lg font-bold text-neutral-800">Home Dashboard</h4>
                   <div className="flex gap-4">
                      <div className="w-40 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center px-4 gap-2">
                        <Search size={14} className="text-neutral-400" />
                        <span className="text-[10px] text-neutral-400">Search officers...</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                        <Activity size={16} className="text-[#1976d2]" />
                      </div>
                   </div>
                </div>

                <div className="flex-1 p-6 bg-[#f4f7f9] space-y-6">
                   {/* Top Cards */}
                   <div className="grid grid-cols-12 gap-4">
                     {[
                       { label: "Active Beat Officers", val: "1,482", color: "border-blue-500" },
                       { label: "Pending Complaints", val: "24", color: "border-orange-500" },
                       { label: "Resolved Today", val: "156", color: "border-green-500" },
                       { label: "Emergency Alerts", val: "0", color: "border-neutral-300" },
                     ].map((c, i) => (
                       <div key={i} className={`col-span-3 bg-white rounded-lg shadow-sm border-l-4 ${c.color} p-4`}>
                          <p className="text-[9px] text-neutral-500 uppercase font-bold">{c.label}</p>
                          <p className="text-xl font-bold text-neutral-800">{c.val}</p>
                       </div>
                     ))}
                   </div>

                   {/* Map Preview Area */}
                   <div className="flex-1 min-h-[220px] bg-white rounded-lg shadow-sm border border-neutral-200 p-4 flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                         <span className="text-xs font-bold text-neutral-700">Track Now Live — Gandhinagar Sector</span>
                         <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-[#1976d2] font-mono">14 Units Online</span>
                      </div>
                      <div className="flex-1 rounded-md bg-neutral-50 border border-neutral-200 relative overflow-hidden flex items-center justify-center">
                         <div className="absolute inset-0 bg-[radial-gradient(#1976d2_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.05]" />
                         <MapPin size={40} className="text-[#1976d2] opacity-10" />
                         <div className="absolute top-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-[#1976d2] shadow-[0_0_10px_#1976d2]" />
                         <div className="absolute top-1/2 left-2/3 w-2.5 h-2.5 rounded-full bg-[#1976d2] shadow-[0_0_10px_#1976d2]" />
                         <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 rounded-full bg-[#f57c00] shadow-[0_0_10px_#f57c00]" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Hackathon Overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-blue-200 shadow-xl rounded-xl p-4 flex items-center gap-4 z-20">
               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Trophy size={20} className="text-white" />
               </div>
               <div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none mb-1">Hackathon 1st Prize</p>
                  <p className="text-xs font-bold text-neutral-800">Azadi Ka Amrit Mahotsav</p>
                  <p className="text-[8px] text-neutral-500 font-mono">36 Hour Development Sprint</p>
               </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
