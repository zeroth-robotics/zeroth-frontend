import { NavCTAButton } from "@/components/buttons/CTAButtons";
import Logotype from "@/components/logos/logotype";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import NavButton from "@/components/navbar/navButton";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { isDarkMode } from "@/components/util/isDarkMode";
import BurgerMenu from "@/components/navbar/burgerMenu";

const navItems: string[] = ["Docs", "Log In", "Buy GPR"];

const navItemLinks: string[] = [
  "https://docs.kscale.dev/",
  "https://dashboard.kscale.dev",
  "https://shop.kscale.dev/",
];

const navVariants = {
  visible: {
    y: "0%",
  },
  hidden: {
    y: "-100%",
  },
};

const navItemVariants = {
  visible: {
    y: "0%",
  },
  hidden: {
    y: "-100%",
  },
};

const arrowLinkVariants = {
  hover: {
    opacity: 0.5,
  },
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [desktopNavHidden, setDesktopNavHidden] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [mobileShouldOpenBurger, setMobileShouldOpenBurger] = useState(false);

  function update(current: number, previous: number): void {
    if (current < previous) {
      setDesktopNavHidden(false);
    } else if (current > 100 && current > previous) {
      setDesktopNavHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (current: number) => {
    update(current, desktopPreviousScroll);
    setPrevScroll(current);
  });
  const width = useWindowSize().width;

  const navBasedOnWidth = (isDesktop: boolean) => {
    return isDesktop ? desktopNavBar() : mobileNavBar();
  };

  const mobileNavBar = () => {
    return (
      <menu
        className={clsx(
          "grid-r overflow-hidden py-4 items-end md:items-center bg-background dark:bg-background-dark",
          mobileShouldOpenBurger ? "h-[100dvh]" : "h-fit"
        )}
      >
        <Logotype />

        {width >= 768 ? (
          <>
            <motion.a
              href={navItemLinks[0]}
              target="_blank"
              className="-col-end-3 md:-col-end-4 flex flex-row gap-1 items-center"
              variants={arrowLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              {navItems[0]} <ExpressiveArrow />
            </motion.a>
            <motion.a
              href={navItemLinks[1]}
              target="_blank"
              className="-col-end-2 md:-col-end-3"
              variants={arrowLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              {navItems[1]}
            </motion.a>
            <NavCTAButton className="md:col-span-2 md:col-start-8 2xl:col-span-2 2xl:col-start-11">
              {navItems[2]}
              <ExpressiveArrow />
            </NavCTAButton>
          </>
        ) : (
          <div className="-col-end-1 col-span-2 flex flex-row gap-2 justify-end h-fit">
            <NavCTAButton>{navItems[2]}</NavCTAButton>
            <BurgerOpenButton isOpen={mobileShouldOpenBurger} onClick={setMobileShouldOpenBurger} />
          </div>
        )}

        {width < 640 && (
          <BurgerMenu
            isOpen={mobileShouldOpenBurger}
            navItemNames={navItems}
            navItemLinks={navItemLinks}
          />
        )}
      </menu>
    );
  };

  const desktopNavBar = () => {
    return (
      <>
        <Logotype />
        <div className="flex flex-row gap-3 items-center">
          <motion.div
            className="flex flex-row gap-3 items-center"
            variants={navVariants}
            animate={desktopNavHidden ? "hidden" : "visible"}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.5,
              staggerChildren: 0.05,
            }}
          >
            {navItems.map((navItem, i) => (
              <motion.div
                key={i}
                variants={navItemVariants}
                transition={{
                  ease: [0.1, 0.25, 0.3, 1],
                  duration: 0.3,
                }}
              >
                <NavButton text={navItem} text2={navItemLinks[i]} />
              </motion.div>
            ))}
            <motion.div
              variants={navItemVariants}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.3,
              }}
            >
              <button>{isDarkMode() ? "🌙" : "☀️"}</button>
            </motion.div>
          </motion.div>
          <NavCTAButton>{navItems[2]}</NavCTAButton>
        </div>
      </>
    );
  };

  useEffect(() => {
    if (mobileShouldOpenBurger) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [mobileShouldOpenBurger]);

  return <nav className="fixed top-0 inset-x-0 z-50">{navBasedOnWidth(false)}</nav>;
}
