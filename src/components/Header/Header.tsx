import { Box } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

type Props = {}

function Header({ }: Props) {
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