"use client";

import { Sparkles, Download, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
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
            TENTANG SAYA
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
          Mengenal Lebih Dekat
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 300,
                aspectRatio: "4/5",
                borderRadius: 24,
                background: "linear-gradient(135deg, #12122a, #1a1a3a)",
                border: "1px solid rgba(167,139,250,0.08)",
                position: "relative",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -8,
                borderRadius: 32,
                border: "2px solid rgba(251,191,36,0.15)",
                transform: "rotate(-3deg)",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -10,
                right: -10,
                padding: "10px 16px",
                borderRadius: 12,
                background: "rgba(18,18,42,0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(167,139,250,0.2)",
              }}
            >
              <p style={{ fontSize: 11, color: "rgba(232,232,240,0.5)" }}>
                Pengalaman
              </p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#a78bfa" }}>
                3+ Tahun
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  color: "#e8e8f0",
                }}
              >
                SAYA{" "}
              </span>
              <span
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                f1qxzz
              </span>
              <span
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  color: "#e8e8f0",
                }}
              >
                {" "}FULLSTACK
              </span>
              <span
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  color: "#6ee7b7",
                  borderBottom: "2px solid #22c55e",
                }}
              >
                DEVELOPER
              </span>
            </div>
            <div
              style={{
                borderLeft: "3px solid",
                borderImage: "linear-gradient(to bottom, #a78bfa, #60a5fa) 1",
                paddingLeft: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(232,232,240,0.5)" }}>
                &ldquo;Sebagai seorang IT &amp; Software Engineer, fokus saya adalah
                transforming complex business needs into efficient web applications.&rdquo;
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(232,232,240,0.5)" }}>
                &ldquo;Dari custom e-commerce development sampai operational workflow
                digitalization, I enjoy building full-stack solutions from scratch yang
                scalable dan berdampak nyata buat klien.&rdquo;
              </p>
            </div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                color: "white",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                width: "fit-content",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(167,139,250,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Download size={16} /> UNDUH CV <ArrowRight size={16} />
            </a>
            <div style={{ display: "flex", gap: 40, marginTop: 8 }}>
              {[
                { value: "0+", label: "Proyek Selesai" },
                { value: "0+", label: "Tahun Pengalaman" },
                { value: "0+", label: "Klien Puas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontSize: 28, fontWeight: 800, color: "#a78bfa" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 12, color: "rgba(232,232,240,0.35)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
