"use client";
import React from 'react';
import { Container, Stack, Box } from '@mui/material';
import Image from 'next/image';

interface PhotoSectionProps {
    imageUrl: string,
    sectionText: string,
    direction: string
}


const PhotoSection: React.FC<PhotoSectionProps> = ({ imageUrl, sectionText, direction }) => {

    const isLeft = direction === "left";


    return (
        <Container sx={{ py: 6 }}>
            <Stack
                direction={{
                    xs: "column",
                    md: isLeft ? "row" : "row-reverse",
                }}
                spacing={7}
                alignItems="center"
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 500,
                        height: 350,
                        borderRadius: 3,
                        overflow: "hidden",
                        flexShrink: 0,
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt="section image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 500,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <p>
                        {sectionText}
                    </p>
                </Box>
            </Stack>
        </Container>
    );


}


export default PhotoSection;