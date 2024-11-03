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
                color: props.colorMode === "dark" ? "#D8D8D8" : "gray.800",
                bg: props.colorMode === "dark" ? "gray.900" : "white",
            },
            "h1, h2, h3, h4, h5, h6, p, span, div": {
                color: props.colorMode === "dark" ? "black" : "gray.900",
            },
            ".text::before": {
                color: props.colorMode === "dark" ? "white" : "gray.800",
            }

        }),
    },
    components: {


        Heading: {
            baseStyle: (props) => ({
                color: props.colorMode === "dark" ? "gray" : "gray.800",
            }),
        },
        Button: {
            baseStyle: (props) => ({
                bg: props.colorMode === "dark" ? "purple.600" : "purple.500",
                color: "white",
                _hover: {
                    bg: props.colorMode === "dark" ? "purple.500" : "purple.600",
                },
            }),
        },
    },
});

export default theme;