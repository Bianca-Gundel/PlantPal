import PlantCard from "@/components/PlantCard";
import styled, { css } from "styled-components";
import Image from "next/image";
import PlantForm from "@/components/PlantForm";
import React, { useState } from "react";
import { StyledButton } from "@/components/StyledButton";
import FilterPlants from "@/components/FilterPlants";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const ArrowIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.$isRotated &&
    css`
      transform: rotate(180deg);
    `}
`;

const FlexboxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const lightOptions = [
  { id: "lightNeed1", value: "Full Sun", label: "Full Sun" },
  { id: "lightNeed2", value: "Partial Shade", label: "Partial Shade" },
  { id: "lightNeed3", value: "Full Shade", label: "Full Shade" },
];

export default function HomePage({
  onCreatePlant,
  plants,
  onToggleBookmark,
  onResetFilter,
  onToggleFilter,
  onToggleForm,
  isFilterVisible,
  isFormVisible,
  onFilterValue,
  selectedFilter,
  filterCount,
}) {
  return (
    <>
      <FlexboxWrapper>
        <StyledButton $variant="indexButton" onClick={onToggleForm}>
          Create
          <ArrowIcon $isRotated={isFormVisible}>
            <Image
              src="/icons/arrow-1.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </ArrowIcon>
        </StyledButton>
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
      {isFormVisible && <PlantForm onCreatePlant={onCreatePlant}/>}
      <h2>Discover Plants</h2>
      {plants.length > 0 ? (
        <StyledPlantList>
          {plants.map((plant) => (
            <li key={plant.id}>
              <PlantCard plant={plant} onToggleBookmark={onToggleBookmark} />
            </li>
          ))}
        </StyledPlantList>
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
