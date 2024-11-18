import PlantCard from "@/components/PlantCard/PlantCard";
import BackLink from "@/components/BackLink/BackLink";
import { StyledList } from "@/components/styled/StyledList";

export default function MyPlants({ bookmarkedPlants, onToggleBookmark }) {
  return (
    <>
      <BackLink />
      <h2>My Plants</h2>
      {bookmarkedPlants.length === 0 && (
        <p>Unfortunately, you have not yet added any plants as favourites.</p>
      )}
      {/* FYI: Icon for error message follows after merge */}
      <StyledList>
        {bookmarkedPlants.map((plant) => {
          return (
            <li key={plant.id}>
              <PlantCard plant={plant} onToggleBookmark={onToggleBookmark} />
            </li>
          );
        })}
      </StyledList>
    </>
  );
}
