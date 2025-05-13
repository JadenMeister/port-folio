import {Box, } from "@chakra-ui/react";
import {useColorMode, useColorModeValue} from "@chakra-ui/system";
import {motion} from "framer-motion";


const AnimationToggle = () => {
    const {toggleColorMode} = useColorMode();
    const isDark = useColorModeValue(false, true);

    return(

    <Box
        as={"button"}
        onClick={toggleColorMode}
        bg={useColorModeValue("gray.100", "gray.700")}
        border={"2px solid"}
        borderColor={useColorModeValue("gray.200", "gray.600")}
        rounded={"full"}
        w="60px"
        h="30px"
        position="relative"
        tranistion={"background-color 0.2s ease"}>

        <motion.div
            style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                position: "absolute",
                top: "1px",
                left:'2px',
            }}
            animate={{
                translateX: isDark ? '28px' : '0px',
                backgroundColor: isDark ? '#805AD5' : '#FBD38D',
            }}
            transition={{duration: 0.2, ease: 'easeInOut'}}>

            <svg
                xmlns={"http://www.w3.org/2000/svg"}
                viewBox={"0 0 24 24"}
                fill={"currentColor"}
                width={"16px"}
                height={"16px"}
                style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
            >
                {isDark ? (
                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                ) : (
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                )}
            </svg>

        </motion.div>


    </Box>
    );
}

export default AnimationToggle;