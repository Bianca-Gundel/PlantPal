import Image from "next/image";

export default function PlantCard({ plant }) {
  return (
    <div>
      <h2>{plant.name}</h2>
      <h3>{plant.botanicalName}</h3>
      <Image
        alt={`Image of ${plant.name}`}
        width={300}
        height={300}
        src={plant.imageUrl}
      />
    </div>
  );
}
