"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut, User } from "lucide-react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || ""}
            style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <User size={14} style={{ color: "#a78bfa" }} />
          </div>
        )}
        <span style={{ fontSize: 13, fontWeight: 600, color: "#e8e8f0" }}>{session.user.name}</span>
        <button
          onClick={() => signOut()}
          style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
        >
          <LogOut size={12} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
      <button
        onClick={() => signIn("google")}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 20px", background: "rgba(255,255,255,0.06)", color: "#e8e8f0", border: "1px solid rgba(232,232,240,0.1)", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", minWidth: 130, transition: "all 0.2s" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Google
      </button>
      <button
        onClick={() => signIn("github")}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 20px", background: "rgba(255,255,255,0.06)", color: "#e8e8f0", border: "1px solid rgba(232,232,240,0.1)", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", minWidth: 130, transition: "all 0.2s" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </button>
    </div>
  );
}
