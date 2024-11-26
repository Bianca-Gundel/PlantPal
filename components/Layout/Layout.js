import Head from "next/head";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bloom Buddy</title>
      </Head>
      <header />
      <main>{children}</main>
      <NavBar />
    </>
  );
}
