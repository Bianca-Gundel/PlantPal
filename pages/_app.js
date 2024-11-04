import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import plants from "@/assets/plants";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} plants={plants} />
      </Layout>
    </>
  );
}
