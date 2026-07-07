"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(`${Math.min(scrollPercent, 100)}%`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 3,
        zIndex: 99998,
        background: "transparent",
      }}
    >
      <div
        style={{
          width,
          height: "100%",
          background: "linear-gradient(90deg, #a78bfa, #60a5fa, #f472b6)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}
