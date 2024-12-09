import {motion} from "motion/react";
import {Text2Props} from "@/components/util/interfaces";
import Link from "next/link";
import {textBlackDarkWhite, transitionEaseLinearDuration300} from "@/components/util/constants";

const BurgerButton = (props: Text2Props) => {
    return (
        <motion.button
            className={"font-planar font-normal capitalize w-full h-full text-2xl px-4 py-2 select-none " +
                textBlackDarkWhite + " hover:bg-gray-200 dark:hover:bg-gray-800 " + transitionEaseLinearDuration300}>
            <Link href={props.text2} target={"_blank"}>{props.text}</Link>
        </motion.button>
    )
}

export default BurgerButton;