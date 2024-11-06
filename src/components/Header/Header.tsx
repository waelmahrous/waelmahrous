import { Box } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

function Header() {
    return (
        <Box sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row"
        }}>
            <Box flex={1}>
                <Logo />
            </Box>
            <Box flex={1}>
                <Navigation />
            </Box>
        </Box>
    )
}

export default Header