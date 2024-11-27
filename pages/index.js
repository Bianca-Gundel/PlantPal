import PlantCard from "@/components/PlantCard/PlantCard";
import {
  StyledErrorMessageWrapper,
  FlexboxWrapper,
} from "@/components/styled/StyledIndex";
import Image from "next/image";
import FilterPlants from "@/components/FilterPlants/FilterPlants";
import { StyledList } from "@/components/styled/StyledList";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterButton from "@/components/FilterButton.js/FilterButton";
import { SearchFilterContainer } from "@/components/SearchBar/styles";
import { BaseH1, BaseH2 } from "@/components/styled/StyledHeadline";

export default function HomePage({
  plants,
  onToggleBookmark,
  onResetFilter,
  onToggleFilter,
  isFilterVisible,
  onFilterValue,
  selectedFilter,
  filterCount,
  onSearch,
  searchQuery,
}) {
  return (
    <>
      <Image
        src={"/logo-bloom-buddy.svg"}
        width={240}
        height={70}
        alt="Bloom Buddy Logo"
        unoptimized
      />
      <SearchFilterContainer>
        <SearchBar onSearch={onSearch} />
        <FilterButton
          onClick={onToggleFilter}
          isActive={isFilterVisible}
          filterCount={filterCount}
        />
      </SearchFilterContainer>

      <FlexboxWrapper>
        {isFilterVisible && (
          <FilterPlants
            onFilterValue={onFilterValue}
            onResetFilter={onResetFilter}
            selectedFilter={selectedFilter}
          />
        )}
      </FlexboxWrapper>
      <BaseH2>Discover Plants</BaseH2>

      {plants.length > 0 ? (
        <StyledList>
          {plants.map((plant) => (
            <li key={plant.id}>
              <PlantCard plant={plant} onToggleBookmark={onToggleBookmark} />
            </li>
          ))}
        </StyledList>
      ) : (
        <StyledErrorMessageWrapper>
          <Image
            src={"/icons/error-plant.svg"}
            width={50}
            height={50}
            alt="Icon of a dead plant"
            unoptimized
          />
          <p>
            {searchQuery
              ? "No plants match your search."
              : filterCount > 0
              ? "No plants match the selected filter criteria."
              : "Unfortunately, you have not yet added any plants."}
          </p>
        </StyledErrorMessageWrapper>
      )}
    </>
  );
}
