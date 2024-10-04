import {ChakraProvider,  Box} from "@chakra-ui/react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Info from "./components/Info.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";

createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <Navbar/>
        <Header/>
        <Box minH="100vh" pb="10rem" gap="0">
            <App/>
        </Box>
        <Info/>
        <Tech/>
        <Projects/>
        <Footer />
    </ChakraProvider>
)
