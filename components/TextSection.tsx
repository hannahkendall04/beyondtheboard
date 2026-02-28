"use client";
import React from "react";

interface TextSectionProps {
  sectionContent: string[];
  sectionHeader?: string;
  sectionSubheader?: string;
  isPhoto?: boolean;
  link?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  sectionContent,
  sectionHeader,
  sectionSubheader,
  isPhoto,
  link,
}) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .text-section {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          ${sectionContent.length !== 0 ? "min-height: 250px;" : ""}
          display: flex;
          flex-direction: column;
          align-self: stretch;
          margin-top: 60px;
          padding: 0 0 0 24px;
          position: relative;
        }

        .text-section::before {
          content: '';
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 2px;
          background: linear-gradient(to bottom, #c4a882, rgba(196, 168, 130, 0.15));
        }

        .text-section-header {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          color: #1a1714;
          margin: 0 0 6px;
          letter-spacing: 0.01em;
          line-height: 1.15;
        }

        .text-section-subheader {
          font-size: 11px;
          font-weight: 500;
          color: #9c8e7e;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          margin: 0 0 20px;
        }

        .text-section-subheader a {
          color: #9c8e7e;
          text-decoration: none;
          border-bottom: 1px solid rgba(156, 142, 126, 0.35);
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
        }

        .text-section-subheader a:hover {
          color: #c4a882;
          border-color: #c4a882;
        }

        .text-section-divider {
          width: 32px;
          height: 1px;
          background: #e2ddd8;
          margin-bottom: 20px;
        }

        .text-section-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .text-section-paragraph {
          font-size: 14px;
          line-height: 1.8;
          color: #4a4340;
          font-weight: 300;
          margin: 0;
        }
      `}</style>

      <div className="text-section" style={{ maxWidth: isPhoto ? "500px" : "100%", marginBottom: 25 }}>
        {sectionHeader && (
          <h2 className="text-section-header">{sectionHeader}</h2>
        )}

        {sectionSubheader && (
          <p className="text-section-subheader">
            {link && link !== "" ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {sectionSubheader}
              </a>
            ) : (
              sectionSubheader
            )}
          </p>
        )}

        {(sectionHeader || sectionSubheader) && sectionContent.length > 0 && (
          <div className="text-section-divider" />
        )}

        {sectionContent.length > 0 && (
          <div className="text-section-body">
            {sectionContent.map((content, index) => (
              <p key={index} className="text-section-paragraph">
                {content}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TextSection;