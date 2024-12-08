import {motion, useMotionValueEvent, useScroll} from "motion/react";
import Logotype from "@/components/logos/logotype";
import NavButton from "@/components/navbar/navButton";
import CTAButton from "@/components/buttons/ctaButton";
import {useState} from "react";

const navItems: string[] = ["research", "docs", "login", "CTA"];

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

    return (
        <motion.nav
            className={"flex flex-row gap-8 justify-between py-7 px-6 fixed w-full"}
            variants={navVariants}
            animate={hidden ? "hidden" : "visible"}
            transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 1,
                staggerChildren: 0.05,
            }}>
            <Logotype/>
            <div className={"flex flex-row gap-3 items-center"}>
                {navItems.map((name, i) => {
                    return (
                        <motion.div
                            key={i}
                            variants={navItemVariants}
                            transition={{
                                ease: [0.1, 0.25, 0.3, 1],
                                duration: 1.6,
                            }}>
                            {name !== "CTA" ?
                                <NavButton text={name}/>
                                : <CTAButton/>}
                        </motion.div>
                    );
                })}
            </div>
        </motion.nav>
    );
}