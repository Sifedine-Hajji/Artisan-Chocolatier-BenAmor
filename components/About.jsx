import { Box, Flex, Text, Image, Link, Heading } from "@chakra-ui/react";
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
        About
      </Heading>{" "}
      <Text
        textAlign="center"
        paddingTop="50"
        width={["100%", "100%", "100%", "80%", "50%", "50%"]}
        fontSize={["sm", "sm", "sm", "md", "lg", "lg"]}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste modi
        expedita alias id amet quo dolore nobis distinctio ut. Ea consectetur
        incidunt optio fugit rem, aperiam amet odio error nostrum. In reiciendis
        culpa sint magni commodi nobis quibusdam qui quod corporis, beatae
      </Text>
      <ScrollButton />
    </Flex>
  );
}
