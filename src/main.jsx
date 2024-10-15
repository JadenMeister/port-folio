import {ChakraProvider,  Box} from "@chakra-ui/react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import theme from "./components/theme.js";
import colorModeToggle from "./components/ColorModeToggle.jsx";
import Info from "./components/Info.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import ColorModeToggle from "./components/ColorModeToggle.jsx";

createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <Navbar/>
        <Header/>
        <Box>
            <ColorModeToggle/>
            <App/>
        </Box>
        {/*<Info/>*/}
        {/*<Tech/>*/}
        {/*<Projects/>*/}
        <Footer />
    </ChakraProvider>
)
