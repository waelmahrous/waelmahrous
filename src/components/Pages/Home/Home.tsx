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
            flexDirection: "column"

        }}>
            <TerminalComponent />
        </Box>
    )
}

export default Home