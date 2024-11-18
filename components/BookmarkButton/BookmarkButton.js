import Image from "next/image";
import { StyledToggleWrapper, StyledToggleBookmark } from "./styles";

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
