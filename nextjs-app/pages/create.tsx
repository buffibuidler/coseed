import {
  VStack,
  Text,
  Button,
  HStack,
  Image,
  Input,
  Box,
  Textarea,
} from "@chakra-ui/react";

import styles from "@styles/Create.module.css";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaLink } from "react-icons/fa";

function Create() {
  const [address, setAddress] = useState("");
  const [step, setStep] = useState(0);

  if (step === 6)
    return (
      <VStack className={styles.main}>
        <VStack className={styles.successTitleContainer}>
          <Text className={styles.successTitle}>
            Congratulations! You have successfully created your new investment
            DAO
          </Text>
          <Text className={styles.successDAO}>Global Coin Research</Text>
        </VStack>
        <Image
          alt="success"
          src="/success.png"
          className={styles.successImage}
        ></Image>
      </VStack>
    );

  function getContent(step: number) {
    switch (step) {
      case 0:
        return (
          <VStack className={styles.stepOneContainer}>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>Name for your investment DAO</Text>
              <Input className={styles.input}></Input>
            </VStack>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>Symbol for your DAO Token</Text>
              <Input className={styles.input}></Input>
            </VStack>
          </VStack>
        );
      case 1:
        return (
          <VStack className={styles.stepTwoContainer}>
            <Text className={styles.title}>
              Set a profile image for your DAO
            </Text>
            <VStack className={styles.uploadContainer}>
              <input
                type="file"
                name="images"
                id="images"
                required
                multiple
                onChange={() => {}}
                className={styles.uploader}
              />
              <HStack className={styles.uploaderText}>
                <Text>Upload Image</Text>
              </HStack>
            </VStack>
          </VStack>
        );
      case 2:
        return (
          <VStack className={styles.stepOneContainer}>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>
                How much do you plan to raise?
              </Text>
              <VStack className={styles.inputBox}>
                <Input className={styles.input}></Input>
                <HStack className={styles.inputUnit}>
                  <Image
                    alt="klaytn logo"
                    src="/klaytn_logo.png"
                    className={styles.klaytnLogo}
                  ></Image>
                  <Text>KLAY</Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>
                When will you close deposits?
              </Text>
              <HStack>
                <VStack alignItems="flex-start">
                  <Text className={styles.subtitle}>Date</Text>
                  <Input className={styles.halfinput}></Input>
                </VStack>
                <VStack alignItems="flex-start">
                  <Text className={styles.subtitle}>Time</Text>
                  <Input className={styles.halfinput}></Input>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        );
      case 3:
        return (
          <VStack className={styles.stepOneContainer}>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>
                What is the maximum number of members?
              </Text>
              <Input className={styles.input}></Input>
            </VStack>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>
                What is the deposit limit per member?
              </Text>
              <VStack className={styles.inputBox}>
                <Input className={styles.input}></Input>
                <HStack className={styles.inputUnit}>
                  <Image
                    alt="klaytn logo"
                    src="klaytn_logo.png"
                    className={styles.klaytnLogo}
                  ></Image>
                  <Text>KLAY</Text>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        );
      case 4:
        return (
          <VStack className={styles.stepOneContainer}>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>
                How would you describe your DAO?
              </Text>
              <Textarea className={styles.textarea}></Textarea>
            </VStack>
          </VStack>
        );
      case 5:
        return (
          <VStack className={styles.stepOneContainer}>
            <VStack className={styles.inputContainer}>
              <Text className={styles.title}>Add any links to your DAO</Text>
              <VStack pt="1rem">
                <HStack gap=".5rem">
                  <FaTwitter fontSize="20px"></FaTwitter>
                  <Input className={styles.socialInput}></Input>
                </HStack>
                <HStack gap=".5rem">
                  <FaDiscord fontSize="20px"></FaDiscord>
                  <Input className={styles.socialInput}></Input>
                </HStack>
                <HStack gap=".5rem">
                  <FaLink fontSize="20px"></FaLink>
                  <Input className={styles.socialInput}></Input>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        );
    }
  }

  return (
    <VStack className={styles.main}>
      <VStack className={styles.container}>
        {getContent(step)}
        <Button
          className={styles.continueBtn}
          onClick={() => setStep((prev) => prev + 1)}
        >
          {step === 5 ? "Create DAO" : "Continue"}
        </Button>
        <HStack>
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <Box
              key={num}
              backgroundColor={step === num ? "#D9D9D9" : ""}
              className={styles.circle}
            ></Box>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Create;
