import {
  Link,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";

const products = [
  {
    titre: " Pralines mix",
    image: "/img/sachetsDePralines.jpg",
    description: "mix de pralines divers (coco, noisettte, amandes)",
  },
  {
    titre: "Cake aux divers fruits secs",
    image: "/img/cakeFruitsSecs.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
  {
    titre: "Milles feuilles à la fraise",
    image: "/img/MillefeuillesFraise.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
  {
    titre: "Macaron au chocolat ",
    image: "/img/sachetsDePralines.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
  {
    titre: "Macaron au chocolat ",
    image: "/img/Meringues.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
  {
    titre: "Macaron au chocolat ",
    image: "/img/galleteDesRois.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
  {
    titre: "Mille feuilles à la fraise ",
    image: "/img/sachetsDePralines.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
  {
    titre: "Macaron rose au chocolat ",
    image: "/img/sachetsDePralines.jpg",
    description: "Macaron fouré au chocolat ou alors a la confiture",
  },
];

export default function Menu() {
  return (
    <Flex
      color="#E6CCB2"
      width="100%"
      flexDir="column"
      alignItems="center"
      // backgroundColor="#121417"
      backgroundImage="linear-gradient(339deg, rgba(47, 47, 47,0.02) 0%, rgba(47, 47, 47,0.02) 42%,transparent 42%, transparent 99%,rgba(17, 17, 17,0.02) 99%, rgba(17, 17, 17,0.02) 100%),linear-gradient(257deg, rgba(65, 65, 65,0.02) 0%, rgba(65, 65, 65,0.02) 11%,transparent 11%, transparent 92%,rgba(53, 53, 53,0.02) 92%, rgba(53, 53, 53,0.02) 100%),linear-gradient(191deg, rgba(5, 5, 5,0.02) 0%, rgba(5, 5, 5,0.02) 1%,transparent 1%, transparent 45%,rgba(19, 19, 19,0.02) 45%, rgba(19, 19, 19,0.02) 100%),linear-gradient(29deg, rgba(28, 28, 28,0.02) 0%, rgba(28, 28, 28,0.02) 33%,transparent 33%, transparent 40%,rgba(220, 220, 220,0.02) 40%, rgba(220, 220, 220,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));"
      id="Menu"
    >
      <Heading
        as="h1"
        textAlign="center"
        width="100%"
        fontSize={["30px", "30px", "30px", "40px", "50px", "50px"]}
        pt="8"
        fontFamily="MagentaRose"
      >
        My products
      </Heading>{" "}
      <Flex
        width="70%"
        marginTop="90px"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
        justifyContent="space-between"
      >
        {products.map((product) => (
          <HStack m="1" flexWrap="wrap">
            <Image
              w="250px"
              h="250px"
              border="3px solid #E6CCB2"
              src={product.image}
            />
            <VStack fontSize={["sm", "sm", "sm", "md", "lg", "lg"]}>
              <Heading as="h4" size="lg">
                {product.titre}
              </Heading>
              <Text>{product.description}</Text>
            </VStack>
          </HStack>
        ))}
      </Flex>
    </Flex>
  );
}
