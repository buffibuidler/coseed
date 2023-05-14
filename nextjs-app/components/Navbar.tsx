import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import {
  Button,
  HStack,
  Image,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

const Navbar = () => {
  return (
    <HStack className={styles.navbar}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          cursor="pointer"
          className={styles.logo}
        ></Image>
      </Link>
      {/* <HStack className={styles.navTabs}>
        <ConnectKitButton />
      </HStack> */}
    </HStack>
  );
};

export default Navbar;
