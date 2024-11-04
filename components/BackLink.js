import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const BackLinkWrapper = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
`;

export default function BackLink() {
  return (
    <BackLinkWrapper>
      <Link href="/">
        <Image
          unoptimized
          alt={"Icon of an arrow"}
          src={"/icons/arrow.svg"}
          width={30}
          height={30}
        />
      </Link>
    </BackLinkWrapper>
  );
}
