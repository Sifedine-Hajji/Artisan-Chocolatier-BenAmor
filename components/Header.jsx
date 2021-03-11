import { Link, Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex color="#E6CCB2" padding="4" backgroundColor="black">
      <Link px="3"> Home </Link> |<Link px="3"> About </Link> |
      <Link px="3"> My work </Link>|<Link px="3"> Contact </Link>
    </Flex>
  );
}
