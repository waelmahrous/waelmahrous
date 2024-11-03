import { Box, Container, Link, Typography } from "@mui/material";

function MainDisplay() {
	return (
		<Container maxWidth="xl">
			<Box
				height={"100vh"}
				display={"flex"}
				// alignItems={"center"}
				justifyContent={"center"}
				flexDirection={"column"}
			>

				<Typography variant="h4" gutterBottom>
					Welcome.
				</Typography>

				<Typography variant="body1" gutterBottom>
					This site is still a work in progress, but feel free to connect with me on{' '}
					<Link href="https://www.linkedin.com/in/waelmahrous">
						LinkedIn
					</Link>{' '}
					in the meantime.
				</Typography>
			</Box>
		</Container>
	)
}

export default MainDisplay