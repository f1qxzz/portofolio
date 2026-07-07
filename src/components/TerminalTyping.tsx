"use client";

import { useEffect, useState } from "react";

function randomDelay() {
  return 30 + Math.random() * 80;
}

export default function TerminalTyping({ text, delay = 0 }: { text: string; delay?: number }) {
  const [phase, setPhase] = useState<"waiting" | "prompt" | "typing" | "done">("waiting");
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPhase("prompt"), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (phase !== "prompt") return;
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 400);
    const startTyping = setTimeout(() => {
      clearInterval(blink);
      setCursorVisible(true);
      setPhase("typing");
    }, 1200);
    return () => {
      clearInterval(blink);
      clearTimeout(startTyping);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
        timer = setTimeout(type, randomDelay());
      } else {
        setPhase("done");
      }
    }

    timer = setTimeout(type, randomDelay());
    return () => clearTimeout(timer);
  }, [phase, text]);

  useEffect(() => {
    if (phase !== "done") return;
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(blink);
  }, [phase]);

  const cursor = (
    <span
      style={{
        display: "inline-block",
        width: "0.6em",
        height: "1.15em",
        background: cursorVisible
          ? phase === "done"
            ? "rgba(167,139,250,0.9)"
            : "#22d3ee"
          : "transparent",
        marginLeft: phase === "done" ? 4 : 2,
        verticalAlign: "text-bottom",
        boxShadow: cursorVisible && phase === "done"
          ? "0 0 10px rgba(167,139,250,0.5)"
          : cursorVisible
          ? "0 0 10px rgba(34,211,238,0.4)"
          : "none",
        transition: "background 0.1s",
        borderRadius: 1,
      }}
    />
  );

  const styles = `
    @keyframes terminalScan {
      0% { background-position: 0 0; }
      100% { background-position: 0 100%; }
    }
  `;

  return (
    <span
      style={{
        fontFamily: "ui-monospace, 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <style>{styles}</style>
      <span
        style={{
          color: phase === "waiting" ? "transparent" : "#22d3ee",
          fontWeight: 700,
          marginRight: 8,
          opacity: phase === "prompt" ? (cursorVisible ? 1 : 0.3) : 0.7,
          transition: "opacity 0.1s",
          fontSize: "0.85em",
        }}
      >
        $
      </span>
      {phase === "prompt" && cursorVisible && (
        <span
          style={{
            display: "inline-block",
            width: "0.6em",
            height: "1.15em",
            background: "#22d3ee",
            verticalAlign: "text-bottom",
            boxShadow: "0 0 10px rgba(34,211,238,0.4)",
            borderRadius: 1,
          }}
        />
      )}
      {(phase === "typing" || phase === "done") && (
        <>
          <span
            style={{
              background: phase === "done"
                ? "linear-gradient(135deg, #e8e8f0 0%, #a78bfa 50%, #60a5fa 100%)"
                : "linear-gradient(135deg, #e8e8f0 0%, #a78bfa 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: phase === "done" ? "gradientText 4s ease infinite" : "none",
            }}
          >
            {displayed}
          </span>
          {cursor}
        </>
      )}
    </span>
  );
}
