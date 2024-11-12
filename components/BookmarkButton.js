import Image from "next/image";
import styled, { css } from "styled-components";

const StyledToggleBookmark = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 0 0 5px 5px;
`;

const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 20px;
  position: absolute;
  z-index: 2;
`;

export default function BookmarkButton({
  onToggleBookmark,
  plantId,
  isBookmarked,
}) {
  let bookmarkIconSrc = "";
  let bookmarkAltTxt = "";

  if (isBookmarked) {
    bookmarkIconSrc = "/icons/bookmark-full.svg";
    bookmarkAltTxt = "Icon of a rose";
  } else {
    bookmarkIconSrc = "/icons/bookmark-empty.svg";
    bookmarkAltTxt = "Icon of an empty rose";
  }

  return (
    <StyledToggleWrapper>
      <StyledToggleBookmark onClick={() => onToggleBookmark(plantId)}>
        <Image
          src={bookmarkIconSrc}
          alt={bookmarkAltTxt}
          width={20}
          height={20}
          unoptimized
        />
      </StyledToggleBookmark>
    </StyledToggleWrapper>
  );
}
