"use client";

import { MessageSquare, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
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
          <MessageSquare size={14} color="#a78bfa" />
          <span style={{ fontSize: 13, color: "#a78bfa", fontWeight: 500 }}>
            KONTAK
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "#e8e8f0",
            marginBottom: 8,
          }}
        >
          Mari Berkolaborasi
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "rgba(232,232,240,0.35)",
            marginBottom: 60,
            maxWidth: 500,
          }}
        >
          Got a project idea, question, or just want to say hi? Feel free to
          send me a message.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: Mail, label: "Email", value: "tumbalfqxz@gmail.com" },
              { icon: MapPin, label: "Lokasi", value: "Klaten, Indonesia" },
              { icon: Clock, label: "Fast Response", value: "Ready to collaborate!" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: 20,
                  borderRadius: 14,
                  background: "rgba(18,18,42,0.4)",
                  border: "1px solid rgba(167,139,250,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(167,139,250,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={20} color="#a78bfa" />
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "rgba(232,232,240,0.3)", marginBottom: 2 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 14, color: "#e8e8f0", fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              padding: 32,
              borderRadius: 18,
              background: "rgba(18,18,42,0.4)",
              border: "1px solid rgba(167,139,250,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div>
              <label
                style={{
                  fontSize: 12,
                  color: "rgba(232,232,240,0.4)",
                  fontWeight: 600,
                  marginBottom: 8,
                  display: "block",
                }}
              >
                NAMA LENGKAP
              </label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 14,
                  border: "1px solid rgba(232,232,240,0.08)",
                  background: "rgba(18,18,42,0.4)",
                  color: "#e8e8f0",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: 12,
                  color: "rgba(232,232,240,0.4)",
                  fontWeight: 600,
                  marginBottom: 8,
                  display: "block",
                }}
              >
                ALAMAT EMAIL
              </label>
              <input
                type="email"
                placeholder="Masukkan alamat email"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 14,
                  border: "1px solid rgba(232,232,240,0.08)",
                  background: "rgba(18,18,42,0.4)",
                  color: "#e8e8f0",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: 12,
                  color: "rgba(232,232,240,0.4)",
                  fontWeight: 600,
                  marginBottom: 8,
                  display: "block",
                }}
              >
                PESAN
              </label>
              <textarea
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 14,
                  border: "1px solid rgba(232,232,240,0.08)",
                  background: "rgba(18,18,42,0.4)",
                  color: "#e8e8f0",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "14px 28px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                color: "white",
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "all 0.3s ease",
                fontFamily: "inherit",
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
              <Send size={16} /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
