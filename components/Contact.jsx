import { Link, Flex, Image, Heading, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
      height="40vh"
      color="#E6CCB2"
      width="100%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#121417"
      id="Contact"
    >
      <Heading
        as="h1"
        textAlign="center"
        width="100%"
        fontSize="50px"
        pt="8"
        fontFamily="MagentaRose"
      >
        Contact
      </Heading>
      <Flex margin="40px">
        <Link href="https://www.instagram.com/instagourmand1/" m="3">
          <i class="fab fa-3x fa-instagram"></i>
        </Link>
        <Link m="3">
          <i class="fab fa-2x fa-facebook"></i>
        </Link>
        <Link href="tel:+32474770338" m="3">
          <i class="fas fa-2x fa-phone"></i>
        </Link>
        <Link href="mailto:amalbenamor1981@hotmail.com" m="3">
          <i class="fas fa-2x fa-envelope-open-text"></i>
        </Link>
      </Flex>
    </Flex>
  );
}
