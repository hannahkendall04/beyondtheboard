"use client";
import React from "react";

interface PageDividerProps {
  text?: string;
}

const PageDivider: React.FC<PageDividerProps> = ({ text }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .page-divider-wrap {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
        }

        .page-divider-inner {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 100%;
          max-width: 600px;
        }

        .page-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            to var(--dir, right),
            transparent,
            rgba(196, 168, 130, 0.45)
          );
        }

        .page-divider-line.left  { --dir: right; }
        .page-divider-line.right { --dir: left; }

        /* No-text: single centered gradient line */
        .page-divider-line.full {
          background: linear-gradient(
            to right,
            transparent,
            rgba(196, 168, 130, 0.45) 30%,
            rgba(196, 168, 130, 0.45) 70%,
            transparent
          );
          max-width: 480px;
        }

        .page-divider-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 300;
          color: #1a1714;
          letter-spacing: 0.06em;
          white-space: nowrap;
          margin: 0;
          line-height: 1;
        }

        .page-divider-ornament {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .page-divider-diamond {
          width: 5px;
          height: 5px;
          background: #c4a882;
          transform: rotate(45deg);
          opacity: 0.7;
        }
      `}</style>

      <div className="page-divider-wrap">
        <div className="page-divider-inner">
          {text ? (
            <>
              <div className="page-divider-line left" />
              <div className="page-divider-ornament">
                <div className="page-divider-diamond" />
                <h2 className="page-divider-text">{text}</h2>
                <div className="page-divider-diamond" />
              </div>
              <div className="page-divider-line right" />
            </>
          ) : (
            <div className="page-divider-line full" />
          )}
        </div>
      </div>
    </>
  );
};

export default PageDivider;