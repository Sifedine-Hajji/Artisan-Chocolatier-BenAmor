import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

export default function Jumbotron() {
  return (
    <Flex
      height="45vh"
      color="white"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Image width="400px" src="/img/ABlogo2.1.png" alt="Logo" />
      <Text backgroundColor="rgba(0,0,0,0.8)" p="0.8">
        Goutez au bon chocolat artisanal sans conservateurs!{" "}
      </Text>
    </Flex>
  );
}
