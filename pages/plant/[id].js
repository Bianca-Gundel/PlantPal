import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import BackLink from "@/components/BackLink";

const StyledSeasonList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconsContainer = styled.article`
  display: flex;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBorder = styled.article`
  position: relative;
  margin-top: 20px;
  height: 55vw;
  width: 90vw;
  border: 0px solid;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
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
      <BackLink />
      <h3>{plantData.name}</h3>
      <h4>{plantData.botanicalName}</h4>
      <ImageBorder>
        <Image
          alt={`Image of ${plantData.name}`}
          fill
          src={
            plantData.imageUrl ||
            "https://images.unsplash.com/photo-1564502983799-becfbf817b4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </ImageBorder>
      <p>{plantData.description}</p>

      <IconsContainer>
        <IconContainer>
          <Image
            unoptimized
            alt={"Icon of a drop"}
            src={waterIconSrc}
            width={30}
            height={30}
          />
          <p>{plantData.waterNeed}</p>
        </IconContainer>

        <IconContainer>
          <Image
            unoptimized
            alt={"Icon of a sun"}
            src={lightIconSrc}
            width={30}
            height={30}
          />
          <p>{plantData.lightNeed}</p>
        </IconContainer>

        <IconContainer>
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
        </IconContainer>
      </IconsContainer>
    </>
  );
}
