import Head from "next/head";
import styles from "../styles/sass/Home.module.scss";
import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jumbotron from "../components/jumbotron";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artisan Chocolatier Benamor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Jumbotron />

      <Footer />
    </div>
  );
}
