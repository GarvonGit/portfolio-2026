import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  CloudSun, Wind, Droplets, Eye,
  Thermometer, Compass, Sunrise, Globe,
  Zap, Search, BarChart3, Layers
} from "lucide-react";

export const metadata = {
  title: "Weatherly — Garv Chouhan",
  description: "A premium cinematic weather app — real-time data, dynamic weather animations, and glassmorphism UI.",
};

export default function WeatherlyPage() {
  return (
    <ProjectPageLayout
      project={{
        title: "Weather",
        subtitle: "ly",
        badge: "React / OpenWeatherMap",
        badgeColor: "bg-sky-500/10 border-sky-500/20 text-sky-400",
        accentFrom: "#38bdf8",
        accentTo: "#818cf8",
        heroGlow: "bg-gradient-radial from-sky-600 to-transparent",
        description:
          "A premium cinematic weather experience. Real-time weather data for any city worldwide — humidity, sunset, pressure, wind speed, UV index — with dynamic weather-based visual animations and a glassmorphism UI that adapts to the current conditions.",

        techStack: [
          { name: "React.js", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15" },
          { name: "OpenWeatherMap API", color: "bg-sky-500/10 border-sky-500/20 text-sky-300 hover:bg-sky-500/15" },
          { name: "Framer Motion", color: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/15" },
          { name: "Tailwind CSS", color: "bg-teal-500/10 border-teal-500/20 text-teal-300 hover:bg-teal-500/15" },
          { name: "GitHub Pages", color: "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10" },
        ],

        highlights: [
          { icon: <Globe size={20} />, label: "Cities Supported", value: "∞" },
          { icon: <Zap size={20} />, label: "Data Freshness", value: "10min" },
          { icon: <Layers size={20} />, label: "Weather States", value: "8" },
          { icon: <BarChart3 size={20} />, label: "Metrics Shown", value: "12+" },
        ],

        features: [
          {
            icon: <Search size={24} className="text-sky-400" />,
            title: "City Search",
            description: "Search any city worldwide with instant autocomplete. The UI transitions smoothly to display that city's live weather conditions.",
          },
          {
            icon: <CloudSun size={24} className="text-amber-400" />,
            title: "Dynamic Weather Animations",
            description: "Background and foreground animations change based on conditions — animated sun rays, rain particles, snow, thunderstorm effects, and fog glows.",
          },
          {
            icon: <Thermometer size={24} className="text-rose-400" />,
            title: "Full Meteorological Data",
            description: "Temperature (feels-like), humidity, wind speed & direction, pressure, UV index, visibility, and sunrise/sunset times — all in one view.",
          },
          {
            icon: <Sunrise size={24} className="text-orange-400" />,
            title: "Sunrise & Sunset Tracker",
            description: "Visual arc showing the current position of the sun relative to sunrise and sunset times for the selected location.",
          },
          {
            icon: <Wind size={24} className="text-teal-400" />,
            title: "Wind Compass",
            description: "Animated compass dial showing wind direction, with a color-coded speed indicator from calm (green) to storm (red).",
          },
          {
            icon: <Eye size={24} className="text-blue-400" />,
            title: "Glassmorphism UI",
            description: "Every card uses backdrop blur, translucent layering, and subtle borders to create a premium glass aesthetic that adapts to the weather's color palette.",
          },
        ],

        challenges: [
          {
            title: "API Rate Limiting on Free Tier",
            description: "OpenWeatherMap's free tier allows 60 calls/minute. Implemented client-side request debouncing on the search input (500ms delay) and in-memory caching with a 10-minute TTL to stay well within limits.",
          },
          {
            title: "Adaptive Color System",
            description: "Making the entire UI shift color palette based on weather conditions required a CSS custom property system — each weather state defines a set of HSL variables that smoothly interpolate as conditions change.",
          },
        ],

        longDescription: (
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Weatherly was built to push beyond the typical weather app tutorial — moving from a static data display
              to a fully immersive, cinematic weather experience where the UI itself conveys the current conditions
              through animation, color, and motion.
            </p>
            <p>
              The OpenWeatherMap API drives all data. The condition codes returned by the API determine which animation
              set is active — ranging from gentle sun ray pulses for clear skies to cascading rain particle animations
              for rainy conditions, built with Framer Motion.
            </p>
          </div>
        ),

        liveHref: "https://garvongit.github.io/weatherly/",
        githubHref: "https://github.com/GarvonGit/weatherly",
        ctaLabel: "Check the Weather",

        mockupContent: (
          <div
            className="w-full flex items-center justify-center p-8 overflow-hidden"
            style={{
              minHeight: 480,
              background: "linear-gradient(135deg, #0c1445 0%, #1a2a6c 35%, #0f4c81 70%, #1565c0 100%)",
            }}
          >
            {/* Animated sun */}
            <div className="absolute top-8 right-12 w-28 h-28 rounded-full bg-amber-300/20 blur-2xl" />
            <div className="absolute top-10 right-14 w-20 h-20 rounded-full bg-amber-400/30" />

            {/* Main card */}
            <div className="w-full max-w-sm mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Top section */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <p className="text-white font-bold text-2xl">Ahmedabad</p>
                    <p className="text-white/60 text-sm">Gujarat, India</p>
                  </div>
                  <CloudSun size={40} className="text-amber-300" />
                </div>

                {/* Temperature */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-white font-bold text-7xl tracking-tighter">32</span>
                  <span className="text-white/60 text-3xl font-light">°C</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Partly Cloudy · Feels like 36°C</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mx-6" />

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-0">
                {[
                  { icon: <Droplets size={16} />, label: "Humidity", value: "62%" },
                  { icon: <Wind size={16} />, label: "Wind", value: "18 km/h" },
                  { icon: <Eye size={16} />, label: "Visibility", value: "9 km" },
                  { icon: <Thermometer size={16} />, label: "Pressure", value: "1013 hPa" },
                  { icon: <Sunrise size={16} />, label: "Sunrise", value: "6:15 AM" },
                  { icon: <Compass size={16} />, label: "Direction", value: "NW" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 flex flex-col items-center gap-1 border border-white/5">
                    <div className="text-white/50">{stat.icon}</div>
                    <p className="text-white font-semibold text-sm">{stat.value}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Search bar */}
              <div className="p-4">
                <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/15">
                  <Search size={14} className="text-white/40" />
                  <span className="text-white/40 text-sm">Search any city...</span>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
