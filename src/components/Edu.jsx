import '../styles/Edu.css'
import { Box, Heading, SimpleGrid, VStack, Center } from "@chakra-ui/react";
import React from "react";

const eduBox = ({ title, description }) => (
    <Box className="edu-box" position="relative">

    </Box>
);

const edus = () => {
    const eduData = [
        // 프로젝트 데이터 부분
    ];

    return (
        <VStack className="edu_container" align="stretch" spacing={4}>
            <Center>
                <Heading className="edu_heading" as="h2" fontSize="xl" fontWeight="bold">
                    EDUCATIONS & <br/> CERTIFICATIONS
                </Heading>
            </Center>
        </VStack>
    );
};

export default edus;