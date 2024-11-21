import Image from "next/image";
import Link from "next/link";
import { StyledNav, StyledNavButton } from "./styles";
import { useRouter } from "next/router";

export default function NavBar({ onCreateMore }) {
  const router = useRouter();

  function handleHomeNav() {
    onCreateMore(false);
    router.push("/");
  }

  function handleBookmarkNav() {
    onCreateMore(false);
    router.push("/myplants");
  }

  return (
    <StyledNav>
      <StyledNavButton onClick={handleHomeNav}>
        <Image
          src="/icons/home-icon.svg"
          alt="Icon of a home"
          width={22}
          height={22}
          unoptimized
        />
      </StyledNavButton>
      <Link href="/createplant">
        <Image
          src="/icons/add-icon.svg"
          alt="Icon of a plus"
          width={22}
          height={22}
          unoptimized
        />
      </Link>

      <StyledNavButton onClick={handleBookmarkNav}>
        <Image
          src="/icons/bookmark-full.svg"
          alt="Icon of a rose"
          width={22}
          height={22}
          unoptimized
        />
      </StyledNavButton>
    </StyledNav>
  );
}
