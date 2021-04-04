import { Flex, Text, Heading } from "@chakra-ui/react";
import ScrollButton from "./ScrollButtonAnim";
export default function About() {
  return (
    <Flex
      height={["56vh", "56vh", "56vh", "55vh", "55vh", "55vh"]}
      backgroundColor="#121417"
      color="#E6CCB2"
      width="100%"
      flexDir="column"
      alignItems="center"
    >
      <Heading
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
        AB artisan de fonction comptable se reoriente de la manière la plus
        simple dans la transformation de differents produits noble afin de
        devenir créateur degourmandise. On vous propose Artisanals dont les
        matieres premieres sont de qualité s nobles et de saisons. dans le
        respect ancestral de la fabricatrion de chacun de ses articles proposés.
        Ici on peut découvrir des nouveaux goûts ou encore personnalisés selon
        le desir de chacun.
      </Text>
      <ScrollButton />
    </Flex>
  );
}
