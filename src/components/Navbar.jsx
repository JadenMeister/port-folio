import { Link } from "@chakra-ui/react";
import '../styles/Navbar.css';

const links = [
    { id: 1, path: '/', title: 'Home' },
    { id: 2, path: '/Info', title: 'Information' },
    { id: 3, path: '/Projects', title: 'Projects' },
    { id: 4, path: '/Tech', title: 'Tech' },
];

const Navbar = () => {
    return (
        <div className="Nav_container">
            <Link href="/" className="logo">
                <img src="/Images/apple-touch-icon.png" alt="logo" style={{ width: '100%', height: '100%' }} />
            </Link>

            <div className="links">
                {links.map((link) => (
                    <Link key={link.id} href={link.path} className="link">
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;