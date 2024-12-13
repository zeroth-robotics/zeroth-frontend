import { motion } from "motion/react";
import Link from "next/link";
import { ExpressiveArrow } from "@/components/iconography/Iconography";

const CommunitySection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Community</span>
        <h2 className="text-heading-md">Take ownership of how we keep building.</h2>
        <p>
          With over 2000 people in our Discord, our community has collaboratively on 6 humanoid
          robot projects, building off each other&apos;s work and publishing papers on the forefront
          of embodied AI tools.
        </p>
      </hgroup>
      <menu className="col-span-full flex flex-row gap-x-4">
        <Link
          href="/"
          className="text-body w-fit text-plasma dark:text-plasma-dark flex flex-row gap-1 items-center"
        >
          Read tech specs{" "}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0195 16L7.01953 11L8.41953 9.55L11.0195 12.15V4H13.0195V12.15L15.6195 9.55L17.0195 11L12.0195 16ZM6.01953 20C5.46953 20 4.99886 19.8043 4.60753 19.413C4.2162 19.0217 4.0202 18.5507 4.01953 18V15H6.01953V18H18.0195V15H20.0195V18C20.0195 18.55 19.8239 19.021 19.4325 19.413C19.0412 19.805 18.5702 20.0007 18.0195 20H6.01953Z"
              className="fill-plasma dark:fill-plasma-dark"
            />
          </svg>
        </Link>

        <motion.a
          href="/"
          className="text-body w-fit text-plasma dark:text-plasma-dark flex flex-row gap-1 items-center"
          initial="initial"
          whileHover="hover"
          variants={{
            initial: {
              opacity: 0.6,
            },
            hover: {
              opacity: 1,
            },
          }}
        >
          Send feedback <ExpressiveArrow />
        </motion.a>
      </menu>

      <article className="col-span-full md:col-span-4 flex flex-col gap-y-4 my-16">
        <h2 className="text-caption uppercase opacity-70 relative y-1/2">About us</h2>
        <p>
          We&apos;re hackers, engineers, and researchers that believe in a world where robots are
          made for everyone
        </p>
        <p>
          We&apos;re from: Tesla AI, Google, Meta FAIR, Stanford, Xiaomi building opportunities for
          robots to be more than workers.
        </p>
      </article>
    </section>
  );
};

export default CommunitySection;
