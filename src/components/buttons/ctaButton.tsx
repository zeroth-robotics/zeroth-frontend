import React from "react";
import {motion} from "motion/react";
import {bgBlackDarkWhite, textWhiteDarkBlack, transitionEaseLinearDuration300} from "@/components/util/constants";

const CTAButton = () => {
    return (
        <motion.button
            className={"font-planar font-normal text-2xl px-4 py-2 select-none " +
                bgBlackDarkWhite + " hover:bg-kscale-orange " +
                transitionEaseLinearDuration300 + textWhiteDarkBlack}
            transition={{
                duration: 0.85,
                ease: "circOut",
                bounce: "spring",
            }}
            initial={{
                scale: 1,
                borderRadius: "0.375rem",
            }}
            whileHover={{
                scale: 0.95,
            }}>
            Order GPR 1.0
        </motion.button>
    );
};

export default CTAButton;