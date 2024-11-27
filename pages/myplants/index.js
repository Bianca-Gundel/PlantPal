import PlantCard from "@/components/PlantCard/PlantCard";
import { StyledList } from "@/components/styled/StyledList";
import FilterPlants from "@/components/FilterPlants/FilterPlants";
import FilterButton from "@/components/FilterButton.js/FilterButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SearchFilterContainer } from "@/components/SearchBar/styles";
import { StyledErrorMessageWrapper } from "@/components/styled/StyledIndex";
import Image from "next/image";
import { BaseH2 } from "@/components/styled/StyledHeadline";
import { StyledLogoWrapper } from "@/components/styled/StyledLogo";

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
      <StyledLogoWrapper>
        <Image
          src={"/logo-bloom-buddy.svg"}
          width={240}
          height={70}
          alt="Bloom Buddy Logo"
          unoptimized
        />
      </StyledLogoWrapper>
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
      <BaseH2>My Plants</BaseH2>
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
            {searchQuery ? (
              "No plants match your search."
            ) : filterCount > 0 ? (
              "No plants match the selected filter criteria."
            ) : (
              <>
                No favorite plants yet.
                <br />
                How about adding one?
              </>
            )}
          </p>
        </StyledErrorMessageWrapper>
      )}

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
