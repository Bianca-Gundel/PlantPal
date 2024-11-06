import PlantCard from "@/components/PlantCard";
import styled, { css } from "styled-components";
import { StyledContentHeadline } from "@/components/StyledContentHeadline";
import PlantForm from "@/components/PlantForm";
import { useState } from "react";
import Image from "next/image";
import { StyledButton } from "@/components/StyledButton";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ArrowIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.isRotated &&
    css`
      transform: rotate(180deg);
    `}
`;

const FlexboxButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function HomePage({ onSubmitCreatePlant, plants }) {
  const [isCreating, setIsCreating] = useState(false);

  function handleCreateState() {
    setIsCreating(!isCreating);
  }

  return (
    <>
      <FlexboxButton>
        <StyledButton onClick={handleCreateState}>
          Create&nbsp;New&nbsp;Plant&nbsp;&nbsp;
          <ArrowIcon isRotated={isCreating}>
            <Image
              src={"/icons/arrow-1.svg"}
              alt={"arrow"}
              width={20}
              height={20}
            />
          </ArrowIcon>
        </StyledButton>
      </FlexboxButton>
      {isCreating && <PlantForm onSubmitCreatePlant={onSubmitCreatePlant} />}
      <StyledContentHeadline>Discover Plants</StyledContentHeadline>
      <StyledPlantList>
        {plants.map((plant) => {
          return (
            <li key={plant.id}>
              <PlantCard plant={plant} />
            </li>
          );
        })}
      </StyledPlantList>
    </>
  );
}
