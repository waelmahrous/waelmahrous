import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { PageContext } from '../Pages/PageProvider'

function Footer() {
    const { page } = useContext(PageContext)!
    return (
        <Box sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end"
        }}>
            {page?.key == "Home" &&
                <Typography variant="body1" gutterBottom>
                    Made with React!
                </Typography>}
        </Box>
    )
}

export default Footer