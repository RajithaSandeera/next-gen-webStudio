"use client";

import { useState } from "react";
import ThreeDSphere from "@/components/ThreeDSphere";
import Scroll3DCard from "@/components/Scroll3DCard";

const SKILL_CATEGORIES = {
  languages: [
    { name: "JavaScript", level: 95, color: "var(--color-primary)" },
    { name: "TypeScript", level: 92, color: "var(--color-cyan)" },
    { name: "Python", level: 85, color: "var(--color-accent)" },
    { name: "Rust", level: 75, color: "var(--color-emerald)" },
    { name: "C++", level: 70, color: "#00599c" },
    { name: "HTML5 / CSS3", level: 95, color: "#e34f26" },
  ],
  frameworks: [
    { name: "React & Next.js", level: 96, color: "var(--color-primary)" },
    { name: "Node.js & Express", level: 88, color: "var(--color-cyan)" },
    { name: "WebGL & Canvas", level: 85, color: "var(--color-accent)" },
    { name: "TailwindCSS", level: 95, color: "var(--color-emerald)" },
    { name: "Three.js", level: 80, color: "#06b6d4" },
  ],
  tools: [
    { name: "Git & Versioning", level: 95, color: "var(--color-primary)" },
    { name: "Docker Containers", level: 82, color: "var(--color-cyan)" },
    { name: "AWS Cloud Services", level: 75, color: "var(--color-accent)" },
    { name: "Webpack & Vite", level: 90, color: "var(--color-emerald)" },
    { name: "PostgreSQL & SQL", level: 85, color: "#336791" },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"languages" | "frameworks" | "tools">("languages");

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div 
          style={{
            fontSize: "0.8rem",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          Expertise Map
        </div>
        <h1 
          className="glow-text-accent"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #ffffff, var(--fg-secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cognitive Stack
        </h1>
        <p style={{ color: "var(--fg-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6, fontSize: "1.05rem" }}>
          Analyzing capabilities and development vectors. We deploy fluid UI abstractions while remaining grounded in strong low-level architectural fundamentals.
        </p>
      </div>

      {/* Main Layout */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "4rem",
          alignItems: "center",
          marginBottom: "6rem",
        }}
      >
        {/* Left: 3D Orb Visualizer */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Scroll3DCard 
            style={{ 
              width: "100%", 
              padding: "2rem", 
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "1rem", textAlign: "center" }}>
              Orbital Cluster
            </h3>
            <ThreeDSphere />
            <div style={{ fontSize: "0.8rem", color: "var(--fg-muted)", textAlign: "center", marginTop: "1rem" }}>
              Left-click and drag to rotate nodes in 3D coordinate space.
            </div>
          </Scroll3DCard>
        </div>

        {/* Right: Detailed Metrics */}
        <div>
          {/* Tabs */}
          <div 
            style={{
              display: "flex",
              borderBottom: "1px solid var(--border-glass)",
              marginBottom: "2.5rem",
              paddingBottom: "0.5rem",
              gap: "2rem",
            }}
          >
            {(Object.keys(SKILL_CATEGORIES) as Array<keyof typeof SKILL_CATEGORIES>).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    background: "none",
                    border: "none",
                    color: isActive ? "#ffffff" : "var(--fg-muted)",
                    fontSize: "1.1rem",
                    fontWeight: isActive ? 600 : 500,
                    padding: "0.5rem 0",
                    cursor: "pointer",
                    position: "relative",
                    textTransform: "capitalize",
                    transition: "color 0.3s ease",
                  }}
                >
                  {key}
                  {isActive && (
                    <div 
                      style={{
                        position: "absolute",
                        bottom: "-9px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, var(--color-primary), var(--color-cyan))",
                        boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Skill Bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {SKILL_CATEGORIES[activeTab].map((skill, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>{skill.name}</span>
                  <span 
                    style={{ 
                      fontSize: "0.85rem", 
                      fontFamily: "var(--font-mono)", 
                      color: skill.color,
                      fontWeight: "bold",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* 3D Glassmorphic Bar */}
                <div 
                  style={{
                    width: "100%",
                    height: "12px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "6px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Fill Bar with slide-in animation */}
                  <div 
                    style={{
                      height: "100%",
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                      borderRadius: "6px",
                      position: "relative",
                      boxShadow: `0 0 10px ${skill.color}50`,
                      transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Glowing endpoint dot */}
                    <div 
                      style={{
                        position: "absolute",
                        right: "-2px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        background: "#ffffff",
                        borderRadius: "50%",
                        boxShadow: `0 0 8px #ffffff, 0 0 15px ${skill.color}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline Section */}
      <section style={{ padding: "4rem 0" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#ffffff" }}>Engineering Milestones</h2>
          <p style={{ color: "var(--fg-secondary)", fontSize: "0.95rem" }}>A history of architectural execution and problem-solving</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: "800px", margin: "0 auto" }}>
          <Scroll3DCard style={{ padding: "2.5rem", borderRadius: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff" }}>Senior Creative Developer</h3>
              <span style={{ fontSize: "0.85rem", color: "var(--color-cyan)", fontFamily: "var(--font-mono)", fontWeight: "bold" }}>2024 - Present</span>
            </div>
            <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Architected interactive canvas layers and high-fidelity layouts for enterprise SaaS applications, boosting visual engagement rates by over 45%. Maintained strict 60fps frame rates across desktop and mobile browsers.
            </p>
          </Scroll3DCard>

          <Scroll3DCard style={{ padding: "2.5rem", borderRadius: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff" }}>WebGL Graphics Engineer</h3>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: "bold" }}>2022 - 2024</span>
            </div>
            <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Specialized in developing custom WebGL shading layers, particles simulations, and vectors projection algorithms. Managed asset pipelines and optimized bundles to decrease initial loading sizes by 30%.
            </p>
          </Scroll3DCard>

          <Scroll3DCard style={{ padding: "2.5rem", borderRadius: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#ffffff" }}>Full-Stack Web Architect</h3>
              <span style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontFamily: "var(--font-mono)", fontWeight: "bold" }}>2020 - 2022</span>
            </div>
            <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Built secure Node.js APIs and responsive dashboard systems. Deployed high-throughput PostgreSQL databases and set up continuous integration structures on AWS cloud pipelines.
            </p>
          </Scroll3DCard>
        </div>
      </section>
    </div>
  );
}
