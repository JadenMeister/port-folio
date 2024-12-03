import '../styles/Projects.css'
import {
    Box,
    Heading,
    Modal,
    VStack,
    Center,
    Image,
    Text,
    Flex,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    Link,
    useColorMode,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaReact, FaNodeJs, FaGithub,FaGlobe } from "react-icons/fa";
import {SiMysql, SiExpress, SiNextdotjs, SiRedux,} from "react-icons/si";
import React from "react";

const Projects = () => {
    const { colorMode } = useColorMode();
    const modalBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    const [selectedModal, setSelectedModal] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    



    // 메인 슬라이더
    const mainSliderSettings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: true
    };

    // 모달 슬라이더
    const modalSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        adaptiveHeight: true,
        className: "modal-slider"
    };

    const projectsData = [
        {
            id: 0,
            title: "CARDANO.KR",
            description: "건양대학교 소재 한국 카르다노 블록체인 연구소 소속으로 제작/운영중인 프로젝트입니다. 국내 CARDANO ADA 홍보 및 정보 제공을 위한 웹사이트입니다.",
            images: [
                "/Images/projects/cardano_project.png",
                "/Images/projects/cardano_project2.png",
                "/Images/projects/cardano_project3.png"
            ],
            thumbnail: "/Images/projects/cardano_project.png",
            details:   [
                "[2인 프로젝트] 건양대학교 소재 한국 카르다노 블록체인 연구소 소속으로 국내 카르다노 ADA 사용자들을 위한 커뮤니티 사이트 입니다.",
                "KT클라우드를 사용해 서버를 운영중이며 Next.js와 Node.js를 사용해 프론트엔드와 백엔드를 구축하였습니다.",
                "Redux를 이용해 그래프를 적용하였고 해당 코인마켓의 API를 사용해 실시간 가격 정보를 제공하고 있습니다."
            ],
            skills: [
                { icon: <FaReact size={20} />, name: "React" },
                { icon: <SiNextdotjs size={20} />, name: "Next.js" },
                { icon: <FaNodeJs size={20} />, name: "Node.js" },
                { icon: <SiExpress size={20} />, name: "Express" },
                { icon: <SiMysql size={20} />, name: "MySQL" },
                { icon: <SiRedux size={20} />, name: "Redux" }
            ],
            github: (
                <Link href="https://github.com/ErrorgodxD" isExternal>
                    <IconButton
                        aria-label="Github"
                        icon={<FaGithub />}
                        variant="ghost"
                        colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'gray'}
                    />
                </Link>
            ),
            site: "cardano.kr",
            features: [
                "블록체인 정보 제공",
                "실시간 가격 정보",
                "커뮤니티 기능",
                "기술 문서 제공"
            ]
        }
    ];

    return (
        <>
            <Center>
                <Heading className="Project_heading" as="h2" fontSize="xl" fontWeight="bold">
                    Project
                </Heading>
            </Center>
            <VStack className="Project_container" align="stretch" spacing={4}>

                {projectsData.map((project) => (
                    <Box
                        key={project.id}
                        className="project_slide"
                        cursor="pointer"
                    >
                        <Box className="project_box" onClick={() => setSelectedModal(project)}>
                            <Flex
                                direction={{ base: "column", md: "row" }}
                                gap={6}
                                alignItems="center"
                                p={4}
                            >
                                <Box
                                    flex={{ base: "1", md: "0.4" }}
                                    minWidth={{ base: "100%", md: "300px" }}
                                    className="main-slider-container"
                                    onClick={(e) => {
                                        e.stopPropagation();  // 이벤트 버블링 방지
                                    }}
                                >
                                    <Slider {...mainSliderSettings}>
                                        {project.images.map((img, index) => (
                                            <div key={index}>
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} ${index + 1}`}
                                                    className="project_image"
                                                    borderRadius="md"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </Box>
                                <Box
                                    flex={{ base: "1", md: "0.6" }}
                                    onClick={() => setSelectedModal(project)}
                                    cursor="pointer"
                                >
                                    <Heading as="h3" size="md" mb={4}>{project.title}</Heading>
                                    <Text color={textColor} mb={4}>{project.description}</Text>
                                    <Flex gap={2} flexWrap="wrap">
                                        {project.skills.map((skill, index) => (
                                            <Flex
                                                className="skill_tag"
                                                key={index}
                                                align="center"
                                                gap={1}
                                                p={1}
                                                borderRadius="md"
                                                bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                                            >
                                                <Box color={colorMode === 'dark' ? 'white' : 'gray.600'}>
                                                    {skill.icon}
                                                </Box>
                                                <Text fontSize="sm" color={textColor}>{skill.name}</Text>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </VStack>

            {/* 모달 */}
            <Modal
                isOpen={selectedModal !== null}
                onClose={() => setSelectedModal(null)}
                size="4xl"
                isCentered
            >

                <ModalOverlay />
                <ModalContent bg={modalBg} borderColor={borderColor}>
                    <ModalHeader color={textColor}>{selectedModal?.title}</ModalHeader>
                    <ModalCloseButton color={textColor}/>
                    <ModalBody pb={6}>
                        <div className="modal-slider-container">
                            <Slider {...modalSettings}>
                                {selectedModal?.images?.map((img, index) => (
                                    <div key={index} className="modal-slide">
                                        <Image
                                            src={img}
                                            alt={`${selectedModal.title} ${index + 1}`}
                                            className="modal-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <Text fontSize="lg" mb={4} color={textColor} mt={8}>
                            {selectedModal?.details}
                        </Text>

                        <Box mb={4}>
                            <Text fontWeight="bold" fontSize="lg" mb={2} color={textColor}>
                                주요 기능
                            </Text>
                            {selectedModal?.features.map((feature, index) => (
                                <Text key={index} ml={4} mb={1} color={textColor}>
                                    • {feature}
                                </Text>
                            ))}
                        </Box>
                        <Box mb={4}>
                            <Text fontWeight="bold" fontSize="lg" mb={2} color={textColor}>
                                사용 기술
                            </Text>
                            <Flex gap={3} flexWrap="wrap">
                                {selectedModal?.skills.map((skill, index) => (
                                    <Flex
                                        key={index}
                                        align="center"
                                        gap={2}
                                        p={2}
                                        borderRadius="md"
                                        bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                                    >
                                        <Box color={colorMode === 'dark' ? 'white' : 'gray.600'}>
                                            {skill.icon}
                                        </Box>
                                        <Text color={textColor}>{skill.name}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                        <Flex gap={4} mt={6}>
                            {selectedModal?.site && (
                                <Button
                                    as={Link}
                                    href={`https://${selectedModal.site}`}
                                    isExternal
                                    colorScheme="blue"
                                    leftIcon={<FaGlobe />}
                                >
                                    Website
                                </Button>
                            )}
                            {selectedModal?.github}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Projects;