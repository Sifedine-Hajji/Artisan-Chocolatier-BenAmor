import { Box, Flex, Text, Image, Link, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex height="44vh" backgroundColor="#121417" color="#E6CCB2" width="100%">
      <Heading
        as="h1"
        textAlign="center"
        width="100%"
        fontSize="50px"
        textDecoration="underline"
      >
        About
      </Heading>{" "}
    </Flex>
  );
}
