import { Link, Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box>
      <Flex backgroundColor="#1D140C" color="#E6CCB2" padding="4">
        <Link px="3"> Home </Link>
        <Link px="3"> About </Link>
        <Link px="3"> My work </Link>
        <Link px="3"> Contact </Link>
      </Flex>
    </Box>
  );
}
