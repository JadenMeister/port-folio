import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const systemConfig = defineConfig({
    // 전역 스타일 v2 버전 그대로 사용
    globalCss: {
        body: {
            bg: "bodyBg",
            color: "bodyColor",
        },
        "h1, h2, h3, h4, h5, h6, p, span, div": {
            color: "headingColor",
        },
        ".text::before": {
            color: "beforeTextColor",
        },
    },

    theme: {
        tokens: {
            colors: {
                // semanticTokens 에서 참조할 이름만 정의
                bodyBg:    { default: { value: "white"    }, _dark: { value: "gray.900"  } },
                bodyColor: { default: { value: "gray.800" }, _dark: { value: "#D8D8D8" } },
                headingColor:   { default: { value: "gray.900" }, _dark: { value: "black" } },
                beforeTextColor:{ default: { value: "gray.800" }, _dark: { value: "white" } },
            },
        },
        components: {
            Heading: {
                baseStyle: {
                    color: "headingColor",
                },
            },
            Button: {
                baseStyle: {
                    bg: "purple.500",
                    color: "white",
                    _hover: { bg: "purple.600" },
                    // 다크 모드 오버라이드
                    _dark: {
                        bg: "purple.600",
                        _hover: { bg: "purple.500" },
                    },
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, systemConfig);

export default system;