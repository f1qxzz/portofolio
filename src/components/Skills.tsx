export default function Skills() {
  const row1 = [
    { name: "Laravel", icon: "laravel" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Next.js", icon: "nextjs" },
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "mysql" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Figma", icon: "figma" },
    { name: "Git", icon: "git" },
  ];

  const row2 = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Docker", icon: "docker" },
    { name: "Linux", icon: "linux" },
    { name: "VS Code", icon: "vscode" },
  ];

  const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

  const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 20px",
        borderRadius: 14,
        background: "rgba(18,18,42,0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(167,139,250,0.08)",
        marginRight: 16,
        whiteSpace: "nowrap",
      }}
    >
      <img
        src={`${baseUrl}/${icon}/${icon}-original.svg`}
        alt={name}
        width={28}
        height={28}
        loading="lazy"
        style={{ flexShrink: 0 }}
      />
      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(232,232,240,0.8)" }}>
        {name}
      </span>
    </div>
  );

  return (
    <section style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 48, padding: "0 24px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 800,
            color: "#e8e8f0",
            marginBottom: 8,
          }}
        >
          Keahlian Teknis
        </h2>
        <p style={{ fontSize: 15, color: "rgba(232,232,240,0.4)" }}>
          Technologies that I use and kuasai everyday
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 150,
            zIndex: 2,
            background: "linear-gradient(to right, #0a0a1a, transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 150,
            zIndex: 2,
            background: "linear-gradient(to left, #0a0a1a, transparent)",
            pointerEvents: "none",
          }}
        />

        <div className="animate-marquee" style={{ display: "flex", marginBottom: 24 }}>
          {[...row1, ...row1, ...row1].map((skill, i) => (
            <SkillCard key={`r1-${i}`} {...skill} />
          ))}
        </div>

        <div className="animate-marquee2" style={{ display: "flex" }}>
          {[...row2, ...row2, ...row2].map((skill, i) => (
            <SkillCard key={`r2-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
