import Image from "next/image";
import {
  SearchIconWrapper,
  StyledSearchBar,
  StyledSearchWrapper,
} from "./styles";

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
