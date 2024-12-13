import { NavCTAButton } from "@/components/buttons/CTAButtons";
import { ColorVariant, FillMode } from "@/components/color/Color";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const RESEARCH_ITEMS = [
  {
    title: "Edge VLA",
    description:
      "Our general purpose foundation AI model, helping robots complete tasks autonomously. Through open-source data contributions, we're training a highly efficient model together.",
    image: "/images/research/edge-vla.png",
    link: "/",
  },
  {
    title: "K-OS",
    description:
      "We've been refining our Rust-based package manager, streamlined operations for humanoid robotics hardware. 40% faster compiling compared to other ROS2-based systems.",
    image: "/images/research/edge-vla.png",
    link: "/",
  },
  {
    title: "Klang",
    description:
      "Dedicated to efficiently parsing natural language, Klang acts a simple and flexible way to get started building robot applications. As of now, it supports EVLA to turn language into actions.",
    image: "/images/research/edge-vla.png",
    link: "/",
  },
  {
    title: "kRec",
    description:
      "Our system for organizing and managing all your robot data produced during your research.",
    image: "/images/research/edge-vla.png",
    link: "/",
  },
  {
    title: "kSim",
    description:
      "Built off of Issac Gym, get started with locomotion and manipulation with our simulation packages. We're working on building this out further to help you test your robot's movements on screen and in the physical world. ",
    image: "/images/research/edge-vla.png",
    link: "/",
  },
];

interface ResearchItem {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ResearchCard = ({ title, description, image, link, index }: ResearchItem) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-methyl via-plasma to-oxide rounded-lg w-[66.25vw] sm:w-[59.167vw] md:w-[38.611vw] 2xl:w-[29.167vw] 4xl:w-[21.5625vw] flex-none"
      key={`research-card--${index}`}
      draggable={false}
    >
      <article className="p-4 flex flex-col gap-24 h-full">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            className={"stroke-foreground "}
            d="M12 2L2 22H22L12 2Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col gap-y-4 h-full">
          <h3 className="text-body">{title}</h3>
          <p className="text-caption">{description}</p>
          <NavCTAButton
            href={link}
            target="_blank"
            className="mt-auto w-fit px-2"
            variant={ColorVariant.PLASMA}
            mode={FillMode.INVERT}
          >
            View project
          </NavCTAButton>
        </div>
      </article>
    </motion.div>
  );
};

const ResearchCarousel = () => {
  return (
    <div className="col-span-full overflow-hidden relative -mx-[5vw] px-[5vw]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="flex flex-row  gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]"
      >
        {RESEARCH_ITEMS.map((item, i) => (
          <ResearchCard {...item} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 100,
  damping: 20,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const width = useWindowSize().width;
  const cardWidth = useMemo(() => {
    if (width < 768) {
      return width * 0.6625;
    }
    if (width < 1024) {
      return width * 0.59167;
    }
    if (width < 1280) {
      return width * 0.38611;
    }
    return width * 0.29167;
  }, [width]);

  const dragX = useMotionValue(0);

  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get();

  //     if (x === 0) {
  //       setImgIndex((pv) => {
  //         if (pv === RESEARCH_ITEMS.length - 1) {
  //           return 0;
  //         }
  //         return pv + 1;
  //       });
  //     }
  //   }, AUTO_DELAY);

  //   return () => clearInterval(intervalRef);
  // }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < RESEARCH_ITEMS.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="col-span-full overflow-hidden relative -mx-[5vw] px-[5vw]">
      <div className="fixed top-0 left-0 z-50 text-molten">{imgIndex}</div>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 20}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex flex-none cursor-grab active:cursor-grabbing gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {RESEARCH_ITEMS.map((item, i) => (
        <ResearchCard {...item} index={i} />
      ))}
    </>
  );
};

// const Dots = ({ imgIndex, setImgIndex }) => {
//   return (
//     <div className="mt-4 flex w-full justify-center gap-2">
//       {imgs.map((_, idx) => {
//         return (
//           <button
//             key={idx}
//             onClick={() => setImgIndex(idx)}
//             className={`h-3 w-3 rounded-full transition-colors ${
//               idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//             }`}
//           />
//         );
//       })}
//     </div>
//   );
// };

const ResearchSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Research</span>
        <h2 className="text-heading-md">
          The humanoid robot is as strong as its brain, not its body.
        </h2>
        <p>
          While we provide robust, accessible hardware, our end-to-end model is what makes GPR 1.0
          perform. Here&apos;s some of the progress we&apos;ve made:
        </p>
      </hgroup>
      {/* <ResearchCarousel /> */}
      <SwipeCarousel />
    </section>
  );
};

export default ResearchSection;
