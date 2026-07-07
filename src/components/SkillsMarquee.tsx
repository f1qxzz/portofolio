"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const row1 = [
  { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const row2 = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
];

function SkillChip({ name, src }: { name: string; src: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 28px",
        background: "rgba(18,18,42,0.6)",
        backdropFilter: "blur(10px)",
        borderRadius: 14,
        border: "1px solid rgba(232,232,240,0.05)",
        whiteSpace: "nowrap",
        flexShrink: 0,
        margin: "0 8px",
        transition: "all 0.3s ease",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} width={28} height={28} style={{ flexShrink: 0, filter: "brightness(1.1)" }} />
      <span style={{ fontWeight: 600, color: "rgba(232,232,240,0.7)", fontSize: 14 }}>{name}</span>
    </motion.div>
  );
}

export default function SkillsMarquee() {
  const { t } = useLang();
  return (
    <section style={{ padding: "80px 0", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 56, padding: "0 24px" }}
      >
        <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
          {t("skills.title")}
        </h2>
        <p style={{ color: "rgba(232,232,240,0.4)", fontWeight: 400, marginTop: 12, fontSize: 16 }}>
          {t("skills.sub")}
        </p>
      </motion.div>

      {/* First Row */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(to right, #0a0a1a, transparent)", zIndex: 10 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(to left, #0a0a1a, transparent)", zIndex: 10 }} />
        <div className="animate-marquee" style={{ display: "flex", padding: "8px 0" }}>
          {[...row1, ...row1, ...row1, ...row1].map((s, i) => (
            <SkillChip key={`a-${i}`} {...s} />
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(to right, #0a0a1a, transparent)", zIndex: 10 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(to left, #0a0a1a, transparent)", zIndex: 10 }} />
        <div className="animate-marquee2" style={{ display: "flex", padding: "8px 0" }}>
          {[...row2, ...row2, ...row2, ...row2].map((s, i) => (
            <SkillChip key={`b-${i}`} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
