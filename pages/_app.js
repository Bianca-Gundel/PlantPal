import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import initialPlants from "@/assets/plants";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });

  function handleDeletePlant() {
    console.log("test");
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          plants={plants}
          onDeletePlant={handleDeletePlant}
        />
      </Layout>
    </>
  );
}
