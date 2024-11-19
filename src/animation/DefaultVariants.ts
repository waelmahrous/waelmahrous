import { Variants } from "motion/react";

export const variants: Variants = {
    visibleFast: { opacity: 1 },
    visibleSlow: { opacity: 1, transition: { delay: 2, duration: 1 } },
    hidden: { opacity: 0 },
}
