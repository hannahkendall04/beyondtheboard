"use client";
import React from 'react';
import { Container, Stack, Box } from '@mui/material';
import Image from 'next/image';
import TextSection from './TextSection'

interface PhotoSectionProps {
    imageUrl: string,
    sectionHeader?: string,
    sectionSubheader?: string,
    sectionText: string,
    direction: string
}


const PhotoSection: React.FC<PhotoSectionProps> = ({ imageUrl, sectionText, direction, sectionHeader, sectionSubheader }) => {

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
                        minHeight: 350,
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
                <TextSection 
                    sectionContent={sectionText}
                    sectionHeader={sectionHeader}
                    sectionSubheader={sectionSubheader}
                    isPhoto={true}
                />
            </Stack>
        </Container>
    );


}


export default PhotoSection;