import '../styles/Edu.css'
import {Box, Heading, SimpleGrid, VStack, Center, Text, Flex, FormLabel, Switch} from "@chakra-ui/react";
import React from "react";
import {useLanguage} from "./LanguageSwitchToggle.jsx";

const Edus = () => {

    const { isEnglish, setIsEnglish } = useLanguage();

    const eduData = {

        ko: [
            {
                id: 0,
                title: "사이버보안공학과 졸업",
                description: "건양대학교",
                date: "2019 - 2025.02",
            },
            {
                id: 1,
                title: "영미영어문화 연계전공",
                description: "건양대학교",
                date: "2023 - 2025.02",
            },
            {
                id: 2,
                title: "[자격]리눅스마스터2급",
                description: "KAIT 자격검정 리눅스마스터 2급",
                date: "2021",
            },
            {
                id: 3,
                title: "[수상] 2022 제1회 건양대학교 사이버보안학과 학술제 (3위)",
                description: "일상생활속 해킹기법 '사회공학적기법: 스캠' 주제로 발표",
                date: "2022",
            },
            {
                id: 4,
                title: "[교육] NAVER CLOUD ACADEMY",
                description: "2024 하반기 네이버클라우드 아카데미 교육 수료 예정",
                date: "2024",
            },
            {
                id: 5,
                title: "[자격] NAVER CLOUD PLATFORM Certified Associate",
                description: "네이버클라우드 플랫폼 Associate Level",
                date: "2024",
            },
            {
                id: 6,
                title: "[교육] KISA 민간 SW개발보안 대학생 교육 ",
                description: " KISA 2023년 민간 SW개발보안 대학생 교육(입문과정)",
                date: "2023",
            },
            {
                id: 7,
                title: "[자격] ISO 27001 정보보호 관리체계 인증심사원",
                description: "ISO 27001 정보보호 관리체계 인증심사원(보)",
                date: "2024",
            },

        ],

        en:[
            {
                id: 0,
                title: "Graduated Cyber Security Engineering",
                description: "Konyang University",
                date: "2019 - 2025.02",
            },
            {
                id: 1,
                title: "English-American English Culture Linked Major",
                description: "Konyang University",
                date: "2023 - 2025.02",
            },
            {
                id: 2,
                title: "[Certification]Linux Master level 2",
                description: "KAIT qualification examination Linux Master Level 2",
                date: "2021",
            },
            {
                id: 3,
                title: "[Award] 2022 1st Konyang University Academic Festival of Cybersecurity (3rd place) ",
                description: "Hacking Techniques in Daily Life Presented under the theme of 'Social Engineering Techniques: Scam'",
                date: "2022",
            },
            {
                id: 4,
                title: "[Education] NAVER CLOUD ACADEMY",
                description: "NAVER Cloud Academy training scheduled for the second half of 2024",
                date: "2024",
            },
            {
                id: 5,
                title: "[Education] KISA Private SW Development Security College Student Education",
                description: " KISA 2023 Private SW Development Security College Student Education (Introductory Course)",
                date: "2023",
            },

        ]

    }

    return (
        <VStack className="edu_container" align="stretch" spacing={4}>

                <Heading className="edu_heading" as="h2" fontSize="xl" fontWeight="bold">
                    EDUCATIONS & <br/> CERTIFICATIONS
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {eduData[isEnglish ? "en" : "ko"].map((edu) => (
                        <Box
                            key={edu.id}
                            className="edu_box"
                            p={6}
                            borderRadius="lg"
                            bg="white"
                            boxShadow="sm"
                            _hover={{
                                transform: 'translateY(-5px)',
                                boxShadow: 'md'
                            }}
                            transition="all 0.3s ease"
                        >
                            <Heading
                                as="h3"
                                size="md"
                                mb={2}
                                color="gray.700"
                            >
                                {edu.title}
                            </Heading>
                            <Text color="gray.600" mb={2}>
                                {edu.description}
                            </Text>
                            {edu.date && (
                                <Text
                                    color="gray.500"
                                    fontSize="sm"
                                    mt={2}
                                >
                                    {edu.date}
                                </Text>
                            )}
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>
    );
};

export default Edus;