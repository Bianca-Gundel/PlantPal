import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bloom Buddy</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
