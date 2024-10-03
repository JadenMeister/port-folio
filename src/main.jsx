import {ChakraProvider,  Box} from "@chakra-ui/react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <Box minH="100vh" pb="10rem">
            <App/>
        </Box>
        <Footer />
    </ChakraProvider>
)
