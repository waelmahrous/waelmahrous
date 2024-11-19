import { Box, Container } from "@mui/material";
import Header from "../Header/Header";
import { PageProvider } from "../Pages/PageProvider";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { motion } from "motion/react";
import { variants } from "../../animation/DefaultVariants";

const MotionBox = motion("Box");

function MainDisplay() {
    return (
        <PageProvider>
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
                        animate="visibleSlow"
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

                    <MotionBox
                        variants={variants}
                        initial="hidden"
                        animate="visibleSlow"
                        style={{
                            flex: 1,
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row"
                        }}>
                        <Footer />
                    </MotionBox>
                </Box>
            </Container>
        </PageProvider>
    )
}

export default MainDisplay
