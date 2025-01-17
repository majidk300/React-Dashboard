import {Box, Center, Container, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../Dashboard/components/Card";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useParams } from "react-router-dom";

const ForgotPasswordSent = () => {

  // eslint-disable-next-line no-unused-vars
  const params = useParams();

  const {email} = useParams();

  return (
    <Container>
        <Center minH="100vh" borderRadius="6">
      <Card
      p = {{
        base: "4",
        md: "10",
      }}
      showCard={true}
      >
        <VStack spacing={6}> 
          <Icon as={IoIosCheckmarkCircle} fontSize="48px" color="green" />
          <Text textStyle="h4" fontWeight="medium" color="p.black">
            Successfully Sent
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
           We have sent instruction on how to reset your password to 
           <Box as="b" color="p.black"> {email} </Box>
           Please  
           follow the instruction from the email. 
           We have sent you an email verification to{" "}
          </Text>
        
        </VStack>
      </Card>
    </Center>
    </Container>
  )
}

export default ForgotPasswordSent
