"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 20, stiffness: 120, mass: 0.8 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleHoverStart = useCallback(() => setIsHovering(true), []);
  const handleHoverEnd = useCallback(() => setIsHovering(false), []);

  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    const attach = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    const detach = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };

    attach();

    observerRef.current = new MutationObserver(() => {
      detach();
      attach();
    });
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      detach();
      observerRef.current?.disconnect();
    };
  }, [mounted, isMobile, cursorX, cursorY, handleHoverStart, handleHoverEnd, isVisible]);

  if (!mounted || isMobile || !isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderRadius: "50%",
          border: `2px solid ${isHovering ? "rgba(167,139,250,0.6)" : "rgba(167,139,250,0.3)"}`,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isClicking ? 8 : isHovering ? 10 : 6,
          height: isClicking ? 8 : isHovering ? 10 : 6,
          borderRadius: "50%",
          background: isHovering ? "#a78bfa" : "white",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s, height 0.2s, background 0.2s",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 100 : 60,
          height: isHovering ? 100 : 60,
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.3s, height 0.3s, background 0.3s",
        }}
      />
    </>
  );
}
