import {
  bgBlackDarkWhite,
  navMotionTransition,
  textWhiteDarkBlack,
  transitionEaseLinearDuration300,
} from "@/components/util/constants";
<<<<<<< HEAD
import { motion } from "motion/react";
//Order GPR 1.0
=======
import Link from "next/link";

>>>>>>> 056f761 (Update footer (#28))
const CTAButton = () => {
  return (
    <motion.div
      className={
        "font-planar font-normal text-2xl px-4 py-2 select-none z-50 " +
        bgBlackDarkWhite +
<<<<<<< HEAD
        " hover:bg-accent-blood-orange cursor-wait " +
=======
        " hover:bg-accent-blood-orange whitespace-nowrap " +
>>>>>>> 056f761 (Update footer (#28))
        transitionEaseLinearDuration300 +
        textWhiteDarkBlack
      }
      transition={navMotionTransition}
      initial={{
        scale: 1,
        borderRadius: "0.375rem",
      }}
      // whileHover={scaleMotionNumber}>
    >
<<<<<<< HEAD
      👀👀👀👀👀
    </motion.button>
=======
      <Link href={"https://shop.kscale.dev/products/gpr-basic"} target={"_blank"}>
        Order GPR 1.0
      </Link>
    </motion.div>
>>>>>>> 056f761 (Update footer (#28))
  );
};

export default CTAButton;
