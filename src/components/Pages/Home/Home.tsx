import { Box, Link, Typography } from '@mui/material'
import Terminal from '../../Terminal/Terminal'

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
            <Terminal />
        </Box>
    )
}

export default Home