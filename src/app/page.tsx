"use client";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundEffects from "@/components/BackgroundEffects";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <BackgroundEffects />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          background: "#0a0a1a",
          minHeight: "100vh",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
        <Comments />
        <Footer />
      </main>
    </>
  );
}
