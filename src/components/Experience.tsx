"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Developer",
    company: "PT Advics Manufacturing Indonesia",
    date: "Agustus 2025 - Februari 2026",
    location: "Remote",
    points: [
      "Sistem NG Scanning (QR integration) + pipeline dokumen Scrap Evidence",
      "Sistem Warehouse, Manajemen Aset IT, Help Desk (Laravel + ReactJS)",
      "Manajemen ribuan data konkuren dengan lazy loading",
      "Merombak UI lama pakai Tailwind CSS",
    ],
    tech: ["Laravel", "ReactJS", "Tailwind CSS", "MySQL", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Vocasia",
    date: "Januari 2025 - Juni 2025",
    location: "Remote",
    points: [
      "Desain kompleks ke komponen responsive mobile-first",
      "8+ tugas frontend berskala besar",
      "Sprint teknis mingguan",
      "Sertifikat Penghargaan clean code",
    ],
    tech: ["NextJS", "TypeScript", "Tailwind CSS", "Gitlab", "Figma"],
  },
  {
    role: "Web Developer",
    company: "Freelance Client - E-Commerce",
    date: "Maret 2024 - Agustus 2024",
    location: "Remote",
    points: [
      "E-commerce custom (Laravel + Tailwind) dengan cart, payment gateway, management produk",
      "Integrasi Midtrans & Xendit API",
      "Role-based auth (admin, vendor, customer)",
      "Optimasi performa: caching, lazy loading, image compression -> loading time turun 40%",
    ],
    tech: ["Laravel", "Tailwind CSS", "MySQL", "PHP"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2023 - 2024",
    location: "Remote",
    points: [
      "Landing page UMKM",
      "Sistem manajemen inventaris",
      "Portofolio personal (fotografer/desainer)",
      "Full project management (brainstorming ke deployment)",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
          <Briefcase size={14} color="#a78bfa" />
          <span style={{ fontSize: 13, color: "#a78bfa", fontWeight: 500 }}>
            KARIR
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
          Pengalaman Kerja
        </h2>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #a78bfa, #60a5fa)",
            }}
          />
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                paddingLeft: 56,
                paddingBottom: i < experiences.length - 1 ? 48 : 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 12,
                  top: 4,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                  boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
                  border: "3px solid #0a0a1a",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  padding: "24px 28px",
                  borderRadius: 16,
                  background: "rgba(18,18,42,0.4)",
                  border: "1px solid rgba(167,139,250,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.2)";
                  e.currentTarget.style.background = "rgba(18,18,42,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.06)";
                  e.currentTarget.style.background = "rgba(18,18,42,0.4)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8e8f0" }}>
                    {exp.role}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      color: "rgba(232,232,240,0.35)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {exp.date}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "#a78bfa", fontWeight: 500, marginBottom: 12 }}>
                  {exp.company}
                  <span style={{ color: "rgba(232,232,240,0.3)" }}>
                    {" "}— {exp.location}
                  </span>
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 14,
                        color: "rgba(232,232,240,0.5)",
                        lineHeight: 1.6,
                        listStyle: "none",
                        paddingLeft: 20,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 8,
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#a78bfa",
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "4px 10px",
                        borderRadius: 8,
                        background: "rgba(167,139,250,0.08)",
                        border: "1px solid rgba(167,139,250,0.12)",
                        fontSize: 11,
                        color: "rgba(167,139,250,0.7)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
