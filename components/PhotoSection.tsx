"use client";
import React from "react";
import Image from "next/image";
import TextSection from "./TextSection";

interface PhotoSectionProps {
  imageUrl: string;
  sectionHeader?: string;
  sectionSubheader?: string;
  sectionText: string[];
  direction: string;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({
  imageUrl,
  sectionText,
  direction,
  sectionHeader,
  sectionSubheader,
}) => {
  const isLeft = direction === "left";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .photo-section {
          width: 100%;
          box-sizing: border-box;
        }

        .photo-section-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: ${isLeft ? "row" : "row-reverse"};
          align-items: center;
          gap: 64px;
          justify-content: space-between;
        }

        .photo-section-image-wrap {
          position: relative;
          width: 100%;
          max-width: 500px;
          min-height: 350px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .photo-section-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(196, 168, 130, 0.25);
          pointer-events: none;
          z-index: 1;
        }

        .photo-section-image-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.88);
          transition: filter 0.4s ease, transform 0.6s ease;
        }

        .photo-section-image-wrap:hover img {
          filter: saturate(1);
          transform: scale(1.02);
        }

        .photo-section-text {
          flex: 1;
          min-width: 0;
        }

        @media (max-width: 768px) {
          .photo-section-inner {
            flex-direction: column !important;
            gap: 40px;
          }

          .photo-section-image-wrap {
            max-width: 100%;
            min-height: 280px;
          }
        }

        @media (prefers-color-scheme: dark) {
          .photo-section-image-wrap::after {
            border-color: rgba(168, 134, 90, 0.2);
          }

          .photo-section-image-wrap img {
            filter: saturate(0.78) brightness(0.92);
          }

          .photo-section-image-wrap:hover img {
            filter: saturate(0.95) brightness(0.97);
          }
        }
      `}</style>

      <section className="photo-section">
        <div className="photo-section-inner">
          <div className="photo-section-image-wrap">
            <Image
              src={imageUrl}
              alt={sectionHeader ?? "section image"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="photo-section-text">
            <TextSection
              sectionContent={sectionText}
              sectionHeader={sectionHeader}
              sectionSubheader={sectionSubheader}
              isPhoto={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoSection;