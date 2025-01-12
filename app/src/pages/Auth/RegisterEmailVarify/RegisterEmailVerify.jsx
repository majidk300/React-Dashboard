import {Box, Button, Center, Container, Icon, Text, VStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import Card from "../../Dashboard/components/Card";

const RegisterEmailVerify = () => {
  return (
    <Container>
      <Center minH="100vh" borderRadius="6">
      <Card
      p={{
        base: "4",
        md: "6",
      }} 
      >
      <VStack spacing="6">
        <Icon as={MdEmail} fontSize="48px" color="p.purple" />
        <Text textStyle="h4" fontWeight="medium" color="p.black">Email Verification</Text>
        <Text textAlign="center" textStyle="p2" color="black.60" >We have sent an email varification to
          <Box as="b" color="p.black"> jenny.wilson@gmail.com </Box> 
          if you didn't send receive it, click the button below.
        </Text>
        <Button variant="outline" w="full">Re-Send Email</Button>
      </VStack>
    </Card>
    </Center>
    </Container>
  );
};

export default RegisterEmailVerify
