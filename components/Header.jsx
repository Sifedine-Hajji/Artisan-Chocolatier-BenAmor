import { Link, Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex color="#E6CCB2" padding="4">
      <Link px="3" href="#home">
        {" "}
        Home{" "}
      </Link>{" "}
      |
      <Link px="3" href="#Menu">
        {" "}
        Products{" "}
      </Link>
      |
      <Link px="3" href="#contact">
        {" "}
        Contact{" "}
      </Link>
    </Flex>
  );
}
