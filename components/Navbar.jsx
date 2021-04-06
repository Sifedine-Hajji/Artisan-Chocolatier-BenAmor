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
    >
      <Link px="2" p={5} href="#Home" _hover={{ backgroundColor: "#AB825F" }}>
        {" "}
        Acceuil{" "}
      </Link>{" "}
      <Link px="2" p={5} href="#Menu" _hover={{ backgroundColor: "#AB825F" }}>
        {" "}
        Produits{" "}
      </Link>
      <Link
        px="2"
        p={5}
        href="#Contact"
        _hover={{ backgroundColor: "#AB825F" }}
      >
        {" "}
        Contact{" "}
      </Link>
    </Flex>
  );
}
