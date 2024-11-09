import { Box, Typography } from "@mui/material"
import TerminalComponent from "../../Terminal/TerminalComponent"

function Terminal() {
    return (
        <Box sx={{
            height: "100%",
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 5

        }}>
            <Box
                sx={{
                    position: "relative",
                    height: "100%",
                    width: "100%",

                    border: "1px solid rgb(51, 51, 51)"
                }}
            >
                <TerminalComponent />
            </Box>
            <Typography align="center" >
                The fireworks you see here, as well as on the homepage, are actually being generated on a server in my apartment in Malmö! <br />
                You are currently viewing a terminal session hosted through Gotty, with access provided via an ngrok tunnel.
            </Typography>
        </Box>
    )
}

export default Terminal