"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMarquee from "@/components/SkillsMarquee";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#0a0a1a", cursor: "none" }}>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Animated Canvas Background */}
      <AnimatedBackground />

      {/* Static Gradient Glows */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(167,139,250,0.1) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          className="animate-pulse-glow"
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          className="animate-pulse-glow"
        />
      </div>

      {/* Grid Pattern */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(167,139,250,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <SkillsMarquee />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
        <Comments />
        <Footer />
      </div>
    </main>
  );
}
