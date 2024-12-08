import {motion} from "motion/react";
import Logotype from "@/components/logos/logotype";
import NavButton from "@/components/navbar/navButton";
import CTAButton from "@/components/buttons/ctaButton";

const Navbar = () => {
    return (
        <motion.nav>
            <div className={"bg-red-500 flex flex-row gap-8 justify-between py-7 px-6"}>
                <Logotype/>
                <div className={"flex flex-row gap-3"}>
                    <NavButton text={"Research"}/>
                    <NavButton text={"Docs"}/>
                    <NavButton text={"Login"}/>
                    <CTAButton/>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;