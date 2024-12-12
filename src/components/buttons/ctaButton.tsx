import { transitionEaseLinearDuration300 } from "@/components/util/constants";
import { useRouter } from "next/router";

const SHOP_URL = "https://shop.kscale.dev/";

const CTAButton = () => {
  const router = useRouter();

  return (
    <button
      className={
        "font-planar font-normal text-body px-4 py-2 select-none z-50 " +
        "bg-rust text-background dark:text-foreground-dark " +
        " hover:opacity-90 cursor-pointer " +
        transitionEaseLinearDuration300 +
        " rounded"
      }
      onClick={() => router.push(SHOP_URL)}
    >
      Pre-Order
    </button>
  );
};

export default CTAButton;
