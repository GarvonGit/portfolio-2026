import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  ShoppingCart, Smartphone, Star, TrendingUp,
  Package, Search, Heart, LayoutGrid,
  Zap, Shield, BarChart3, Globe
} from "lucide-react";

export const metadata = {
  title: "Gearlogy — Garv Chouhan",
  description: "Premium Apple-inspired e-commerce store for electronic gadgets — built with React, Framer Motion, and the DummyJSON API.",
};

export default function GearlogyPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "Gear",
        subtitle: "logy",
        badge: "E-Commerce / Full Stack",
        badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        accentFrom: "#34d399",
        accentTo: "#14b8a6",
        heroGlow: "bg-gradient-radial from-emerald-600 to-transparent",
        description:
          "Your premier online destination for electronic gadgets. Discover cutting-edge tech products with a premium Apple-inspired UI — dynamic product data, smooth animations, dark/light mode, and a full cart & checkout flow.",

        techStack: [
          { name: "React.js", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15" },
          { name: "Framer Motion", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "Tailwind CSS", color: "bg-sky-500/10 border-sky-500/20 text-sky-300 hover:bg-sky-500/15" },
          { name: "DummyJSON API", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/15" },
          { name: "React Router", color: "bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/15" },
          { name: "Local Storage", color: "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/15" },
          { name: "Netlify", color: "bg-teal-500/10 border-teal-500/20 text-teal-300 hover:bg-teal-500/15" },
        ],

        highlights: [
          { icon: <Package size={20} />, label: "Products Listed", value: "200+" },
          { icon: <Star size={20} />, label: "Categories", value: "8" },
          { icon: <Zap size={20} />, label: "Page Load", value: "<1.5s" },
          { icon: <Globe size={20} />, label: "Live Since", value: "2024" },
        ],

        features: [
          {
            icon: <LayoutGrid size={24} className="text-emerald-400" />,
            title: "Dynamic Product Catalog",
            description: "Products fetched live from the DummyJSON API, organized by category with infinite scroll and real-time search filtering.",
          },
          {
            icon: <Search size={24} className="text-blue-400" />,
            title: "Real-Time Search & Filter",
            description: "Instant client-side search with category, price range, and rating filters. Results update in real time as you type.",
          },
          {
            icon: <ShoppingCart size={24} className="text-cyan-400" />,
            title: "Full Cart & Checkout Flow",
            description: "Add to cart, adjust quantities, remove items, and complete checkout with shipping details form — all persisted in Local Storage.",
          },
          {
            icon: <Heart size={24} className="text-rose-400" />,
            title: "Wishlist & Favorites",
            description: "Save products to a wishlist with a single click. Wishlist state persists across sessions via Local Storage.",
          },
          {
            icon: <Smartphone size={24} className="text-amber-400" />,
            title: "Fully Responsive",
            description: "Pixel-perfect layout across desktop, tablet, and mobile. Touch-optimized interactions with swipeable product carousels on mobile.",
          },
          {
            icon: <Shield size={24} className="text-purple-400" />,
            title: "Dark / Light Mode",
            description: "Elegant theme toggle with a smooth transition. User preference persisted in Local Storage and respects OS system preference on first visit.",
          },
        ],

        challenges: [
          {
            title: "Apple-Quality Animation Performance",
            description: "Achieving 60fps animations throughout required careful use of Framer Motion's layoutId for product card transitions, GPU-composited transforms, and avoiding layout-triggering properties like width/height in animations.",
          },
          {
            title: "Cart State Consistency",
            description: "Multiple components needed live access to cart state without prop drilling. Implemented a lightweight React Context + useReducer pattern with Local Storage sync acting as a persistent store.",
          },
          {
            title: "API Rate Limiting & Caching",
            description: "DummyJSON enforces rate limits. Implemented an in-memory React Query cache with 5-minute stale time and optimistic updates to minimize unnecessary refetches while keeping data fresh.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Gearlogy started as a project to prove that an independent e-commerce store could match the premium feel
              of Apple.com without a massive engineering team. The result is a fully animated, responsive storefront
              with a level of polish that goes far beyond typical portfolio projects.
            </p>
            <p>
              The UI is built with Tailwind CSS and Framer Motion — every product card, page transition, and micro-interaction
              is animated. The product catalog comes from the DummyJSON REST API, which provides realistic product data
              with images, ratings, and stock information.
            </p>
            <p>
              The checkout flow includes a multi-step form with shipping details validation, order summary review, and
              a success confirmation — all without a real backend, using Local Storage as the persistence layer.
            </p>
          </div>
        ),

        liveHref: "https://gearlogy.netlify.app/",
        githubHref: "https://github.com/GarvonGit/Gearlogy",
        ctaLabel: "Visit Store",

        mockupContent: (
          <div className="w-full bg-[#111] flex flex-col" style={{ minHeight: 520 }}>
            {/* Browser bar */}
            <div className="h-11 border-b border-white/5 flex items-center px-5 gap-2.5 bg-[#161616]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="mx-auto px-4 py-0.5 rounded bg-white/5 border border-white/[0.06] text-[11px] text-neutral-500 font-mono">
                gearlogy.netlify.app
              </div>
            </div>

            {/* Navbar */}
            <div className="h-14 border-b border-white/5 flex items-center px-8 gap-6 bg-[#0e0e0e]">
              <span className="text-white font-bold text-sm tracking-tight">Gear<span className="text-emerald-400">logy</span></span>
              <div className="flex items-center gap-4 ml-4">
                {["Electronics", "Audio", "Phones", "Wearables"].map((c) => (
                  <span key={c} className="text-neutral-500 text-xs hover:text-white transition-colors cursor-pointer">{c}</span>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-3">
                <Search size={14} className="text-neutral-500" />
                <Heart size={14} className="text-neutral-500" />
                <div className="relative">
                  <ShoppingCart size={14} className="text-neutral-300" />
                  <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero banner */}
            <div className="mx-6 mt-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-6 flex items-center justify-between">
              <div>
                <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider mb-1">New Arrivals</p>
                <p className="text-white text-xl font-bold">Pro Wireless Earbuds</p>
                <p className="text-neutral-400 text-xs mt-1">Active Noise Cancellation · 36hr Battery</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">$149</span>
                  <span className="text-neutral-600 text-xs line-through">$249</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">-40%</span>
                </div>
              </div>
              <div className="w-24 h-24 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Smartphone size={36} className="text-emerald-400" />
              </div>
            </div>

            {/* Products grid */}
            <div className="p-6 grid grid-cols-4 gap-4">
              {[
                { name: "Smart Watch Pro", price: "$199", rating: 4.8, color: "violet", tag: "Bestseller" },
                { name: "Drone X5", price: "$799", rating: 4.6, color: "orange", tag: "New" },
                { name: "4K Webcam", price: "$89", rating: 4.5, color: "sky", tag: null },
                { name: "Mechanical KB", price: "$149", rating: 4.9, color: "rose", tag: "Sale" },
              ].map((p) => (
                <div key={p.name} className="group rounded-xl bg-[#0a0a0a] border border-white/5 p-4 hover:border-white/10 transition-all duration-300">
                  <div className={`w-full aspect-square rounded-lg bg-${p.color}-500/10 border border-${p.color}-500/20 flex items-center justify-center mb-3 relative`}>
                    <Smartphone size={28} className={`text-${p.color}-400`} />
                    {p.tag && (
                      <span className={`absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-${p.color}-500/20 text-${p.color}-400 text-[9px] font-bold`}>
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-white text-xs font-semibold">{p.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-emerald-400 text-sm font-bold">{p.price}</span>
                    <div className="flex items-center gap-0.5">
                      <Star size={10} className="text-amber-400 fill-amber-400" />
                      <span className="text-neutral-500 text-[10px]">{p.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
    />
  );
}
