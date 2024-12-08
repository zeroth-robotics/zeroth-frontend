import React from "react";
import {motion} from "motion/react";

const CTAButton = () => {
    return (
        <motion.button
            transition={{
                duration: 0.85,
                ease: "circOut",
                bounce: "spring",
            }}
            initial={{
                scale: 1,
                background: "#010101",
                borderRadius: "0.375rem",
                color: "#f1f1f1",
            }}
            whileHover={{
                scale: 0.95,
                background: "#ff8c25",
                color: "#f1f1f1",
            }}>
            <div className={"font-planar font-normal text-2xl px-4 py-2 select-none "}>
                Order GPR 1.0
            </div>
        </motion.button>
    );
};

export default CTAButton;