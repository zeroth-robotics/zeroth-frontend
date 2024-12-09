import {motion, useMotionValueEvent, useScroll} from "motion/react";
import Logotype from "@/components/logos/logotype";
import NavButton from "@/components/navbar/navButton";
import CTAButton from "@/components/buttons/ctaButton";
import {useState} from "react";
import {useWindowSize} from "@/components/util/functions";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";

const navItems: string[] = ["research", "docs", "login"];
const navItemLinks: string[] = ["https://kscale.dev/research", "https://docs.kscale.dev/", "https://kscale.dev/"];

const navVariants = {
    visible: {
        y: "0%"
    },
    hidden: {
        y: "-100%"
    },
};

const navItemVariants = {
    visible: {
        y: "0%"
    },
    hidden: {
        y: "-100%"
    },
};

const desktopNavStyling = "flex flex-row gap-8 justify-between py-7 px-6 fixed w-full";

export default function NavBar() {
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
    const [previousScroll, setPrevScroll] = useState(scrollY.get());

    function update(current: number, previous: number): void {
        if (current < previous) {
            setHidden(false);
        } else if (current > 100 && current > previous) {
            setHidden(true);
        }
    }

    useMotionValueEvent(scrollY, "change", (current: number) => {
        update(current, previousScroll);
        setPrevScroll(current);
    });
    const width = useWindowSize().width;
    const navBasedOnWidth = (isMobile: boolean) => {
        return isMobile ? desktopNavBar() : mobileNavBar();
    }


    const mobileNavBar = () => {
        return (
            <>
                <div>
                    {BurgerMenu()}
                    <BurgerOpenButton/>
                </div>
            </>
        );
    }

    const desktopNavBar = () => {
        return (
            <>
                <Logotype/>
                <div className={"flex flex-row gap-3 items-center"}>
                    <motion.div
                        className={"flex flex-row gap-3 items-center"}
                        variants={navVariants}
                        animate={hidden ? "hidden" : "visible"}
                        transition={{
                            ease: [0.1, 0.25, 0.3, 1],
                            duration: 0.5,
                            staggerChildren: 0.05,
                        }}>
                        {navItems.map((name, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    variants={navItemVariants}
                                    transition={{
                                        ease: [0.1, 0.25, 0.3, 1],
                                        duration: 0.3,
                                    }}>
                                    <NavButton text={name} text2={navItemLinks[i]}/>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    <CTAButton/>
                </div>
            </>
        );
    }

    return (
        <nav
            className={desktopNavStyling}>
            {navBasedOnWidth(width > 1023)}
        </nav>
    );
}
