import { Link } from "@chakra-ui/react";
import styles from "../styles/sass/Home.module.scss";

export default function ScrollButton() {
  return (
    <Link href="#Menu">
      <div className={styles.scrolldown}> </div>
    </Link>
  );
}
