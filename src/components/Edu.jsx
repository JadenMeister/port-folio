import '../styles/Edu.css'
import { Box, Heading, SimpleGrid, VStack, Center, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Edus = () => {  // 컴포넌트 이름은 대문자로 시작
    const eduData = [
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
            date: "2023 - 2024",
        },
        {
            id: 2,
            title: "[자격]리눅스마스터2급",
            description: "KAIT 자격검정 리눅스마스터 2급",
            date: "2021",
        },
        {
            id: 3,
            title: "[교육] NAVER CLOUD ACADEMY",
            description: "2024 하반기 네이버클라우드 아카데미 교육 수료",
            date: "2024",
        },
        {
            id: 4,
            title: "[교육] KISA 민간 SW개발보안 대학생 교육 ",
            description: " KISA 2023년 민간 SW개발보안 대학생 교육(입문과정)",
            date: "2023",
        },
    ];

    return (
        <>
            <Center>
                <Heading className="edu_heading" as="h2" fontSize="xl" fontWeight="bold">
                    EDUCATIONS & <br/> CERTIFICATIONS
                </Heading>
            </Center>
            <VStack className="edu_container" align="stretch" spacing={4}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {eduData.map((edu) => (
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
        </>
    );
};

export default Edus;