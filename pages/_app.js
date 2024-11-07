import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import initialPlants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });
  console.log(plants);

  function handleCreatePlant(newPlant) {
    const plantWithId = { id: uid(), ...newPlant };
    setPlants([plantWithId, ...plants]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          plants={plants}
          onCreatePlant={handleCreatePlant}
        />
      </Layout>
    </>
  );
}
