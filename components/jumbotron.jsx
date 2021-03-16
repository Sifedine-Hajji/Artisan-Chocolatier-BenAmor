import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

export default function Jumbotron() {
  return (
    <Flex
      height={["sm", "sm", "sm", "md", "lg", "lg"]}
      color="white"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Image
        width={["200px", "200px", "200px", "200px", "400px", "400px"]}
        src="/img/ABlogo2.1.png"
        alt="Logo"
      />
      <Text
        backgroundColor="rgba(0,0,0,0.8)"
        p="0.8"
        textAlign="center"
        fontSize={["sm", "sm", "sm", "md", "lg", "lg"]}
      >
        Goutez au bon chocolat artisanal sans conservateurs! et à plein d'autres
        gourmandises.{" "}
      </Text>
    </Flex>
  );
}
