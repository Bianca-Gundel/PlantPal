import styled from "styled-components";
import Image from "next/image";

export const SearchFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 1rem 0;
`;

const StyledSearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  padding: 0.8rem;
  padding-left: 2.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
`;

export default function SearchBar({ onSearch }) {
  return (
    <StyledSearchWrapper>
      <SearchIconWrapper>
        <Image
          src="/icons/search-icon.svg"
          alt="search icon"
          width={20}
          height={20}
        />
      </SearchIconWrapper>
      <StyledSearchBar
        type="text"
        placeholder="Search plants..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </StyledSearchWrapper>
  );
}
