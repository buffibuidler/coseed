import { VStack, Text, Button, HStack, Divider, Image } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import styles from "@styles/GetStarted.module.css";
import Link from "next/link";
import { useState } from "react";
import { myDAOs } from "../data/data";

function GetStarted() {
  const [address, setAddress] = useState("");

  return (
    <VStack className={styles.main}>
      {!address ? (
        <VStack className={styles.container}>
          <Text className={styles.title}>
            Please connect your Klaytn Wallet to get started.
          </Text>
          <Button
            className={styles.connectBtn}
            onClick={() => setAddress("hi")}
          >
            Connect wallet
          </Button>
        </VStack>
      ) : (
        <VStack className={styles.daoContainer}>
          <HStack className={styles.titleContainer}>
            <VStack w="180px"></VStack>
            <Text className={styles.title}>Your Investment DAOs</Text>
            <Link href="/create">
              <Button className={styles.createBtn}>Create a DAO</Button>
            </Link>
          </HStack>
          <Divider></Divider>
          <TableContainer w="800px">
            <Table variant="unstyled">
              <Thead>
                <Tr>
                  <Th color="#979797">DAO name</Th>
                  <Th color="#979797">Fund size</Th>
                  <Th color="#979797">Members</Th>
                  <Th color="#979797">Your share</Th>
                </Tr>
              </Thead>
              <Tbody>
                {myDAOs.map(({ logo, name, size, members, share }, idx) => (
                  <Tr key={idx}>
                    <Td>
                      <HStack>
                        <Image
                          alt="profile"
                          src={logo}
                          className={styles.daoLogo}
                        ></Image>
                        <Text>{name}</Text>
                      </HStack>
                    </Td>
                    <Td>{size} KLAY</Td>
                    <Td>{members}</Td>
                    <Td>{share}%</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      )}
    </VStack>
  );
}

export default GetStarted;
