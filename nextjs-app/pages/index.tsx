import { VStack, Image, Text, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <VStack className={styles.textContainer}>
          <Text className={styles.title}>
            Building a{" "}
            <Text as="span" className={styles.democratized}>
              democratized
            </Text>{" "}
            and{" "}
            <Text as="span" className={styles.inclusive}>
              inclusive
            </Text>{" "}
            future of investing
          </Text>
          <Text className={styles.subtitle}>
            Streamlining web3-native Investment DAOs
          </Text>
          <Link href="/get-started">
            <Button className={styles.launchBtn}>Launch app</Button>
          </Link>
        </VStack>
      </main>
      <Image
        alt="landing"
        src="/landing_1.png"
        className={styles.landingOne}
      ></Image>
      <Image
        alt="landing"
        src="/landing_2.png"
        className={styles.landingTwo}
      ></Image>
    </div>
  );
};

export default Home;
