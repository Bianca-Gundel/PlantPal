import Image from "next/image";

export default function BookmarkButton({ onToggleBookmark, plantId }) {
  function handleToggleBookmark() {
    onToggleBookmark(plantId);
  }

  return (
    <button onClick={handleToggleBookmark}>
      <Image
        src={"/icons/bookmark-empty.svg"}
        alt={"Icon of an outlined rose"}
        width={20}
        height={20}
        unoptimized
      />
    </button>
  );
}
