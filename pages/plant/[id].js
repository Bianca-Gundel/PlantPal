import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function PlantDetails({ plants }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(plants);

  const plantData = plants ? plants.find((plant) => plant.id === id) : null;

  if (!plantData) return <div>No data available</div>;
  console.log(plantData);
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
    </>
  );
}
