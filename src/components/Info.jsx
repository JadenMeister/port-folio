import '../styles/Info.css';
import { Box, Heading } from "@chakra-ui/react";

const Info = () => {
    return (
            <Box className="Info_container">
                <Heading className="Info_heading" as="h1" fontSize="2xl" fontWeight="bold">
                    INFO
                </Heading>
            </Box>

    );
};

export default Info;