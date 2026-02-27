"use client";
import React, { useState } from "react";

interface AboutCardProps {
  name: string;
  imageUrl: string;
  role: string;
  bio: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ name, imageUrl, role, bio }) => {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .about-card-scene {
          width: 300px;
          height: 400px;
          perspective: 1000px;
          margin-top: 16px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }

        .about-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        .about-card-scene.flipped .about-card-inner {
          transform: rotateY(180deg);
        }

        .about-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid #e2ddd8;
          background: #faf9f7;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
        }

        .about-card-back {
          transform: rotateY(180deg);
        }

        /* Front face */
        .card-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          filter: saturate(0.9);
          transition: filter 0.3s ease;
        }

        .about-card-scene:hover .card-image {
          filter: saturate(1.05);
        }

        .card-front-content {
          padding: 18px 20px 16px;
          border-top: 1px solid #e2ddd8;
        }

        .card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: #1a1714;
          margin: 0 0 3px;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        .card-role {
          font-size: 11px;
          font-weight: 500;
          color: #9c8e7e;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0;
        }

        .card-flip-hint {
          position: absolute;
          bottom: 14px;
          right: 18px;
          font-size: 10px;
          color: #c4b8a8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
        }

        .about-card-scene:hover .card-flip-hint {
          color: #9c8e7e;
        }

        .card-flip-hint svg {
          width: 12px;
          height: 12px;
        }

        /* Back face */
        .card-back-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          background: #1a1714;
          color: #faf9f7;
          position: relative;
        }

        .card-back-accent {
          width: 32px;
          height: 2px;
          background: #c4a882;
          margin-bottom: 20px;
        }

        .card-back-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #faf9f7;
          margin: 0 0 4px;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        .card-back-role {
          font-size: 10px;
          font-weight: 500;
          color: #c4a882;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin: 0 0 20px;
        }

        .card-back-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 20px;
        }

        .card-bio {
          font-size: 13px;
          line-height: 1.75;
          color: #c8bfb3;
          font-weight: 300;
          margin: 0;
          flex: 1;
        }

        .card-back-close {
          position: absolute;
          bottom: 18px;
          right: 20px;
          font-size: 10px;
          color: #5c544c;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.2s;
        }

        .about-card-scene:hover .card-back-close {
          color: #8c7e6e;
        }
      `}</style>

      <div
        className={`about-card-scene${isFlipped ? " flipped" : ""}`}
        onClick={() => setFlipped(!isFlipped)}
        role="button"
        aria-label={`${name} - ${isFlipped ? "Click to hide bio" : "Click to read bio"}`}
      >
        <div className="about-card-inner">
          {/* Front */}
          <div className="about-card-face">
            <img className="card-image" src={imageUrl} alt={name} />
            <div className="card-front-content">
              <h2 className="card-name">{name}</h2>
              <p className="card-role">{role}</p>
            </div>
            <span className="card-flip-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Bio
            </span>
          </div>

          {/* Back */}
          <div className="about-card-face about-card-back">
            <div className="card-back-inner">
              <div className="card-back-accent" />
              <h2 className="card-back-name">{name}</h2>
              <p className="card-back-role">{role}</p>
              <div className="card-back-divider" />
              <p className="card-bio">{bio}</p>
              <span className="card-back-close">← Back</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;