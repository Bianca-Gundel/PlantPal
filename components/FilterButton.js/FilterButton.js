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
        width="22"
        height="22"
        viewBox="0 0 94 109"
        fill={isActive ? "currentColor" : "none"}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="10"
      >
        <path
          d="M36.5303 66.6667C36.5303 65.3091 36.1356 63.9809 35.3942 62.8437L5.0905 16.3629C4.34909 15.2257 3.95435 13.8974 3.95435 12.5399V10.5166C3.95435 6.6506 7.08835 3.5166 10.9543 3.5166H83.8236C87.6896 3.5166 90.8236 6.65061 90.8236 10.5166V12.5399C90.8236 13.8974 90.4289 15.2257 89.6875 16.3629L59.3838 62.8437C58.6424 63.9809 58.2476 65.3091 58.2476 66.6667V93.6142C58.2476 96.243 56.7748 98.6502 54.4343 99.8468L46.7169 103.793C42.0592 106.174 36.5303 102.791 36.5303 97.5599V66.6667Z"
          fill={isActive ? "currentColor" : "none"}
        />
      </svg>

      <FilterCount $count={filterCount}>{filterCount}</FilterCount>
    </StyledFilterButton>
  );
}
