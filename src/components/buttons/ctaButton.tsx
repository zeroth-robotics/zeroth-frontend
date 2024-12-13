import { motion } from "motion/react";
import { transitionEaseLinearDuration300 } from "@/components/util/constants";
import { useRouter } from "next/router";
import clsx from "clsx";

const SHOP_URL = "https://shop.kscale.dev/collections/all";

export enum CTAButtonVariant {
  METHYL,
  PLASMA,
  OXIDE,
  RUST,
  MOLTEN,
  SOL,
}

export enum CTAButtonMode {
  FILL,
  INVERT,
  STROKE,
}

const getVariantClass = (variant: CTAButtonVariant, mode: CTAButtonMode): string => {
  if (mode === CTAButtonMode.FILL) {
    switch (variant) {
      case CTAButtonVariant.METHYL:
        return "bg-methyl text-background dark:text-foreground-dark";
      case CTAButtonVariant.PLASMA:
        return "bg-plasma text-background dark:text-foreground-dark";
      case CTAButtonVariant.OXIDE:
        return "bg-oxide text-background dark:text-foreground-dark";
      case CTAButtonVariant.RUST:
        return "bg-rust dark:bg-rust-dark text-background dark:text-foreground-dark";
      case CTAButtonVariant.MOLTEN:
        return "bg-molten text-background dark:text-foreground-dark";
      case CTAButtonVariant.SOL:
        return "bg-sol text-background dark:text-foreground-dark ";
      default:
        return "bg-foreground  dark:bg-foreground-dark text-background dark:text-background-dark";
    }
  } else if (mode === CTAButtonMode.INVERT) {
    switch (variant) {
      case CTAButtonVariant.METHYL:
        return "bg-background text-methyl dark:bg-foreground-dark dark:text-methyl-dark";
      case CTAButtonVariant.PLASMA:
        return "bg-background text-plasma dark:bg-foreground-dark dark:text-plasma-dark";
      case CTAButtonVariant.OXIDE:
        return "bg-background text-oxide dark:bg-foreground-dark dark:text-oxide-dark";
      case CTAButtonVariant.RUST:
        return "bg-background text-rust dark:bg-foreground-dark dark:text-rust-dark";
      case CTAButtonVariant.MOLTEN:
        return "bg-background text-molten dark:bg-foreground-dark dark:text-molten-dark";
      case CTAButtonVariant.SOL:
        return "bg-background text-sol dark:bg-foreground-dark dark:text-sol-dark";
      default:
        return "bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark";
    }
  } else {
    switch (variant) {
      case CTAButtonVariant.METHYL:
        return "bg-background text-methyl dark:bg-foreground-dark dark:text-methyl-dark";
      case CTAButtonVariant.PLASMA:
        return "bg-background text-plasma dark:bg-foreground-dark dark:text-plasma-dark";
      case CTAButtonVariant.OXIDE:
        return "bg-background text-oxide dark:bg-foreground-dark dark:text-oxide-dark";
      case CTAButtonVariant.RUST:
        return "bg-background text-rust dark:bg-foreground-dark dark:text-rust-dark";
      case CTAButtonVariant.MOLTEN:
        return "bg-background text-molten dark:bg-foreground-dark dark:text-molten-dark";
      case CTAButtonVariant.SOL:
        return "bg-background text-sol dark:bg-foreground-dark dark:text-sol-dark";
      default:
        return "bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark";
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
    opacity: 0.8,
  },
};

export const CTAButton = ({
  children,
  href = SHOP_URL,
  className,
  variant = CTAButtonVariant.RUST,
  mode = CTAButtonMode.FILL,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: CTAButtonVariant;
  mode?: CTAButtonMode;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body px-2 py-1 select-none flex flex-row gap-1 justify-center items-center",

        "cursor-pointer",
        "rounded",
        getVariantClass(variant, mode),
        className
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
    </motion.button>
  );
};

export const CTASubtitleButton = ({
  className,
  children,
  subtitle,
  href = SHOP_URL,
  variant = CTAButtonVariant.RUST,
  mode = CTAButtonMode.FILL,
}: {
  className?: string;
  children: React.ReactNode;
  subtitle: string;
  href?: string;
  variant?: CTAButtonVariant;
  mode?: CTAButtonMode;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body text-center items-center w-fit px-6 py-4 select-none",
        className,
        "cursor-pointer flex flex-col",
        "rounded",
        getVariantClass(variant, mode)
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
      <span className="block text-body opacity-60">{subtitle}</span>
    </motion.button>
  );
};

export default CTAButton;
