import PlantCard from "@/components/PlantCard";
import styled, { css } from "styled-components";
import Image from "next/image";
import PlantForm from "@/components/PlantForm";
import { useState } from "react";
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

export default function HomePage({ onCreatePlant, plants, onToggleBookmark }) {
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
      </FlexboxWrapper>
      {isFormVisible && <PlantForm onCreatePlant={onCreatePlant}/>}
      <h2>Discover Plants</h2>

      {plants && plants.length > 0 ? (
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
          <p>Unfortunately, you have not yet added any plants.</p>
        </StyledErrorMessageWrapper>
      )}
    </>
  );
}
