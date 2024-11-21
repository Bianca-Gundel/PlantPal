import { FilterCount, StyledFilterButton } from "./styles";

export default function FilterButton({
  onClick,
  isFilterVisible,
  filterCount,
}) {
  const isActive = isFilterVisible || filterCount > 0;

  return (
    <StyledFilterButton onClick={onClick} aria-label="Toggle filter">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>
      <FilterCount $count={filterCount}>{filterCount}</FilterCount>
    </StyledFilterButton>
  );
}
