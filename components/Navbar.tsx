"use client";
import { Container, Button, Box, Link, Typography, Stack, Menu, MenuProps, MenuItem } from "@mui/material";
import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface NavbarProps {
    route: string,
    scrollThreshold: number
}

const Navbar: React.FC<NavbarProps> = ({ route, scrollThreshold }) => {

    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <Stack direction="row" spacing={3} sx={{ width: '100%', justifyContent: 'flex-end', marginRight: 5, alignItems: 'center' }}>
                    <Link href="/" underline="hover" sx={{ fontWeight: route == "home" ? 'bold' : 'normal', color: 'inherit' }}>HOME</Link>
                    <Link href="/data-critique" underline="hover" sx={{ fontWeight: route == "data" ? 'bold' : 'normal', color: 'inherit' }}>DATA CRITIQUE</Link>
                    <Button 
                        onClick={handleClick}
                        sx={{ 
                            fontWeight: route == "narrative_1" ? 'bold' : 'normal', color: 'inherit',
                            fontSize: "inherit" 
                        }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<ExpandMoreIcon />}
                    >
                        NARRATIVE
                    </Button>
                        <Menu id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },}}
                            sx={{
                                width: 'inherit',
                                padding: 2
                            }}
                            >
                            <MenuItem onClick={handleClose}>
                                <Link href="narrative_1" underline="hover">Research Question 1</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="narrative_2" underline="hover">Research Question 2</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="narrative_3" underline="hover">Research Question 3</Link>
                            </MenuItem>
                        </Menu>
                    <Link href="/sources" underline="hover" sx={{ fontWeight: route == "sources" ? 'bold' : 'normal', color: 'inherit' }}>SOURCES</Link>
                </Stack>
            </Box>
        </Container>
    );

}

export default Navbar;