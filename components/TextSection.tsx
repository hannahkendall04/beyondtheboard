"use client";
import { Stack, Box } from '@mui/material';
import React from 'react';

interface TextSectionProps {
    sectionContent: string,
    sectionHeader?: string,
    sectionSubheader?: string,
    isPhoto?: boolean
}


const TextSection: React.FC<TextSectionProps> = ({ sectionContent, sectionHeader, sectionSubheader, isPhoto }) => {

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: isPhoto ? 500 : "100%",
                minHeight: 250,
                display: "flex",
                alignItems: "left",
                alignSelf: "stretch",
                flexDirection: "column",
            }}
        >
            <Stack direction="column">
                {
                    sectionHeader ?
                    <h1>{sectionHeader}</h1> :
                    <div></div>
                }
                {
                    sectionSubheader ?
                    <h2>{sectionSubheader}</h2> :
                    <div></div>
                }
                <p>
                    {sectionContent}
                </p>
            </Stack>
        </Box>
    );

}

export default TextSection;