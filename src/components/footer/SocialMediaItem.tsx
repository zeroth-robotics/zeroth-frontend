import { SocialMediaItemProps } from "@/components/util/interfaces";
import Link from "next/link";

const SocialMediaItem = (props: SocialMediaItemProps) => {
  return (
    <Link
      className={"m-0 p-0 size-[1.5rem] md:size-5 2xl:size-7 flex"}
      href={props.linkURL}
      target={"_blank"}
    >
      {props.iconSvg}
    </Link>
  );
};

export default SocialMediaItem;
