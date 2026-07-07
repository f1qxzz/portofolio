"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, FolderOpen, Mail, Award, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { type Lang } from "@/lib/translations";

const navItems = [
  { href: "#home", key: "nav.home", icon: Home },
  { href: "#about", key: "nav.about", icon: User },
  { href: "#experience", key: "nav.experience", icon: Briefcase },
  { href: "#certificates", key: "nav.certificates", icon: Award },
  { href: "#projects", key: "nav.projects", icon: FolderOpen },
  { href: "#comments", key: "nav.comments", icon: MessageCircle },
  { href: "#contact", key: "nav.contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t, lang, setLang } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.slice(1)).reverse();
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!mounted) return null;

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  return (
    <>
      {/* Desktop Navbar - hidden on mobile */}
      <nav
        className="hidden md:flex"
        style={{
          position: "fixed",
          top: scrolled ? 12 : 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          alignItems: "center",
          gap: 6,
          padding: "8px 10px",
          borderRadius: 16,
          background: scrolled ? "rgba(10,10,26,0.95)" : "rgba(10,10,26,0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(167,139,250,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <a href="#home" style={{ fontWeight: 800, fontSize: 18, padding: "8px 16px", color: "#e8e8f0", letterSpacing: "-0.03em", textDecoration: "none" }}>
          f1q<span style={{ color: "#a78bfa" }}>.</span>
        </a>
        <div style={{ width: 1, height: 20, background: "rgba(232,232,240,0.08)", margin: "0 2px" }} />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              style={{
                padding: "10px 16px",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: isActive ? "white" : "rgba(232,232,240,0.5)",
                background: isActive ? "linear-gradient(135deg, #a78bfa, #8b5cf6)" : "transparent",
                transition: "all 0.3s ease",
                boxShadow: isActive ? "0 4px 15px rgba(167,139,250,0.3)" : "none",
                textDecoration: "none",
              }}
            >
              <Icon size={16} />
              <span className="hidden lg:inline">{t(item.key)}</span>
            </a>
          );
        })}

        <div style={{ width: 1, height: 20, background: "rgba(232,232,240,0.08)", margin: "0 2px" }} />
        <button
          onClick={toggleLang}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 14px",
            border: "1px solid rgba(232,232,240,0.1)",
            borderRadius: 10,
            fontSize: 12,
            fontWeight: 700,
            background: "rgba(232,232,240,0.03)",
            color: "rgba(232,232,240,0.6)",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {lang === "id" ? (
            <svg width="18" height="12" viewBox="0 0 6 4"><rect width="6" height="2" fill="#ce1126"/><rect y="2" width="6" height="2" fill="#fff"/></svg>
          ) : (
            <svg width="18" height="12" viewBox="0 0 60 30"><clipPath id="u"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="v"><path d="M0 0v30h60V0z"/></clipPath><g clipPath="url(#u)"><path fill="#012169" d="M0 0v30h60V0z"/><path fill="#FFF" d="M0 0l60 30m0-30L0 30" stroke="#FFF" strokeWidth="6"/><path fill="#C8102E" d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4"/></g></svg>
          )}
          {lang === "id" ? "ID" : "EN"}
        </button>
      </nav>

      {/* Mobile Bottom Navbar - hidden on desktop */}
      <nav
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: "6px 8px",
          borderRadius: 16,
          background: "rgba(10,10,26,0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(167,139,250,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 12,
                color: isActive ? "white" : "rgba(232,232,240,0.5)",
                background: isActive ? "linear-gradient(135deg, #a78bfa, #8b5cf6)" : "transparent",
                transition: "all 0.3s ease",
                boxShadow: isActive ? "0 4px 15px rgba(167,139,250,0.3)" : "none",
                textDecoration: "none",
              }}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </nav>
    </>
  );
}
