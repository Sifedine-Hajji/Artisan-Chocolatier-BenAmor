import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        textAlign="center"
        backgroundColor="#E9ECEF"
        fontSize={["sm", "sm", "sm", "md", "lg", "lg"]}
      >
        <Text>
          © 2021, Amal Benamor, Artisan chocolatier, By{" "}
          <Link
            fontWeight="bold"
            href="https://github.com/Sifedine-Hajji"
            target="BLANK"
          >
            Sifedine Hajji.
          </Link>
        </Text>
      </Flex>
    </footer>
  );
}
