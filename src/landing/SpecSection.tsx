import Link from "next/link";

const SpecSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16 gap-y-16">
      <article className="col-span-full sm:col-span-5 md:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8 lg:sticky top-32">
        <hgroup className="">
          <span className="text-heading-md opacity-60 font-apparat">What is GPR?</span>
          <h2 className="text-heading-md">
            A 4.5 foot humanoid robot, optimized for our approach to software for embodied AI.
          </h2>
        </hgroup>
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
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-6 4xl:col-span-4 4xl:col-start-7 text-heading-sm">
          {`We've built GPR 0.5 with an aerospace-grade alumininum body, for under $20,000 USD.`}
          <span className="inline opacity-60">
            Anodized with a matte black finish, because it looks cooler.
          </span>
        </h3>
        <div className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-6 4xl:col-span-4 4xl:col-start-7 bg-gradient-to-b from-methyl via-oxide to-rust aspect-video rounded-md" />
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-6 4xl:col-span-4 4xl:col-start-7 text-heading-sm">
          Equipped with 120 N m actuators at the hips, taking advantage of strong torque for dynamic
          walking and manipulation.
        </h3>
        <div className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-6 4xl:col-span-4 4xl:col-start-7 bg-gradient-to-b from-methyl via-oxide to-rust aspect-video rounded-md" />
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-6 4xl:col-span-4 4xl:col-start-7 text-heading-sm">
          Explore the potential of any idea with 32 TOPS of AI performance.
        </h3>
        <div className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-6 4xl:col-span-4 4xl:col-start-7 bg-gradient-to-b from-methyl via-oxide to-rust aspect-video rounded-md" />
      </article>
    </section>
  );
};

export default SpecSection;
