import { motion } from "motion/react";
import { BurgerMenuProps } from "@/components/util/interfaces";
import BurgerButton from "@/components/navbar/burgerButton";

const BurgerMenu = (props: BurgerMenuProps) => {
  return (
    <motion.div
      className={"flex flex-col items-start w-[100%] gap-10 py-12"}
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5 }}
    >
      {props.navItemNames.map((navItem, i) => (
        <li className={"list-none"} key={i}>
          <BurgerButton text={navItem[i]} text2={props.navItemLinks[i]} />
        </li>
      ))}
    </motion.div>
  );
};

export default BurgerMenu;
