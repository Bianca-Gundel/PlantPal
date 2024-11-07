import PlantCard from "@/components/PlantCard";
import Image from "next/image";
import styled from "styled-components";

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
