import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import initialPlants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });

  function handleCreatePlant(newPlant) {
    const plantWithId = { id: uid(), ...newPlant };
    setPlants([plantWithId, ...plants]);
  }

  function handleToggleBookmark(plantId) {
    setPlants(
      plants.map((plantData) =>
        plantData.id === plantId
          ? { ...plantData, isFavorite: !plantData.isFavorite }
          : plantData
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          plants={plants}
          onCreatePlant={handleCreatePlant}
          onToggleBookmark={handleToggleBookmark}
        />
      </Layout>
    </>
  );
}
