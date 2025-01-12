import {Box, Button, Center, Container, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../Dashboard/components/Card";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container>
        <Center minH="100vh" borderRadius="6">
      <Card
      p={{
        base: "4",
        md: "6",
      }} 
      >
        <VStack  spacing="6">
          <Icon as={IoIosCheckmarkCircle} fontSize="48px" color="green" />
          <Text textStyle="h4" fontWeight="medium" color="p.black">
            Successfully Registration
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
           Hurry! You have successfully created your account.
            Enter the app to expore all it's features.
            if you didn't send receive it, click the button below.
          </Text>
          
          <Box w="full">
          <Link to="/signin">
          <Button variant="outline" w="full">
            Enter the app
          </Button>
          </Link>
          </Box>

        </VStack>
      </Card>
    </Center>
    </Container>
  );
};

export default RegisterSuccess;
