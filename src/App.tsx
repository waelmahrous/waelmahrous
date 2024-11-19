import './App.css'

import { CssBaseline, ThemeProvider } from '@mui/material';

import MainDisplay from './components/MainDisplay/MainDisplay'
import { useThemeContext } from './theme/ContextProvider';
import { motion } from 'motion/react';

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

function App() {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
            >
                <MainDisplay />
            </motion.div>
        </ThemeProvider>
    );
}

export default App
