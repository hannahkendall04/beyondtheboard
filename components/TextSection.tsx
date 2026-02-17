"use client";
import { Stack, Box } from '@mui/material';
import React from 'react';

interface TextSectionProps {
    sectionContent: string[],
    sectionHeader?: string,
    sectionSubheader?: string,
    isPhoto?: boolean,
    link?: string
}


const TextSection: React.FC<TextSectionProps> = ({ sectionContent, sectionHeader, sectionSubheader, isPhoto, link }) => {

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: isPhoto ? 500 : "100%",
                minHeight: sectionContent.length !== 0 ? 250 : 0,
                display: "flex",
                alignItems: "left",
                alignSelf: "stretch",
                flexDirection: "column",
                marginTop: 10,
                borderLeft: "4px solid var(--accent-2)", 
                padding: 4,
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
                    <h2>
                        {
                            link && link !== "" ? <a className="hover:underline" href={link}>{sectionSubheader}</a> 
                            : sectionSubheader
                        }
                    </h2> :
                    <div></div>
                }
                {
                    sectionContent.map((content, index) => (
                        <div key={index}>
                            <p>
                                {content}
                            </p>
                            {
                                index === sectionContent.length - 1 ?
                                <></> :
                                <br />
                            }
                        </div>
                    ))
                }
            </Stack>
        </Box>
    );

}

export default TextSection;