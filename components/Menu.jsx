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

export default function Menu() {
  return (
    <Flex
      color="#E6CCB2"
      width="100%"
      flexDir="column"
      alignItems="center"
      // backgroundColor="#121417"
      backgroundImage="linear-gradient(339deg, rgba(47, 47, 47,0.02) 0%, rgba(47, 47, 47,0.02) 42%,transparent 42%, transparent 99%,rgba(17, 17, 17,0.02) 99%, rgba(17, 17, 17,0.02) 100%),linear-gradient(257deg, rgba(65, 65, 65,0.02) 0%, rgba(65, 65, 65,0.02) 11%,transparent 11%, transparent 92%,rgba(53, 53, 53,0.02) 92%, rgba(53, 53, 53,0.02) 100%),linear-gradient(191deg, rgba(5, 5, 5,0.02) 0%, rgba(5, 5, 5,0.02) 1%,transparent 1%, transparent 45%,rgba(19, 19, 19,0.02) 45%, rgba(19, 19, 19,0.02) 100%),linear-gradient(29deg, rgba(28, 28, 28,0.02) 0%, rgba(28, 28, 28,0.02) 33%,transparent 33%, transparent 40%,rgba(220, 220, 220,0.02) 40%, rgba(220, 220, 220,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))"
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
      <Flex
        width="55%"
        marginTop="90px"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
        justifyContent="space-between"
      >
        <Stack
          flexDir="row"
          height="220px"
          margin="auto"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h1" size="lg">
              {" "}
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              {" "}
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              {" "}
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
        <Stack
          flexDir="row"
          height="220px"
          margin="15px"
          borderBottom="1px solid #ddd"
        >
          <Image
            width="200px"
            height="200px"
            border="3px solid #E6CCB2"
            borderRadius="50%"
            src="/img/Gato1.jpg"
          />
          <VStack>
            {" "}
            <Heading as="h4" size="lg">
              {" "}
              Praline au chocolat
            </Heading>
            <Text>Ceci est un gateau a la pistache</Text>
          </VStack>
        </Stack>
      </Flex>
    </Flex>
  );
}
