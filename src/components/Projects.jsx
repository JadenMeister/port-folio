import '../styles/Projects.css'
import { Box, Heading, Modal, VStack, Center } from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";


const ProjectBox = ({ title, description }) => (
    <Box className="project-box" position="relative">

    </Box>
);

const Projects = () => {

    const [selectedModal, setSelectedModal] = useState(null);

    const settings = {
        dots: true,
        infinite: true, //무한슬라이드
        speed: 500,
        slidesToShow: 1,  // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        arrows:true,
    };


    const projectsData = [
        {
            id: 0,
            title: "Project 1",
            description: "설명",
            images:"",
            details:"",
            skills:"",
            github:"",
            site:"",
        }
    ];

    return (
        <VStack className="Project_container" align="stretch" spacing={4}>
            <>
                <Heading className="Project_heading" as="h2" fontSize="xl" fontWeight="bold">
                    Project
                </Heading>
            </>
        </VStack>
    );
};

export default Projects;