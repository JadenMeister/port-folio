import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles: {
        global: (props) => ({
            body: {
                color: props.colorMode === "dark" ? "white" : "gray.800",
                bg: props.colorMode === "dark" ? "gray.900" : "white",
            },
        }),
    },
    components: {
        Button: {
            baseStyle: (props) => ({
                bg: props.colorMode === "dark" ? "purple.600" : "purple.500",
                color: "white",
                _hover: {
                    bg: props.colorMode === "dark" ? "purple.500" : "purple.600",
                },
            }),
        },
        Text: {
            baseStyle: (props) => ({
                color: props.colorMode === "dark" ? "black" : "gray.800",
            }),
        },

    },
});

export default theme;