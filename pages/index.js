import PlantCard from "@/components/PlantCard";
import styled, { css } from "styled-components";
import Image from "next/image";
import PlantForm from "@/components/PlantForm";
import React, { useState } from "react";
import { StyledButton } from "@/components/StyledButton";

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
  isFilterVisible,
  onFilterValue,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function toggleFormVisibility() {
    setIsFormVisible((prevState) => !prevState);
  }

  return (
    <>
      <FlexboxWrapper>
        <StyledButton onClick={toggleFormVisibility}>
          Create&nbsp;New&nbsp;Plant&nbsp;&nbsp;
          <ArrowIcon $isRotated={isFormVisible}>
            <Image
              src="/icons/arrow-1.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </ArrowIcon>
        </StyledButton>
        <StyledButton onClick={onToggleFilter}>
          Filter Plants
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
      {/* If the filter form is visible, show the form with radio buttons for
      light need options and a reset button. */}
      {isFilterVisible && (
        <>
          <form>
            {lightOptions.map((option) => (
              <React.Fragment key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  name="lightNeed"
                  value={option.value}
                  // Set the checked attribute based on the filter state.
                  onChange={(event) => onFilterValue(event.target.value)}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </React.Fragment>
            ))}
          </form>
          <button type="button" onClick={onResetFilter}>
            Reset
          </button>
        </>
      )}
      {isFormVisible && <PlantForm onCreatePlant={onCreatePlant} />}
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
            {/* If the filter is visible and no plants match the filter criteria, */}
            {isFilterVisible
              ? "No plants match the selected filter criteria."
              : "Unfortunately, you have not yet added any plants."}
          </p>
        </StyledErrorMessageWrapper>
      )}
    </>
  );
}
