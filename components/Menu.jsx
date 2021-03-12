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
        color="#E6CCB2"
        backgroundColor="#7F5539"
      >
        What I do ?
      </Heading>{" "}
      <Flex width="80%" paddingTop="80px" justifyContent="flex-end">
        <Flex flexDir="column">
          <Heading as="h2" px="2" color="#7F5539">
            Petits pralinées au pistache
          </Heading>
          <Text>
            {" "}
            ce sont des petits pralinées au pistache enrobés de chocolat
          </Text>
        </Flex>

        <Image
          border="5px solid black"
          borderRadius="10px"
          width="300px"
          src="/img/Gato1.jpg"
          alt=""
        />
      </Flex>
      <Flex width="80%" paddingTop="80px" justifyContent="flex-start">
        <Image
          border="5px solid black"
          borderRadius="10px"
          width="300px"
          src="/img/Gato1.jpg"
          alt=""
        />
        <Flex flexDir="column">
          <Heading
            as="h2"
            px="2"
            color="#7F5539"
            textDecoration=" #7F5539 wavy underline"
          >
            Petits pralinées au pistache
          </Heading>
          <Text>
            {" "}
            ce sont des petits pralinées au pistache enrobés de chocolat
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
