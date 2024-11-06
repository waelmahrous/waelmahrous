import { Box, Typography } from '@mui/material'

function Footer() {
    return (
        <Box sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end"
        }}>
            <Typography variant="body1" gutterBottom>
                Made with React!
            </Typography>
        </Box>
    )
}

export default Footer