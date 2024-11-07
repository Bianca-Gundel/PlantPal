import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const BackLinkWrapper = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 10;
`;

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
