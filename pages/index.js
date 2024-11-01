import PlantCard from "@/components/PlantCard";
import plants from "@/assets/plants";

export default function HomePage() {
  return (
    <div>
      <h2>Discover Plants</h2>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
