import { Box, Link, Typography } from '@mui/material'

function Home() {
    return (
        <Box sx={{
            height: "100%",
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"

        }}>
            <Typography variant="h3" gutterBottom width={"100%"}>
                Welcome.
            </Typography>

            <Typography variant="body1" gutterBottom width={"100%"}>
                This site is still a work in progress, but feel free to connect with me on{' '}
                <Link href="https://www.linkedin.com/in/waelmahrous">
                    LinkedIn
                </Link>{' '}
                in the meantime.
            </Typography>

            <Typography variant="body1" gutterBottom width={"100%"}>
                Currently displaying <b>{page?.key}</b> ...
            </Typography>
        </Box>
    )
}

export default Home