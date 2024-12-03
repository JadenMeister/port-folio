import React from 'react';
import '../styles/Info.css';
import {useColorModeValue, Box, Heading, SimpleGrid, Text, Flex, VStack, Center, Switch, FormLabel, } from "@chakra-ui/react";
import {FaUser,  FaEnvelope, FaUniversity, FaGraduationCap, FaMapMarkerAlt, FaIdCard} from "react-icons/fa";
import { useLanguage } from './LanguageSwitchToggle.jsx';




const InfoBox = ({ title, content, icon, isPrivate = false }) => (
    <Box className="info-box" position="relative">
        <Flex alignItems="center" mb={2}>
            {icon}
            <Text fontWeight="bold" ml={2}>{title}</Text>
        </Flex>
        <Text className={isPrivate ? "private-info" : ""} fontWeight="bold" ml={2} position="relative">
            {content}
        </Text>
    </Box>
);



const Info = () => {
    const labelColor = useColorModeValue("gray.800", "white");


    const { isEnglish, setIsEnglish } = useLanguage();

    const infoData = {
        ko:[
        { title: "이름", content: "최정민", icon: <FaUser />, isPrivate: false },
        { title: "직무", content: "프론트앤드 개발자", icon: <FaIdCard />, isPrivate: false },
        { title: "이메일", content: "bigdragon00@naver.com", icon: <FaEnvelope />, isPrivate: true },
        { title: "학교", content: "건양대학교", icon: <FaUniversity />, isPrivate: false },
        { title: "전공", content: "사이버보안공학", icon: <FaGraduationCap />, isPrivate: false },
        { title: "주소지", content: "대전광역시", icon: <FaMapMarkerAlt />, isPrivate: false },
    ],
        en:[
            { title: "Name", content: "CHOI Jeongmin/Jaden", icon: <FaUser />, isPrivate: false },
            { title: "Position", content: "Frontend developer", icon: <FaIdCard />, isPrivate: false },
            { title: "Email", content: "error10901@gmail.com", icon: <FaEnvelope />, isPrivate: true },
            { title: "University", content: "Konyang university", icon: <FaUniversity />, isPrivate: false },
            { title: "Department", content: "Cyber Security Engineering", icon: <FaGraduationCap />, isPrivate: false },
            { title: "Location", content: "Daejeon, South Korea", icon: <FaMapMarkerAlt />, isPrivate: false },
        ],


};

    return (
        <VStack className="Info_container" align="stretch" spacing={4}>

                <Heading className="Info_heading" as="h2" fontSize="xl" fontWeight="bold">
                    INFORMATION
                </Heading>

                <Flex justifyContent="flex-end">
                    <FormLabel htmlFor="language_switch" mb="0" mr={2} color={labelColor}>
                        {isEnglish ? "EN" : "KO"}

                    </FormLabel>
                    <Switch
                        id="language_switch"
                        onChange={() => setIsEnglish(!isEnglish)}
                        isChecked={isEnglish}
                        colorScheme="teal"
                    />
                </Flex>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {infoData[isEnglish ? "en" : "ko"].map((info, index) => (
                    <InfoBox
                        key={index}
                        title={info.title}
                        content={info.content}
                        icon={info.icon}
                        isPrivate={info.isPrivate}
                    />
                ))}
            </SimpleGrid>
        </VStack>
    );
};

export default Info;