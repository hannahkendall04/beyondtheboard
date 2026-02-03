"use client";
import { Box } from "@mui/material";

function Footer() {

    return (
        <Box sx={{
            position: 'relative',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: 2,
            height: 30,
            // bgcolor: 'var(--accent-2)',
            color: 'var(--accent-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        </Box>
    );
}


export default Footer;