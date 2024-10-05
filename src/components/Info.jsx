import React from 'react';
import '../styles/Info.css';
import { Box, Heading, SimpleGrid, Text, Flex, VStack, Center } from "@chakra-ui/react";
import {FaUser,  FaEnvelope, FaUniversity, FaGraduationCap, FaMapMarkerAlt, FaIdCard} from "react-icons/fa";

const InfoBox = ({ title, content, icon, isPrivate = false }) => (
    <Box className="info-box" position="relative">
        <Flex alignItems="center" mb={2}>
            {icon}
            <Text fontWeight="bold" ml={2}>{title}</Text>
        </Flex>
        <Text className={isPrivate ? "private-info" : ""} ml={2} position="relative">
            {content}
        </Text>
    </Box>
);

const Info = () => {
    const infoData = [
        { title: "이름", content: "최정민", icon: <FaUser />, isPrivate: false },
        { title: "직무", content: "프론트앤드 개발자", icon: <FaIdCard />, isPrivate: false },
        { title: "이메일", content: "bigdragon00@naver.com", icon: <FaEnvelope />, isPrivate: true },
        { title: "학교", content: "건양대학교", icon: <FaUniversity />, isPrivate: false },
        { title: "전공", content: "사이버보안공학", icon: <FaGraduationCap />, isPrivate: false },
        { title: "주소지", content: "대전광역시", icon: <FaMapMarkerAlt />, isPrivate: false },
    ];

    return (
        <VStack className="Info_container" align="stretch" spacing={4}>
            <Center>
                <Heading className="Info_heading" as="h2" fontSize="xl" fontWeight="bold">
                    INFO
                </Heading>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} spacing={4} className="content_container">
                {infoData.map((info, index) => (
                    <InfoBox key={index} title={info.title} content={info.content} icon={info.icon} isPrivate={info.isPrivate} />
                ))}
            </SimpleGrid>
        </VStack>
    );
};

export default Info;