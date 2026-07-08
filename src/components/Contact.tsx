"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Loader2, CheckCircle, Clock } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xaqkzzdr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(18,18,42,0.4)",
    border: "1px solid rgba(232,232,240,0.08)",
    borderRadius: 14,
    fontSize: 15,
    fontWeight: 500,
    color: "#e8e8f0",
    outline: "none",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 999, marginBottom: 16 }}>
            <MessageSquare size={14} style={{ color: "#a78bfa" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("contact.badge")}</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em", marginBottom: 12 }}>
            {t("contact.title")}
          </h2>
          <p style={{ color: "rgba(232,232,240,0.4)", fontWeight: 400, maxWidth: 500, margin: "0 auto", fontSize: 15 }}>
            {t("contact.desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2" style={{ gap: 40 }}>
          {/* Contact Cards */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: <Mail size={22} />, bg: "rgba(167,139,250,0.1)", color: "#a78bfa", label: t("contact.email.label"), sub: t("contact.email.sub"), value: "onlyf1qxzz@gmail.com" },
              { icon: <MapPin size={22} />, bg: "rgba(96,165,250,0.1)", color: "#60a5fa", label: t("contact.location.label"), sub: t("contact.location.sub"), value: "Klaten, Indonesia" },
              { icon: <Clock size={22} />, bg: "rgba(244,114,182,0.1)", color: "#f472b6", label: t("contact.fast.label"), sub: t("contact.fast.sub"), value: t("contact.fast.value") },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.3 }}
                style={{ background: "rgba(18,18,42,0.4)", backdropFilter: "blur(10px)", borderRadius: 20, padding: 24, border: "1px solid rgba(232,232,240,0.05)", cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e8e8f0", margin: 0 }}>{item.label}</h3>
                    <p style={{ fontSize: 13, color: "rgba(232,232,240,0.4)", fontWeight: 400, margin: 0 }}>{item.sub}</p>
                  </div>
                </div>
                <p style={{ fontWeight: 600, color: "#a78bfa", fontSize: 14, marginLeft: 64 }}>{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} style={{ background: "rgba(18,18,42,0.4)", backdropFilter: "blur(10px)", borderRadius: 24, padding: 32, border: "1px solid rgba(232,232,240,0.05)", position: "relative", overflow: "hidden" }}>
              {/* Top glow */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "rgba(232,232,240,0.5)", marginBottom: 8, letterSpacing: "0.05em" }}>{t("contact.form.name")}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder={t("contact.form.placeholder.name")}
                    required
                    style={{ ...inputStyle, borderColor: focused === "name" ? "rgba(167,139,250,0.4)" : "rgba(232,232,240,0.08)", boxShadow: focused === "name" ? "0 0 20px rgba(167,139,250,0.1)" : "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "rgba(232,232,240,0.5)", marginBottom: 8, letterSpacing: "0.05em" }}>{t("contact.form.email")}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder={t("contact.form.placeholder.email")}
                    required
                    style={{ ...inputStyle, borderColor: focused === "email" ? "rgba(167,139,250,0.4)" : "rgba(232,232,240,0.08)", boxShadow: focused === "email" ? "0 0 20px rgba(167,139,250,0.1)" : "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "rgba(232,232,240,0.5)", marginBottom: 8, letterSpacing: "0.05em" }}>{t("contact.form.message")}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder={t("contact.form.placeholder.message")}
                    rows={5}
                    required
                    style={{ ...inputStyle, resize: "none", borderColor: focused === "message" ? "rgba(167,139,250,0.4)" : "rgba(232,232,240,0.08)", boxShadow: focused === "message" ? "0 0 20px rgba(167,139,250,0.1)" : "none" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: status === "sending" ? 1 : 1.02, y: status === "sending" ? 0 : -2 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "14px 32px",
                    background: status === "success" ? "linear-gradient(135deg, #22c55e, #16a34a)" : status === "error" ? "linear-gradient(135deg, #ef4444, #dc2626)" : "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 15,
                    borderRadius: 14,
                    border: "none",
                    cursor: status === "sending" ? "wait" : "pointer",
                    boxShadow: "0 8px 30px rgba(167,139,250,0.25)",
                    fontFamily: "inherit",
                    opacity: status === "sending" ? 0.8 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                      {t("contact.form.sending")}
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={18} />
                      {t("contact.form.success")}
                    </>
                  ) : status === "error" ? (
                    t("contact.form.error")
                  ) : (
                    <>
                      <Send size={18} />
                      {t("contact.form.send")}
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
