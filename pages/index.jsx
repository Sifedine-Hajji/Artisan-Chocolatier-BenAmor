import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/BurgerNav";
import Jumbotron from "../components/jumbotron";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artisan Chocolatier Benamor</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Bienvenu chez l'Artisan chocolatier Amal Benamor. Decouvrez et goutez au bon chocolat artisanal sans conservateurs! Et à plein d'autres gourmandises."
        />
      </Head>
      <Box
        backgroundImage="url('/img/cacaoBanner.jpg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height="45vh"
        id="Home"
      >
        <Navbar />
        <MobileNavbar />
        <Jumbotron />
      </Box>

      <About />

      <Menu />

      <Contact />
      <Footer />
    </div>
  );
}
