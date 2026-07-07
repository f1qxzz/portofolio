"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, GraduationCap, Medal } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const certificates = [
  {
    title: "Belajar Fundamental Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2024",
    description: "Dasar-dasar pengembangan web modern meliputi HTML, CSS, JavaScript, responsive design, dan accessibility.",
    icon: <GraduationCap size={22} />,
    color: "#3b82f6",
  },
  {
    title: "Frontend Web Development Expert",
    issuer: "Dicoding Indonesia",
    date: "2024",
    description: "Framework modern seperti React, state management, testing, dan optimasi performa aplikasi web.",
    icon: <Star size={22} />,
    color: "#a78bfa",
  },
  {
    title: "React Developer Professional",
    issuer: "Coursera",
    date: "2024",
    description: "React modern dengan Redux, React Router, hooks, context API, dan praktik terbaik SPA.",
    icon: <GraduationCap size={22} />,
    color: "#60a5fa",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "2024",
    description: "Aplikasi web interaktif dengan React.js dan component-based architecture.",
    icon: <Star size={22} />,
    color: "#f472b6",
  },
  {
    title: "JavaScript Algorithm and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    description: "Algoritma dan struktur data menggunakan JavaScript termasuk sorting dan searching.",
    icon: <GraduationCap size={22} />,
    color: "#6ee7b7",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2024",
    description: "User research, wireframing, prototyping, usability testing, dan desain berpusat pengguna.",
    icon: <Star size={22} />,
    color: "#fbbf24",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2023",
    description: "Fundamental JavaScript termasuk variabel, function, DOM manipulation, dan async.",
    icon: <GraduationCap size={22} />,
    color: "#f59e0b",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "Website responsif menggunakan HTML5, CSS3, flexbox, CSS grid, dan mobile-first.",
    icon: <Star size={22} />,
    color: "#8b5cf6",
  },
  {
    title: "Git & GitHub untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "2023",
    description: "Version control dengan Git dan kolaborasi tim menggunakan GitHub Actions untuk CI/CD.",
    icon: <GraduationCap size={22} />,
    color: "#f472b6",
  },
];

const awards = [
  {
    title: "Sertifikat Penghargaan Konsistensi Kode Bersih",
    issuer: "Vocasia",
    date: "Januari 2025",
    description: "Diberikan atas dedikasi dan konsistensi dalam menghasilkan kode yang bersih, terstruktur, dan sesuai best practices selama masa kontrak kerja.",
    icon: <Medal size={22} />,
    color: "#fbbf24",
  },
  {
    title: "Best Frontend Developer Award",
    issuer: "Vocasia",
    date: "Maret 2025",
    description: "Penghargaan atas pencapaian terbaik dalam pengembangan frontend. Berhasil menyelesaikan 8+ tugas frontend berskala besar dengan kualitas kode yang tinggi.",
    icon: <Trophy size={22} />,
    color: "#a78bfa",
  },
  {
    title: "Outstanding Performance Certificate",
    issuer: "PT Advics Manufacturing Indonesia",
    date: "Februari 2026",
    description: "Apresiasi atas kontribusi luar biasa dalam pengembangan sistem Warehouse, Manajemen Aset IT, dan Help Desk yang mengotomasi proses manual.",
    icon: <Award size={22} />,
    color: "#60a5fa",
  },
  {
    title: "Best UI/UX Design Competition",
    issuer: "Komunitas Web Developer Indonesia",
    date: "Agustus 2024",
    description: "Desain UI/UX terbaik dalam kompetisi desain antar komunitas developer dengan proyek desain ulang antarmuka e-learning platform.",
    icon: <Award size={22} />,
    color: "#f59e0b",
  },
];

export default function Certificates() {
  const { t } = useLang();
  return (
    <section id="certificates" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 999, marginBottom: 16 }}>
            <Award size={14} style={{ color: "#a78bfa" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("certificates.badge")}</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
            {t("certificates.title")}
          </h2>
          <p style={{ color: "rgba(232,232,240,0.4)", fontWeight: 400, maxWidth: 550, margin: "12px auto 0", fontSize: 15 }}>
            {t("certificates.desc")}
          </p>
        </motion.div>

        {/* Awards Section */}
        <div style={{ marginBottom: 72 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Trophy size={20} style={{ color: "#fbbf24" }} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0" }}>{t("certificates.awards")}</h3>
          </motion.div>

          <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{
                  background: "rgba(18,18,42,0.4)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 20,
                  padding: 24,
                  border: "1px solid rgba(232,232,240,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${award.color}40, transparent)` }} />

                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${award.color}12`, border: `1px solid ${award.color}25`, display: "flex", alignItems: "center", justifyContent: "center", color: award.color, flexShrink: 0 }}>
                    {award.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e8e8f0", marginBottom: 6, lineHeight: 1.4 }}>{award.title}</h4>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: award.color }}>{award.issuer}</span>
                      <span style={{ fontSize: 10, color: "rgba(232,232,240,0.2)" }}>•</span>
                      <span style={{ fontSize: 12, color: "rgba(232,232,240,0.3)" }}>{award.date}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "rgba(232,232,240,0.4)", lineHeight: 1.7 }}>{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GraduationCap size={20} style={{ color: "#60a5fa" }} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0" }}>{t("certificates.list")}</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: "rgba(18,18,42,0.4)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 18,
                  padding: 22,
                  border: "1px solid rgba(232,232,240,0.05)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${cert.color}40, transparent)` }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${cert.color}12`, border: `1px solid ${cert.color}25`, display: "flex", alignItems: "center", justifyContent: "center", color: cert.color }}>
                    {cert.icon}
                  </div>
                </div>

                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#e8e8f0", marginBottom: 6, lineHeight: 1.4 }}>{cert.title}</h4>
                <p style={{ fontSize: 12, color: "rgba(232,232,240,0.35)", lineHeight: 1.6, marginBottom: 12 }}>{cert.description}</p>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: cert.color }}>{cert.issuer}</span>
                  <span style={{ fontSize: 10, color: "rgba(232,232,240,0.2)" }}>•</span>
                  <span style={{ fontSize: 11, color: "rgba(232,232,240,0.25)" }}>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
