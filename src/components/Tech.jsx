import React from 'react';
import '../styles/Tech.css';
import { Box, Flex, Heading, SimpleGrid, Text, VStack, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCloud } from "react-icons/fa";
import { SiTypescript, SiPython, SiJavascript, SiMysql, SiMongodb, SiExpress, SiNextdotjs, SiRedux, SiVisualstudiocode, SiWebstorm, SiKalilinux, SiNaver } from "react-icons/si";

const TechIcon = ({ icon: Icon, name, color }) => (
    <WrapItem>
        <VStack
            className="tech-icon"
            position="relative"
            _hover={{
                "& svg": { color: color },
                "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    backgroundColor: color,
                    opacity: 0.1,
                    zIndex: -1,
                    borderRadius: "5px",
                }
            }}
        >

            <Icon size="2em"/>
            <Text fontSize="xs">{name}</Text>
        </VStack>
    </WrapItem>
);

const TechBox = ({ title, items }) => (
    <Box className="tech_box">
        <Text fontWeight="bold" mb={2}>{title}</Text>
        <Wrap spacing={4}>
            {items.map((item, index) => (
                <TechIcon key={index} icon={item.component} name={item.name} color={item.color} />
            ))}
        </Wrap>
    </Box>
);

const Tech = () => {
    const techData = [
        {
            title: "Languages",
            items: [
                { component: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                { component: SiTypescript, name: "TypeScript", color: "#3178C6" },
                { component: SiPython, name: "Python", color: "#3776AB" },
                { component: FaHtml5, name: "HTML5", color: "#E34F26" },
                { component: FaCss3Alt, name: "CSS3", color: "#1572B6" },
                { component: FaSass, name: "Sass", color: "#CC6699" },
            ]
        },
        {
            title: "Frameworks & Libraries",
            items: [
                { component: FaReact, name: "React", color: "#61DAFB" },
                { component: SiNextdotjs, name: "Next.js", color: "#000000" },
                { component: SiExpress, name: "Express", color: "#000000" },
                { component: FaNodeJs, name: "Node.js", color: "#339933" },
                { component: SiRedux, name: "Redux", color: "#764ABC" },
            ]
        },
        {
            title: "Databases",
            items: [
                { component: SiMysql, name: "MySQL", color: "#4479A1" },
            ]
        },
        {
            title: "Tools & IDEs",
            items: [
                { component: FaGitAlt, name: "Git", color: "#F05032" },
                { component: FaGithub, name: "GitHub", color: "#181717" },
                { component: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
                { component: SiWebstorm, name: "WebStorm", color: "#000000" },
                { component: SiKalilinux, name: "Kali Linux", color: "#557C94" },
            ]
        },
        {
            title: "Cloud Services",
            items: [
                { component: SiNaver, name: "NAVER Cloud", color: "#03C75A" },
                { component: FaCloud, name: "KT Cloud", color: "#000000" },
            ]
        },
    ];

    return (
        <VStack className="Tech_container" align="stretch" spacing={4}>
            <Center>
                <Heading className="Tech_heading" as="h2" fontSize="xl" fontWeight="bold">
                    SKILLS
                </Heading>
            </Center>
            <SimpleGrid columns={[1, 2]} spacing={4} className="content_container">
                {techData.map((tech, index) => (
                    <TechBox key={index} title={tech.title} items={tech.items} />
                ))}
            </SimpleGrid>

        </VStack>
    );
};

export default Tech;