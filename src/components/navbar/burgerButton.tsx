import {motion} from "motion/react";
import {Text2Props} from "@/components/util/interfaces";
import Link from "next/link";
import {textBlackDarkWhite, transitionEaseLinearDuration300} from "@/components/util/constants";

const BurgerButton = (props: Text2Props) => {
    return (
        <motion.button
            className={"font-planar font-normal capitalize text-4xl select-none " +
                textBlackDarkWhite + " hover:text-kscale-orange " + transitionEaseLinearDuration300}>
            <Link href={props.text2} target={"_blank"}>{props.text}</Link>
        </motion.button>
    )
}

export default BurgerButton;