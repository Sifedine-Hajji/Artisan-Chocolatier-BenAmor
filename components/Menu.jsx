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
    titre: "Milles feuilles framboise et fraise",
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
    alt: "Cake fruits secs",
  },
  {
    titre: "Titre",
    image: "/img/GateauFraiseKiwi.jpeg",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
    description: "Description",
    alt: "produits (pralines,gateau,...)",
  },
  {
    titre: "Titre",
    image: "/img/",
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
      backgroundImage="radial-gradient(circle at center center, rgba(217, 217, 217,0.05) 0%, rgba(217, 217, 217,0.05) 15%,rgba(197, 197, 197,0.05) 15%, rgba(197, 197, 197,0.05) 34%,rgba(178, 178, 178,0.05) 34%, rgba(178, 178, 178,0.05) 51%,rgba(237, 237, 237,0.05) 51%, rgba(237, 237, 237,0.05) 75%,rgba(138, 138, 138,0.05) 75%, rgba(138, 138, 138,0.05) 89%,rgba(158, 158, 158,0.05) 89%, rgba(158, 158, 158,0.05) 100%),radial-gradient(circle at center center, rgb(255,255,255) 0%, rgb(255,255,255) 6%,rgb(255,255,255) 6%, rgb(255,255,255) 12%,rgb(255,255,255) 12%, rgb(255,255,255) 31%,rgb(255,255,255) 31%, rgb(255,255,255) 92%,rgb(255,255,255) 92%, rgb(255,255,255) 97%,rgb(255,255,255) 97%, rgb(255,255,255) 100%); background-size: 42px 42px;"
      id="Menu"
    >
      <Heading
        as="h1"
        textAlign="center"
        width="100%"
        fontSize={["30px", "30px", "30px", "40px", "50px", "50px"]}
        paddingTop={["20", "20", "20", "100px", "100px", "100px"]}
        fontFamily="MagentaRose"
        color="#E6CCB2"
      >
        Mes Produits
      </Heading>{" "}
      <Flex
        width={["100ù", "100%", "100%", "100%", "60%", "60%"]}
        marginTop="90px"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
      >
        {products.map((product) => (
          <HStack m="1" flexWrap="wrap">
            <figure className="imghvr-push-up">
              <Image
                w="250px"
                h="250px"
                border="3px solid #E6CCB2"
                src={product.image}
                alt={product.alt}
              />
              <figcaption>
                <Heading
                  as="h2"
                  size="md"
                  className="ih-fade-down ih-delay-sm "
                >
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
