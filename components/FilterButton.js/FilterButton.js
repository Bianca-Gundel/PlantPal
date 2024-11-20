// FilterButton.js
import styled from "styled-components";

const StyledFilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
`;

const FilterCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #4a90e2;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  display: ${(props) => (props.$count > 0 ? "flex" : "none")};
`;

export default function FilterButton({ onClick, isActive, filterCount }) {
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

{
  /*         <StyledButton $variant="indexButton" onClick={onToggleFilter}>
          Filter ({filterCount})
          <ArrowIcon $isRotated={isFilterVisible}>
            <Image
              src="/icons/arrow-1.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </ArrowIcon>
        </StyledButton> */
}
