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

  const imagePath = imageUrl ? imageUrl : "/images/default_background2.png"

  return (
    <Box
      sx={{
        width: "100%",
        height: "420px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          opacity: .2
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
        <h1>
          {overlayTextPrimary}
        </h1>
        {overlayTextSecondary && (
          <h2>
            {overlayTextSecondary}
          </h2>
        )}
      </Box>
    </Box>
  );
};

export default HeaderOverlay;
