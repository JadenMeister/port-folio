import {ChakraProvider,  Box} from "@chakra-ui/react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import theme from "./components/theme.js";
import { LanguageProvider } from './components/LanguageSwitchToggle.jsx';


createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <LanguageProvider>
        <Navbar/>
        <Box>
            <App/>
        </Box>
        {/*<Info/>*/}
        {/*<Tech/>*/}
        {/*<Projects/>*/}
        <Footer />
        </LanguageProvider>
    </ChakraProvider>
)
