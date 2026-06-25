"use client";

import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "94743701294"; // Sri Lankan international format for 0743701294
  const displayPhone = "074 370 1294";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "1rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Floating Chat Box */}
      {isOpen && (
        <div
          className="glass-panel"
          style={{
            width: "320px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.1)",
            borderColor: "rgba(16, 185, 129, 0.25)",
            background: "rgba(10, 6, 24, 0.95)",
            animation: "float 6s ease-in-out infinite",
            transform: "translateY(0)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "1.25rem",
              background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
              color: "#ffffff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>NextGen Web Studio</span>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#34d399",
                    borderRadius: "50%",
                    display: "inline-block",
                    boxShadow: "0 0 8px #34d399",
                  }}
                />
              </div>
              <div style={{ fontSize: "0.75rem", opacity: 0.9, marginTop: "2px" }}>
                Business Account • Online
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "rgba(0, 0, 0, 0.15)",
                border: "none",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: "bold",
              }}
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div
            style={{
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              background: "rgba(15, 10, 32, 0.3)",
            }}
          >
            {/* Incoming Message Bubble */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-glass)",
                padding: "0.85rem 1rem",
                borderRadius: "0px 16px 16px 16px",
                maxWidth: "85%",
                alignSelf: "flex-start",
                fontSize: "0.88rem",
                lineHeight: 1.4,
                color: "#f5f3fa",
              }}
            >
              Hi there! 👋 How can we help you build your interactive 3D website today?
            </div>

            {/* Business Number Information Box */}
            <div
              style={{
                background: "rgba(16, 185, 129, 0.05)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "12px",
                padding: "0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "0.7rem", color: "#34d399", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Official WhatsApp Business
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em" }}>
                {displayPhone}
              </div>
            </div>

            {/* Direct Connect Link Button */}
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi!%20I'm%20interested%20in%20your%20web%20development%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "#10b981",
                color: "#ffffff",
                padding: "0.75rem 1rem",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "0.9rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(16, 185, 129, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.3)";
              }}
            >
              {/* WhatsApp Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.74 0-2.602-1.01-5.05-2.846-6.887C16.655 2.14 14.208 1.13 11.608 1.13c-5.441 0-9.866 4.372-9.87 9.742-.001 1.702.457 3.367 1.32 4.815l-.997 3.64 3.74-.967zm12.188-7.148c-.328-.164-1.94-.959-2.241-1.07-.301-.11-.52-.164-.738.164-.219.329-.848 1.07-1.039 1.29-.192.218-.384.245-.712.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.825-2.274-.192-.329-.02-.507.144-.67.147-.146.328-.384.493-.575.164-.192.219-.329.328-.548.11-.219.055-.411-.027-.575-.083-.164-.738-1.78-.1-2.437-.3-.292-.615-.253-.843-.263l-.723-.01c-.246 0-.643.092-.98.465-.338.373-1.286 1.258-1.286 3.067 0 1.808 1.314 3.555 1.496 3.801.183.246 2.587 3.95 6.266 5.539.875.378 1.558.604 2.09.774.88.279 1.68.239 2.312.145.705-.104 1.94-.793 2.215-1.56.275-.767.275-1.423.192-1.56-.083-.137-.301-.219-.629-.383z" />
              </svg>
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Glowing Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-panel"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
          border: "none",
          cursor: "pointer",
          boxShadow: isOpen 
            ? "0 0 20px rgba(16, 185, 129, 0.4)" 
            : "0 10px 25px rgba(16, 185, 129, 0.3), 0 0 15px rgba(16, 185, 129, 0.2)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08) rotate(5deg)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          e.currentTarget.style.boxShadow = isOpen 
            ? "0 0 20px rgba(16, 185, 129, 0.4)" 
            : "0 10px 25px rgba(16, 185, 129, 0.3), 0 0 15px rgba(16, 185, 129, 0.2)";
        }}
      >
        {isOpen ? (
          <span style={{ fontSize: "1.8rem", fontWeight: "bold", lineHeight: 0 }}>×</span>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.74 0-2.602-1.01-5.05-2.846-6.887C16.655 2.14 14.208 1.13 11.608 1.13c-5.441 0-9.866 4.372-9.87 9.742-.001 1.702.457 3.367 1.32 4.815l-.997 3.64 3.74-.967zm12.188-7.148c-.328-.164-1.94-.959-2.241-1.07-.301-.11-.52-.164-.738.164-.219.329-.848 1.07-1.039 1.29-.192.218-.384.245-.712.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.825-2.274-.192-.329-.02-.507.144-.67.147-.146.328-.384.493-.575.164-.192.219-.329.328-.548.11-.219.055-.411-.027-.575-.083-.164-.738-1.78-.1-2.437-.3-.292-.615-.253-.843-.263l-.723-.01c-.246 0-.643.092-.98.465-.338.373-1.286 1.258-1.286 3.067 0 1.808 1.314 3.555 1.496 3.801.183.246 2.587 3.95 6.266 5.539.875.378 1.558.604 2.09.774.88.279 1.68.239 2.312.145.705-.104 1.94-.793 2.215-1.56.275-.767.275-1.423.192-1.56-.083-.137-.301-.219-.629-.383z" />
          </svg>
        )}
      </button>
    </div>
  );
}
