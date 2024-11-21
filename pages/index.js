import PlantCard from "@/components/PlantCard/PlantCard";
import {
  StyledErrorMessageWrapper,
  ArrowIcon,
  FlexboxWrapper,
} from "@/components/styled/StyledIndex";
import Image from "next/image";
import { StyledButton } from "@/components/styled/StyledButton";
import FilterPlants from "@/components/FilterPlants/FilterPlants";
import { StyledList } from "@/components/styled/StyledList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";
import FilterButton from "@/components/FilterButton.js/FilterButton";
import { SearchFilterContainer } from "@/components/SearchBar/styles";

export default function HomePage({
  plants,
  onToggleBookmark,
  onResetFilter,
  onToggleFilter,
  isFilterVisible,
  onFilterValue,
  selectedFilter,
  filterCount,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <FlexboxWrapper>
        <StyledButton $variant="indexButton" onClick={onToggleFilter}>
          Filter ({filterCount})
          <ArrowIcon $isRotated={isFilterVisible}>
            <Image
              src="/icons/arrow-1.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </ArrowIcon>
        </StyledButton>
      </FlexboxWrapper>
      <SearchFilterContainer>
        <SearchBar onSearch={handleSearch} />
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
      <h2>Discover Plants</h2>

      {filteredPlants.length > 0 ? (
        <StyledList>
          {filteredPlants.map((plant) => (
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
              ? "No plants match your search query."
              : filterCount > 0
              ? "No plants match the selected filter criteria."
              : "Unfortunately, you have not yet added any plants."}
          </p>
        </StyledErrorMessageWrapper>
      )}
    </>
  );
}
