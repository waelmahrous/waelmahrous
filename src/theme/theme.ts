import { PaletteMode } from "@mui/material";

export const defaultColors = {
    background: "rgb(21, 21, 21)",
    primary: "#a8a7a7",
    secondary: "#ff4532",
    tertiary: "#1ed760"
}

export const getDesignTokens = (mode: PaletteMode) => ({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },

    palette: {
        mode,
        primary: { main: defaultColors.primary },
        background: {
            default: defaultColors.background
        },
        text: {
            primary: defaultColors.primary,
            secondary: defaultColors.secondary,
            tertiary: defaultColors.tertiary
        },
    },

    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: defaultColors.secondary,
                    textDecoration: 'none',
                    '&:hover': {
                        color: defaultColors.tertiary
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true, // Disable ripple effect
            },
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "transparent", // Remove background on hover
                    },
                    "&:active": {
                        backgroundColor: "transparent", // Remove background on click
                    },
                    "&:focus": {
                        outline: "none", // Remove focus outline
                    },
                },
            },
        },
    },
});