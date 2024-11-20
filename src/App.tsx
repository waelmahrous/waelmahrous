import './App.css'

import { CssBaseline, ThemeProvider } from '@mui/material';

import MainDisplay from './components/MainDisplay/MainDisplay'
import { useThemeContext } from './theme/ContextProvider';
import { motion } from 'motion/react';
import { variants } from './animation/DefaultVariants';
import { PageProvider } from './components/Pages/PageProvider';

function App() {
    const { theme } = useThemeContext()

    return (
        <PageProvider>
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
        </PageProvider>
    );
}

export default App
