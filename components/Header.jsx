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
      color="#E6CCB2"
      padding="4"
      position="fixed"
      className="header"
      width="100%"
      zIndex="1"
    >
      <Link px="3" href="#Home">
        {" "}
        Home{" "}
      </Link>{" "}
      |
      <Link px="3" href="#Menu">
        {" "}
        Products{" "}
      </Link>
      |
      <Link px="3" href="#Contact">
        {" "}
        Contact{" "}
      </Link>
    </Flex>
  );
}
