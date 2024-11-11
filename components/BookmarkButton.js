import Image from "next/image";

export default function BookmarkButton({
  onToggleBookmark,
  plantId,
  isBookmarked,
}) {
  function handleToggleBookmark() {
    onToggleBookmark(plantId);
  }

  let bookmarkIconSrc = "";

  if (isBookmarked) {
    bookmarkIconSrc = "/icons/bookmark-full.svg";
  } else {
    bookmarkIconSrc = "/icons/bookmark-empty.svg";
  }

  return (
    <button onClick={handleToggleBookmark}>
      <Image
        src={bookmarkIconSrc}
        alt={"Icon of an outlined rose"}
        width={20}
        height={20}
        unoptimized
      />
    </button>
  );
}
