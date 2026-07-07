"use client";

import { motion } from "framer-motion";
import { Briefcase, Mail, Sparkles } from "lucide-react";
import { GithubIcon, InstagramIcon, DiscordIcon, TelegramIcon } from "./SocialIcons";
import TypingText from "./TypingText";
import TerminalTyping from "./TerminalTyping";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 24px 60px" }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>
          {/* TEXT LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, minWidth: "min(340px, 100%)", textAlign: "left" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 999, marginBottom: 24 }}
            >
              <Sparkles size={14} style={{ color: "#22d3ee" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#22d3ee" }}>{t("hero.badge")}</span>
            </motion.div>

            <p style={{ fontSize: 15, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(232,232,240,0.4)", marginBottom: 16 }}>
              <TypingText text={t("hero.greeting")} delay={500} />
            </p>

            <h1 style={{ fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-0.03em" }}>
              <TerminalTyping text="f1qxzz." delay={1500} />
            </h1>

            <p style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 600, color: "rgba(232,232,240,0.7)", marginBottom: 28 }}>
              {t("hero.title")}
            </p>

            {/* Social Links */}
            <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "flex-start" }}>
              {[
                { icon: <GithubIcon size={20} />, href: "https://github.com/f1qxzz", color: "#a78bfa", hoverBg: "rgba(167,139,250,0.1)" },
                { icon: <InstagramIcon size={20} />, href: "https://instagram.com/f1qxzz_", color: "#f472b6", hoverBg: "rgba(244,114,182,0.1)" },
                { icon: <DiscordIcon size={20} />, href: "https://discord.gg/M9J3ZPt7", color: "#60a5fa", hoverBg: "rgba(96,165,250,0.1)" },
                { icon: <TelegramIcon size={20} />, href: "https://t.me/f1qxzz", color: "#22d3ee", hoverBg: "rgba(34,211,238,0.1)" },
              ].map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(232,232,240,0.03)", border: "1px solid rgba(232,232,240,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(232,232,240,0.5)", textDecoration: "none", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.background = s.hoverBg; e.currentTarget.style.borderColor = s.color + "40"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,232,240,0.5)"; e.currentTarget.style.background = "rgba(232,232,240,0.03)"; e.currentTarget.style.borderColor = "rgba(232,232,240,0.06)"; }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <p style={{ fontSize: 16, color: "rgba(232,232,240,0.45)", maxWidth: 500, margin: "28px 0", fontWeight: 400, lineHeight: 1.8 }}>
              {t("hero.desc")}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 36, justifyContent: "flex-start" }}>
              <motion.a href="#projects" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 28px", background: "linear-gradient(135deg, #a78bfa, #8b5cf6)", color: "white", fontWeight: 700, borderRadius: 14, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 30px rgba(167,139,250,0.25)" }}>
                <Briefcase size={18} />
                {t("hero.cta.projects")}
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 28px", background: "rgba(232,232,240,0.03)", border: "1px solid rgba(232,232,240,0.1)", color: "rgba(232,232,240,0.7)", fontWeight: 700, borderRadius: 14, fontSize: 15, textDecoration: "none", backdropFilter: "blur(10px)" }}>
                <Mail size={18} />
                {t("hero.cta.contact")}
              </motion.a>
            </div>
          </motion.div>

          {/* PHOTO RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, display: "flex", justifyContent: "center", minWidth: "min(300px, 100%)", maxWidth: 400 }}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <div style={{ position: "absolute", inset: -20, background: "linear-gradient(135deg, #06b6d4 0%, #a78bfa 50%, #f472b6 100%)", borderRadius: 40, filter: "blur(40px)", opacity: 0.3, zIndex: -1 }} className="animate-pulse-glow" />
              <div style={{ position: "relative", aspectRatio: "3/4", width: "100%", borderRadius: 28, overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/hero.webp" alt="f1qxzz" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,26,0.1) 0%, rgba(10,10,26,0.4) 50%, rgba(10,10,26,0.9) 100%)", zIndex: 1 }} />
                <div style={{ position: "absolute", top: 32, left: 32, zIndex: 2, color: "white" }}>
                  <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
                    f1qxzz<span style={{ color: "#22d3ee" }}>.</span>
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Fullstack Developer</p>
                </div>
                <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "rgba(255,255,255,0.08)", borderRadius: 16, backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #06b6d4, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 15px rgba(6,182,212,0.3)" }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>f1</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, margin: 0, color: "white" }}>@f1qxzz_</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 10px 2px rgba(34,211,238,0.6)" }} />
                        <p style={{ fontSize: 11, fontWeight: 600, margin: 0, color: "rgba(255,255,255,0.7)" }}>Online</p>
                      </div>
                    </div>
                  </div>
                  <a href="#contact" style={{ padding: "6px 14px", background: "rgba(6,182,212,0.2)", color: "white", fontSize: 12, fontWeight: 700, borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
