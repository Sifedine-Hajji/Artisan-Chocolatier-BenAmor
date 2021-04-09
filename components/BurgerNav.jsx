import React from "react";
import {
  Link,
  Flex,
  Menu,
  MenuItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      display={["flex", "flex", "flex", "none", "none", "none"]}
      className="header"
      position="fixed"
      zIndex="3"
      justifyContent="flex-end"
      width="100%"
    >
      <Button
        ref={btnRef}
        backgroundColor="black"
        onClick={onOpen}
        margin="30px"
        p={6}
      >
        <HamburgerIcon color="#7F5539" w={6} h={8} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="black" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Chocolaterie Benamor </DrawerHeader>

            <DrawerBody width="100%" textAlign="center">
              <Menu>
                <MenuItem
                  justifyContent="center"
                  _hover={{ backgroundColor: "#AB825F" }}
                  fontSize="30px"
                  margin="0"
                >
                  <Link href="#Home" _hover={{ textDecoration: "none" }}>
                    Home
                  </Link>{" "}
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#AB825F" }}
                  justifyContent="center"
                  fontSize="30px"
                >
                  <Link href="#Menu" _hover={{ textDecoration: "none" }}>
                    Produits
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#AB825F" }}
                  justifyContent="center"
                  fontSize="30px"
                >
                  <Link href="#Contact" _hover={{ textDecoration: "none" }}>
                    Contact
                  </Link>
                </MenuItem>
              </Menu>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
