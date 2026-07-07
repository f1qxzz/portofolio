"use client";

import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon, DiscordIcon, TelegramIcon } from "./SocialIcons";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ padding: "60px 24px 100px", borderTop: "1px solid rgba(232,232,240,0.03)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", display: "inline-block", marginBottom: 24, color: "#e8e8f0", textDecoration: "none" }}
        >
          f1q<span style={{ color: "#a78bfa" }}>xzz</span>
          <span style={{ color: "#a78bfa" }}>.</span>
        </motion.a>

        {/* Social Links */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 32 }}>
          {[
            { icon: <GithubIcon size={18} />, href: "https://github.com/f1qxzz", color: "#a78bfa" },
            { icon: <InstagramIcon size={18} />, href: "https://instagram.com/f1qxzz_", color: "#f472b6" },
            { icon: <DiscordIcon size={18} />, href: "https://discord.gg/M9J3ZPt7", color: "#60a5fa" },
            { icon: <TelegramIcon size={18} />, href: "https://t.me/f1qxzz", color: "#229ED9" },
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(232,232,240,0.03)", border: "1px solid rgba(232,232,240,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(232,232,240,0.4)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + "40"; e.currentTarget.style.background = s.color + "10"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,232,240,0.4)"; e.currentTarget.style.borderColor = "rgba(232,232,240,0.06)"; e.currentTarget.style.background = "rgba(232,232,240,0.03)"; }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Tagline */}
        <p style={{ fontSize: 13, color: "rgba(232,232,240,0.3)", marginBottom: 8 }}>
          {t("footer.text")}
        </p>

        {/* Copyright */}
        <p style={{ fontSize: 12, color: "rgba(232,232,240,0.2)" }}>
          &copy; {new Date().getFullYear()} f1qxzz {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
