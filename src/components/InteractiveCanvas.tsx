"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  color: string;
  size: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    const connectionDistance = 140;
    const perspective = 400;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize Particles in 3D Space
    const initParticles = () => {
      particles = [];
      const colors = [
        "rgba(99, 102, 241, opacity)",  // Indigo
        "rgba(168, 85, 247, opacity)", // Purple
        "rgba(6, 182, 212, opacity)",   // Cyan
      ];

      for (let i = 0; i < particleCount; i++) {
        // Distribute in a spherical/cloud structure
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = 200 + Math.random() * 300;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        particles.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 1 + Math.random() * 2.5,
        });
      }
    };
    initParticles();

    // Mouse Move Listener
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    // Scroll Listener
    const handleScroll = () => {
      scrollRef.current.target = window.scrollY * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // 3D Rotations
    const rotateX = (particle: Particle, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = particle.y * cos - particle.z * sin;
      const z = particle.z * cos + particle.y * sin;
      particle.y = y;
      particle.z = z;
    };

    const rotateY = (particle: Particle, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = particle.x * cos - particle.z * sin;
      const z = particle.z * cos + particle.x * sin;
      particle.x = x;
      particle.z = z;
    };

    // Animation Loop
    let angleY = 0.001;
    let angleX = 0.0005;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse transition (lerp)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Smooth scroll transition (lerp)
      const scroll = scrollRef.current;
      scroll.current += (scroll.target - scroll.current) * 0.1;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Rotation angles combined with scroll and mouse
      const currentAngleY = angleY + mouse.x * 0.0005 + scroll.current * 0.0002;
      const currentAngleX = angleX + mouse.y * 0.0005;

      // Update & project particles
      const projected: { sx: number; sy: number; sz: number; color: string; p: Particle }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply 3D rotation
        rotateY(p, currentAngleY);
        rotateX(p, currentAngleX);

        // Project to 2D screen space with perspective
        // Offset Z by window scroll depth to simulate fly-through
        const zOffset = p.z + (scroll.current * 2) % 300 - 150;
        
        // Prevent division by zero and handle particles behind camera
        if (zOffset + perspective <= 10) continue;

        const scale = perspective / (perspective + zOffset);
        const sx = centerX + p.x * scale;
        const sy = centerY + p.y * scale;

        // Save projected coords
        projected.push({
          sx,
          sy,
          sz: zOffset,
          color: p.color,
          p,
        });
      }

      // Sort by Z (depth-sorting / painter's algorithm)
      projected.sort((a, b) => b.sz - a.sz);

      // Draw connections first
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          // Calculate distance in 3D space
          const dx = p1.p.x - p2.p.x;
          const dy = p1.p.y - p2.p.y;
          const dz = p1.p.z - p2.p.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < connectionDistance) {
            // Screen space distance
            const sdx = p1.sx - p2.sx;
            const sdy = p1.sy - p2.sy;
            const sDist = Math.sqrt(sdx * sdx + sdy * sdy);

            // Avoid connecting dots that are too far apart on the 2D plane (edge case)
            if (sDist < connectionDistance * 2.5) {
              const alpha = (1 - dist3D / connectionDistance) * 0.12 * (1 - (p1.sz + 150) / 550);
              if (alpha > 0) {
                ctx.beginPath();
                ctx.moveTo(p1.sx, p1.sy);
                ctx.lineTo(p2.sx, p2.sy);
                ctx.strokeStyle = `rgba(154, 149, 176, ${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw particles
      for (let i = 0; i < projected.length; i++) {
        const pr = projected[i];
        const opacity = (1 - (pr.sz + 150) / 550) * 0.8;
        if (opacity <= 0) continue;

        const size = pr.p.size * (perspective / (perspective + pr.sz));

        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, size > 0.1 ? size : 0.1, 0, Math.PI * 2);
        ctx.fillStyle = pr.color.replace("opacity", opacity.toString());
        ctx.shadowBlur = size * 2;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "radial-gradient(circle at center, #09061c 0%, #030107 100%)",
      }}
    />
  );
}
