import React from "react";
import {TextProps} from "@/components/interfaces";
import {motion} from "motion/react";

const CTAButton = (props: TextProps) => {
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
                borderColor: "#010101",
                borderRadius: "0.375rem",
                borderWidth: "2px",
                color: "#f1f1f1",
            }}
            whileHover={{
                scale: 0.95,
                background: "#f1f1f1",
                color: "#010101",
            }}>
            <div className={"font-planar font-normal text-2xl px-4 py-2 " +
                " select-none "}
            >{props.text}
            </div>
        </motion.button>
    );
};

export default CTAButton;