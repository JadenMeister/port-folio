import React from 'react';
import '../styles/Tech.css';
import { Box, Flex, Heading, SimpleGrid, Text, VStack, Center } from "@chakra-ui/react";
import { FaCode, FaDatabase, FaServer, FaMobile, FaCloud, FaLock } from "react-icons/fa";

const TechBox = ({ title, content, icon }) => (
    <Box className="tech_box">
        <Flex alignItems="center" mb={2}>
            {icon}
            <Text fontWeight="bold" ml={2}>{title}</Text>
        </Flex>
        <Text>{content}</Text>
    </Box>
);

const Tech = () => {
    const techData = [
        { title: "프로그래밍 언어", content: "JavaScript, Python, Java", icon: <FaCode /> },
        { title: "데이터베이스", content: "MySQL, MongoDB", icon: <FaDatabase /> },
        { title: "백엔드", content: "Node.js, Express", icon: <FaServer /> },
        { title: "모바일 개발", content: "React Native", icon: <FaMobile /> },
        { title: "클라우드", content: "AWS, Azure", icon: <FaCloud /> },
        { title: "보안", content: "네트워크 보안, 암호화", icon: <FaLock /> },
    ];

    return (
        <VStack className="Tech_container" align="stretch" spacing={4}>
            <Center>
                <Heading className="Tech_heading" as="h2" fontSize="xl" fontWeight="bold">
                    TECH SKILL
                </Heading>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} spacing={4} className="content_container">
                {techData.map((tech, index) => (
                    <TechBox key={index} title={tech.title} content={tech.content} icon={tech.icon} />
                ))}
            </SimpleGrid>
        </VStack>
    );
};

export default Tech;