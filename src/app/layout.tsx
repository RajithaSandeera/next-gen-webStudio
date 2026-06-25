import type { Metadata } from "next";
import "./globals.css";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import Link from "next/link";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "NextGen Web Studio | Premium 3D Portfolio & Web Development",
  description: "Experience the next generation of web design. Explore interactive 3D web applications, cutting-edge graphics, responsive design, and professional engineering.",
  keywords: ["WebGL", "3D Web", "Portfolio", "Front-end Developer", "Software Engineer", "Next.js", "React", "Creative Developer"],
  authors: [{ name: "NextGen Developer" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Interactive 3D Background */}
        <InteractiveCanvas />
        
        {/* Futuristic Grid Overlay */}
        <div className="grid-bg" />

        {/* Ambient Glows */}
        <div 
          className="pulse-glow-circle" 
          style={{
            top: "10%",
            left: "5%",
            width: "35vw",
            height: "35vw",
            background: "rgba(204, 168, 122, 0.05)",
          }} 
        />
        <div 
          className="pulse-glow-circle" 
          style={{
            top: "50%",
            right: "5%",
            width: "40vw",
            height: "40vw",
            background: "rgba(184, 149, 118, 0.04)",
          }} 
        />

        {/* Navigation Header */}
        <header 
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            width: "100%",
            padding: "1.25rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(12, 11, 10, 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-glass)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link 
              href="/" 
              id="nav-logo"
              style={{ 
                fontSize: "1.35rem", 
                fontWeight: 800, 
                background: "linear-gradient(135deg, #fff 30%, var(--fg-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <span style={{ color: "var(--color-primary)" }}>NΞXТ</span>GEN
            </Link>
            <div 
              style={{
                fontSize: "0.7rem",
                color: "var(--color-cyan)",
                background: "rgba(155, 168, 151, 0.1)",
                padding: "2px 8px",
                borderRadius: "20px",
                border: "1px solid rgba(155, 168, 151, 0.2)",
                fontFamily: "var(--font-mono)",
                fontWeight: "bold",
              }}
            >
              V2.0
            </div>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            <Link href="/" id="link-home" className="nav-link" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/projects" id="link-projects" className="nav-link" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
              Projects
            </Link>
            <Link href="/#services" id="link-services" className="nav-link" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
              Services
            </Link>
            <Link href="/skills" id="link-skills" className="nav-link" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
              Skills
            </Link>
            <Link 
              href="/#contact" 
              id="link-contact"
              className="glass-panel" 
              style={{ 
                padding: "0.6rem 1.25rem", 
                borderRadius: "30px", 
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#ffffff",
                borderColor: "rgba(204, 168, 122, 0.25)",
                background: "rgba(204, 168, 122, 0.1)",
              }}
            >
              Start Project
            </Link>
          </nav>
        </header>

        {/* Page Content */}
        <main style={{ minHeight: "calc(100vh - 150px)", zIndex: 1, position: "relative" }}>
          {children}
        </main>

        {/* Ambient Footer */}
        <footer 
          style={{
            width: "100%",
            padding: "4rem 2rem 2.5rem 2rem",
            background: "linear-gradient(to top, #0c0b0a 0%, transparent 100%)",
            borderTop: "1px solid var(--border-glass)",
            zIndex: 10,
            position: "relative",
          }}
        >
          <div 
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <div style={{ maxWidth: "400px" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                  <span style={{ color: "var(--color-primary)" }}>NΞXТ</span>GEN STUDIO
                </h3>
                <p style={{ color: "var(--fg-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  Designing and deploying premium interactive web experiences. Bringing three-dimensional aesthetics and high-performance physics-based motion to the modern browser.
                </p>
              </div>

              <div style={{ display: "flex", gap: "4rem" }}>
                <div>
                  <h4 style={{ color: "#ffffff", fontSize: "0.9rem", marginBottom: "1rem", fontWeight: 600 }}>Explore</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", color: "var(--fg-secondary)" }}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "#ffffff", fontSize: "0.9rem", marginBottom: "1rem", fontWeight: 600 }}>Connection</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", color: "var(--fg-secondary)" }}>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://wa.me/94743701294" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-emerald)", fontWeight: 500 }}>WhatsApp: 074 370 1294</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                fontSize: "0.8rem",
                color: "var(--fg-muted)",
              }}
            >
              <div>© {new Date().getFullYear()} NextGen Web Studio. All rights reserved.</div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
        {/* Global Floating WhatsApp Chat Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
