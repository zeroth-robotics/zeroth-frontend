import RobotRenderer from "@/components/robot/robotRenderer";

const RobotSection = () => {
  return (
    <section className=" col-span-full flex flex-col items-center text-center max-w-full aspect-square md:aspect-video bg-plasma">
      <RobotRenderer />
    </section>
  );
};

export default RobotSection;
