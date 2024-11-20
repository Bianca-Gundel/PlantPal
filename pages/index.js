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
            {filterCount > 0
              ? "No plants match the selected filter criteria."
              : "Unfortunately, you have not yet added any plants."}
          </p>
        </StyledErrorMessageWrapper>
      )}
    </>
  );
}
