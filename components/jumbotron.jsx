import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

export default function Jumbotron() {
  return (
    <Flex
      width="100%"
      height="45vh"
      backgroundImage="url('/img/cacaoBanner.jpg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Image width="400px" src="/img/ABlogo2.png" alt="Logo" />
    </Flex>
  );
}
