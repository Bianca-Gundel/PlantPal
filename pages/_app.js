import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import initialPlants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });

  const [filterCount, setFilterCount] = useState("0");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    lightNeed: null,
    waterNeed: null,
    fertiliserSeason: [],
  });

  const [imageUrl, setImageUrl] = useState("");

  const filteredPlants = plants.filter((plant) => {
    return (
      (!filters.lightNeed || plant.lightNeed === filters.lightNeed) &&
      (!filters.waterNeed || plant.waterNeed === filters.waterNeed) &&
      (!filters.fertiliserSeason ||
        !filters.fertiliserSeason.length ||
        filters.fertiliserSeason.every((season) =>
          plant.fertiliserSeason.includes(season)
        ))
    );
  });

  const bookmarkedPlants = plants.filter((plant) => plant.isBookmarked);

  function handleUploadImage(imageUrl) {
    setImageUrl(imageUrl);
  }

  function handleCreatePlant(newPlant) {
    const plantWithId = { id: uid(), ...newPlant, imageUrl: imageUrl };
    setPlants([plantWithId, ...plants]);
  }

  function handleToggleBookmark(plantId) {
    setPlants(
      plants.map((plantData) =>
        plantData.id === plantId
          ? { ...plantData, isBookmarked: !plantData.isBookmarked }
          : plantData
      )
    );
  }

  function handleDeletePlant(plantId) {
    setPlants(plants.filter((plant) => plant.id !== plantId));
    router.push("/");
  }

  function handleFilterValue(event) {
    if (event.name === "fertiliserSeason") {
      setFilters((prevFilters) => {
        const updatedFertiliserSeason = prevFilters.fertiliserSeason.includes(
          event.value
        )
          ? prevFilters.fertiliserSeason.filter(
              (season) => season !== event.value
            )
          : [...prevFilters.fertiliserSeason, event.value];
        return {
          ...prevFilters,
          fertiliserSeason: updatedFertiliserSeason,
        };
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [event.name]: event.value,
      }));
    }
  }

  function handleResetFilter() {
    setFilters({ lightNeed: null, waterNeed: null, fertiliserSeason: [] });
    setIsFilterVisible(false);
  }

  // FYI: For better usability, we deviate from our user story and leave only one form expanded at a time

  function handleToggleFilter() {
    setIsFilterVisible(!isFilterVisible);
    if (isFormVisible) {
      setIsFormVisible(false);
    }
  }

  function handleToggleForm() {
    setIsFormVisible(!isFormVisible);
    if (isFilterVisible) {
      setIsFilterVisible(false);
    }
  }

  function handleEditPlant(plantId, updatedPlant) {
    const editedPlant = { ...updatedPlant, imageUrl };
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, ...editedPlant } : plant
      )
    );
  }

  useEffect(() => {
    const count =
      filters.fertiliserSeason.length +
      (filters.lightNeed ? 1 : 0) +
      (filters.waterNeed ? 1 : 0);
    setFilterCount(count);
  }, [filters]);

  return (
    <>
      <GlobalStyle />
      <Layout onResetFilter={handleResetFilter}>
        <Component
          {...pageProps}
          plants={filters ? filteredPlants : plants}
          bookmarkedPlants={bookmarkedPlants}
          selectedFilter={filters}
          filterCount={filterCount}
          isFilterVisible={isFilterVisible}
          isFormVisible={isFormVisible}
          imageUrl={imageUrl}
          onToggleFilter={handleToggleFilter}
          onToggleForm={handleToggleForm}
          onFilterValue={handleFilterValue}
          onResetFilter={handleResetFilter}
          onCreatePlant={handleCreatePlant}
          onUploadImage={handleUploadImage}
          onToggleBookmark={handleToggleBookmark}
          onDeletePlant={handleDeletePlant}
          onEditPlant={handleEditPlant}
        />
      </Layout>
    </>
  );
}
