"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  ShieldCheck, Activity, Users, Database,
  Lock, Zap, BarChart3, Clock,
  Trophy, Medal, MapPin, Smartphone,
  Search, CheckCircle2, Globe, Server,
  MessageSquare, AlertTriangle, FileText,
  TrendingUp, TrendingDown, MoreHorizontal,
  Bell
} from "lucide-react";
import { motion } from "framer-motion";

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
          <div className="w-full bg-[#0a0a0a] min-h-[540px] flex flex-col relative overflow-hidden text-white/90 font-sans">
            {/* MUI Sidebar */}
            <div className="flex h-full min-h-[540px]">
              <div className="w-16 md:w-56 bg-[#111] border-r border-white/5 flex flex-col shrink-0">
                <div className="p-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <ShieldCheck size={20} className="text-white" />
                  </div>
                  <span className="hidden md:inline text-white font-bold text-xl tracking-tight">AANKH</span>
                </div>
                
                <div className="flex flex-col gap-1 px-3 mt-4">
                   {[
                     { icon: <BarChart3 size={18} />, label: "Dashboard", active: true },
                     { icon: <MapPin size={18} />, label: "Track Now", active: false },
                     { icon: <Users size={18} />, label: "Officer Analysis", active: false },
                     { icon: <AlertTriangle size={18} />, label: "Emer. Checkpoints", active: false },
                     { icon: <FileText size={18} />, label: "Complaints", active: false },
                   ].map((item, i) => (
                     <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${item.active ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.05)]' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                        {item.icon}
                        <span className="hidden md:inline text-[13px] font-semibold">{item.label}</span>
                        {item.active && <motion.div layoutId="sidebar-active" className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />}
                     </div>
                   ))}
                </div>
                
                <div className="mt-auto p-4 border-t border-white/5">
                   <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold">GC</div>
                      <div className="hidden md:flex flex-col">
                         <p className="text-[11px] font-bold text-white leading-none">Garv Chouhan</p>
                         <p className="text-[9px] text-neutral-500 mt-1 uppercase tracking-tighter">Super Admin</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="h-20 bg-[#111]/50 backdrop-blur-md border-b border-white/5 flex items-center px-8 justify-between">
                   <div className="flex flex-col">
                      <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Gujarat Police Security</p>
                      <h4 className="text-xl font-bold text-white">Central Dashboard</h4>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="hidden md:flex w-64 h-10 rounded-xl bg-black/40 border border-white/5 items-center px-4 gap-3 focus-within:border-blue-500/50 transition-all">
                        <Search size={16} className="text-neutral-600" />
                        <span className="text-xs text-neutral-600">Search by Unit ID...</span>
                      </div>
                      <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer">
                        <Bell size={18} />
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-[#111]" />
                      </div>
                   </div>
                </div>

                <div className="flex-1 p-8 bg-[#0a0a0a] space-y-8 overflow-y-auto custom-scrollbar">
                   {/* Top Cards */}
                   <div className="grid grid-cols-12 gap-5">
                     {[
                       { label: "Active Officers", val: "1,482", delta: "+12%", trend: "up", color: "text-blue-400" },
                       { label: "Pending Issues", val: "24", delta: "-8%", trend: "down", color: "text-orange-400" },
                       { label: "Resolved Today", val: "156", delta: "Normal", trend: "neutral", color: "text-green-400" },
                       { label: "Alert Level", val: "DEFCON 4", delta: "Stable", trend: "neutral", color: "text-neutral-400" },
                     ].map((c, i) => (
                       <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="col-span-3 bg-[#111]/60 border border-white/5 p-5 rounded-2xl relative overflow-hidden group"
                       >
                          <div className={`absolute top-0 left-0 w-1 h-full bg-current ${c.color} opacity-50`} />
                          <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider mb-2">{c.label}</p>
                          <div className="flex items-baseline gap-2">
                             <p className="text-2xl font-bold text-white tracking-tight">{c.val}</p>
                             <span className={`text-[10px] font-bold ${c.trend === 'up' ? 'text-green-500' : c.trend === 'down' ? 'text-red-500' : 'text-neutral-600'}`}>
                               {c.trend === 'up' && <TrendingUp size={10} className="inline mr-0.5" />}
                               {c.trend === 'down' && <TrendingDown size={10} className="inline mr-0.5" />}
                               {c.delta}
                             </span>
                          </div>
                       </motion.div>
                     ))}
                   </div>

                   <div className="grid grid-cols-12 gap-8">
                     {/* Map Preview Area */}
                     <div className="col-span-8 bg-[#111]/40 rounded-3xl border border-white/5 p-6 flex flex-col gap-6 relative overflow-hidden group">
                        <div className="flex justify-between items-center relative z-10">
                           <div className="flex flex-col">
                              <span className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                 Live Tracking — Sector 4C
                              </span>
                              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Gandhinagar, District 1</span>
                           </div>
                           <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] border border-blue-500/20">
                              <Activity size={12} /> 14 Units Active
                           </div>
                        </div>
                        
                        <div className="flex-1 min-h-[220px] rounded-2xl bg-[#080808] border border-white/5 relative overflow-hidden flex items-center justify-center">
                           <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-10" />
                           
                           {/* Radar Ping Effect */}
                           <motion.div 
                              animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] }}
                              transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                              className="absolute w-64 h-64 rounded-full border border-blue-500/30" 
                           />
                           <motion.div 
                              animate={{ scale: [1, 2, 2.5], opacity: [0.4, 0.1, 0] }}
                              transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeOut" }}
                              className="absolute w-64 h-64 rounded-full border border-blue-500/20" 
                           />
                           
                           <MapPin size={48} className="text-blue-500 opacity-5" />
                           
                           {/* Active Markers */}
                           {[
                              { top: '25%', left: '35%', color: 'blue', label: 'Unit 402' },
                              { top: '55%', left: '68%', color: 'blue', label: 'Unit 115' },
                              { bottom: '22%', left: '48%', color: 'orange', label: 'Incident' }
                           ].map((m, idx) => (
                              <div key={idx} className="absolute group/marker" style={{ top: m.top, left: m.left, bottom: m.bottom }}>
                                 <div className={`w-3 h-3 rounded-full ${m.color === 'blue' ? 'bg-blue-500 shadow-[0_0_15px_#3b82f6]' : 'bg-orange-500 shadow-[0_0_15px_#f97316]'} relative`}>
                                    <div className="absolute inset-0 animate-ping opacity-75 rounded-full bg-current" />
                                 </div>
                                 <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[8px] font-bold opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                                    {m.label}
                                 </div>
                              </div>
                           ))}

                           {/* Map Hud */}
                           <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                              <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                                 <motion.div animate={{ width: ['20%', '60%', '40%'] }} transition={{ repeat: Infinity, duration: 4 }} className="h-full bg-blue-500" />
                              </div>
                              <p className="text-[7px] text-neutral-600 font-mono text-right">SCANNING...</p>
                           </div>
                        </div>
                     </div>

                     {/* Sidebar Analysis Area */}
                     <div className="col-span-4 space-y-5">
                         <div className="bg-[#111]/60 border border-white/5 rounded-3xl p-6 flex flex-col h-full">
                            <h5 className="text-xs font-bold text-white mb-4 uppercase tracking-wider flex items-center justify-between">
                               Duty Logs
                               <MoreHorizontal size={14} className="text-neutral-500" />
                            </h5>
                            <div className="space-y-4 flex-1">
                               {[
                                 { name: 'Patrol 14A', time: '2m ago', status: 'En-route', icon: <Smartphone size={12} /> },
                                 { name: 'Beat Unit 9', time: '14m ago', status: 'On-duty', icon: <CheckCircle2 size={12} /> },
                                 { name: 'Sector Alpha', time: '22m ago', status: 'Standby', icon: <Server size={12} /> },
                               ].map((log, i) => (
                                 <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                                    <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center text-blue-400">
                                       {log.icon}
                                    </div>
                                    <div className="flex-1">
                                       <p className="text-[11px] font-bold text-white">{log.name}</p>
                                       <p className="text-[9px] text-neutral-500">{log.status}</p>
                                    </div>
                                    <p className="text-[9px] font-mono text-neutral-600">{log.time}</p>
                                 </div>
                               ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5">
                               <div className="flex items-center justify-between mb-2">
                                  <p className="text-[10px] text-neutral-500">System Capacity</p>
                                  <p className="text-[10px] font-bold text-blue-400">88%</p>
                               </div>
                               <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                                  <div className="w-[88%] h-full bg-gradient-to-r from-blue-600 to-indigo-500" />
                               </div>
                            </div>
                         </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Hackathon Overlay */}
            <motion.div 
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8 }}
               className="absolute bottom-6 right-6 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] p-5 flex items-center gap-5 z-20 group hover:scale-105 transition-transform duration-500"
            >
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  <Trophy size={24} className="text-white" />
               </div>
               <div>
                  <div className="flex items-center gap-2 mb-1">
                     <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] leading-none">Winner</p>
                     <div className="h-px flex-1 bg-blue-500/20" />
                  </div>
                  <p className="text-[15px] font-bold text-white tracking-tight">1st Prize Winner</p>
                  <p className="text-[9px] text-neutral-400 font-medium">Azadi Ka Amrit Mahotsav Hackathon</p>
               </div>
               <div className="ml-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                  <Medal size={14} className="text-white" />
               </div>
            </motion.div>
          </div>
        ),
      }}
    />
  );
}
