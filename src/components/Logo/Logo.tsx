import { Box, Button, Link } from '@mui/material'


import { LinkedIn, Instagram, GitHub } from '@mui/icons-material';

function Logo() {
    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}
        >
            <Link href={"https://github.com/waelmahrous"} component={Button}>
                <GitHub />
            </Link>

            <Link href={"https://instagram.com/_waelbm"} component={Button}>
                <Instagram />
            </Link>

            <Link href={"https://linkedin.com/in/waelmahrous"} component={Button}>
                <LinkedIn />
            </Link>

        </Box>
    )
}

export default Logo