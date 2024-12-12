import CTAButton from "@/components/buttons/ctaButton";
import Footer from "@/components/footer/footer";
import { Grid } from "@/components/grid/Grid";
import NavBar from "@/components/navbar/navbar";
import RobotRenderer from "@/components/robot/robotRenderer";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <header className="col-span-full grid-r min-h-[90svh] auto-rows-auto items-end bg-foreground text-background">
      {/* <Image src="/images/header.png" alt="Header" fill /> */}
      <hgroup className="col-span-full sm:col-span-4 lg:col-span-3 lg:col-start-6 2xl:col-start-8 2xl:col-span-5 4xl:col-start-8 4xl:col-span-4 flex flex-col mb-12 gap-4">
        <h1 className="text-heading-lg">Made to be modified</h1>
        <h2 className="text-body">
          GPR 1.0 is an open-source &amp; auditable robot, for those who prefer transparency over
          trust.
        </h2>
        <CTAButton>Order GPR</CTAButton>
      </hgroup>
    </header>
  );
};

const ResearchSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase">Research</span>
        <h2 className="text-heading-md">
          The humanoid robot is as strong as its brain, not its body.
        </h2>
        <p>
          While we provide robust, accessible hardware, our end-to-end model is what makes GPR 1.0
          perform. Here&apos;s some of the progress we&apos;ve made:
        </p>
      </hgroup>
      <div className="col-span-full overflow-hidden">
        <div className="flex flex-row ">
          <article className="flex-none w-[80vw] sm:w-[40vw] lg:w-[30vw] p-6 border border-foreground rounded-lg">
            <h3 className="text-heading-sm mb-4">Computer Vision</h3>
            <p className="text-body">
              Advanced object detection and spatial awareness enabling precise interaction with the
              environment.
            </p>
          </article>

          <article className="flex-none w-[80vw] sm:w-[40vw] lg:w-[30vw] p-6 border border-foreground rounded-lg">
            <h3 className="text-heading-sm mb-4">Natural Language</h3>
            <p className="text-body">
              Sophisticated language models allowing natural communication and complex task
              understanding.
            </p>
          </article>

          <article className="flex-none w-[80vw] sm:w-[40vw] lg:w-[30vw] p-6 border border-foreground rounded-lg">
            <h3 className="text-heading-sm mb-4">Motion Planning</h3>
            <p className="text-body">
              Dynamic movement optimization with real-time adaptation to changing environments.
            </p>
          </article>

          {/* Duplicate cards for infinite scroll effect */}
          <article className="flex-none w-[80vw] sm:w-[40vw] lg:w-[30vw] p-6 border border-foreground rounded-lg">
            <h3 className="text-heading-sm mb-4">Computer Vision</h3>
            <p className="text-body">
              Advanced object detection and spatial awareness enabling precise interaction with the
              environment.
            </p>
          </article>

          <article className="flex-none w-[80vw] sm:w-[40vw] lg:w-[30vw] p-6 border border-foreground rounded-lg">
            <h3 className="text-heading-sm mb-4">Natural Language</h3>
            <p className="text-body">
              Sophisticated language models allowing natural communication and complex task
              understanding.
            </p>
          </article>

          <article className="flex-none w-[80vw] sm:w-[40vw] lg:w-[30vw] p-6 border border-foreground rounded-lg">
            <h3 className="text-heading-sm mb-4">Motion Planning</h3>
            <p className="text-body">
              Dynamic movement optimization with real-time adaptation to changing environments.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

const SpecSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16">
      <div className="col-span-full sm:col-span-5 lg:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8">
        <hgroup className="">
          <span className="text-heading-md opacity-60 font-apparat">What is GPR?</span>
          <h2 className="text-heading-md">
            A 4.5 foot humanoid robot, designed for robust use, made of CNC&apos;d aluminum. Capable
            of locomotion, manipulation to jump-start your robotics explorations.
          </h2>
        </hgroup>
        <Link href="/" className="text-body w-fit text-plasma dark:text-plasma-dark">
          Read tech specs
        </Link>
      </div>
    </section>
  );
};

const RobotSection = () => {
  return (
    <section className="col-span-full flex flex-col items-center text-center max-w-full aspect-square lg:aspect-video bg-plasma">
      <RobotRenderer />
    </section>
  );
};

const GallerySection = () => {
  return (
    <section className="col-span-full flex flex-col bg-gradient-to-b from-methyl via-oxide to-rust min-h-[270svh]"></section>
  );
};

const PricingSection = () => {
  return (
    <section className="col-span-full grid lg:grid-cols-2 sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw] gap-y-4 py-16">
      <div className="flex flex-col gap-4 p-8 border border-foreground rounded-lg">
        <span className="text-body opacity-60">Individual</span>
        <h3 className="text-heading-md">$49,999</h3>
        <p className="text-body mb-8">
          Perfect for researchers and hobbyists. Includes one GPR unit with standard warranty and
          basic support package.
        </p>
        <Link
          href="/order"
          className="text-body w-fit px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90"
        >
          Order now
        </Link>
      </div>

      <div className="flex flex-col gap-4 p-8 border border-foreground rounded-lg py-16">
        <span className="text-body opacity-60">Enterprise</span>
        <h3 className="text-heading-md">Custom pricing</h3>
        <p className="text-body mb-8">
          Ideal for organizations and labs. Includes multiple units, extended warranty, priority
          support, and training.
        </p>
        <Link
          href="/contact"
          className="text-body w-fit px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90"
        >
          Contact sales
        </Link>
      </div>
    </section>
  );
};

const DataSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16">
      <hgroup className="col-span-full sm:col-span-4 lg:col-start-2 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase">Data buy-back</span>
        <h2 className="text-heading-md">Get refunded each month that you send us data.</h2>
        <p>
          If you collect at least 100 hours of telemetry over the course of a month we&apos;ll pay
          you back the month&apos;s payment.
        </p>
      </hgroup>
    </section>
  );
};

const CommunitySection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase">Community</span>
        <h2 className="text-heading-md">Take ownership of how we keep building.</h2>
        <p>
          While we provide robust, accessible hardware, our end-to-end model is what makes GPR 1.0
          perform. Here&apos;s some of the progress we&apos;ve made:
        </p>
      </hgroup>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-y-16">
      {/* <NavBar /> */}
      <Grid />
      <HeaderSection />
      <main className="grid-r gap-y-4">
        <ResearchSection />
        <SpecSection />
        <RobotSection />
        <GallerySection />
        <PricingSection />
        <DataSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
