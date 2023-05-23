import { HStack, Text, VStack, Image, Button, Box } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import styles from "@styles/DAO.module.css";
import { FaLink } from "react-icons/fa";
import { aum, members } from "../../data/data";
import { abridgeAddress } from "../../utils/utils";

function DAO() {
  return (
    <VStack className={styles.main}>
      <HStack className={styles.container}>
        <Image
          alt="DAO logo"
          src="/dao_logo.jpg"
          className={styles.daoLogo}
        ></Image>
        <VStack alignItems="flex-start" pl="1rem">
          <Text className={styles.name}>Krome Investors (KRIN)</Text>
          <Text className={styles.description}>
            Decentralized investment DAO is a new way to invest in the future,
            where anyone can participate and earn a return on their investment.
          </Text>
        </VStack>
      </HStack>
      <VStack>
        <HStack w="100%" justifyContent="space-between">
          <Text className={styles.sectionTitle}>Fundraising progress</Text>
          <HStack>
            <Text>Copy invite link</Text>
            <FaLink></FaLink>
            <Button className={styles.depositBtn}>Deposit</Button>
          </HStack>
        </HStack>
        <VStack className={styles.container}>
          <HStack className={styles.goalContainer}>
            <HStack>
              <Text>Goal:</Text>
              <Image
                alt="klaytn logo"
                src="/klaytn_logo.png"
                className={styles.klaytnLogo}
              ></Image>
              <Text>10,000 KLAY</Text>
            </HStack>
            <Text className={styles.dueDate}>Due date: 10/8/22</Text>
          </HStack>
          <HStack w="100%">
            <Box className={`${styles.progressBarContainer}`}>
              <Box
                style={{
                  backgroundColor: "white",
                  width: `${(0.5 * 100).toFixed(0)}%`,
                }}
                className={`${styles.progressBar}`}
              ></Box>
            </Box>
          </HStack>
          <HStack className={styles.goalContainer}>
            <VStack alignItems="flex-start">
              <Text>Amount raised</Text>
              <HStack mt="5px !important">
                <Image
                  alt="klaytn logo"
                  src="/klaytn_logo.png"
                  className={styles.klaytnLogo}
                ></Image>
                <Text>
                  2,493 KLAY{" "}
                  <Text as="span" className={styles.dueDate}>
                    24%
                  </Text>
                </Text>
              </HStack>
            </VStack>
            <VStack alignItems="flex-end">
              <Text>Amount remaining</Text>
              <HStack mt="5px !important">
                <Image
                  alt="klaytn logo"
                  src="/klaytn_logo.png"
                  className={styles.klaytnLogo}
                ></Image>
                <Text>
                  2,493 KLAY{" "}
                  <Text as="span" className={styles.dueDate}>
                    24%
                  </Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <HStack gap="1.5rem">
        <VStack w="100%" alignItems="flex-start">
          <Text className={styles.sectionTitle}>Assets under management</Text>
          <VStack className={styles.aumContainer}>
            <TableContainer w="100%">
              <Box overflowY="auto" height="180px">
                <Table variant="unstyled">
                  <Thead position="sticky" top={0} bgColor="#05261C">
                    <Tr>
                      <Th>Token</Th>
                      <Th textAlign="end">Balance</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {aum.map(({ logo, name, symbol, balance, fiat }, idx) => (
                      <Tr key={idx}>
                        <Td>
                          <HStack>
                            <Image
                              alt="klaytn logo"
                              src="/klaytn_logo.png"
                              className={styles.klaytnLogo}
                            ></Image>
                            <Text>
                              {name} ({symbol})
                            </Text>
                          </HStack>
                        </Td>
                        <Td>
                          <VStack w="100%" alignItems="flex-end">
                            <Text>
                              {balance} {symbol}
                            </Text>
                            <Text className={styles.fiatBalance}>${fiat}</Text>
                          </VStack>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </TableContainer>
          </VStack>
        </VStack>
        <VStack w="100%" alignItems="flex-start">
          <Text className={styles.sectionTitle}>Members</Text>
          <VStack className={styles.memberContainer}>
            <TableContainer w="100%">
              <Box overflowY="auto" height="180px">
                <Table variant="unstyled">
                  <Thead position="sticky" top={0} bgColor="#05261C">
                    <Tr>
                      <Th>Address</Th>
                      <Th textAlign="end">Share</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {members.map(({ address, share }, idx) => (
                      <Tr key={idx}>
                        <Td>{abridgeAddress(address)}</Td>
                        <Td textAlign="end">{share}%</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </TableContainer>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default DAO;
