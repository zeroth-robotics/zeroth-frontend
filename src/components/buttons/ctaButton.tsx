import {
  bgBlackDarkWhite,
  textWhiteDarkBlack,
  transitionEaseLinearDuration300,
} from "@/components/util/constants";
import { useRouter } from "next/router";

const SHOP_URL = "https://shop.kscale.dev/";

const CTAButton = () => {
  const router = useRouter();

  return (
    <button
      className={
        "font-planar font-normal text-2xl px-4 py-2 select-none z-50 " +
        bgBlackDarkWhite +
        " hover:bg-accent-blood-orange cursor-pointer " +
        transitionEaseLinearDuration300 +
        textWhiteDarkBlack +
        " rounded"
      }
      onClick={() => router.push(SHOP_URL)}
    >
      Pre-Order
    </button>
  );
};

export default CTAButton;
