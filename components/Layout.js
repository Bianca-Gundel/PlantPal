import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bloom Buddy</title>
      </Head>
      <header>
        <h1>Bloom Buddy</h1>
      </header>
      <main>{children}</main>
      <NavBar />
    </>
  );
}
