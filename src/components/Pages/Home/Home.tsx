import { Box, Link, Typography } from '@mui/material'
import TerminalComponent from '../../Terminal/TerminalComponent'
import { motion } from 'motion/react'
import { variants } from '../../../animation/DefaultVariants'
import { PageContext } from '../PageProvider'
import { useContext } from 'react'

function Home() {
    const {landed} = useContext(PageContext)!

    return (
        <Box sx={{
            height: "100%",
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"

        }}>
            <Box sx={{
                height: "100%",
                width: "100%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

            }} flex={1}>

                <Typography variant="h3" gutterBottom width={"100%"}>
                    Welcome.
                </Typography>

                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={landed ? "visibleFast" : "visibleSlow"}
                >

                    <Typography variant="body1" gutterBottom width={"100%"}>
                        My name is Wael Mahrous, and I'm a 26-year-old recent CS graduate from Malmö University.
                        This site is still a work in progress, but feel free to connect with me on{' '}
                        <Link href="https://www.linkedin.com/in/waelmahrous">
                            LinkedIn
                        </Link>{' '}
                        in the meantime.
                        <br /> <br />
                        Or just enjoy the fireworks!
                    </Typography>

                </motion.div>

            </Box>
            <TerminalComponent />
        </Box>
    )
}

export default Home
