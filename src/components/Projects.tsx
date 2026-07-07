"use client";

import { Sparkles, BarChart3, Smartphone, BookOpen, Bot, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Rekapin",
    desc: "Aplikasi pencatatan & rekap data yang memudahkan users dalam mengelola dan menganalisis data secara efficient dengan intuitive interface.",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    icon: BarChart3,
    github: "https://github.com/f1qxzz/rekapin",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "SmartApp",
    desc: "Personal life management superapp with finance, chat, AI assistant, dan habit tracking using Flutter dan Node.js.",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    icon: Smartphone,
    github: "https://github.com/f1qxzz/smartapp",
    tech: ["Flutter", "Node.js", "TypeScript"],
  },
  {
    title: "Cozy Library",
    desc: "Library management system dengan fitur borrowing, returns, denda, reports, dan auto email reminders.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    icon: BookOpen,
    github: "https://github.com/f1qxzz/cozy-library",
    tech: ["PHP", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Agent AI",
    desc: "Telegram AI coding agent with memory, skills, approval system, dan safe connectors for GitHub, Discord, dan X.",
    gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
    icon: Bot,
    github: "https://github.com/f1qxzz/agent-ai",
    tech: ["Python", "FastAPI"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 999,
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.2)",
            marginBottom: 16,
          }}
        >
          <Sparkles size={14} color="#a78bfa" />
          <span style={{ fontSize: 13, color: "#a78bfa", fontWeight: 500 }}>
            PROYEK
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "#e8e8f0",
            marginBottom: 60,
          }}
        >
          Proyek Terbaru
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: 28,
          }}
        >
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "rgba(18,18,42,0.4)",
                  border: "1px solid rgba(167,139,250,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.2)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    height: 200,
                    background: project.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Icon size={56} color="rgba(255,255,255,0.3)" />
                  <a
                    href={`#projects-${i}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(4px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      color: "white",
                      fontSize: 15,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                  >
                    <ExternalLink size={18} /> Lihat Proyek
                  </a>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0", marginBottom: 8 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(232,232,240,0.5)", lineHeight: 1.7, marginBottom: 16 }}>
                    {project.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "3px 8px",
                            borderRadius: 6,
                            background: "rgba(167,139,250,0.08)",
                            fontSize: 10,
                            color: "rgba(167,139,250,0.6)",
                            fontWeight: 500,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        color: "rgba(232,232,240,0.4)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#a78bfa"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,232,240,0.4)"; }}
                    >
                      <GitBranch size={14} /> Source
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
