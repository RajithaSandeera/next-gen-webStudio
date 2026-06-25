"use client";

import { useState } from "react";
import Image from "next/image";
import Scroll3DCard from "@/components/Scroll3DCard";

const PROJECTS_DATA = [
  {
    title: "Aircraft Maintenance System",
    description: "Sequencing and scheduling the airline-based tasks to get optimal value.The Aircraft Maintenance Management System (AMS) is a comprehensive enterprise-grade platform designed to streamline and automate aircraft maintenance operations. Built to support aviation organizations, maintenance providers, and airline operators, the system ensures efficient management of maintenance schedules, work orders, inspections, inventory, compliance requirements, and technical documentation.",
    image: "/projects/analytics.png",
    category: "SaaS & Full-Stack",
    tags: ["Next.js", "TypeScript", "Canvas 2D", "API Design"],
    role: "Core Developer",
    color: "#b89060",
  },
  {
    title: "TEXO MAS Project",
    description: "A lightweight, math-driven WebGL wireframe mesh renderer supporting custom shaders, physics nodes, and gravity fields directly in the browser.",
    image: "/projects/mas.png",
    category: "Textile & Apparel Industry",
    businessProblem: "Streamline and enhance the quality control process within TEXO (Pvt) Ltd.’s apparel industry operations. This system is designed to replace the existing manual process that relies heavily on Excel spreadsheets and paper-based testing methods, thereby reducing errors, improving efficiency, and ensuring higher accuracy in quality control operations.",
    tags: ["WebGL", "TypeScript", "Redux", "Performance","toolkit"],
    role: "Core Developer",
    color: "#9ba897",
  },
  {
    title: "Shop Floor Tool",
    description: "The Shop Floor Tool represents a pivotal advancement in streamlining operations at the Reigns refrigerator manufacturing plant. This innovative tool is designed to enhance efficiency, reduce errors, and optimize the overall workflow on the shop floor. By providing real-time data insights, task tracking, and process automation, the Shop Floor Tool empowers employees to make informed decisions, improve productivity, and maintain high-quality standards in the manufacturing process.  ",
    image: "/projects/crypto.png",
    category: "Business Process Management",
    tags: ["React", "CSS Variables", "Redux Saga", "UX Design"],
    role: "Front End Developer",
    color: "#b39882",
  },
  {
    title: "MAS Coaching Application",
    description: "Facilitating teachers and coaches in guiding students through a structured schedule",
    image: "/projects/engine.png",
    category: "Educational Management System",
    tags: ["WASM", "Rust/TS", "Raytracing", "Geometry"],
    role: "Crafting the frontend UI Responsible for developing form fields and implementing dynamic questioning functionalities within the application.",
    color: "#81917b",
  },
  {
    title: "Yuwathipathi Matrimonial Website",
    description: "Yuwathipathi is a modern and trusted Sri Lankan matrimonial platform dedicated to helping individuals and families find compatible life partners in a safe, secure, and convenient way. Our mission is to connect genuine brides and grooms through a user-friendly online platform that respects Sri Lankan cultural values while embracing modern technology",
    image: "/projects/yuwathipathi.png",
    category: "Social services",
    tags: ["CSS Architecture", "Design Tokens", "DOM Manipulation"],
    role: "Full-Stack Engineer",
    color: "#cca87a",
  },
  {
    title: "English Academic platform",
    description: "SkillMatrix English Academy is a modern English learning institute dedicated to helping students, professionals, and job seekers improve their English communication skills with confidence. We provide high-quality and practical English education through interactive lessons, grammar sessions, speaking activities, listening exercises, games, and VIP learning resources.",
    image: "/projects/skillMatrix.png",
    category: "Educational Management System",
    tags: ["Node.js", "WebSockets", "3D UI", "TailwindCSS"],
    role: "Full-Stack Engineer",
    color: "#bda695",
  },
  {
    title: "GlowZone",
    description: "GlowZone is an online cosmetic promotion platform that showcases beauty, skincare, and personal care products from trusted brands. We help customers discover the latest beauty trends, explore quality products, and enhance their confidence through a seamless and inspiring beauty experience ",
    image: "/projects/glowzone.png",
    category: "Social services",
    tags: ["React", "CSS Variables", "Redux Saga", "UX Design"],
    role: "Full-Stack Developer",
    color: "#b39882", 
  },
  {
    title: "Healz",
    description: "Healz is a comprehensive healthcare management platform designed to streamline patient care, enhance communication between healthcare providers, and improve overall healthcare outcomes. The platform offers a range of features including appointment scheduling, electronic health records (EHR), telemedicine capabilities, and patient engagement tools.",
    image: "/projects/healz.png",
    category: "SaaS & Full-Stack",
    tags: ["React", "Node.js", "MongoDB", "GraphQL"],
    role: "Full-Stack Developer",
    color: "#8ab4f8",
  }
];

const CATEGORIES = ["All",  "SaaS & Full-Stack", "Educational Management System", "Social services", "Business Process Management", "Textile & Apparel Industry"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div 
          style={{
            fontSize: "0.8rem",
            color: "var(--color-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          Product Archive
        </div>
        <h1 
          className="glow-text-primary"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #ffffff, var(--fg-secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Project Vault
        </h1>
        <p style={{ color: "var(--fg-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6, fontSize: "1.05rem" }}>
          Explore an interactive showcase of vector mathematics, custom graphics pipelines, and highly responsive production architectures built to stun.
        </p>
      </div>

      {/* Filter Tabs */}
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}
      >
        {CATEGORIES.map((cat, idx) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className="glass-panel"
              style={{
                padding: "0.6rem 1.5rem",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: isActive ? "#ffffff" : "var(--fg-secondary)",
                borderColor: isActive ? "var(--color-cyan)" : "var(--border-glass)",
                background: isActive ? "rgba(155, 168, 151, 0.15)" : "rgba(255, 255, 255, 0.01)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {filteredProjects.map((proj, idx) => (
          <Scroll3DCard key={idx} className="preserve-3d" style={{ height: "100%" }}>
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column",
                height: "100%",
                padding: "1.5rem",
              }}
            >
              {/* Image box */}
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Image 
                  src={proj.image} 
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  style={{ objectFit: "cover" }}
                />
                {/* Visual Accent */}
                <div 
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "0.7rem",
                    color: proj.color,
                    background: "rgba(10, 6, 24, 0.8)",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    border: `1px solid ${proj.color}40`,
                    fontFamily: "var(--font-mono)",
                    fontWeight: "bold",
                  }}
                >
                  {proj.category}
                </div>
              </div>

              {/* Title & Role */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff" }}>
                  {proj.title}
                </h2>
              </div>
              
              <div 
                style={{ 
                  fontSize: "0.8rem", 
                  color: "var(--fg-muted)", 
                  fontFamily: "var(--font-mono)",
                  marginBottom: "1rem",
                }}
              >
                Role: <span style={{ color: "#ffffff" }}>{proj.role}</span>
              </div>

              {/* Description */}
              <p 
                style={{ 
                  color: "var(--fg-secondary)", 
                  lineHeight: 1.5, 
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  flexGrow: 1, 
                }}
              >
                {proj.description}
              </p>

              {/* Tech Badges */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {proj.tags.map((t, ti) => (
                  <span 
                    key={ti} 
                    style={{ 
                      fontSize: "0.7rem", 
                      color: "var(--fg-secondary)", 
                      background: "rgba(255,255,255,0.04)",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      border: "1px solid var(--border-glass)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link buttons */}
              <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
                <a 
                  href="#"
                  className="glass-panel"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "0.6rem 0",
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    borderColor: "var(--border-glass)",
                    background: "rgba(255,255,255,0.01)",
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  Codebase
                </a>
                <a 
                  href="#"
                  className="glass-panel"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "0.6rem 0",
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    borderColor: proj.color,
                    background: `${proj.color}15`,
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  Live Visual &rarr;
                </a>
              </div>
            </div>
          </Scroll3DCard>
        ))}
      </div>
    </div>
  );
}
