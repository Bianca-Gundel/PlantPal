import PlantCard from "@/components/PlantCard/PlantCard";
import BackLink from "@/components/BackLink/BackLink";
import { StyledList } from "@/components/styled/StyledList";
import FilterPlants from "@/components/FilterPlants/FilterPlants";
import FilterButton from "@/components/FilterButton.js/FilterButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SearchFilterContainer } from "@/components/SearchBar/styles";

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
        <p>Unfortunately, you have not yet added any plants as favourites.</p>
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
