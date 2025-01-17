import  { useState } from "react";
import Card from "../../Dashboard/components/Card";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { sendForgotMail } from "../../../api/query/UserQuery";
const ForgotPassword = () => {
  const forgotValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
  });
  const [email, setEmail] = useState();

  const toast = useToast();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
    onSettled: (data) => {
      if (email) {
        console.log(data)
        navigate(`/forgot-success/${email}`);
      }
    },
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Link to="/signin">
            <Icon as={AiOutlineArrowLeft} boxSize="6" />
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              // eslint-disable-next-line no-unused-vars
              setEmail((prev) => (prev = values.email));

              mutate({ email: values.email });
            }}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button isLoading={isLoading} w="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;