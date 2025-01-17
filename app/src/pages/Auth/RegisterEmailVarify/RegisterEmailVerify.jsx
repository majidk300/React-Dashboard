import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import Card from "../../Dashboard/components/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendVerificationMail } from "../../../api/query/UserQuery";

const RegisterEmailVerify = () => {
  const toast = useToast();

  const {email} = useParams();


  if (email === "") {
    return (
      <Center minH="100vh" color="red">
        <Link to="/signin">Invalid Email</Link>
      </Center>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { mutate, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail, // Correctly invoke the function

    onSettled: (data) => {
      console.log(data);
      toast({
        title: "Success",
        description: "Verification email sent successfully!",
        status: "success",
      });
    },

    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";

      toast({
        title: "Signup Error.",
        description: errorMessage,
        status: "error",
      });
    },
    enabled: !!email,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    mutate({ email });
  }, [email]);

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
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent an email verification to
              <Box as="b" color="p.black">
                {" "}
                {email}{" "}
              </Box>
              if you did not receive it, click the button below.
            </Text>
            <Button
              variant="outline"
              w="full"
              onClick={() => {
                mutate({ email });
              }}
              isLoading={isLoading} // Spinner will work now
            >
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
