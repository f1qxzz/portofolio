"use client";

import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { useLang } from "@/lib/LanguageContext";

const techIcons: Record<string, string> = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
};

const projectIcons: Record<string, React.ReactNode> = {
  Rekapin: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clipboard base */}
      <rect x="8" y="4" width="24" height="32" rx="5" fill="white" fillOpacity="0.9" />
      <rect x="10" y="2" width="20" height="6" rx="2" fill="white" fillOpacity="0.5" />
      {/* Chart bars */}
      <rect x="13" y="16" width="4" height="12" rx="1" fill="#667eea" fillOpacity="0.8" />
      <rect x="19" y="12" width="4" height="16" rx="1" fill="#667eea" fillOpacity="0.6" />
      <rect x="25" y="20" width="4" height="8" rx="1" fill="#667eea" fillOpacity="0.4" />
      {/* Checkmark */}
      <circle cx="30" cy="8" r="6" fill="#22c55e" />
      <path d="M27.5 8 L29.5 10 L32.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  SmartApp: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone body */}
      <rect x="8" y="2" width="24" height="36" rx="6" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="none" />
      {/* Screen gradient bg */}
      <rect x="11" y="7" width="18" height="26" rx="3" fill="white" fillOpacity="0.1" />
      {/* App grid */}
      <rect x="13" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.7" />
      <rect x="21" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.4" />
      <rect x="13" y="18" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.4" />
      <rect x="21" y="18" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.7" />
      {/* Bottom nav indicator */}
      <rect x="16" y="31" width="8" height="2" rx="1" fill="white" fillOpacity="0.4" />
      {/* Camera notch */}
      <rect x="18" y="5" width="4" height="1.5" rx="0.75" fill="white" fillOpacity="0.3" />
    </svg>
  ),
  "Cozy Library": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bookshelf */}
      <rect x="4" y="30" width="32" height="3" rx="1" fill="white" fillOpacity="0.2" />
      {/* Books */}
      <rect x="6" y="8" width="7" height="14" rx="1.5" fill="white" fillOpacity="0.9" />
      <rect x="15" y="4" width="7" height="18" rx="1.5" fill="white" fillOpacity="0.6" />
      <rect x="24" y="12" width="7" height="10" rx="1.5" fill="white" fillOpacity="0.4" />
      {/* Book details */}
      <line x1="9" y1="12" x2="10" y2="12" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="18" y1="8" x2="19" y2="8" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="27" y1="16" x2="28" y2="16" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      {/* Star on best book */}
      <path d="M12 12 L13 10 L14 12 L16 12.5 L14 14 L14.5 16 L12 14.5 L9.5 16 L10 14 L8 12.5 L10 12 Z" fill="#fbbf24" fillOpacity="0.9" />
      {/* Lamp */}
      <path d="M34 28 L36 22 L38 28" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      <circle cx="36" cy="28" r="1.5" fill="#fbbf24" fillOpacity="0.4" />
    </svg>
  ),
  "Agent AI": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brain/Head */}
      <path d="M20 4 C12 4 6 10 6 18 C6 24 10 28 14 32 L14 38 L26 38 L26 32 C30 28 34 24 34 18 C34 10 28 4 20 4 Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      {/* AI chip pattern on head */}
      <rect x="16" y="12" width="8" height="8" rx="2" fill="white" fillOpacity="0.7" />
      <circle cx="20" cy="16" r="1.5" fill="white" />
      <line x1="22" y1="16" x2="24.5" y2="16" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="15.5" y1="16" x2="17" y2="16" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="20" y1="12.5" x2="20" y2="11" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="20" y1="20.5" x2="20" y2="22" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      {/* Neural dots */}
      <circle cx="12" cy="12" r="1.5" fill="white" fillOpacity="0.5" />
      <circle cx="28" cy="12" r="1.5" fill="white" fillOpacity="0.5" />
      <circle cx="12" cy="24" r="1.5" fill="white" fillOpacity="0.3" />
      <circle cx="28" cy="24" r="1.5" fill="white" fillOpacity="0.3" />
      {/* Data pulses */}
      <circle cx="12" cy="18" r="2" fill="#a78bfa" fillOpacity="0.5">
        <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  ),
};

const projects = [
  {
    title: "Rekapin",
    desc: "Aplikasi pencatatan & rekap data yang memudahkan users dalam mengelola dan menganalisis data secara efficient dengan intuitive interface.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/f1qxzz/rekapin",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#667eea",
  },
  {
    title: "SmartApp",
    desc: "Personal life management superapp with finance, chat, AI assistant, dan habit tracking using Flutter dan Node.js.",
    techs: ["Flutter", "Node.js", "TypeScript"],
    repo: "https://github.com/f1qxzz/smartapp",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#f5576c",
  },
  {
    title: "Cozy Library",
    desc: "Library management system dengan fitur borrowing, returns, denda, reports, dan auto email reminders.",
    techs: ["PHP", "MySQL", "Tailwind CSS"],
    repo: "https://github.com/f1qxzz/cozy-library",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accent: "#4facfe",
  },
  {
    title: "Agent AI",
    desc: "Telegram AI coding agent with memory, skills, approval system, dan safe connectors for GitHub, Discord, dan X.",
    techs: ["Python", "FastAPI"],
    repo: "https://github.com/f1qxzz/agent-ai",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    accent: "#a8edea",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      style={{
        background: "rgba(18,18,42,0.4)",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(232,232,240,0.05)",
        backdropFilter: "blur(10px)",
        transition: "all 0.4s ease",
        position: "relative",
      }}
    >
      {/* Preview */}
      <div style={{ height: 200, background: project.gradient, position: "relative", overflow: "hidden" }}>
        {/* Dot Pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        {/* Floating Circles */}
        <motion.div animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <motion.div animate={{ y: [0, 15, 0], x: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} style={{ position: "absolute", bottom: -40, left: -40, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          {projectIcons[project.title]}
        </motion.div>

        {/* Hover overlay */}
        <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }} className="project-overlay">
          <div style={{ padding: "10px 20px", background: "rgba(255,255,255,0.15)", borderRadius: 12, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
            <ExternalLink size={16} />
            {t("projects.view")}
          </div>
        </a>
      </div>

      {/* Content */}
      <div style={{ padding: 28 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0" }}>{project.title}</h3>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: 8, color: "#a78bfa", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
            <GithubIcon size={14} />
            {t("projects.source")}
          </a>
        </div>

        <p style={{ color: "rgba(232,232,240,0.45)", fontWeight: 400, lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>{project.desc}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.techs.map((t) => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)", color: "#a78bfa", fontSize: 12, fontWeight: 600, borderRadius: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {techIcons[t] && <img src={techIcons[t]} alt={t} width={14} height={14} />}
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 999, marginBottom: 16 }}>
            <FolderOpen size={14} style={{ color: "#a78bfa" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("projects.badge")}</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
            {t("projects.title")}
          </h2>
          <p style={{ color: "rgba(232,232,240,0.4)", fontWeight: 400, maxWidth: 550, margin: "12px auto 0", fontSize: 15 }}>
            {t("projects.desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2" style={{ gap: 28 }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-overlay {
          pointer-events: none;
        }
        div:hover > .project-overlay {
          opacity: 1 !important;
          pointer-events: auto;
        }
      `}</style>
    </section>
  );
}
