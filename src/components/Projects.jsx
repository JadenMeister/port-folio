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
    ModalBody, Button, Link,
    useColorMode,
    useColorModeValue, IconButton
} from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaReact, FaNodeJs, FaGithub, } from "react-icons/fa";
import {SiMysql, SiExpress, SiNextdotjs, SiRedux,} from "react-icons/si";
import React from "react";




const Projects = () => {

    const { colorMode } = useColorMode();
    const modalBg = useColorModeValue('white', 'gray.800');  // 배경
    const textColor = useColorModeValue('gray.800', 'white');  // 텍스트
    const borderColor = useColorModeValue('gray.200', 'gray.600');  // 테두리

    const [selectedModal, setSelectedModal] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: false,
        variableWidth: false,
        vertical: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const projectsData = [
        {
            id: 0,
            title: "CARDANO R&D CENTER",
            description: "건양대학교 소재 한국 카르다노 블록체인 연구소 소속으로 제작/운영중인 프로젝트입니다. 국내 CARDANO ADA 홍보 및 정보 제공을 위한 웹사이트입니다.",
            images:"/Images/projects/cardano_project.png",
            details:"",
            skills:[
                { icon: <FaReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiExpress />, name: "Express" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiRedux />, name: "Redux" }
            ],
            github: <Link href="https://github.com/ErrorgodxD" isExternal>
                <IconButton aria-label="Github" icon={<FaGithub />} variant="ghost" colorScheme="white" />
            </Link>,
            site:"cardano.kr",
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
                <Box className="content_container" w="100%">
                    <Box w="100%" overflow="hidden">
                    <Slider {...settings}>
                        {projectsData.map((project) => (
                            <Box
                                key={project.id}
                                className="project_slide"
                                onClick={() => setSelectedModal(project)}
                                cursor="pointer"
                            >
                                <Box className="project_box">

                                    <Box className="project_info" p={4}>
                                        <Heading as="h3" size="md">{project.title}</Heading>
                                    </Box>

                                    <Flex direction={{base:"column", md:"row"}} gap={4} p={4}>
                                        <Box flex={{base:"1", md:"0.6"}}
                                        onClick={()=> setSelectedModal(project)}>
                                            <Image
                                                src={project.images}
                                                alt={project.title}
                                                className="project_image"
                                            />

                                        </Box>

                                    </Flex>

                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
                </Box>
            </VStack>

            {/*모달*/}

            <Modal
                isOpen={selectedModal !== null}
                onClose={() => setSelectedModal(null)}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent bg={modalBg} borderColor={borderColor}>
                    <ModalHeader color={textColor}>{selectedModal?.title}</ModalHeader>
                    <ModalCloseButton color={textColor}/>
                    <ModalBody pb={6}>
                        <Image
                            src={selectedModal?.images}
                            alt={selectedModal?.title}
                            borderRadius="md"
                            mb={4}
                        />
                        <Text fontSize="lg" mb={4} color={textColor} >
                            {selectedModal?.description}
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
                                        <Box color={colorMode === 'dark' ? 'white' : skill.color}>
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
                                    colorScheme={colorMode === 'dark' ? 'blue' : 'blue'}
                                    _hover={{
                                            bg: colorMode === 'dark' ? 'blue.500' : 'blue.600'}}
                                >
                                    WebSite
                                </Button>
                            )}
                            {selectedModal?.github && (
                                <Link href={`https://${selectedModal.site}`} isExternal>
                                    <IconButton
                                        aria-label="Website"
                                        icon={<FaGithub />}  // 웹사이트 아이콘 추가 필요
                                        variant="ghost"
                                        colorScheme={colorMode === 'dark' ? 'blue' : 'blue'}
                                    />
                                </Link>
                            )}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Projects;