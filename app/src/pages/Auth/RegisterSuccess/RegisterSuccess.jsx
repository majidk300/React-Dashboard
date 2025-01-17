import {Box, Button, Center, Container, Icon, Text, VStack, useToast, Spinner } from "@chakra-ui/react";
import Card from "../../Dashboard/components/Card";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { verfiyEmailAddressSignup } from "../../../api/query/UserQuery";


const RegisterSuccess = () => {

  const toast = useToast();

  const {token} = useParams();

  const navigate = useNavigate();

  const {isSuccess, isLoading} = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verfiyEmailAddressSignup({token}),
    enabled: !!token,

    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });

      navigate("/signup");
    },
  });

  if(isLoading){
    return (
      <Center h="100vh"><Spinner /></Center>
    )
  }
   
  return (
    <Container>
        <Center minH="100vh" borderRadius="6">
      {
        isSuccess && (
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
            Enter the app to expore all Its features.
            if you didnt send receive it, click the button below.
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
        )}
      
    </Center>
    </Container>
  );
};

export default RegisterSuccess;
