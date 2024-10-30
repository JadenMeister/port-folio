import React from 'react';
import { Link } from "@chakra-ui/react";
import '../styles/Navbar.css';
import ColorModeToggle from "./ColorModeToggle.jsx";

const links = [
    { id: 0, path: '/', title: 'Home' },
    { id: 1, path: 'info', title: 'Info' },
    { id: 2, path: 'tech', title: 'Tech' },
    { id: 3, path: 'projects', title: 'Projects' },
];

const Navbar = () => {
    const handleClick = (e, path) => {
        e.preventDefault();
        const element = document.getElementById(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="Nav_container">
            <div className="nav-left">
            <Link href="/" className="logo-container">
                <img src="/Images/apple-touch-icon.png" alt="logo" className="logo-image" />
            </Link>
            <div className="links">

                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={`#${link.path}`}
                        className="link"
                        onClick={(e) => handleClick(e, link.path)}
                    >
                        {link.title}
                    </Link>
                ))}

                <div className="toggle"> <ColorModeToggle/></div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;