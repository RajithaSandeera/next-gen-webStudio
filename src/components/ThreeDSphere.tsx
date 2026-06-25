"use client";

import { useEffect, useRef, useState } from "react";

interface Tag {
  text: string;
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
}

const DEFAULT_SKILLS = [
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Python", color: "#3776ab" },
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "Rust", color: "#f46623" },
  { name: "C++", color: "#00599c" },
  { name: "WebGL", color: "#990000" },
  { name: "Three.js", color: "#06b6d4" },
  { name: "Canvas 2D", color: "#a855f7" },
  { name: "TailwindCSS", color: "#06b6d4" },
  { name: "Docker", color: "#2496ed" },
  { name: "Git", color: "#f05032" },
  { name: "GraphQL", color: "#e10098" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "AWS", color: "#ff9900" },
  { name: "API Design", color: "#10b981" },
  { name: "UI/UX", color: "#f43f5e" },
];

export default function ThreeDSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollSpeedRef = useRef(0);
  const isDraggingRef = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0, startX: 0, startY: 0, rx: 0, ry: 0 });
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let tags: Tag[] = [];
    const count = DEFAULT_SKILLS.length;
    const radius = 180;
    const perspective = 300;

    // Set high-DPI scaling
    const scaleCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    scaleCanvas();
    window.addEventListener("resize", scaleCanvas);

    // Distribute points evenly on a sphere using Fibonacci lattice
    const initTags = () => {
      tags = [];
      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // radius of circle at y

        const theta = phi * i; // golden angle increment

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        // Scale to sphere radius
        tags.push({
          text: DEFAULT_SKILLS[i].name,
          x: x * radius,
          y: y * radius,
          z: z * radius,
          color: DEFAULT_SKILLS[i].color,
          size: 13 + Math.random() * 4,
        });
      }
    };
    initTags();

    // 3D Rotations
    const rotateX = (tag: Tag, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = tag.y * cos - tag.z * sin;
      const z = tag.z * cos + tag.y * sin;
      tag.y = y;
      tag.z = z;
    };

    const rotateY = (tag: Tag, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = tag.x * cos - tag.z * sin;
      const z = tag.z * cos + tag.x * sin;
      tag.x = x;
      tag.z = z;
    };

    // Tracking scroll speed
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY);
      scrollSpeedRef.current = Math.min(diff * 0.15, 8); // cap scroll speed boost
      lastScrollY = currentScrollY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollSpeedRef.current = 0;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Mouse Interaction
    const getMousePos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      const pos = getMousePos(e);
      mouseRef.current.startX = pos.x;
      mouseRef.current.startY = pos.y;
      mouseRef.current.rx = 0;
      mouseRef.current.ry = 0;
      if (e.cancelable) e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const pos = getMousePos(e);
      
      if (isDraggingRef.current) {
        const dx = pos.x - mouseRef.current.startX;
        const dy = pos.y - mouseRef.current.startY;
        
        mouseRef.current.rx = dy * 0.005;
        mouseRef.current.ry = -dx * 0.005;

        mouseRef.current.startX = pos.x;
        mouseRef.current.startY = pos.y;
      } else {
        // Handle Hover States
        // Map 2D coordinate collision back to tags
        const rect = canvas.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        let foundHover: string | null = null;

        for (let i = 0; i < tags.length; i++) {
          const t = tags[i];
          if (t.z < 0) continue; // Skip items on back side

          const scale = perspective / (perspective + t.z);
          const tx = centerX + t.x * scale;
          const ty = centerY + t.y * scale;

          // Estimate text boundary
          ctx.font = `600 ${t.size * scale}px var(--font-sans)`;
          const textWidth = ctx.measureText(t.text).width;
          const textHeight = t.size * scale;

          if (
            pos.x >= tx - textWidth / 2 - 8 &&
            pos.x <= tx + textWidth / 2 + 8 &&
            pos.y >= ty - textHeight / 2 - 4 &&
            pos.y <= ty + textHeight / 2 + 4
          ) {
            foundHover = t.text;
            break;
          }
        }
        setHoveredTag(foundHover);
        canvas.style.cursor = foundHover ? "pointer" : "grab";
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Touch support
    canvas.addEventListener("touchstart", handleMouseDown, { passive: false });
    canvas.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);

    // Speed decays
    let currentRotateX = 0.003;
    let currentRotateY = 0.004;

    // Animation Loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Inertial movement from drag, scroll boost, or base speed
      let rx = mouseRef.current.rx;
      let ry = mouseRef.current.ry;

      if (!isDraggingRef.current) {
        // Base auto spin + scroll momentum
        const scrollBoost = scrollSpeedRef.current;
        rx = currentRotateX + (scrollBoost * 0.004);
        ry = currentRotateY + (scrollBoost * 0.005);
      } else {
        // Decay drag speed
        mouseRef.current.rx *= 0.95;
        mouseRef.current.ry *= 0.95;
      }

      // Rotate all points
      for (let i = 0; i < tags.length; i++) {
        rotateX(tags[i], rx);
        rotateY(tags[i], ry);
      }

      // Projection mapping & depth-sorting
      const projected = tags.map((t) => {
        const scale = perspective / (perspective + t.z);
        return {
          text: t.text,
          tx: centerX + t.x * scale,
          ty: centerY + t.y * scale,
          tz: t.z,
          scale,
          color: t.color,
          fontSize: t.size * scale,
        };
      });

      // Painter's algorithm
      projected.sort((a, b) => b.tz - a.tz);

      // Render projected items
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Opacity based on depth
        // front tags: z = -radius, opacity = 1.0
        // back tags: z = +radius, opacity = 0.2
        const opacity = Math.max(0.1, 0.2 + (1.0 - (p.tz + radius) / (2 * radius)) * 0.8);
        const isHovered = hoveredTag === p.text;

        ctx.font = `600 ${p.fontSize}px var(--font-sans)`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (isHovered) {
          // Drawing highlights for hovered skill
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
          ctx.fillStyle = "#ffffff";
          ctx.font = `700 ${p.fontSize * 1.1}px var(--font-sans)`;
        } else {
          ctx.fillStyle = p.color;
        }

        // Apply global alpha
        ctx.globalAlpha = opacity;
        ctx.fillText(p.text, p.tx, p.ty);
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", scaleCanvas);
      window.removeEventListener("scroll", handleScroll);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleMouseDown);
      canvas.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredTag]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "450px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "450px",
          height: "450px",
          maxWidth: "100%",
          maxHeight: "100%",
          touchAction: "none",
        }}
      />
      {hoveredTag && (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            background: "rgba(10, 6, 24, 0.8)",
            padding: "6px 16px",
            borderRadius: "20px",
            border: "1px solid var(--border-glass-hover)",
            fontSize: "0.85rem",
            color: "#f5f3fa",
            pointerEvents: "none",
            animation: "float 4s ease-in-out infinite",
            backdropFilter: "blur(4px)",
            fontWeight: 500,
          }}
        >
          Active Focus: <span style={{ color: "var(--color-cyan)" }}>{hoveredTag}</span>
        </div>
      )}
    </div>
  );
}
