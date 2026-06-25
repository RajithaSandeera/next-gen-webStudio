"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThreeDSphere from "@/components/ThreeDSphere";
import Scroll3DCard from "@/components/Scroll3DCard";

const TOP_PROJECTS = [
  {
    title: "Aether Analytics",
    description: "An ultra-premium SaaS dashboard tracking high-velocity event streams. Integrates glowing real-time graphs and multi-variable analytics engines.",
    image: "/projects/analytics.png",
    tags: ["Next.js", "TypeScript", "Canvas 2D", "API Design"],
    color: "var(--color-primary)",
    link: "/projects",
  },
  {
    title: "Vortex 3D Engine",
    description: "A lightweight, math-driven WebGL wireframe mesh renderer supporting custom shaders, physics nodes, and gravity fields directly in the browser.",
    image: "/projects/engine.png",
    tags: ["WebGL", "TypeScript", "3D Math", "Performance"],
    color: "var(--color-cyan)",
    link: "/projects",
  },
  {
    title: "Chronos Wallet",
    description: "A luxury cryptocurrency portal with glassmorphic dashboards, live asset tracking, glowing transaction lines, and biological UI feedback.",
    image: "/projects/crypto.png",
    tags: ["React", "CSS Variables", "SVG Animations", "UX Design"],
    color: "var(--color-accent)",
    link: "/projects",
  },
];

const SERVICES_DATA = [
  {
    id: "ai",
    title: "AI-Powered Business Automation",
    icon: "🤖",
    description: "Companies want to reduce manual work and improve productivity using intelligent solutions.",
    items: [
      "AI Customer Support Agents",
      "AI Document Processing",
      "AI Proposal & Report Generation",
      "AI Meeting Summaries",
      "AI-Powered HR Assistants"
    ],
    color: "#b89576"
  },
  {
    id: "hr",
    title: "HR & Workforce Management Systems",
    icon: "💼",
    description: "Tailored workforce tracking and management applications designed for SMEs and growing enterprises.",
    items: [
      "Attendance Management",
      "Leave Management",
      "Payroll Integration",
      "Employee Self-Service Portals",
      "GPS Field Employee Tracking"
    ],
    color: "#cca87a"
  },
  {
    id: "healthcare",
    title: "Healthcare Platforms",
    icon: "🩺",
    description: "Robust digital medical software designed to streamline operations and enhance patient connectivity.",
    items: [
      "Telemedicine",
      "Appointment Booking",
      "Electronic Medical Records (EMR)",
      "Pharmacy Management",
      "Healthcare Marketplaces"
    ],
    color: "#9ba897"
  },
  {
    id: "lms",
    title: "Learning Management Systems (LMS)",
    icon: "🎓",
    description: "Online education architectures engineered for training institutions and academic organisations.",
    items: [
      "Online Courses",
      "Assessments",
      "Certificates",
      "Student Analytics",
      "AI Tutors"
    ],
    color: "#81917b"
  },
  {
    id: "property",
    title: "Property & Real Estate Platforms",
    icon: "🏠",
    description: "Interactive directory systems, real-estate virtual tours, and lease/agent tracking suites.",
    items: [
      "Property Listings",
      "Virtual Tours",
      "Agent Management",
      "Rental Management",
      "Property Valuation Tools"
    ],
    color: "#bda695"
  },
  {
    id: "logistics",
    title: "Logistics & Fleet Management",
    icon: "🚚",
    description: "End-to-end operational visibility platforms built to coordinate routes, drivers, and deliveries.",
    items: [
      "GPS Tracking",
      "Route Optimization",
      "Driver Management",
      "Fuel Monitoring",
      "Delivery Tracking"
    ],
    color: "#d1c7bd"
  },
  {
    id: "erp",
    title: "Industry-Specific ERP Systems",
    icon: "🏭",
    description: "Niche, custom resource planning solutions tailored for specific industrial sectors.",
    items: [
      "Manufacturing ERP",
      "Construction ERP",
      "Hotel ERP",
      "School ERP",
      "Healthcare ERP"
    ],
    color: "#b3a492"
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Marketplace Solutions",
    icon: "🛒",
    description: "High-performance digital trade platforms, B2B frameworks, and AI-driven recommendation architectures.",
    items: [
      "Multi-Vendor Marketplaces",
      "B2B Commerce Platforms",
      "Subscription Commerce",
      "AI Product Recommendations"
    ],
    color: "#cca87a"
  }
];

export default function Home() {
  const [activeService, setActiveService] = useState("ai");
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      {/* ================= HERO SECTION ================= */}
      <section 
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "6rem 0 4rem 0",
          position: "relative",
        }}
      >
        <div 
          style={{
            fontSize: "0.85rem",
            color: "var(--color-cyan)",
            background: "rgba(155, 168, 151, 0.08)",
            padding: "6px 16px",
            borderRadius: "30px",
            border: "1px solid rgba(155, 168, 151, 0.2)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 600,
            marginBottom: "2rem",
            animation: "float 4s ease-in-out infinite",
          }}
        >
          High Performance • 3D Creative Engineering
        </div>

        <h1 
          className="glow-text-primary"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: "950px",
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #ffffff 40%, var(--fg-secondary) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We Design & Deploy <br/>
          <span 
            style={{ 
              background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Immersive 3D Experiences
          </span>
        </h1>

        <p 
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            color: "var(--fg-secondary)",
            maxWidth: "700px",
            lineHeight: 1.6,
            marginBottom: "3rem",
            fontWeight: 400,
          }}
        >
          Fusing cutting-edge WebGL architectures, interactive math-based simulations, and sleek, responsive layouts to develop websites that captivate clients.
        </p>

        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a 
            href="#projects"
            className="glass-panel"
            style={{
              padding: "0.9rem 2.25rem",
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: "0.95rem",
              background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
              border: "none",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(204, 168, 122, 0.25)",
            }}
          >
            Explore Projects
          </a>
          <Link 
            href="/skills"
            className="glass-panel"
            style={{
              padding: "0.9rem 2.25rem",
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: "0.95rem",
              borderColor: "var(--border-glass)",
              color: "#fff",
              background: "rgba(255, 255, 255, 0.02)",
            }}
          >
            Inspect Cognitive Stack
          </Link>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#philosophy"
          style={{
            position: "absolute",
            bottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--fg-muted)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <span>Scroll down</span>
          <div 
            style={{
              width: "20px",
              height: "32px",
              border: "2px solid var(--border-glass-hover)",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <div 
              style={{
                width: "4px",
                height: "6px",
                background: "var(--color-cyan)",
                borderRadius: "50%",
                position: "absolute",
                top: "6px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "float 2s infinite alternate",
              }}
            />
          </div>
        </a>
      </section>

      {/* ================= PHILOSOPHY / ABOUT SECTION ================= */}
      <section 
        id="philosophy"
        style={{ padding: "8rem 0 6rem 0", scrollMarginTop: "50px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Studio Philosophy</h2>
          <div 
            style={{ 
              width: "50px", 
              height: "3px", 
              background: "linear-gradient(90deg, var(--color-primary), var(--color-cyan))",
              margin: "0 auto",
            }} 
          />
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <div className="glass-panel" style={{ padding: "2.5rem", borderRadius: "20px" }}>
            <div 
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "rgba(99, 102, 241, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "var(--color-primary)",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                fontWeight: "bold",
                border: "1px solid rgba(99, 102, 241, 0.2)",
              }}
            >
              3D
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Visual Mastery</h3>
            <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Creating immersive, multi-dimensional structures. Utilizing Canvas, custom shaders, and 3D rotations to build animations that translate beautifully with scrolling.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2.5rem", borderRadius: "20px" }}>
            <div 
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "rgba(6, 182, 212, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "var(--color-cyan)",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                fontWeight: "bold",
                border: "1px solid rgba(6, 182, 212, 0.2)",
              }}
            >
              60
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Smooth Performance</h3>
            <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Engineered for maximum frame rate. By loading lean scripts and deploying graphics using GPU acceleration or optimized trigonometry, we maintain 60fps across viewports.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "2.5rem", borderRadius: "20px" }}>
            <div 
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "rgba(168, 85, 247, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "var(--color-accent)",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                fontWeight: "bold",
                border: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              UX
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Intuitive Usability</h3>
            <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Impressing is not just about visuals, but usability. Responsive structures adapt to mobile touch screens, presenting layouts logically to maintain user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES HUB SECTION ================= */}
      <section 
        id="services"
        style={{ padding: "6rem 0 6rem 0", scrollMarginTop: "50px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div 
            style={{
              fontSize: "0.8rem",
              color: "var(--color-cyan)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Capabilities Portfolio
          </div>
          <h2 style={{ fontSize: "2.25rem", marginBottom: "1rem", color: "#ffffff" }}>
            Services We Offer
          </h2>
          <div 
            style={{ 
              width: "50px", 
              height: "3px", 
              background: "linear-gradient(90deg, var(--color-cyan), var(--color-accent))",
              margin: "0 auto",
            }} 
          />
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Left Column: Categories List */}
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              maxHeight: "550px",
              overflowY: "auto",
              paddingRight: "0.5rem",
            }}
          >
            {SERVICES_DATA.map((svc) => {
              const isActive = activeService === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveService(svc.id)}
                  className="glass-panel"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.5rem",
                    borderRadius: "15px",
                    textAlign: "left",
                    color: isActive ? "#ffffff" : "var(--fg-secondary)",
                    borderColor: isActive ? svc.color : "var(--border-glass)",
                    background: isActive ? `${svc.color}15` : "rgba(255, 255, 255, 0.01)",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isActive ? `0 0 20px ${svc.color}15` : "none",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    outline: "none",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{svc.icon}</span>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{svc.title}</div>
                  </div>
                  {isActive && (
                    <div 
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: svc.color,
                        boxShadow: `0 0 8px ${svc.color}`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Details Panel */}
          <div>
            {(() => {
              const currentSvc = SERVICES_DATA.find((s) => s.id === activeService) || SERVICES_DATA[0];
              return (
                <Scroll3DCard 
                  style={{ 
                    borderColor: currentSvc.color,
                    boxShadow: `0 10px 40px ${currentSvc.color}10`,
                    height: "100%",
                  }}
                >
                  <div style={{ padding: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "2.5rem" }}>{currentSvc.icon}</span>
                      <div>
                        <h3 style={{ fontSize: "1.75rem", color: "#ffffff" }}>{currentSvc.title}</h3>
                        <span style={{ fontSize: "0.8rem", color: currentSvc.color, fontFamily: "var(--font-mono)", fontWeight: "bold" }}>
                          Active Division
                        </span>
                      </div>
                    </div>

                    <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, marginBottom: "2rem", fontSize: "0.95rem" }}>
                      {currentSvc.description}
                    </p>

                    <div 
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1.25rem",
                      }}
                    >
                      {currentSvc.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="glass-panel"
                          style={{
                            padding: "0.85rem 1.1rem",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            background: "rgba(255,255,255,0.01)",
                            borderLeft: `3px solid ${currentSvc.color}`,
                          }}
                        >
                          <div 
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: currentSvc.color,
                              boxShadow: `0 0 6px ${currentSvc.color}`,
                            }}
                          />
                          <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#f5f3fa" }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Scroll3DCard>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE SECTION ================= */}
      <section 
        id="projects"
        style={{ padding: "6rem 0 6rem 0", scrollMarginTop: "50px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>Curated Masterpieces</h2>
            <p style={{ color: "var(--fg-secondary)" }}>Scroll to trigger 3D perspective shifts on cards</p>
          </div>
          <Link 
            href="/projects" 
            style={{ 
              color: "var(--color-cyan)", 
              fontSize: "0.95rem", 
              fontWeight: 600, 
              display: "flex", 
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Browse All Projects &rarr;
          </Link>
        </div>

        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
          }}
        >
          {TOP_PROJECTS.map((proj, idx) => (
            <Scroll3DCard key={idx}>
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                  gap: "2.5rem",
                  padding: "2.5rem",
                  alignItems: "center",
                }}
              >
                {/* Project Image */}
                <div 
                  style={{ 
                    position: "relative", 
                    width: "100%", 
                    height: "260px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image 
                    src={proj.image} 
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{ objectFit: "cover" }}
                    priority={idx === 0}
                  />
                  {/* Subtle color overlay */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: `linear-gradient(to top, rgba(10, 6, 24, 0.8) 0%, transparent 80%)`,
                    }} 
                  />
                </div>

                {/* Project Info */}
                <div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    {proj.tags.map((t, ti) => (
                      <span 
                        key={ti} 
                        style={{ 
                          fontSize: "0.75rem", 
                          color: "var(--fg-secondary)", 
                          background: "rgba(255,255,255,0.05)",
                          padding: "3px 10px",
                          borderRadius: "15px",
                          border: "1px solid var(--border-glass)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1.25rem", color: "#ffffff" }}>
                    {proj.title}
                  </h3>

                  <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, marginBottom: "2rem", fontSize: "0.95rem" }}>
                    {proj.description}
                  </p>

                  <Link 
                    href={proj.link}
                    className="glass-panel"
                    style={{
                      padding: "0.7rem 1.5rem",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      borderColor: proj.color,
                      color: "#ffffff",
                      background: "rgba(255, 255, 255, 0.01)",
                    }}
                  >
                    View Project Details
                  </Link>
                </div>
              </div>
            </Scroll3DCard>
          ))}
        </div>
      </section>

      {/* ================= COGNITIVE STACK SECTION ================= */}
      <section 
        style={{ padding: "6rem 0 6rem 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}
      >
        <div>
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
            Engineering Stack
          </div>
          <h2 style={{ fontSize: "2.25rem", marginBottom: "1.5rem", color: "#ffffff" }}>
            Technological Cloud
          </h2>
          <p style={{ color: "var(--fg-secondary)", lineHeight: 1.6, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            The 3D Orb showcases languages, libraries, and protocols in which we possess high architectural proficiency. Drag the sphere to shift its coordinates or scroll to accelerate its orbit.
          </p>
          <p style={{ color: "var(--fg-muted)", lineHeight: 1.6, marginBottom: "2.5rem", fontSize: "0.9rem" }}>
            Projecting points via Fibonacci nodes over a spherical shell allows us to calculate perspective offsets in 3D coordinate space on canvas, resulting in native 60fps orbital layouts.
          </p>
          <Link 
            href="/skills"
            className="glass-panel"
            style={{
              padding: "0.8rem 1.75rem",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#ffffff",
              borderColor: "var(--border-glass-hover)",
              background: "rgba(99, 102, 241, 0.05)",
            }}
          >
            Deep Dive Skills Matrix
          </Link>
        </div>

        {/* 3D Skills Sphere */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ThreeDSphere />
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section 
        id="contact"
        style={{ padding: "8rem 0 8rem 0", scrollMarginTop: "50px" }}
      >
        <div 
          className="glass-panel" 
          style={{ 
            maxWidth: "750px", 
            margin: "0 auto", 
            padding: "3.5rem 3rem", 
            borderRadius: "24px",
            borderColor: "rgba(168, 85, 247, 0.15)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", marginBottom: "0.75rem", color: "#ffffff" }}>
              Start an Interactive Venture
            </h2>
            <p style={{ color: "var(--fg-secondary)", fontSize: "0.95rem" }}>
              Interested in raising your product aesthetics? Fill in the details.
            </p>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", fontWeight: 500 }} htmlFor="contact-name">Name</label>
                <input 
                  id="contact-name"
                  type="text" 
                  placeholder="Steve Jobs"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "8px",
                    padding: "0.9rem 1.2rem",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--color-primary)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", fontWeight: 500 }} htmlFor="contact-email">Email Address</label>
                <input 
                  id="contact-email"
                  type="email" 
                  placeholder="steve@apple.com"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "8px",
                    padding: "0.9rem 1.2rem",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--color-primary)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                  required
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", fontWeight: 500 }} htmlFor="contact-project">Project Scope</label>
              <textarea 
                id="contact-project"
                rows={5}
                placeholder="Briefly describe the 3D visual styles, pages, and interactive features you want..."
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-glass)",
                  borderRadius: "8px",
                  padding: "0.9rem 1.2rem",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.5,
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--color-primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                required
              />
            </div>

            <button 
              type="submit"
              className="glass-panel"
              style={{
                marginTop: "1rem",
                padding: "1rem 2.5rem",
                borderRadius: "30px",
                border: "none",
                background: "linear-gradient(90deg, var(--color-accent), var(--color-cyan))",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                alignSelf: "center",
                boxShadow: "0 4px 20px rgba(184, 149, 118, 0.2)",
              }}
            >
              Transmit Brief
            </button>
          </form>

          {/* Instant WhatsApp Gateway */}
          <div 
            style={{ 
              marginTop: "3rem", 
              borderTop: "1px solid var(--border-glass)", 
              paddingTop: "2.5rem", 
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem"
            }}
          >
            <div style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Alternative Instant Communication
            </div>
            <a 
              href="https://wa.me/94743701294" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.8rem 1.75rem",
                borderRadius: "20px",
                borderColor: "rgba(16, 185, 129, 0.3)",
                background: "rgba(16, 185, 129, 0.08)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1.05rem",
                transition: "all 0.3s ease",
              }}
            >
              {/* WhatsApp Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#10b981" style={{ display: "inline-block", verticalAlign: "middle" }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.74 0-2.602-1.01-5.05-2.846-6.887C16.655 2.14 14.208 1.13 11.608 1.13c-5.441 0-9.866 4.372-9.87 9.742-.001 1.702.457 3.367 1.32 4.815l-.997 3.64 3.74-.967zm12.188-7.148c-.328-.164-1.94-.959-2.241-1.07-.301-.11-.52-.164-.738.164-.219.329-.848 1.07-1.039 1.29-.192.218-.384.245-.712.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.825-2.274-.192-.329-.02-.507.144-.67.147-.146.328-.384.493-.575.164-.192.219-.329.328-.548.11-.219.055-.411-.027-.575-.083-.164-.738-1.78-.1-2.437-.3-.292-.615-.253-.843-.263l-.723-.01c-.246 0-.643.092-.98.465-.338.373-1.286 1.258-1.286 3.067 0 1.808 1.314 3.555 1.496 3.801.183.246 2.587 3.95 6.266 5.539.875.378 1.558.604 2.09.774.88.279 1.68.239 2.312.145.705-.104 1.94-.793 2.215-1.56.275-.767.275-1.423.192-1.56-.083-.137-.301-.219-.629-.383z" />
              </svg>
              WhatsApp Business: 074 370 1294
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
