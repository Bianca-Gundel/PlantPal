import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: beige;
  z-index: 10;
`;

export default function NavBar() {
  return (
    <StyledNav>
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
