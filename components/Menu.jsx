import { Flex, Image, Heading, Text, HStack, VStack } from "@chakra-ui/react";

const products = [
  {
    titre: " Truffes",
    image: "/img/sachetsDePralines.jpg",
    description:
      "Truffes en 2 facons: Truffe praliné enrobage cacao, Truffe chocolat noir enrobage amandes",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "une Bouchée",
    image: "/img/Pralines.jpg",
    description:
      "Une bouchée croustillant feuillantine enrobage chocolat noir.",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Praline Pistache",
    image: "/img/pralines2.jpg",
    description:
      "Maspin à la pistache enrobage chocolat au lait et decor pistache broyée.",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Des bouchées",
    image: "/img/Pralines3.jpg",
    description:
      "Des bouchées dréssé sur un biscuit sablé à l'orange enrobage au choix(chocolat au lait café et chocolat noir amandes éffilées)",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Un Manon",
    image: "/img/pralinesChocoNoir.jpg",
    description:
      "Un manon dressé sur un palet de maspin avec un cerneau de noix enrobés au chocolat au lait.",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Sapin Fantaisie ",
    image: "/img/sapin_au_Chocolat.jpg",
    description:
      "Tronc chocolat au lait, fruits secs  cône en chocolat noir décoré de fil de chocolat au lait saupoudré de coco.",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Des Snobinette",
    image: "/img/tasseDeCafeChoco.jpg",
    description:
      "Différents choix de petits cups (pralinées, chocolat noir, chocolat au lait, chocolat amandes et chcolat pistache,...) selon vos envies.",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Meringues en rosace",
    image: "/img/Meringues.jpg",
    description:
      "rosace de meringue. Peut etre proposé selon le choix(speculoos,violette,pistache,noisette) avec ou sans chocolat. ",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Tarte aux pomme rosace",
    image: "/img/tarteAuxPommes.jpg",
    description:
      "pâte à tarte, un fond de crème patissière pomme sucre canelle",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre:
      "Mille feuilles framboise avec des paillette de chocolat et des fraise",
    image: "/img/MillefeuillesFraise.jpg",
    description:
      "Pate feuilleté crouistillante, creme patissiere vanille, coulis de framboise et framboise fraiche. Un glace blanc pailleté de chocolat.",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Petivie",
    image: "/img/galleteDesRois.jpg",
    description:
      "Pâte feuilleté interieur frangipane sur un lit de fruits rouge",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Cake fruits secs",
    image: "/img/cakeFruitsSecs.jpg",
    description:
      "cranberry, raisin secs, amandes, fraises sechée, cerneau de noix, noisettes.",
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
