import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
import styles from "../styles/sass/Home.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artisan Chocolatier Benamor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box
        backgroundImage="url('/img/cacaoBanner.jpg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
      >
        <Header />
        <Jumbotron />
      </Box>

      <About />
      <Menu />
      <Footer />
    </div>
  );
}
