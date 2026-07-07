export default function Footer() {
  const socials = [
    { label: "GitHub", href: "https://github.com/f1qxzz", icon: "GH" },
    { label: "Instagram", href: "https://instagram.com/f1qxzz_", icon: "IG" },
    { label: "Discord", href: "https://discord.gg/M9J3ZPt7", icon: "DC" },
    { label: "Telegram", href: "https://t.me/f1qxzz", icon: "TG" },
  ];

  return (
    <footer
      style={{
        padding: "60px 24px 100px",
        position: "relative",
        borderTop: "1px solid rgba(167,139,250,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <a
          href="#home"
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#e8e8f0",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          f1q<span style={{ color: "#a78bfa" }}>xzz</span>
          <span style={{ color: "#a78bfa" }}>.</span>
        </a>

        <div style={{ display: "flex", gap: 16 }}>
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
                borderRadius: 10,
                border: "1px solid rgba(167,139,250,0.08)",
                color: "rgba(232,232,240,0.3)",
                fontSize: 11,
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a78bfa";
                e.currentTarget.style.color = "#a78bfa";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(167,139,250,0.08)";
                e.currentTarget.style.color = "rgba(232,232,240,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "rgba(232,232,240,0.25)" }}>
          build with code - drive with passion
        </p>

        <p style={{ fontSize: 12, color: "rgba(232,232,240,0.15)" }}>
          &copy; 2026 f1qxzz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
