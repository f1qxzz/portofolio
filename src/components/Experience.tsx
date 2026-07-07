"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ChevronRight, Briefcase } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const techIcons: Record<string, string> = {
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  ReactJS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  NextJS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Gitlab: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
};

const experiences = [
  {
    title: "Fullstack Developer (Remote)",
    company: "PT Advics Manufacturing Indonesia",
    location: "Remote",
    period: "Agustus 2025 - Februari 2026",
    desc: ["Menggantikan proses manual dengan membangun Sistem NG Scanning (integrasi QR) dan otomatisasi pipeline dokumen Scrap Evidence.", "Membangun aplikasi inti yang scalable (Sistem Warehouse, Manajemen Aset IT, dan Help Desk) menggunakan ekosistem Laravel dan ReactJS.", "Mengelola ribuan data secara konkuren dengan kecepatan tinggi menggunakan teknik seperti lazy loading pada lingkungan sistem yang berat.", "Merombak antarmuka lama menggunakan Tailwind CSS, menciptakan aplikasi yang responsif dan intuitif."],
    techs: ["Laravel", "ReactJS", "Tailwind CSS", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend Developer (Remote)",
    company: "Vocasia",
    location: "Remote",
    period: "Januari 2025 - Juni 2025",
    desc: ["Mengubah desain kompleks menjadi komponen web yang responsif, mobile-first, dan kompatibel di berbagai browser.", "Menyelesaikan 8+ tugas frontend berskala besar menggunakan framework modern untuk meningkatkan fitur dan kapabilitas platform.", "Terlibat aktif dalam sprint teknis mingguan dan rapat sinkronisasi untuk menyelaraskan alur pengembangan dengan target bisnis.", "Meraih Sertifikat Penghargaan atas konsistensi dalam menghasilkan kode yang bersih (clean code) dan selesai lebih cepat dari tenggat waktu."],
    techs: ["NextJS", "TypeScript", "Tailwind CSS", "Gitlab", "Figma"],
  },
  {
    title: "Web Developer (Remote)",
    company: "Freelance Client - E-Commerce",
    location: "Remote",
    period: "Maret 2024 - Agustus 2024",
    desc: ["Membangun dan mengembangkan platform e-commerce custom menggunakan Laravel dan Tailwind CSS dengan fitur keranjang belanja, payment gateway, dan manajemen produk.", "Mengintegrasikan API pembayaran Midtrans dan Xendit untuk memproses transaksi secara real-time dan aman.", "Menerapkan sistem autentikasi dan otorisasi berbasis role untuk admin, vendor, dan pelanggan.", "Mengoptimalkan performa website dengan caching, lazy loading, dan image compression sehingga loading time turun 40%."],
    techs: ["Laravel", "Tailwind CSS", "MySQL", "PHP"],
  },
  {
    title: "Freelance Web Developer (Remote)",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 - 2024",
    desc: ["Membangun landing page profesional untuk UMKM lokal dengan konversi tinggi dan performa optimal.", "Mengembangkan sistem manajemen inventaris berbasis web untuk toko online klien.", "Membuat portofolio personal untuk fotografer dan desainer grafis dengan animasi interaktif.", "Mengelola proyek secara independen dari brainstorming hingga deployment ke production."],
    techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 999, marginBottom: 16 }}>
            <Briefcase size={14} style={{ color: "#a78bfa" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("experience.badge")}</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
            {t("experience.title")}
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline Line */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #a78bfa, #60a5fa, rgba(167,139,250,0.2))", borderRadius: 999 }} className="hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ display: "flex", gap: 32, marginBottom: 40, position: "relative" }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex" style={{ width: 40, flexShrink: 0, flexDirection: "column", alignItems: "center" }}>
                <motion.div
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #8b5cf6)", boxShadow: "0 0 20px rgba(167,139,250,0.4)", flexShrink: 0, position: "relative", zIndex: 2 }}
                >
                  <div style={{ position: "absolute", inset: 3, borderRadius: "50%", background: "#0a0a1a" }} />
                  <div style={{ position: "absolute", inset: 5, borderRadius: "50%", background: "#a78bfa" }} />
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.3 }}
                style={{ flex: 1, background: "rgba(18,18,42,0.4)", backdropFilter: "blur(10px)", borderRadius: 20, padding: 28, border: "1px solid rgba(232,232,240,0.05)", position: "relative", overflow: "hidden" }}
              >
                {/* Card glow effect */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)" }} />

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0", marginBottom: 8 }}>{exp.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#a78bfa", fontWeight: 600, fontSize: 14 }}>
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(232,232,240,0.4)", fontWeight: 500 }}>
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(232,232,240,0.4)", fontWeight: 500 }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", marginBottom: 20 }}>
                  {exp.desc.map((d, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, marginBottom: 10, color: "rgba(232,232,240,0.5)", fontWeight: 400, lineHeight: 1.7, fontSize: 14 }}>
                      <ChevronRight size={16} style={{ color: "#a78bfa", marginTop: 3, flexShrink: 0 }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {exp.techs.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.05 }}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)", color: "#a78bfa", fontSize: 12, fontWeight: 600, borderRadius: 8 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {techIcons[t] && <img src={techIcons[t]} alt={t} width={14} height={14} />}
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
