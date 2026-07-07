"use client";

import { MessageCircle, MessageSquare } from "lucide-react";

export default function Comments() {
  return (
    <section
      id="comments"
      style={{ padding: "100px 24px 120px", position: "relative" }}
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
          <MessageCircle size={14} color="#a78bfa" />
          <span style={{ fontSize: 13, color: "#a78bfa", fontWeight: 500 }}>
            KOMENTAR
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
          Beri Pendapat
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div
            style={{
              padding: 28,
              borderRadius: 16,
              background: "rgba(18,18,42,0.4)",
              border: "1px solid rgba(167,139,250,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#e8e8f0",
                marginBottom: 20,
              }}
            >
              Tulis Komentar
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(232,232,240,0.35)",
                marginBottom: 20,
              }}
            >
              Login untuk menulis komentar
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "12px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(232,232,240,0.1)",
                  background: "rgba(232,232,240,0.03)",
                  color: "rgba(232,232,240,0.6)",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
                  e.currentTarget.style.background = "rgba(167,139,250,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,232,240,0.1)";
                  e.currentTarget.style.background = "rgba(232,232,240,0.03)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#ea4335" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.4 0 4.64-.84 6.4-2.24l-1.46-1.46A7.94 7.94 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 .84-.14 1.65-.38 2.4l1.6 1.6C22.12 14.72 22 13.38 22 12 22 6.48 17.52 2 12 2z" />
                </svg>
                Google
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "12px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(232,232,240,0.1)",
                  background: "rgba(232,232,240,0.03)",
                  color: "rgba(232,232,240,0.6)",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
                  e.currentTarget.style.background = "rgba(167,139,250,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,232,240,0.1)";
                  e.currentTarget.style.background = "rgba(232,232,240,0.03)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#333">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#fff" />
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.79 8.21 11.38.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.44-4.04-1.44-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22 0 1.61-.02 2.9-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.31 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
          <div
            style={{
              maxHeight: 500,
              overflowY: "auto",
              padding: 28,
              borderRadius: 16,
              background: "rgba(18,18,42,0.4)",
              border: "1px solid rgba(167,139,250,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                padding: "60px 20px",
              }}
            >
              <MessageCircle
                size={48}
                style={{ color: "rgba(232,232,240,0.06)" }}
              />
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(232,232,240,0.3)",
                }}
              >
                Belum ada komentar
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(232,232,240,0.2)",
                  textAlign: "center",
                }}
              >
                Jadilah yang pertama untuk berpendapat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
