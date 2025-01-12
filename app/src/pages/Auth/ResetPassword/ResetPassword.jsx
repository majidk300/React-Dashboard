import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {} from "react-icons/md";
import Card from "../../Dashboard/components/Card";
import { Field, Form, Formik } from "formik";
import { object, string, ref } from "yup";

const ResetValidationSchema = object({
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Password must match").required("Password must match"),
});

const ResetPassword = () => {
  return (
    <Container>
      <Center minH="100vh" borderRadius="6">
        <Card
          p={{
            base: "4",
            md: "6",
          }}
        >
  
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Reset Password
          </Text>
          <Text textStyle="p2" pt="2" color="black.60">
            Enter your password
          </Text>

          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={ResetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing="6">
                <Field name="password">
                    {({field,meta}) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">New Password</FormLabel>
                      <Input
                      {...field}
                        name="password"
                        type="password"
                        placeholder="Enter your password..."
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>

                  <Field name="repeatPassword">
                   {({field, meta}) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="repeatPassword">New Repeaat Password</FormLabel>
                    <Input
                    {...field}
                      name="repeatPassword"
                      type="password"
                      placeholder="Enter your repeat password..."
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                   )}
                  </Field>

                  <Button w="full" type="submit">
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

export default ResetPassword;
