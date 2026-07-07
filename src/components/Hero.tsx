"use client";

import { Sparkles, Briefcase, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/f1qxzz", icon: "GH" },
  { label: "Instagram", href: "https://instagram.com/f1qxzz_", icon: "IG" },
  { label: "Discord", href: "https://discord.gg/M9J3ZPt7", icon: "DC" },
  { label: "Telegram", href: "https://t.me/f1qxzz", icon: "TG" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))",
              border: "1px solid rgba(6,182,212,0.2)",
              width: "fit-content",
            }}
          >
            <Sparkles size={14} color="#22d3ee" />
            <span style={{ fontSize: 13, color: "#22d3ee", fontWeight: 500 }}>
              Open to Work
            </span>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22d3ee",
                display: "inline-block",
              }}
            />
          </div>
          <div>
            <h1
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: "#a78bfa" }}>$</span>{" "}
              <span
                className="animate-terminalScan"
                style={{
                  background: "linear-gradient(180deg, transparent 48%, rgba(167,139,250,0.08) 50%, transparent 52%)",
                }}
              >
                f1qxzz
              </span>
              <span className="animate-blink" style={{ color: "#a78bfa" }}> _</span>
            </h1>
          </div>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 600,
              color: "rgba(232,232,240,0.7)",
            }}
          >
            Fullstack Developer
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  background: "rgba(232,232,240,0.03)",
                  border: "1px solid rgba(232,232,240,0.06)",
                  color: "rgba(232,232,240,0.5)",
                  fontSize: 11,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(167,139,250,0.1)";
                  e.currentTarget.style.borderColor = "#a78bfa";
                  e.currentTarget.style.color = "#a78bfa";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(232,232,240,0.03)";
                  e.currentTarget.style.borderColor = "rgba(232,232,240,0.06)";
                  e.currentTarget.style.color = "rgba(232,232,240,0.5)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(232,232,240,0.45)",
              maxWidth: 500,
            }}
          >
            Saya adalah Fullstack Developer yang fokus di pengembangan aplikasi web modern
            dengan React, Next.js, dan Laravel. Dari building custom e-commerce sampai
            automating business processes di perusahaan manufaktur.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                color: "white",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(167,139,250,0.25)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(167,139,250,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(167,139,250,0.25)";
              }}
            >
              <Briefcase size={18} /> Lihat Proyek
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 14,
                background: "rgba(232,232,240,0.05)",
                border: "1px solid rgba(232,232,240,0.1)",
                color: "rgba(232,232,240,0.7)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(167,139,250,0.1)";
                e.currentTarget.style.borderColor = "#a78bfa";
                e.currentTarget.style.color = "#a78bfa";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(232,232,240,0.05)";
                e.currentTarget.style.borderColor = "rgba(232,232,240,0.1)";
                e.currentTarget.style.color = "rgba(232,232,240,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Mail size={18} /> Hubungi Saya
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 340,
              aspectRatio: "3/4",
              borderRadius: 28,
              background: "linear-gradient(135deg, #12122a, #1a1a3a)",
              border: "1px solid rgba(167,139,250,0.1)",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,10,26,0.9) 0%, rgba(10,10,26,0.1) 50%, transparent 100%)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 2,
              }}
            >
              <p style={{ fontSize: 18, fontWeight: 800, color: "white" }}>
                f1qxzz<span style={{ color: "#22d3ee" }}>.</span>
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                Fullstack Developer
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                zIndex: 2,
                padding: 16,
                borderRadius: 16,
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #06b6d4, #a78bfa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                FQ
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "white" }}>
                  @f1qxzz_
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22c55e",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Online</span>
                </div>
              </div>
              <a
                href="#contact"
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              inset: -20,
              borderRadius: 48,
              background: "linear-gradient(135deg, #06b6d4 0%, #a78bfa 50%, #f472b6 100%)",
              opacity: 0.08,
              filter: "blur(40px)",
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
