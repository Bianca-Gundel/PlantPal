import Image from "next/image";
import Link from "next/link";
import { StyledNav } from "./styles";

export default function NavBar() {
  return (
    <StyledNav>
      <Link href="/">
        <Image
          src="/icons/home-icon.svg"
          alt="Icon of a home"
          width={22}
          height={22}
          unoptimized
        />
      </Link>
      <Link href="/createplant">
        <Image
          src="/icons/add-icon.svg"
          alt="Icon of a plus"
          width={22}
          height={22}
          unoptimized
        />
      </Link>
      <Link href="/myplants">
        <Image
          src="/icons/bookmark-full.svg"
          alt="Icon of a rose"
          width={22}
          height={22}
          unoptimized
        />
      </Link>
    </StyledNav>
  );
}
