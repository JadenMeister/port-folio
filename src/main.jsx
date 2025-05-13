import { ChakraProvider,Box } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "./components/Theme.js";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer.jsx";

import Navbar from "./components/Navbar.jsx";
import { LanguageProvider } from './components/LanguageSwitchToggle.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <ChakraProvider value={system}>
        <LanguageProvider>
          <Navbar />
          <Box>
            <App />
          </Box>
          <Footer />
        </LanguageProvider>
      </ChakraProvider>
    </ThemeProvider>
);

