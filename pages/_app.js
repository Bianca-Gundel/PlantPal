import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import initialPlants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });

  const [filterCount, setFilterCount] = useState("0");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filter, setFilter] = useState("");

  const filteredPlants = plants.filter((plant) => plant.lightNeed === filter);
  const bookmarkedPlants = plants.filter((plant) => plant.isBookmarked);

  function handleCreatePlant(newPlant) {
    const plantWithId = { id: uid(), ...newPlant };
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

  function handleFilterValue(value) {
    setFilter(value);
    setFilterCount("1");
  }

  function handleResetFilter() {
    setFilter("");
    setIsFilterVisible(false);
    setFilterCount("0");
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

  return (
    <>
      <GlobalStyle />
      <Layout onResetFilter={handleResetFilter}>
        <Component
          {...pageProps}
          plants={filter ? filteredPlants : plants}
          bookmarkedPlants={bookmarkedPlants}
          selectedFilter={filter}
          filterCount={filterCount}
          isFilterVisible={isFilterVisible}
          isFormVisible={isFormVisible}
          onToggleFilter={handleToggleFilter}
          onToggleForm={handleToggleForm}
          onFilterValue={handleFilterValue}
          onResetFilter={handleResetFilter}
          onCreatePlant={handleCreatePlant}
          onToggleBookmark={handleToggleBookmark}
          onDeletePlant={handleDeletePlant}
        />
      </Layout>
    </>
  );
}
