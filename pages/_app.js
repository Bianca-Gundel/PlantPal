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

/*
 ** Think About / Todo List:
 ** Form and Filter Open Simultaneously:
 **    - Issue: Both form and filter can be open at the same time.
 **    - It can confuse users about which action (create or filter) they’re performing.
 **    - Suggested Solution: Close the form when the filter is opened and vice versa.
 **    - 💡 Hint: This requires moving the `isFormVisible` state to the App componet, so both the form and filter visibility states can be managed together.
 **
 ** Filter State on Returning to Home Page - may not be needed or in a further iteration:
 **    - The Filter remains active when returning from a detail page.
 **    - Pros: Consistent view for users.
 **    - Cons: Users might expect filter to reset to show all plants.
 **    - 💡 Hint: Use `useEffect` to reset filter on Home page load if needed.
 */
