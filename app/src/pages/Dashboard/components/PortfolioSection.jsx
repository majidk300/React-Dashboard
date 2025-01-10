import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: "4",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack color="black.80">
          <HStack>
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack color="black.80">
          <HStack>
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}

            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <Text textStyle="h2" fontWeight="medium">
              22.39401000
            </Text>{" "}
            <Tag color="gray" fontWeight="medium">
              BTC
            </Tag>
            <HStack>
              <Text textStyle="h2">₹ 1,300.00</Text>{" "}
              <Tag color="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Winthdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
