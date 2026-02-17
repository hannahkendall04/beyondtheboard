"use client";
import { Container, Button, Box, Link, Stack } from "@mui/material";
import React, { useState, useEffect } from 'react';

interface NavbarProps {
    route: string,
    scrollThreshold: number
}

const Navbar: React.FC<NavbarProps> = ({ route, scrollThreshold }) => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <Container>
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 10,
                width: '100%',
                padding: 2,
                height: 65,
                bgcolor: scrolled ? 'var(--accent-2)' : 'transparent',
                color: scrolled ? 'white' : 'var(--header-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.35s ease-in-out, color 0.35s ease-in-out'

            }}
            >
                <Stack direction="row" spacing={3} sx={{ width: '100%', justifyContent: 'flex-end', marginRight: 5 }}>
                    <Link href="/" underline="hover" sx={{ fontWeight: route == "home" ? 'bold' : 'normal', color: 'inherit' }}>HOME</Link>
                    <Link href="/about" underline="hover" sx={{ fontWeight: route == "about" ? 'bold' : 'normal', color: 'inherit' }}>ABOUT</Link>
                    <Link href="/data-critique" underline="hover" sx={{ fontWeight: route == "data" ? 'bold' : 'normal', color: 'inherit' }}>DATA CRITIQUE</Link>
                    <Link href="/narrative" underline="hover" sx={{ fontWeight: route == "narrative" ? 'bold' : 'normal', color: 'inherit' }}>NARRATIVE</Link>
                    <Link href="/sources" underline="hover" sx={{ fontWeight: route == "sources" ? 'bold' : 'normal', color: 'inherit' }}>SOURCES</Link>
                </Stack>
            </Box>
        </Container>
    );

}

export default Navbar;