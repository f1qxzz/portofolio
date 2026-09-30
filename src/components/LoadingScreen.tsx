"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, InstagramIcon, DiscordIcon, TelegramIcon } from "./SocialIcons";

const particles = [
  { left: 8, top: 12, size: 3, dur: 5, delay: 0, glow: 6 },
  { left: 92, top: 18, size: 4, dur: 6, delay: 0.5, glow: 8 },
  { left: 15, top: 75, size: 2, dur: 4, delay: 1, glow: 5 },
  { left: 85, top: 80, size: 3, dur: 5.5, delay: 0.3, glow: 6 },
  { left: 5, top: 45, size: 2.5, dur: 7, delay: 1.5, glow: 5 },
  { left: 95, top: 50, size: 3.5, dur: 6.5, delay: 0.8, glow: 7 },
  { left: 30, top: 8, size: 2, dur: 5, delay: 2, glow: 5 },
  { left: 70, top: 90, size: 3, dur: 4.5, delay: 1.2, glow: 6 },
  { left: 20, top: 60, size: 2.5, dur: 6, delay: 0.7, glow: 5 },
  { left: 80, top: 30, size: 4, dur: 5.5, delay: 1.8, glow: 8 },
  { left: 50, top: 5, size: 2, dur: 7, delay: 0.4, glow: 5 },
  { left: 50, top: 95, size: 3, dur: 5, delay: 1.1, glow: 6 },
  { left: 10, top: 35, size: 2.5, dur: 6, delay: 0.9, glow: 5 },
  { left: 88, top: 65, size: 3.5, dur: 4.5, delay: 1.4, glow: 7 },
  { left: 40, top: 20, size: 2, dur: 5.5, delay: 2.2, glow: 5 },
  { left: 60, top: 85, size: 3, dur: 6, delay: 0.6, glow: 6 },
  { left: 25, top: 40, size: 2.5, dur: 5, delay: 1.7, glow: 5 },
  { left: 75, top: 15, size: 2, dur: 6.5, delay: 0.2, glow: 5 },
  { left: 45, top: 55, size: 3.5, dur: 5, delay: 1.3, glow: 7 },
  { left: 55, top: 70, size: 2, dur: 4.5, delay: 2.5, glow: 5 },
];

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const loadingText = useMemo(() => {
    if (progress < 20) return "Initializing...";
    if (progress < 40) return "Loading assets...";
    if (progress < 60) return "Preparing...";
    if (progress < 80) return "Almost ready...";
    return "Welcome!";
  }, [progress]);

  useEffect(() => {
    // ponytail: sekali per sesi, biar repeat visit nggak nunggu loading lagi
    if (sessionStorage.getItem("f1q-loaded")) {
      setIsVisible(false);
      return;
    }
    sessionStorage.setItem("f1q-loaded", "1");
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 3 + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 700);
          return 100;
        }
        return next;
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "#06080f",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Background */}
          <div style={{ position: "absolute", inset: 0 }}>
            {/* Rotating gradient */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "conic-gradient(from 0deg, transparent, rgba(6,182,212,0.08), transparent, rgba(139,92,246,0.08), transparent)", animation: "spin 8s linear infinite" }} />

            {/* Spotlight beams */}
            {[0, 30, -30].map((rotate, i) => (
              <div key={i} style={{ position: "absolute", top: "-10%", left: "50%", transform: `translateX(-50%) rotate(${rotate}deg)`, width: 80, height: "120%", background: `linear-gradient(to bottom, rgba(6,182,212,${0.08 - i * 0.02}), transparent 70%)`, filter: "blur(20px)", transformOrigin: "top center" }} />
            ))}

            {/* Particles */}
            {particles.map((p, i) => (
              <div key={i} style={{ position: "absolute", left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, borderRadius: "50%", background: i % 2 === 0 ? "rgba(6,182,212,0.4)" : "rgba(139,92,246,0.4)", animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`, boxShadow: `0 0 ${p.glow}px ${i % 2 === 0 ? "rgba(6,182,212,0.3)" : "rgba(139,92,246,0.3)"}` }} />
            ))}

            {/* Grid */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(6,182,212,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 10%, transparent 60%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 60%)" }} />
          </div>

          {/* Main Content */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            {/* Glowing Orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", width: 120, height: 120, marginBottom: 16 }}
            >
              {/* Outer glow */}
              <div style={{ position: "absolute", inset: -20, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)", animation: "pulse 3s ease-in-out infinite" }} />

              {/* Orb body */}
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)", boxShadow: "0 0 40px rgba(6,182,212,0.4), inset 0 -5px 15px rgba(0,0,0,0.3), inset 0 5px 15px rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {/* Shine */}
                <div style={{ position: "absolute", top: 10, left: 20, width: 30, height: 15, borderRadius: "50%", background: "rgba(255,255,255,0.3)", filter: "blur(5px)", transform: "rotate(-30deg)" }} />

                {/* Face */}
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <ellipse cx="20" cy="24" rx="5" ry="6" fill="white" opacity="0.9">
                    <animate attributeName="ry" values="6;1;6" dur="3s" repeatCount="indefinite" />
                  </ellipse>
                  <ellipse cx="40" cy="24" rx="5" ry="6" fill="white" opacity="0.9">
                    <animate attributeName="ry" values="6;1;6" dur="3s" repeatCount="indefinite" begin="0.1s" />
                  </ellipse>
                  <path d="M 18 36 Q 30 46 42 36" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                </svg>
              </div>

              {/* Orbiting ring */}
              <div style={{ position: "absolute", inset: -15, border: "2px solid rgba(6,182,212,0.2)", borderRadius: "50%", animation: "spin 6s linear infinite" }}>
                <div style={{ position: "absolute", top: -4, left: "50%", width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 10px rgba(34,211,238,0.8)" }} />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 900, color: "white", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>
                F1<span style={{ color: "#06b6d4" }}>Q</span>XZZ
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                code. build. innovate.
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ display: "flex", gap: 20, marginTop: 20 }}>
              {[
                { icon: <GithubIcon size={20} />, href: "https://github.com/f1qxzz", name: "github" },
                { icon: <DiscordIcon size={20} />, href: "https://discord.gg/M9J3ZPt7", name: "discord" },
                { icon: <InstagramIcon size={20} />, href: "https://instagram.com/f1qxzz_", name: "instagram" },
                { icon: <TelegramIcon size={20} />, href: "https://t.me/f1qxzz", name: "telegram" },
              ].map((s) => (
                <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredIcon(s.name)} onMouseLeave={() => setHoveredIcon(null)} whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} style={{ width: 40, height: 40, borderRadius: 12, background: hoveredIcon === s.name ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.05)", border: `1px solid ${hoveredIcon === s.name ? "rgba(6,182,212,0.3)" : "rgba(255,255,255,0.08)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: hoveredIcon === s.name ? "#22d3ee" : "rgba(255,255,255,0.4)", transition: "all 0.3s ease", textDecoration: "none" }}>
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Progress */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} style={{ width: 300, marginTop: 32 }}>
              <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: "100%", background: "linear-gradient(90deg, #06b6d4, #8b5cf6)", borderRadius: 999, width: `${Math.min(progress, 100)}%`, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)", boxShadow: "0 0 12px rgba(6,182,212,0.5)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>{loadingText}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>{Math.min(Math.round(progress), 100)}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
