import PlantCard from "@/components/PlantCard";
import plants from "@/assets/plants";
import styled from "styled-components";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function HomePage() {
  return (
    <div>
      <h2>Discover Plants</h2>
      <StyledPlantList>
        {plants.map((plant) => {
          return (
            <li key={plant.id}>
              <PlantCard plant={plant} />
            </li>
          );
        })}
      </StyledPlantList>
    </div>
  );
}
