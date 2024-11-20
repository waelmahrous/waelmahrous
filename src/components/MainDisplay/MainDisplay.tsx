import { Box, Container } from "@mui/material";
import Header from "../Header/Header";
import { PageContext, PageProvider } from "../Pages/PageProvider";
import Content from "../Content/Content";
import { motion } from "motion/react";
import { variants } from "../../animation/DefaultVariants";
import { useContext } from "react";

const MotionBox = motion.create("div")

function MainDisplay() {
    const { landed } = useContext(PageContext)!

    return (
        <Container>
            <Box
                height={"100vh"}
                display={"flex"}

                justifyContent={"center"}
                flexDirection={"column"}
            >
                <MotionBox
                    variants={variants}
                    initial="hidden"
                    animate={landed ? "visibleFast" : "visibleSlow"}
                    style={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row"
                    }}>
                    <Header />
                </MotionBox>

                <Box flex={6}>
                    <Content />
                </Box>
            </Box>
        </Container>
    )
}

export default MainDisplay
