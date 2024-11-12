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

  // State to control the visibility of the filter form.
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  // State to store the current filter value, which determines the light need for filtering - the initial value is an empty string to show all plants.
  const [filter, setFilter] = useState("");

  // Filtered plants based on the selected light need, if a filter is applied.
  const filteredPlants = plants.filter((plant) => plant.lightNeed === filter);

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

  function handleResetFilter() {
    setFilter("");
    setIsFilterVisible(false);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          // Pass either filtered or full plants list based on the filter state. If the filter is active (not an empty string/falsy), pass the filtered plants, otherwise pass the full list.
          plants={filter ? filteredPlants : plants}
          // Toggle filter visibility state.
          onToggleFilter={() => setIsFilterVisible((prev) => !prev)}
          // Set filter value from filter form. This function is called when a user selects a light need option.
          onFilterValue={(value) => setFilter(value)}
          // Pass current filter visibility state. This is used to rotate the arrow icon based on the visibility state and to show/hide the filter form.
          isFilterVisible={isFilterVisible}
          // Pass function to reset the filter state and hide the filter form.
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
