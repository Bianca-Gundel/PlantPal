import PlantCard from "@/components/PlantCard";
import styled, {css} from "styled-components";
import { StyledContentHeadline } from "@/components/StyledContentHeadline";
import PlantForm from "@/components/PlantForm";
import { useState } from "react";
import Image from "next/image";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledButton = styled.button`
cursor: pointer;
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

export default function HomePage({onSubmitCreatePlant, plants}) {

      const [isCreating, setIsCreating] = useState(false);
    
  function handleCreateState() {
    setIsCreating(!isCreating)
    console.log(isCreating)
  }

  return (
    <>
      <StyledContentHeadline>Discover Plants</StyledContentHeadline>
      <StyledButton onClick={handleCreateState} >Create New Plant
        <ArrowIcon isRotated={isCreating} >
      <Image 
          src={"/icons/arrow-1.svg"}
          alt={"arrow"}
          width={20}
          height={20}
          />

        </ArrowIcon>
      </StyledButton>
      {isCreating && <PlantForm onSubmitCreatePlant={onSubmitCreatePlant} />}
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
