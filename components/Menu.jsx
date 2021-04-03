import { Flex, Image, Heading, Text, HStack, VStack } from "@chakra-ui/react";

const products = [
  {
    titre: " Titre",
    image: "/img/sachetsDePralines.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/Pralines.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/pralines2.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/Pralines3.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/pralinesChocoNoir.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/sapin_au_Chocolat.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/tasseDeCafeChoco.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/Meringues.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/tarteAuxPommes.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/MillefeuillesFraise.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/galleteDesRois.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/cakeFruitsSecs.jpg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
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
        paddingTop={["20", "20", "20", "100px", "100px", "100px"]}
        fontFamily="MagentaRose"
        color="#7F5539"
      >
        Mes Produits
      </Heading>{" "}
      <Flex
        width="70%"
        marginTop="90px"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
      >
        {products.map((product) => (
          <HStack m="1" flexWrap="wrap">
            <figure class="imghvr-push-up">
              <Image
                w="250px"
                h="250px"
                border="3px solid #E6CCB2"
                src={product.image}
                alt={product.alt}
              />
              <figcaption>
                <Heading as="h2" size="md" class="ih-fade-down ih-delay-sm ">
                  {product.titre}
                </Heading>
                <Text class="ih-zoom-in ih-delay-md">
                  <i>{product.description}</i>
                </Text>
              </figcaption>
            </figure>
          </HStack>
        ))}
      </Flex>
    </Flex>
  );
}
