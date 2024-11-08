import { Box, Container } from "@mui/material";
import Home from "../Pages/Home/Home";
import Header from "../Header/Header";
import { PageProvider } from "../Pages/PageProvider";
import Footer from "../Footer/Footer";

function MainDisplay() {
	return (
		<PageProvider>
			<Container maxWidth="xl">
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
						<Home />
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