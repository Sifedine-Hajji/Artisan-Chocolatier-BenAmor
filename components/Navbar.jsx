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
      <Link
        marginLeft="20px"
        marginRight="20px"
        p={4}
        paddingBottom="1px"
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
        href="#Menu"
        _hover={{ borderBottom: "3px solid #AB825F" }}
      >
        {" "}
        Produits{" "}
      </Link>
      <Link
        p={4}
        href="#Contact"
        _hover={{ borderBottom: "3px solid #AB825F" }}
      >
        {" "}
        Contact{" "}
      </Link>
    </Flex>
  );
}
