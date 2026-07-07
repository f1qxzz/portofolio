"use client";

import { Sparkles, Award, FileText, Medal, Palette, Code, Globe, BookOpen } from "lucide-react";

const awards = [
  {
    title: "Sertifikat Penghargaan Konsistensi Kode Bersih",
    org: "Vocasia",
    date: "Januari 2025",
    color: "#fbbf24",
    icon: Medal,
  },
  {
    title: "Best Frontend Developer Award",
    org: "Vocasia",
    date: "Maret 2025",
    color: "#f472b6",
    icon: Award,
  },
  {
    title: "Outstanding Performance Certificate",
    org: "PT Advics Manufacturing Indonesia",
    date: "Februari 2026",
    color: "#60a5fa",
    icon: Award,
  },
  {
    title: "Best UI/UX Design Competition",
    org: "Komunitas Web Developer Indonesia",
    date: "Agustus 2024",
    color: "#f59e0b",
    icon: Palette,
  },
];

const certs = [
  { title: "Belajar Fundamental Pemrograman Web", org: "Dicoding Indonesia", year: "2024", color: "#60a5fa", icon: Globe },
  { title: "Frontend Web Development Expert", org: "Dicoding Indonesia", year: "2024", color: "#3b82f6", icon: Code },
  { title: "React Developer Professional", org: "Coursera", year: "2024", color: "#a78bfa", icon: Code },
  { title: "Belajar Membuat Aplikasi Web dengan React", org: "Dicoding Indonesia", year: "2024", color: "#06b6d4", icon: Code },
  { title: "JavaScript Algorithm and Data Structures", org: "freeCodeCamp", year: "2024", color: "#fbbf24", icon: FileText },
  { title: "UI/UX Design Fundamentals", org: "Google", year: "2024", color: "#f472b6", icon: Palette },
  { title: "Belajar Dasar Pemrograman JavaScript", org: "Dicoding Indonesia", year: "2023", color: "#22d3ee", icon: BookOpen },
  { title: "Responsive Web Design", org: "freeCodeCamp", year: "2023", color: "#a78bfa", icon: Globe },
  { title: "Git & GitHub untuk Pemula", org: "Dicoding Indonesia", year: "2023", color: "#60a5fa", icon: BookOpen },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
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
            PENCAPAIAN
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "#e8e8f0",
            marginBottom: 48,
          }}
        >
          Penghargaan & Sertifikat
        </h2>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#e8e8f0",
            marginBottom: 24,
          }}
        >
          🏆 Penghargaan
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 60,
          }}
        >
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <div
                key={i}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: "rgba(18,18,42,0.4)",
                  border: "1px solid rgba(167,139,250,0.06)",
                  borderTop: `3px solid ${award.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <Icon size={24} color={award.color} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#e8e8f0", lineHeight: 1.4 }}>
                      {award.title}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#a78bfa" }}>{award.org}</span>
                  <span style={{ fontSize: 11, color: "rgba(232,232,240,0.3)" }}>{award.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#e8e8f0",
            marginBottom: 24,
          }}
        >
          📜 Sertifikat
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={i}
                style={{
                  padding: 20,
                  borderRadius: 14,
                  background: "rgba(18,18,42,0.4)",
                  border: "1px solid rgba(167,139,250,0.06)",
                  borderTop: `3px solid ${cert.color}`,
                }}
              >
                <Icon size={20} color={cert.color} style={{ marginBottom: 8 }} />
                <p style={{ fontSize: 13, fontWeight: 600, color: "#e8e8f0", marginBottom: 8, lineHeight: 1.4 }}>
                  {cert.title}
                </p>
                <span style={{ fontSize: 11, color: "rgba(232,232,240,0.3)" }}>
                  {cert.org} — {cert.year}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
