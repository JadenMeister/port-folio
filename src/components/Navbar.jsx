import React from 'react';
import {Box, Link } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/system";
import '../styles/Navbar.css';
import ColorModeToggle from "./ColorModeToggle.jsx";

const links = [
    { id: 0, path: '/', title: 'Home' },
    { id: 1, path: 'info', title: 'Info' },
    { id: 2, path: 'tech', title: 'Tech' },
    { id: 3, path: 'projects', title: 'Projects' },
    { id: 4, path: 'education', title: 'Education & Certifications' },
];

const Navbar = () => {
    const {colorMode} = useColorMode();
    const handleClick = (e, path) => {
        e.preventDefault();
        const element = document.getElementById(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box className="Nav_container"
             bg={colorMode === "dark" ? "gray.900" : "white"}
             color={colorMode === "dark" ? "#D8D8D8" : "gray.800"}>

            <Box className="nav-left">
            <Link href="/" className="logo-container">
                <img src="/Images/apple-touch-icon.png" alt="logo" className="logo-image" />
            </Link>
            <Box className="links">

                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={`#${link.path}`}
                        color={colorMode === "dark" ? "white" : "gray.700"}
                        fontWeight="600"
                        className="link"
                        onClick={(e) => handleClick(e, link.path)}
                    >

                        {link.title}
                    </Link>
                ))}

                <div className="toggle"> <ColorModeToggle/></div>
            </Box>
        </Box>
        </Box>
    );
};

export default Navbar;