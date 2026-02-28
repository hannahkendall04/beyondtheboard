"use client";
import React from "react";

interface NarrativeNavProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

const NarrativeNav: React.FC<NarrativeNavProps> = ({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}) => {
  return (
    <>
      <style>{`
        .narrative-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 0 8px;
          margin-top: 48px;
          border-top: 1px solid rgba(196, 168, 130, 0.25);
          font-family: 'DM Sans', sans-serif;
        }

        .narrative-nav-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #9c8e7e;
          text-decoration: none;
          border-bottom: none;
          padding-bottom: 0;
          transition: color 0.2s, gap 0.2s;
        }

        .narrative-nav-link:hover {
          color: #c4a882;
          border-bottom: none;
        }

        .narrative-nav-link.prev:hover {
          gap: 14px;
        }

        .narrative-nav-link.next:hover {
          gap: 14px;
        }

        .narrative-nav-arrow {
          display: flex;
          align-items: center;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .narrative-nav-link:hover .narrative-nav-arrow {
          opacity: 1;
        }

        .narrative-nav-arrow svg {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
        }

        .narrative-nav-label {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .narrative-nav-eyebrow {
          font-size: 9px;
          letter-spacing: 0.15em;
          color: #c4a882;
          opacity: 0.7;
        }

        .narrative-nav-link.next .narrative-nav-label {
          text-align: right;
        }
      `}</style>

      <nav className="narrative-nav">
        {prevHref ? (
          <a href={prevHref} className="narrative-nav-link prev">
            <span className="narrative-nav-arrow">
              <svg viewBox="0 0 24 24"><path d="M19 12H5M5 12l7 7M5 12l7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="narrative-nav-label">
              <span className="narrative-nav-eyebrow">Previous</span>
              {prevLabel}
            </span>
          </a>
        ) : <div />}

        {nextHref ? (
          <a href={nextHref} className="narrative-nav-link next">
            <span className="narrative-nav-label">
              <span className="narrative-nav-eyebrow">Next</span>
              {nextLabel}
            </span>
            <span className="narrative-nav-arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M14 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </a>
        ) : <div />}
      </nav>
    </>
  );
};

export default NarrativeNav;