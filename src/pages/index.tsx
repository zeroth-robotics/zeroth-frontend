import { navMotionTransition, scaleMotionNumber } from "@/components/util/constants";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20
      gap-16 sm:p-20 `}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-planar font-normal text-foreground ">
          We're cooking something 👀
        </h1>
        <div className={"flex flex-row items-baseline gap-2 "}>
          <p className="text-md font-planar font-normal text-foreground">Join </p>
          <motion.a
            initial={{ scale: 1 }}
            whileHover={scaleMotionNumber}
            transition={navMotionTransition}
            className={"font-bold text-foreground hover:text-accent-blood-orange"}
            href={"https://discord.gg/kscale"}
            target={"_blank"}
          >
            our Discord
          </motion.a>
          <p className="text-md font-planar font-normal text-foreground">
            for most updated info :)
          </p>
        </div>

        <div className="flex flex-col gap-4 text-2xl">
          <h1>Apparat Medium 96px / 84px with -2% tracking</h1>
          <h2>Apparat Medium 57.5px / 56px with -1.5% tracking</h2>
          <h3>GT Planar Regular 39.5px /42px with -1% tracking</h3>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
