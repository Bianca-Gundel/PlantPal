import Image from "next/image";
import Link from "next/link";
import { BackLinkWrapper } from "./styles";

export default function BackLink() {
  return (
    <BackLinkWrapper>
      <Link href="/" aria-label="Link to the Homepage">
        <Image
          unoptimized
          alt={"Link to the Homepage"}
          src={"/icons/arrow.svg"}
          width={30}
          height={30}
        />
      </Link>
    </BackLinkWrapper>
  );
}
