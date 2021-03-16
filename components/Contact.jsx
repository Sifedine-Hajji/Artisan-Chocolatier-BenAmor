import { Link, Flex, Image, Heading, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa";
import { BiArrowFromTop } from "react-icons/bi";
export default function Contact() {
  return (
    <Flex
      height="30vh"
      color="#E6CCB2"
      width="100%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#121417"
      pt="10px"
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
      <Text> For orders or any other questions please contact me.</Text>
      <BiArrowFromTop size="2em" />
      <Flex margin="20px">
        <Link
          href="https://www.instagram.com/instagourmand1/"
          target="_BLANK"
          m="3"
        >
          <FaInstagram size="3em" />
        </Link>
        <Link m="3" href="" target="_BLANK">
          <FaFacebook size="3em" />
        </Link>
        <Link href="tel:+32474770338" m="3">
          <FaPhoneSquare size="3em" />
        </Link>
        <Link href="mailto:amalbenamor1981@hotmail.com" m="3">
          <FaEnvelope size="3em" />
        </Link>
      </Flex>
    </Flex>
  );
}
