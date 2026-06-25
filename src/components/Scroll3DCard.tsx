"use client";

import { useEffect, useRef, useState } from "react";

interface Scroll3DCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Scroll3DCard({ children, className = "", style }: Scroll3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse hover state
  const [hoverStyles, setHoverStyles] = useState({ rx: 0, ry: 0, px: 50, py: 50, active: false });
  // Scroll-based state
  const [scrollStyles, setScrollStyles] = useState({ rx: 0, tz: -50, opacity: 0.7, scale: 0.95 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Scroll Handler
    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the card is from the center of the viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Normalize distance from center: -1.0 (top of screen) to +1.0 (bottom of screen)
      const distanceFromCenter = (cardCenter - viewportCenter) / (windowHeight / 2);
      
      // Keep it within reasonable bounds
      const clampedDist = Math.max(-1.5, Math.min(1.5, distanceFromCenter));

      // Calculate 3D transforms based on scroll
      // As it scrolls up (negative clampedDist), tilt it forward. As it scrolls down, tilt it backward.
      const rx = clampedDist * -15; // rotate up to 15 degrees
      const tz = Math.max(-150, -Math.abs(clampedDist) * 100); // pull back up to 100px
      const scale = Math.max(0.9, 1 - Math.abs(clampedDist) * 0.08); // scale down slightly at edges
      const opacity = Math.max(0.6, 1 - Math.abs(clampedDist) * 0.3); // fade out at edges

      setScrollStyles({ rx, tz, opacity, scale });
    };

    // Initialize position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Mouse Move over Card (Mouse Tilt effect)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element
    
    // Normalize: -0.5 to +0.5
    const px = x / rect.width;
    const py = y / rect.height;
    
    const rx = (py - 0.5) * -12; // tilt X axis up to 12deg
    const ry = (px - 0.5) * 12;  // tilt Y axis up to 12deg

    setHoverStyles({
      rx,
      ry,
      px: px * 100, // percentage for shining gradient
      py: py * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyles((prev) => ({
      ...prev,
      rx: 0,
      ry: 0,
      active: false,
    }));
  };

  // Combine scroll transform and mouse hover transform
  const finalRotateX = scrollStyles.rx + hoverStyles.rx;
  const finalRotateY = hoverStyles.ry;
  const finalScale = hoverStyles.active ? scrollStyles.scale * 1.03 : scrollStyles.scale;
  const finalTranslateZ = hoverStyles.active ? scrollStyles.tz + 30 : scrollStyles.tz; // pop out on hover

  const transformStyle = `
    perspective(1000px)
    rotateX(${finalRotateX}deg)
    rotateY(${finalRotateY}deg)
    translateZ(${finalTranslateZ}px)
    scale(${finalScale})
  `;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel preserve-3d ${className}`}
      style={{
        transform: transformStyle,
        opacity: scrollStyles.opacity,
        transition: hoverStyles.active
          ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease"
          : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Specular Shine Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${hoverStyles.px}% ${hoverStyles.py}%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`,
          pointerEvents: "none",
          opacity: hoverStyles.active ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 3,
        }}
      />
      {/* Glow Border Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "1.5px solid transparent",
          borderRadius: "inherit",
          background: `radial-gradient(circle at ${hoverStyles.px}% ${hoverStyles.py}%, rgba(99, 102, 241, 0.25) 0%, transparent 50%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          opacity: hoverStyles.active ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 2,
        }}
      />
      {/* Card Content with slightly pushed forward look (3D layer) */}
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
