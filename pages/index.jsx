import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

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
        height="45vh"
        id="Home"
      >
        <Header />
        <Jumbotron />
      </Box>

      <About />

      <Menu />

      <Contact />
      <Footer />
    </div>
  );
}
