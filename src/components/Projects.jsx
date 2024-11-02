import '../styles/Projects.css'
import {Box, Heading, Modal, VStack, Center, Image, Text, Flex} from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";




const Projects = () => {

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
            skills:"React, Next.js, Node.js (Express), Mysql, Redux,",
            github:"",
            site:"cardano.kr",
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
                                onClick={() => setSelectedModal(project.id)}
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
        </>
    );
};

export default Projects;