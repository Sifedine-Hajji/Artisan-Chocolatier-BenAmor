import { Flex, Text, Heading, Image } from "@chakra-ui/react";
import ScrollButton from "./ScrollButtonAnim";
export default function About() {
  return (
    <Flex
      height={["56vh", "56vh", "56vh", "55vh", "55vh", "55vh"]}
      backgroundColor="#090A0B"
      color="#E9ECEF"
      width="100%"
      alignItems="center"
    >
      <Image
        display={["none", "none", "none", "Flex", "Flex", "Flex"]}
        marginLeft="50px"
        width="200px"
        filter="invert(70%)"
        src="/img/cacao.png"
      />
      <Flex
        height={["56vh", "56vh", "56vh", "55vh", "55vh", "55vh"]}
        flexDir="column"
        alignItems="center"
      >
        <Heading
          color="#E6CCB2"
          as="h1"
          textAlign="center"
          width="100%"
          fontSize={["30px", "30px", "30px", "40px", "50px", "50px"]}
          fontFamily="MagentaRose"
          pt={["10", "10", "10", "20", "20", "20"]}
        >
          À Propos
        </Heading>{" "}
        <Text
          textAlign="center"
          paddingTop="50"
          width={["100%", "100%", "100%", "80%", "50%", "50%"]}
          fontSize={["sm", "sm", "sm", "md", "lg", "lg"]}
        >
          AB artisan de fonction comptable, se réoriente de la manière la plus
          simple dans la transformation de differents produits nobles afin de
          devenir créateur de gourmandises. On vous propose des produits
          Artisanaux dont les matières premières sont de qualité et de saisons,
          dans le respect ancestral de la fabricatrion de chacun de ses articles
          proposés. Ici on peut découvrir des nouveaux goûts ou encore
          personnalisés selon le désir de chacun.
        </Text>
        <ScrollButton />
      </Flex>
      <Image
        display={["none", "none", "none", "Flex", "Flex", "Flex"]}
        marginRight="50px"
        width="200px"
        filter="invert(70%)"
        src="/img/cacao.png"
      />
    </Flex>
  );
}
