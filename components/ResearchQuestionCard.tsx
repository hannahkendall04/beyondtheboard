"use client";
import React from "react";

interface ResearchQuestionCardProps {
  question: string;
  index?: number;
  href?: string;
}

const ResearchQuestionCard: React.FC<ResearchQuestionCardProps> = ({ question, index, href }) => {
  return (
    <>
      <style>{`
        .rq-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          min-height: 320px;
          padding: 32px 28px;
          box-sizing: border-box;
          background: #faf9f7;
          border: 1px solid #e2ddd8;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .rq-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 0;
          background: linear-gradient(to bottom, #c4a882, rgba(196, 168, 130, 0.2));
          transition: height 0.35s ease;
        }

        .rq-card:hover {
          border-color: rgba(196, 168, 130, 0.5);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        .rq-card:hover::before {
          height: 100%;
        }

        .rq-card-index {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          color: rgba(196, 168, 130, 0.2);
          line-height: 1;
          margin: 0;
          transition: color 0.3s ease;
          user-select: none;
        }

        .rq-card:hover .rq-card-index {
          color: rgba(196, 168, 130, 0.4);
        }

        .rq-card-body {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 16px 0;
        }

        .rq-card-question {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 400;
          font-style: italic;
          color: #1a1714;
          line-height: 1.5;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .rq-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #e2ddd8;
        }

        .rq-card-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9c8e7e;
        }

        .rq-card-arrow {
          display: flex;
          align-items: center;
          color: #c4a882;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .rq-card:hover .rq-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .rq-card-arrow svg {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
        }

        @media (prefers-color-scheme: dark) {
          .rq-card {
            background: #1c1916;
            border-color: #2e2a26;
          }

          .rq-card::before {
            background: linear-gradient(to bottom, #a8865a, rgba(168, 134, 90, 0.1));
          }

          .rq-card:hover {
            border-color: rgba(168, 134, 90, 0.4);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
          }

          .rq-card-index {
            color: rgba(168, 134, 90, 0.15);
          }

          .rq-card:hover .rq-card-index {
            color: rgba(168, 134, 90, 0.35);
          }

          .rq-card-question {
            color: #ede8e2;
          }

          .rq-card-footer {
            border-top-color: #2e2a26;
          }

          .rq-card-label {
            color: #7a6e62;
          }

          .rq-card-arrow {
            color: #a8865a;
          }
        }
      `}</style>

      <a className="rq-card" href={href ?? "#"}>
        {index !== undefined && (
          <p className="rq-card-index">0{index + 1}</p>
        )}

        <div className="rq-card-body">
          <h2 className="rq-card-question">{question}</h2>
        </div>

        <div className="rq-card-footer">
          <span className="rq-card-label">Research Question {index !== undefined ? index + 1 : ""}</span>
          <span className="rq-card-arrow">
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M14 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </a>
    </>
  );
};

export default ResearchQuestionCard;