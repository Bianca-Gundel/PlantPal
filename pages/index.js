import PlantCard from "@/components/PlantCard";
import plants from "@/assets/plants";
import styled from "styled-components";
import { StyledContentHeadline } from "@/components/StyledContentHeadline";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function HomePage() {
  return (
    <>
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
