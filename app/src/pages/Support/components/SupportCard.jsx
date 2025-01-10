import { Box, Center, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
      <Flex

      alignItems={{
        base :"0",
        sm: "center",
        xl: "normal"
      }}

        gap={6}
        flexDir={{
          base: "column",
          xl: "row",
        }}

      >
        <Stack
      
         maxW="24rem" w="full">
          <Icon as={icon} boxSize={6} color="p.purple" />
          <Text fontWeight="medium" as="h1" textStyle="h1">
            {title}
          </Text>
          <Text fontSize="sm" color="black.60">
            {text}
          </Text>
        </Stack>

        <Box  maxW="550px" w="full">
          {leftComponent}
        </Box>
      </Flex>

  );
};

export default SupportCard;
