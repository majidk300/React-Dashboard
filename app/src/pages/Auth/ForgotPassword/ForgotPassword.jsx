import {Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text} from "@chakra-ui/react";
import {} from "react-icons/md";
import Card from "../../Dashboard/components/Card";
import { Field, Form, Formik } from "formik";
import { object, string } from 'yup';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const forgotValidation = object({
    email: string().email("Email is invalid").required("Email is required"),
  })

const ForgotPassword = () => {


  return (
    <Container>
        <Center minH="100vh" borderRadius="6">
      <Card
      p={{
        base: "4",
        md: "6",
      }}  
      >

        <Link to="/signin"><Icon as={FaArrowLeft} boxSize="6" /></Link>

            <Text mt="4" fontWeight="medium" textStyle="h1">Forgot Password</Text>
            <Text textStyle="p2" pt="2" color="black.60">
              Enter your email address for which account you want to reset your password.
            </Text>
  
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
  
              validationSchema={forgotValidation}
            >
              {() => (
                <Form>
                  <Stack mt="8" spacing="6">
                    
  
                    <Field name="email">
                      {({field, meta}) =>(
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                        {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                      )}
                    </Field>
                  
                    <Button w="full" type="submit">Reset Password</Button>
    
  
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
    </Center>
    </Container>
  );
};

export default ForgotPassword
