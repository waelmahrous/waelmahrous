import { useContext } from 'react'
import { PageContext } from '../Pages/PageProvider'
import { AnimatePresence, motion } from 'motion/react'
import { variants } from '../../animation/DefaultVariants'

function Content() {
    const { page } = useContext(PageContext)!

    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div key={page?.key} style={{ width: "100%", height: "100%" }}
                    variants={variants}
                    initial="hidden"
                    animate="visibleFast"
                    exit="hidden"
                >
                    {page}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Content
