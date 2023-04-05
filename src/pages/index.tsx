import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SAGA Cards TRACKER</title>
        <meta
          name="description"
          content="SAGA Cards tracker allows you to visualize which SAGA Cards NFTs you miss."
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
