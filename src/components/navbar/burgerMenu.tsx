import BurgerButton from "@/components/navbar/burgerButton";
import { motion } from "motion/react";

interface BurgerMenuProps {
  isOpen: boolean;
  items: { name: string; link: string }[];
}

const BurgerMenu = ({ isOpen, items }: BurgerMenuProps) => {
  return isOpen ? (
    <motion.div
      className={"flex flex-col items-start w-[100%] gap-10 py-12"}
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5 }}
    >
      {items.map((item, index) => (
        <li className={"list-none"} key={index}>
          <BurgerButton text={item.name} text2={item.link} />
        </li>
      ))}
    </motion.div>
  ) : null;
};

export default BurgerMenu;
