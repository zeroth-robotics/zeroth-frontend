import {motion} from "motion/react";
import React from "react";
import Link from "next/link";

const Logotype = () => {
    return (
        <motion.button
            transition={{
                duration: 0.85,
                ease: "circOut",
                bounce: "spring",
            }}
            initial={{
                color: "#010101",
            }}
            whileHover={{
                color: "#ff4d00",
            }}>
            <Link className={"font-apparat font-bold text-3xl select-none "} href={"/"}>
                k-scale labs
            </Link>
        </motion.button>
    );
}

export default Logotype;