import { transitionEaseLinearDuration300 } from "@/components/util/constants";
import { useRouter } from "next/router";
import clsx from "clsx";

const SHOP_URL = "https://shop.kscale.dev/";

const CTAButton = ({ children, href = SHOP_URL }: { children: React.ReactNode; href?: string }) => {
  const router = useRouter();

  return (
    <button
      className={
        "font-planar font-normal text-body px-2 select-none " +
        "bg-rust dark:bg-rust-dark text-background dark:text-foreground-dark " +
        " hover:opacity-90 cursor-pointer " +
        transitionEaseLinearDuration300 +
        " rounded"
      }
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
    </button>
  );
};

export const CTASubtitleButton = ({
  className,
  children,
  subtitle,
  href = SHOP_URL,
}: {
  className?: string;
  children: React.ReactNode;
  subtitle: string;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <button
      className={clsx(
        "font-planar font-normal text-body text-center items-center w-fit px-6 py-4 select-none",
        className,
        "hover:opacity-90 cursor-pointer flex flex-col",
        transitionEaseLinearDuration300,
        "rounded"
      )}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
      <span className="block text-body opacity-60">{subtitle}</span>
    </button>
  );
};

export default CTAButton;
