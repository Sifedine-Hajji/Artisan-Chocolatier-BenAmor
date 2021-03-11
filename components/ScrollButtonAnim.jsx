import { Box, Flex, Text, Image, Link, Heading } from "@chakra-ui/react";
import styles from "../styles/sass/Home.module.scss";

export default function ScrollButton() {
  return (
    <Link href="#Menu">
      <div className={styles.scrolldown}> </div>
    </Link>
  );
}
