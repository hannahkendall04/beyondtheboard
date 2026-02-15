"use client";
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

interface HeaderOverlayProps {
  imageUrl?: string,
  overlayTextPrimary: string,
  overlayTextSecondary?: string
}

const HeaderOverlay: React.FC<HeaderOverlayProps> = ({ imageUrl, overlayTextPrimary, overlayTextSecondary }) => {

  const imagePath = imageUrl ? imageUrl : "/images/chalkboard4.png" // alternative: "/images/default_background2.png"

  return (
    <Box
      sx={{
        width: "100%",
        height: "420px",
        position: "relative",
        overflow: "hidden",
        marginTop: 0,
        marginBottom: 2
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          opacity: 1 // temp transparent - 0.25 is good for overlay
        }}
      >
        <Image
          src={imagePath}
          alt="header-image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <h1 className="big-header">
          {overlayTextPrimary}
        </h1>
        {overlayTextSecondary && (
          <h2 className="title-subheader">
            {overlayTextSecondary}
          </h2>
        )}
        <br/>
      </Box>
    </Box>
  );
};

export default HeaderOverlay;
