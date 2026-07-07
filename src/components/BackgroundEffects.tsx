export default function BackgroundEffects() {
  return (
    <>
      <div
        className="animate-pulse-glow"
        style={{
          position: "fixed",
          top: "10%",
          left: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(167,139,250,0.06)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: "fixed",
          bottom: "20%",
          right: "5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(96,165,250,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
          animationDelay: "2s",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.02) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
