import { Box, Button, Link, Typography } from "@mui/material";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import { useContext, useEffect } from "react";
import { PageContext } from "../Pages/PageProvider";
import Terminal from "../Pages/Terminal/Terminal";

function Navigation() {
    const { page, setPage, setLanded } = useContext(PageContext)!;

    useEffect(() => { setLanded(true) }, [page])

    return (
        <Box sx={{
            height: "100%",
            width: "100%",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Link component={Button} onClick={() => setPage(<Home key={"Home"} />)}>
                <Typography variant="h5"> Home </Typography>
            </Link>
            <Link component={Button} onClick={() => setPage(<Terminal key={"Terminal"} />)}>
                <Typography variant="h5"> Terminal </Typography>
            </Link>
            <Link disabled component={Button} onClick={() => setPage(<Contact key={"Contact"} />)}>
                <Typography variant="h5"> Contact </Typography>
            </Link>
        </Box>
    )
}

export default Navigation
