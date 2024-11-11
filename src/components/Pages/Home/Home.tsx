import { Box, Link, Typography } from '@mui/material'
import TerminalComponent from '../../Terminal/TerminalComponent'

function Home() {
    return (
        <Box sx={{
            height: "100%",
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"

        }}>
            <Box sx={{
                height: "100%",
                width: "100%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

            }} flex={1}>
                <Typography variant="h3" gutterBottom width={"100%"}>
                    Welcome.
                </Typography>

                <Typography variant="body1" gutterBottom width={"100%"}>
                My name is Wael Mahrous, and I'm a 26-year-old recent CS graduate from Malmö University.
                    This site is still a work in progress, but feel free to connect with me on{' '}
                    <Link href="https://www.linkedin.com/in/waelmahrous">
                        LinkedIn
                    </Link>{' '}
                    in the meantime.
                    <br /> <br />
                    Or just enjoy the fireworks (it takes a few seconds to load)
                </Typography>
            </Box>

            <TerminalComponent />
        </Box>
    )
}

export default Home