import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
    palette: {
        primary: amber,
    },
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: "#fff",
                    secondary: grey[500],
                },
            }),
    },
});

export default theme;