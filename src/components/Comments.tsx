"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Trash2, User, Clock } from "lucide-react";
import { useSession } from "next-auth/react";
import AuthButton from "./AuthButton";
import { useLang } from "@/lib/LanguageContext";

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  message: string;
  timestamp: number;
}

function formatDate(ts: number) {
  const d = new Date(ts);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export default function Comments() {
  const { t } = useLang();
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then(setComments)
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message.trim() }),
    });
    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setMessage("");
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminKey: "f1qxzz_" }),
    });
    if (res.ok) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <section id="comments" style={{ padding: "100px 24px", paddingBottom: 120 }} className="pb-24 md:pb-24">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 999, marginBottom: 16 }}>
            <MessageCircle size={14} style={{ color: "#a78bfa" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("comments.badge")}</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 800, color: "#e8e8f0", letterSpacing: "-0.02em" }}>
            {t("comments.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2" style={{ gap: 32 }}>
          {/* Form - left side on desktop */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: "rgba(18,18,42,0.4)", backdropFilter: "blur(10px)", borderRadius: 20, padding: 24, border: "1px solid rgba(232,232,240,0.05)", position: "sticky", top: 100, alignSelf: "start" }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e8e8f0", marginBottom: 20 }}>{t("comments.form.title")}</h3>

            {session?.user ? (
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  {session.user.image ? (
                    <img src={session.user.image} alt="" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <User size={14} style={{ color: "#a78bfa" }} />
                    </div>
                  )}
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#e8e8f0" }}>{session.user.name}</span>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("comments.form.placeholder")}
                  rows={3}
                  required
                  style={{ width: "100%", padding: "12px 16px", background: "rgba(18,18,42,0.6)", border: "1px solid rgba(232,232,240,0.08)", borderRadius: 12, fontSize: 14, fontWeight: 500, color: "#e8e8f0", outline: "none", fontFamily: "inherit", resize: "none", marginBottom: 14 }}
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 24px", background: "linear-gradient(135deg, #a78bfa, #8b5cf6)", color: "white", fontWeight: 700, fontSize: 14, borderRadius: 12, border: "none", cursor: "pointer", fontFamily: "inherit", width: "100%", opacity: !message.trim() ? 0.5 : 1 }}
                >
                  <Send size={16} />
                  {t("comments.form.send")}
                </button>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "32px 16px", background: "rgba(232,232,240,0.02)", borderRadius: 16, border: "1px dashed rgba(232,232,240,0.06)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(167,139,250,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <MessageCircle size={20} style={{ color: "#a78bfa" }} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(232,232,240,0.5)", margin: "0 0 4px" }}>{t("comments.login.title")}</p>
                <p style={{ fontSize: 12, color: "rgba(232,232,240,0.2)", margin: "0 0 20px" }}>{t("comments.login.sub")}</p>
                <AuthButton />
              </div>
            )}
          </motion.form>

          {/* Comments List - right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: 12, maxHeight: 500, overflowY: "auto", paddingRight: 4 }}
          >
            <style>{`
              div::-webkit-scrollbar { width: 5px; }
              div::-webkit-scrollbar-track { background: transparent; }
              div::-webkit-scrollbar-thumb { background: rgba(167,139,250,0.3); border-radius: 3px; }
              div::-webkit-scrollbar-thumb:hover { background: rgba(167,139,250,0.5); }
            `}</style>

            {comments.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <MessageCircle size={40} style={{ color: "rgba(167,139,250,0.15)", marginBottom: 16 }} />
                <p style={{ fontSize: 15, fontWeight: 600, color: "rgba(232,232,240,0.3)", margin: "0 0 6px" }}>{t("comments.empty.title")}</p>
                <p style={{ fontSize: 13, color: "rgba(232,232,240,0.15)", margin: 0 }}>{t("comments.empty.sub")}</p>
              </div>
            ) : (
              comments.map((c) => (
                <div key={c.id} style={{ background: "rgba(18,18,42,0.4)", backdropFilter: "blur(10px)", borderRadius: 14, padding: 18, border: "1px solid rgba(232,232,240,0.05)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      {c.userImage ? (
                        <img src={c.userImage} alt="" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                      ) : (
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <User size={14} style={{ color: "white" }} />
                        </div>
                      )}
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#e8e8f0", margin: 0 }}>{c.userName}</p>
                        <p style={{ fontSize: 10, color: "rgba(232,232,240,0.3)", margin: 0, display: "flex", alignItems: "center", gap: 4 }}><Clock size={9} />{formatDate(c.timestamp)}</p>
                      </div>
                    </div>
                    {isAdmin && (
                      <button onClick={() => handleDelete(c.id)} style={{ padding: 6, color: "#ef4444", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.5)", lineHeight: 1.7, margin: 0 }}>{c.message}</p>
                </div>
              ))
            )}
          </motion.div>

          {/* Admin Panel - outside scroll area */}
          <div style={{ borderTop: "1px solid rgba(232,232,240,0.05)", paddingTop: 16 }}>
            {isAdmin ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.1)", borderRadius: 12, padding: "10px 16px" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#ef4444" }}>{t("comments.admin.active")}</span>
                <button
                  onClick={() => setIsAdmin(false)}
                  style={{ padding: "6px 14px", background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
                >
                  {t("comments.admin.logout")}
                </button>
              </div>
            ) : showAdmin ? (
              <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center" }}>
                <input
                  type="password"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  placeholder={t("comments.admin.placeholder")}
                  onKeyDown={(e) => { if (e.key === "Enter" && adminKey.trim() === "f1qxzz_") { setIsAdmin(true); setShowAdmin(false); setAdminKey(""); } }}
                  style={{ padding: "8px 14px", background: "rgba(18,18,42,0.6)", border: "1px solid rgba(232,232,240,0.1)", borderRadius: 10, fontSize: 13, color: "#e8e8f0", outline: "none", width: 140, fontFamily: "inherit" }}
                />
                <button
                  onClick={() => { if (adminKey.trim() === "f1qxzz_") { setIsAdmin(true); setShowAdmin(false); setAdminKey(""); } }}
                  style={{ padding: "8px 16px", background: "linear-gradient(135deg, #a78bfa, #8b5cf6)", color: "white", fontWeight: 600, fontSize: 13, borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >
                  {t("comments.admin.login")}
                </button>
                <button
                  onClick={() => setShowAdmin(false)}
                  style={{ padding: "8px 12px", background: "transparent", color: "rgba(232,232,240,0.3)", border: "none", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}
                >
                  {t("comments.admin.cancel")}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAdmin(true)}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "transparent", color: "rgba(232,232,240,0.2)", border: "1px dashed rgba(232,232,240,0.08)", borderRadius: 10, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", margin: "0 auto" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.27-.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 5.1 14.78a1.65 1.65 0 0 0-1.51-1H3.5a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 5 9.35a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9.4 5.1a1.65 1.65 0 0 0 1-1.51V3.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9.4a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                {t("comments.admin.btn")}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
