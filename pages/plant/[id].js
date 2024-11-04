import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSeasonList = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function PlantDetails({ plants }) {
  const router = useRouter();
  const { id } = router.query;

  const plantData = plants ? plants.find((plant) => plant.id === id) : null;

  if (!plantData) return <div>No data available</div>;

  let waterIconSrc = "";

  const waterNeed = plantData.waterNeed;
  if (waterNeed === "High") {
    waterIconSrc = "/icons/drop-full.svg";
  } else if (waterNeed === "Medium") {
    waterIconSrc = "/icons/drop-half.svg";
  } else if (waterNeed === "Low") {
    waterIconSrc = "/icons/drop.svg";
  }

  let lightIconSrc = "";

  const lightNeed = plantData.lightNeed;

  if (lightNeed === "Full Sun") {
    lightIconSrc = "/icons/sun.svg";
  } else if (lightNeed === "Partial Shade") {
    lightIconSrc = "/icons/sun-half.svg";
  } else if (lightNeed === "Full Shade") {
    lightIconSrc = "/icons/sun-full.svg";
  }

  return (
    <>
      <h3>{plantData.name}</h3>
      <h4>{plantData.botanicalName}</h4>
      <Image
        alt={`Image of ${plantData.name}`}
        width={300}
        height={200}
        src={
          plantData.imageUrl ||
          "https://images.unsplash.com/photo-1564502983799-becfbf817b4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <p>{plantData.description}</p>
      <Image
        unoptimized
        alt={"Icon of a drop"}
        src={waterIconSrc}
        width={30}
        height={30}
      />
      <p>{plantData.waterNeed}</p>

      <Image
        unoptimized
        alt={"Icon of a sun"}
        src={lightIconSrc}
        width={30}
        height={30}
      />
      <p>{plantData.lightNeed}</p>

      <Image
        unoptimized
        alt={"Icon of a sun"}
        src={"/icons/fertilizer.svg"}
        width={30}
        height={30}
      />
      <StyledSeasonList>
        {plantData.fertiliserSeason.map((season) => {
          return <li key={season}>{season}</li>;
        })}
      </StyledSeasonList>
    </>
  );
}

//TODO: Image wrapper hinzufügen für abgerundete Ecken
