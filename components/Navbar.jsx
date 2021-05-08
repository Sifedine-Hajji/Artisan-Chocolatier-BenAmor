import { Link, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return (
    <Flex
      display={["none", "none", "none", "flex", "flex", "flex"]}
      className="header"
      position="fixed"
      zIndex="3"
      width="100%"
      color="white"
      paddingLeft="20px"
    >
      <Link
        marginRight="20px"
        p={4}
        paddingBottom="1px"
        borderBottom="3px solid transparent"
        href="#Home"
        _hover={{
          borderBottom: "3px solid #AB825F",
        }}
      >
        {" "}
        Acceuil{" "}
      </Link>{" "}
      <Link
        marginRight="20px"
        p={4}
        borderBottom="3px solid transparent"
        href="#Menu"
        _hover={{ borderBottom: "3px solid #AB825F" }}
      >
        {" "}
        Produits{" "}
      </Link>
      <Link
        p={4}
        borderBottom="3px solid transparent"
        href="#Contact"
        _hover={{ borderBottom: "3px solid #AB825F" }}
      >
        {" "}
        Contact{" "}
      </Link>
    </Flex>
  );
}
