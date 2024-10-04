import '../styles/Footer.css';
import { Box, Flex, IconButton, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const color = useColorModeValue('gray.900', 'white');

    return (
        <Box as="footer" bg={bg} color={color} py={6} px={8}>
            <Flex justify="center" align="center" gap={6}>
                <Link href="https://www.linkedin.com/in/jaden-choi-16a541227/" isExternal>
                    <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} variant="ghost" colorScheme="linkedin" />
                </Link>
                <Link href="https://github.com/ErrorgodxD" isExternal>
                    <IconButton aria-label="Github" icon={<FaGithub />} variant="ghost" colorScheme="gray" />
                </Link>
                <Link href="mailto:bigdragon00@naver.com" isExternal>
                    <IconButton aria-label="Email" icon={<FaEnvelope />} variant="ghost" colorScheme="teal" />
                </Link>
            </Flex>
            <Text textAlign="center" fontSize="sm" mt={4}>
                © 2024 Jaden CHOI. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;