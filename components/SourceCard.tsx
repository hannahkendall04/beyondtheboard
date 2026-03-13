"use client";
import React, { useState } from "react";

interface SourceCardProps {
  title: string;
  citation: string;
  analysis: string;
  link?: string;
}

const SourceCard: React.FC<SourceCardProps> = ({ title, citation, analysis, link }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <style>{`
        .source-card {
          border-top: 1px solid #e2ddd8;
          padding: 28px 0;
          font-family: 'DM Sans', sans-serif;
        }

        .source-card:last-child {
          border-bottom: 1px solid #e2ddd8;
        }

        .source-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          cursor: pointer;
        }

        .source-card-left {
          flex: 1;
          min-width: 0;
        }

        .source-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1714;
          margin: 0 0 8px;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }

        .source-card-citation {
          font-size: 12px;
          font-weight: 400;
          color: #9c8e7e;
          margin: 0;
          line-height: 1.6;
          font-style: italic;
        }

        .source-card-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          padding-top: 4px;
        }

        .source-card-link {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c4a882;
          text-decoration: none;
          border-bottom: 1px solid rgba(196, 168, 130, 0.3);
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }

        .source-card-link:hover {
          color: #1a1714;
          border-color: #1a1714;
        }

        .source-card-link svg {
          width: 10px;
          height: 10px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }

        .source-card-toggle {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9c8e7e;
          padding: 0;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .source-card-toggle:hover {
          color: #1a1714;
        }

        .source-card-toggle svg {
          width: 12px;
          height: 12px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          transition: transform 0.25s ease;
        }

        .source-card-toggle svg.open {
          transform: rotate(180deg);
        }

        .source-card-analysis-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .source-card-analysis-wrap.open {
          max-height: 400px;
          opacity: 1;
        }

        .source-card-analysis {
          padding-top: 20px;
          padding-left: 20px;
          border-left: 2px solid rgba(196, 168, 130, 0.35);
          margin-top: 20px;
        }

        .source-card-analysis-eyebrow {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c4a882;
          margin: 0 0 10px;
        }

        .source-card-analysis-text {
          font-size: 13.5px;
          font-weight: 300;
          color: #4a4340;
          line-height: 1.8;
          margin: 0;
          font-style: normal;
        }

        @media (prefers-color-scheme: dark) {
          .source-card {
            border-top-color: #2e2a26;
          }

          .source-card:last-child {
            border-bottom-color: #2e2a26;
          }

          .source-card-title {
            color: #ede8e2;
          }

          .source-card-citation {
            color: #7a6e62;
          }

          .source-card-link {
            color: #a8865a;
            border-bottom-color: rgba(168, 134, 90, 0.3);
          }

          .source-card-link:hover {
            color: #ede8e2;
            border-color: #ede8e2;
          }

          .source-card-toggle {
            color: #7a6e62;
          }

          .source-card-toggle:hover {
            color: #ede8e2;
          }

          .source-card-analysis {
            border-left-color: rgba(168, 134, 90, 0.3);
          }

          .source-card-analysis-eyebrow {
            color: #a8865a;
          }

          .source-card-analysis-text {
            color: #b0a89e;
          }
        }
      `}</style>

      <div className="source-card">
        <div className="source-card-header" onClick={() => setExpanded((e) => !e)}>
          <div className="source-card-left">
            <h3 className="source-card-title">{title}</h3>
            <p className="source-card-citation">{citation}</p>
          </div>

          <div className="source-card-actions" onClick={(e) => e.stopPropagation()}>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="source-card-link">
                Visit
                <svg viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            <button className="source-card-toggle" onClick={() => setExpanded((e) => !e)}>
              Analysis
              <svg className={expanded ? "open" : ""} viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`source-card-analysis-wrap${expanded ? " open" : ""}`}>
          <div className="source-card-analysis">
            <p className="source-card-analysis-eyebrow">Annotation</p>
            <p className="source-card-analysis-text">{analysis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SourceCard;