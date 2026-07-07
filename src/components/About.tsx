"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, ArrowRight } from "lucide-react";
import CounterAnimation from "./CounterAnimation";
import TypingText from "./TypingText";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 999, marginBottom: 16 }}>
            <Sparkles size={14} style={{ color: "#a78bfa" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("about.header")}</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
            {t("about.title")}
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 64, flexWrap: "wrap", justifyContent: "center" }}>
          {/* PHOTO LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%", maxWidth: 320, flexShrink: 0, display: "flex", justifyContent: "center" }}
          >
            <motion.div whileHover={{ scale: 1.02, rotate: 1 }} transition={{ duration: 0.3 }} style={{ position: "relative", width: "100%", maxWidth: 300, overflow: "visible" }}>
              {/* Background decoration */}
              <div style={{ position: "absolute", top: 16, left: 16, right: -16, bottom: -16, background: "linear-gradient(135deg, #fbbf24, #f472b6)", borderRadius: 28, opacity: 0.15, transform: "rotate(-3deg)" }} />
              
              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "4/5", background: "linear-gradient(135deg, #12122a, #1a1a3a)", borderRadius: 28, overflow: "hidden", zIndex: 1, border: "1px solid rgba(232,232,240,0.05)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/about.webp" alt="f1qxzz" style={{ width: "100%", height: "120%", objectFit: "cover", objectPosition: "center 20%", marginTop: "-10%", filter: "brightness(0.9) contrast(1.1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,26,0.3) 0%, transparent 50%)", zIndex: 1 }} />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", bottom: -20, right: -20, padding: "12px 20px", background: "rgba(18,18,42,0.9)", backdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(167,139,250,0.2)", zIndex: 2 }}
              >
                <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(232,232,240,0.6)", margin: 0 }}>Pengalaman</p>
                <p style={{ fontSize: 24, fontWeight: 800, color: "#a78bfa", margin: 0 }}>3+ Tahun</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, minWidth: 340 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#e8e8f0" }}>{t("about.me")}</span>
                <motion.span whileHover={{ scale: 1.05, rotate: -2 }} style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, textTransform: "uppercase", background: "linear-gradient(135deg, #60a5fa, #3b82f6)", color: "white", padding: "4px 16px", borderRadius: 12, display: "inline-block", boxShadow: "0 4px 15px rgba(96,165,250,0.3)" }}>
                  f1qxzz
                </motion.span>
              </div>
              <motion.span whileHover={{ scale: 1.02, rotate: 1 }} style={{ fontSize: "clamp(20px, 4vw, 32px)", fontWeight: 800, textTransform: "uppercase", background: "linear-gradient(135deg, rgba(110,231,183,0.2), rgba(110,231,183,0.1))", color: "#6ee7b7", padding: "6px 16px", borderRadius: 12, display: "inline-block", width: "fit-content", border: "1px solid rgba(110,231,183,0.2)" }}>
                FULLSTACK DEVELOPER
              </motion.span>
            </div>

            <div style={{ borderLeft: "3px solid", borderImage: "linear-gradient(to bottom, #a78bfa, #60a5fa) 1", paddingLeft: 24, margin: "28px 0" }}>
              <p style={{ fontSize: 16, color: "rgba(232,232,240,0.55)", fontWeight: 400, lineHeight: 1.8 }}>
                {t("about.p1")}
              </p>
              <p style={{ fontSize: 16, color: "rgba(232,232,240,0.55)", fontWeight: 400, lineHeight: 1.8, marginTop: 16 }}>
                {t("about.p2")}
              </p>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 24px", background: "linear-gradient(135deg, #a78bfa, #8b5cf6)", color: "white", fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14, boxShadow: "0 8px 30px rgba(167,139,250,0.25)" }}
            >
              <Download size={18} />
              {t("about.cv")}
              <ArrowRight size={16} />
            </motion.a>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
              {[
                { value: 15, suffix: "+", key: "about.stat.projects" },
                { value: 3, suffix: "+", key: "about.stat.experience" },
                { value: 10, suffix: "+", key: "about.stat.clients" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 28, fontWeight: 800, color: "#a78bfa", margin: 0 }}>
                    <CounterAnimation target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.4)", fontWeight: 500, marginTop: 4 }}>{t(stat.key)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
