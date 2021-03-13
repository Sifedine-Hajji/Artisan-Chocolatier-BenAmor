import {
  Link,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  HStack,
  Stack,
} from "@chakra-ui/react";

export default function Menu() {
  return (
    <Flex
      color="#E6CCB2"
      width="100%"
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
        color="#E6CCB2"
        pt="8"
        fontFamily="MagentaRose"
      >
        My products
      </Heading>{" "}
      <Flex height="100vh" marginTop="90px">
        <Stack flexDir="row">
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <Text>Ceci est un gateau a la pistache</Text>
        </Stack>

        <Stack flexDir="row">
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <Text>Ceci est un gateau a la pistache</Text>
        </Stack>
        <Stack flexDir="row">
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <Text>Ceci est un gateau a la pistache</Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
