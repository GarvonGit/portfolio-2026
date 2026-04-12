import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  Bot, FileText, Sparkles, Terminal,
  Upload, MessageSquare, Search, Cpu,
  Zap, Lock, Database, BarChart3
} from "lucide-react";

export const metadata = {
  title: "PDF Insider — Garv Chouhan",
  description: "A lightweight NotebookLM clone — chat with PDF documents through a natural language interface powered by TinyLLaMA via Ollama.",
};

export default function PdfInsiderPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "PDF",
        subtitle: "Insider",
        badge: "Generative AI / RAG",
        badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
        accentFrom: "#22d3ee",
        accentTo: "#3b82f6",
        heroGlow: "bg-gradient-radial from-cyan-600 to-transparent",
        description:
          "A lightweight NotebookLM clone. Upload and interact with PDF documents through a natural language chat interface powered locally by TinyLLaMA via Ollama — no cloud API costs, complete data privacy.",

        techStack: [
          { name: "React.js", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15" },
          { name: "FastAPI", color: "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/15" },
          { name: "Python", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/15" },
          { name: "Ollama", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "TinyLLaMA", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/15" },
          { name: "LangChain", color: "bg-green-500/10 border-green-500/20 text-green-300 hover:bg-green-500/15" },
          { name: "FAISS", color: "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:bg-orange-500/15" },
          { name: "Render", color: "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10" },
        ],

        highlights: [
          { icon: <FileText size={20} />, label: "Pages Processed", value: "1000+" },
          { icon: <Zap size={20} />, label: "Response Time", value: "<4s" },
          { icon: <Lock size={20} />, label: "Data Privacy", value: "100%" },
          { icon: <Database size={20} />, label: "Vector Chunks", value: "~200" },
        ],

        features: [
          {
            icon: <Upload size={24} className="text-cyan-400" />,
            title: "Drag & Drop PDF Upload",
            description: "Upload one or multiple PDFs with a clean drag-and-drop interface. Files are processed, chunked, and indexed into a local FAISS vector store.",
          },
          {
            icon: <Search size={24} className="text-blue-400" />,
            title: "Semantic Search (RAG)",
            description: "Retrieval-Augmented Generation — queries are embedded and matched against document chunks for context-aware, grounded answers.",
          },
          {
            icon: <MessageSquare size={24} className="text-green-400" />,
            title: "Natural Language Chat",
            description: "Conversational interface with message history. Ask follow-up questions and the model maintains context across the conversation.",
          },
          {
            icon: <Cpu size={24} className="text-purple-400" />,
            title: "Local LLM — No API Costs",
            description: "TinyLLaMA runs locally via Ollama. Zero cloud API costs, complete data privacy, and no rate limits — perfect for sensitive documents.",
          },
          {
            icon: <Sparkles size={24} className="text-amber-400" />,
            title: "Source Citation",
            description: "Each AI response includes the source chunk and page number from the original PDF, so you can verify every claim.",
          },
          {
            icon: <BarChart3 size={24} className="text-rose-400" />,
            title: "Multi-Document Context",
            description: "Index multiple PDFs simultaneously. The RAG pipeline retrieves relevant chunks across all documents for comprehensive answers.",
          },
        ],

        challenges: [
          {
            title: "Chunking Strategy for Long PDFs",
            description: "Naive sentence splitting destroyed context across paragraphs. Switched to a recursive character text splitter with 300-token chunks and 50-token overlap, dramatically improving retrieval quality for dense technical documents.",
          },
          {
            title: "Keeping FAISS Index Consistent",
            description: "FAISS indexes are in-memory and lost on server restart. Implemented serialization to disk and lazy-loading on startup, allowing indexes to persist across Render deployments with zero re-indexing required.",
          },
          {
            title: "TinyLLaMA Hallucination on Long Context",
            description: "TinyLLaMA tended to hallucinate when given too many retrieved chunks. Tuned the retriever to return maximum 4 high-similarity chunks and added a prompt engineering guardrail instructing the model to say 'not found in document' rather than guess.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              PDF Insider is my take on Google&apos;s NotebookLM — a tool I use daily but find frustratingly slow and cloud-dependent.
              The goal was to build an equivalent that runs entirely locally, processes any PDF file, and gives accurate,
              cited answers in under 4 seconds.
            </p>
            <p>
              The architecture uses a standard RAG pipeline: upload a PDF → extract text → chunk → embed → store in FAISS.
              At query time, the user&apos;s question is embedded and the top-K most similar chunks are retrieved and injected
              into TinyLLaMA&apos;s context window via a structured prompt.
            </p>
            <p>
              Everything runs on a single Render instance — FastAPI serves both the API and React frontend. Ollama manages
              the local LLM runtime. No external API calls, no data leaves the server.
            </p>
          </div>
        ),

        liveHref: "https://pdf-insider.onrender.com",
        githubHref: "https://github.com/GarvonGit/notebooklm-clone",
        ctaLabel: "Start Chatting",

        mockupContent: (
          <div className="w-full bg-[#0f0f0f] flex flex-col" style={{ minHeight: 520 }}>
            <div className="h-11 border-b border-white/5 flex items-center px-5 gap-3 bg-[#141414]">
              <Bot size={18} className="text-cyan-400" />
              <span className="text-sm font-semibold text-neutral-300">
                PDF Insider <span className="text-neutral-600 font-normal">v1.2</span>
              </span>
              <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs text-cyan-400 font-mono">TinyLLaMA · Local</span>
              </div>
            </div>

            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-52 border-r border-white/5 bg-[#0a0a0a] p-4 flex flex-col gap-3">
                <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-wider">Indexed Documents</p>
                <div className="space-y-2">
                  {[
                    { name: "annual_report_24.pdf", pages: "42 pages", active: true },
                    { name: "user_manual.pdf", pages: "128 pages", active: false },
                    { name: "research_paper.pdf", pages: "18 pages", active: false },
                  ].map((doc) => (
                    <div
                      key={doc.name}
                      className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs ${
                        doc.active
                          ? "bg-cyan-500/10 border-cyan-500/20 text-neutral-200"
                          : "border-white/5 text-neutral-500 bg-white/[0.02]"
                      }`}
                    >
                      <FileText size={13} className={doc.active ? "text-cyan-400 shrink-0 mt-0.5" : "text-neutral-600 shrink-0 mt-0.5"} />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className={`text-[10px] mt-0.5 ${doc.active ? "text-cyan-400/70" : "text-neutral-700"}`}>{doc.pages}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t border-white/5">
                  <div className="w-full py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs text-neutral-500">
                    <Upload size={12} />
                    Upload PDF
                  </div>
                </div>
              </div>

              {/* Chat area */}
              <div className="flex-1 bg-[#0d0d0d] p-6 flex flex-col gap-4">
                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                  {/* User message */}
                  <div className="self-end max-w-[75%] p-4 rounded-2xl rounded-tr-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 text-sm leading-relaxed">
                    Can you summarize the key financial metrics from page 4?
                  </div>

                  {/* AI response */}
                  <div className="self-start max-w-[85%] p-4 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/10 text-neutral-300 text-sm leading-relaxed relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500" />
                    <div className="pl-2">
                      <Sparkles size={14} className="text-cyan-400 mb-2" />
                      <p>
                        Based on page 4 of <span className="text-cyan-400 font-mono text-xs">annual_report_24.pdf</span>:
                      </p>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-neutral-400 text-xs">
                        <li>Revenue: ₹2.4 Cr (+18% YoY)</li>
                        <li>Operating margin improved by 35%</li>
                        <li>Net bookings: 12,400 units</li>
                      </ul>
                      <p className="mt-2 text-[10px] text-neutral-600 font-mono">Source: Page 4, Paragraph 2 · Confidence: 0.92</p>
                    </div>
                  </div>

                  {/* Second user message */}
                  <div className="self-end max-w-[60%] p-3 rounded-2xl rounded-tr-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 text-sm">
                    What are the risk factors mentioned?
                  </div>
                </div>

                {/* Input */}
                <div className="relative w-full mt-auto">
                  <div className="w-full h-12 rounded-full bg-white/[0.04] border border-white/10 flex items-center px-5 gap-3">
                    <Terminal size={15} className="text-neutral-600" />
                    <span className="text-neutral-600 text-sm">Ask anything about your documents...</span>
                    <div className="ml-auto h-5 w-[2px] bg-cyan-400 animate-pulse rounded-full" />
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
