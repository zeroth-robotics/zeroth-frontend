import {motion} from "motion/react";
import BurgerButton from "@/components/navbar/burgerButton";

const BurgerMenu = (shouldOpen: boolean,
                    setMenuHidden: string, buttonText: string[], buttonLinks: string[]) => {
    return (
        <motion.menu
            className={"overflow-hidden bg-off-white dark:bg-off-black absolute z-50 justify-center w-[100%] h-[100dvh] " + (shouldOpen ? "flex" : "hidden") +
                " p-8 bottom-0 left-0 gap-2.5"}>
            <div className={"flex flex-col items-start bg-transparent"}>
                {buttonText.map((text, index) => {
                    return (
                        <BurgerButton text={text} text2={buttonLinks[index]}/>
                    )
                })}
            </div>
        </motion.menu>
    );
}

export default BurgerMenu;