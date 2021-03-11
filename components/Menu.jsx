import {
  Link,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";

export default function Menu() {
  return (
    <Flex
      color="#E6CCB2"
      width="100%"
      height="100vh"
      flexDir="column"
      alignItems="center"
      backgroundColor="#121417"
      id="Menu"
    >
      <Heading
        as="h1"
        textAlign="center"
        width="100%"
        fontSize="50px"
        textDecoration="underline"
      >
        What I do ?
      </Heading>{" "}
      <Flex width="80%" paddingTop="80px" justifyContent="flex-end">
        <Text>Salut</Text>

        <Image
          border="5px solid black"
          borderRadius="10px"
          width="300px"
          src="/img/Gato1.jpg"
          alt=""
        />
      </Flex>
    </Flex>
  );
}
