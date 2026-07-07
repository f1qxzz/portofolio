"use client";

import { useEffect, useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/f1qxzz" },
  { label: "Discord", href: "https://discord.gg/M9J3ZPt7" },
  { label: "Instagram", href: "https://instagram.com/f1qxzz_" },
  { label: "Telegram", href: "https://t.me/f1qxzz" },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 3,
  color: Math.random() > 0.5 ? "#22d3ee" : "#a78bfa",
}));

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#06080f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "conic-gradient(from 0deg, transparent, rgba(167,139,250,0.04), transparent, rgba(34,211,238,0.04), transparent)",
          animation: "spin-slow 8s linear infinite",
        }}
      />
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            background: p.color,
            borderRadius: "50%",
            opacity: 0.3,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          zIndex: 1,
        }}
      >
        <div style={{ position: "relative", width: 120, height: 120 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
              boxShadow: "0 0 60px rgba(139,92,246,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="56" height="56" viewBox="0 0 56 56">
              <ellipse cx="20" cy="24" rx="3" ry="4" fill="white" />
              <ellipse cx="36" cy="24" rx="3" ry="4" fill="white" />
              <ellipse cx="20" cy="24" rx="2" ry="1.5" fill="#22d3ee">
                <animate attributeName="ry" values="1.5;0.1;1.5" dur="3s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="36" cy="24" rx="2" ry="1.5" fill="#22d3ee">
                <animate attributeName="ry" values="1.5;0.1;1.5" dur="3s" repeatCount="indefinite" />
              </ellipse>
              <path d="M18 36 Q28 44, 38 36" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="14" cy="14" r="2" fill="#22d3ee" opacity="0.5">
                <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              border: "2px solid transparent",
              borderTopColor: "#22d3ee",
              borderRightColor: "#8b5cf6",
              animation: "orbit 6s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -4,
                right: 20,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22d3ee",
                boxShadow: "0 0 10px #22d3ee",
              }}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 8vw, 64px)",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            F1<span style={{ color: "#06b6d4" }}>Q</span>XZZ
          </h1>
          <p
            style={{
              fontSize: 14,
              fontFamily: "var(--font-mono), monospace",
              color: "rgba(255,255,255,0.3)",
              marginTop: 8,
            }}
          >
            code. build. innovate.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a78bfa";
                e.currentTarget.style.color = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {s.label[0]}
            </a>
          ))}
        </div>
        <div
          style={{
            width: 300,
            height: 3,
            borderRadius: 2,
            background: "rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${Math.min(progress, 100)}%`,
              height: "100%",
              background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
              borderRadius: 2,
              transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          Initializing... {Math.floor(Math.min(progress, 100))}%
        </p>
      </div>
    </div>
  );
}
