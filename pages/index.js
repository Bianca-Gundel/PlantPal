import PlantCard from "@/components/PlantCard";
import styled from "styled-components";

const StyledPlantList = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function HomePage({ plants }) {
  return (
    <>
      <h2>Discover Plants</h2>

      {plants && plants.length > 0 ? (
        <StyledPlantList>
          {plants.map((plant) => (
            <li key={plant.id}>
              <PlantCard plant={plant} />
            </li>
          ))}
        </StyledPlantList>
      ) : (
        <p>Unfortunately, you have not yet added any plants.</p>
      )}
    </>
  );
}
