import PlantCard from "@/components/PlantCard/PlantCard";
import { StyledList } from "@/components/styled/StyledList";
import FilterPlants from "@/components/FilterPlants/FilterPlants";
import FilterButton from "@/components/FilterButton.js/FilterButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SearchFilterContainer } from "@/components/SearchBar/styles";
import { StyledErrorMessageWrapper } from "@/components/styled/StyledIndex";
import Image from "next/image";

export default function MyPlants({
  bookmarkedPlants,
  onToggleBookmark,
  onFilterValue,
  onResetFilter,
  selectedFilter,
  onToggleFilter,
  isFilterVisible,
  filterCount,
  onSearch,
  searchQuery,
}) {
  return (
    <>
      <SearchFilterContainer>
        <SearchBar onSearch={onSearch} />
        <FilterButton
          onClick={onToggleFilter}
          isActive={isFilterVisible}
          filterCount={filterCount}
        />
      </SearchFilterContainer>
      {isFilterVisible && (
        <FilterPlants
          onFilterValue={onFilterValue}
          onResetFilter={onResetFilter}
          selectedFilter={selectedFilter}
        />
      )}
      <h2>My Plants</h2>
      {bookmarkedPlants.length === 0 && (
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
              : "Unfortunately, you have not yet added any plants as favourites."}
          </p>
        </StyledErrorMessageWrapper>
      )}

      {/* FYI: Icon for error message follows after merge */}
      <StyledList>
        {bookmarkedPlants.map((plant) => {
          return (
            <li key={plant.id}>
              <PlantCard plant={plant} onToggleBookmark={onToggleBookmark} />
            </li>
          );
        })}
      </StyledList>
    </>
  );
}
