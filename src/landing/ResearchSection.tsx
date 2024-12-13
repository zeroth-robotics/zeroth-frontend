import { motion } from "motion/react";

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
      <div className="col-span-full overflow-hidden relative -mx-[5vw] px-[5vw]">
        <div className="flex flex-row flex-none gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]">
          {RESEARCH_ITEMS.map((item, i) => (
            <motion.a
              className="border border-foreground rounded-lg w-[66.25vw] sm:w-[59.167vw] md:w-[38.611vw] 2xl:w-[29.167vw] 4xl:w-[21.5625vw] flex-none"
              key={`research-card--${i}`}
              href={item.link}
              target="_blank"
            >
              <article className="p-4 flex flex-col gap-y-24">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    className={"stroke-foreground "}
                    d="M12 2L2 22H22L12 2Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-body">{item.title}</h3>
                  <p className="text-caption">{item.description}</p>
                </div>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ResearchSection;
