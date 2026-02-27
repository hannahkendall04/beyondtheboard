"use client";
import React from "react";
import Image from "next/image";

interface HeaderOverlayProps {
  imageUrl?: string;
  overlayTextPrimary: string;
  overlayTextSecondary?: string;
}

const HeaderOverlay: React.FC<HeaderOverlayProps> = ({
  imageUrl,
  overlayTextPrimary,
  overlayTextSecondary,
}) => {
  const imagePath = imageUrl ?? "/images/header_bg.jpg";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .header-overlay {
          width: 100%;
          height: 420px;
          position: relative;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .header-overlay-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .header-overlay-image img {
          object-fit: cover;
          filter: saturate(0.7) brightness(0.4);
        }

        /* Gradient vignette layered over image */
        .header-overlay-gradient {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(26, 23, 20, 0.25) 0%,
            rgba(26, 23, 20, 0.55) 100%
          );
        }

        /* Subtle grain texture */
        .header-overlay-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }

        .header-overlay-content {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .header-overlay-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .header-overlay-eyebrow-line {
          width: 40px;
          height: 3px;
          background: rgba(196, 168, 130, 0.6);
        }

        .header-overlay-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c4a882;
          opacity: 0.8;
        }

        .header-overlay-primary {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 300;
          color: #faf9f7;
          letter-spacing: 0.03em;
          line-height: 1.1;
          margin: 0 0 14px;
          text-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
        }

        .header-overlay-secondary {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #c4a882;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.9;
        }

        /* Bottom fade */
        .header-overlay-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 3;
          background: linear-gradient(to bottom, transparent, rgba(250, 249, 247, 0.08));
          pointer-events: none;
        }
      `}</style>

      <header className="header-overlay">
        <div className="header-overlay-image">
          <Image
            src={imagePath}
            alt="header background"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="header-overlay-gradient" />
        <div className="header-overlay-grain" />

        <div className="header-overlay-content">
          <div className="header-overlay-eyebrow">
            <div className="header-overlay-eyebrow-line" />
            <div className="header-overlay-eyebrow-dot" />
            <div className="header-overlay-eyebrow-line" />
          </div>

          <h1 className="header-overlay-primary">{overlayTextPrimary}</h1>

          {overlayTextSecondary && (
            <p className="header-overlay-secondary">{overlayTextSecondary}</p>
          )}
        </div>

        <div className="header-overlay-bottom-fade" />
      </header>
    </>
  );
};

export default HeaderOverlay;