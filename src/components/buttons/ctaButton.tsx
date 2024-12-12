import { transitionEaseLinearDuration300 } from "@/components/util/constants";
import { useRouter } from "next/router";

const SHOP_URL = "https://shop.kscale.dev/";

const CTAButton = ({ children }: { children: React.ReactNode }) => {
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
      onClick={() => router.push(SHOP_URL)}
    >
      {children}
    </button>
  );
};

export default CTAButton;
