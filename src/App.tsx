import './App.css'

import { CssBaseline, ThemeProvider } from '@mui/material';

import MainDisplay from './components/MainDisplay/MainDisplay'
import { useThemeContext } from './theme/ContextProvider';
import { motion } from 'motion/react';
import { variants } from './animation/DefaultVariants';

function App() {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visibleFast"
            >
                <MainDisplay />
            </motion.div>
        </ThemeProvider>
    );
}

export default App
