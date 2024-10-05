import React from 'react';
import '../styles/Info.css';
import { Box, Heading, SimpleGrid, Text, Flex, VStack, Center } from "@chakra-ui/react";
import { FaUser, FaPhone, FaEnvelope, FaUniversity, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";


const InfoBox = ({ title, content, icon }) => (
    <Box className="info-box">
        <Flex alignItems="center" mb={2}>
            {icon}
            <Text fontWeight="bold" ml={2}>{title}</Text>
        </Flex>
        <Text fontWeight="bold" ml={2}>{content}</Text>
    </Box>
);

const Info = () => {
    const infoData = [
        { title: "이름", content: "최정민", icon: <FaUser /> },
        { title: "연락처", content: "010-5098-2483", icon: <FaPhone /> },
        { title: "이메일", content: "bigdragon00@naver.com", icon: <FaEnvelope /> },
        { title: "학교", content: "건양대학교", icon: <FaUniversity /> },
        { title: "전공", content: "사이버보안공학", icon: <FaGraduationCap /> },
        { title: "주소지", content: "대전광역시", icon: <FaMapMarkerAlt /> },
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
                    <InfoBox key={index} title={info.title} content={info.content} icon={info.icon} />
                ))}
            </SimpleGrid>
        </VStack>
    );
};

export default Info;