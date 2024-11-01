import '../styles/Projects.css'
import { Box, Heading, SimpleGrid, VStack, Center } from "@chakra-ui/react";
import React from "react";

const ProjectBox = ({ title, description }) => (
    <Box className="project-box" position="relative">
        {/* 프로젝트 박스 내용 */}
    </Box>
);

const Projects = () => {
    const projectsData = [
        // 프로젝트 데이터를 여기에 추가
    ];

    return (
        <VStack className="Project_container" align="stretch" spacing={4}>
            <Center>
                <Heading className="Project_heading" as="h2" fontSize="xl" fontWeight="bold">
                    Project
                </Heading>
            </Center>
        </VStack>
    );
};

export default Projects;