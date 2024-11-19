import { Box, Container } from "@mui/material";
import Header from "../Header/Header";
import { PageProvider } from "../Pages/PageProvider";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

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
					<Box flex={1}>
						<Header />
					</Box>

					<Box flex={6}>
						<Content />
					</Box>

					<Box flex={1}>
						<Footer />
					</Box>
				</Box>
			</Container>
		</PageProvider>
	)
}

export default MainDisplay
