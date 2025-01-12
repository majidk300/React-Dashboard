import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string,ref } from 'yup';
import Card from "../../Dashboard/components/Card";

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Password must match").required("Password must match"),
})

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text fontWeight="medium" textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" pt="2" color="black.60">
            Create a free account by filling data below
          </Text>

          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}

            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing="6">
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="Enter your name..."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Input
                          {...field}
                            name="surname"
                            placeholder="Enter your surname..."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

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

                  
                  <Field name="password">
                    {({field,meta}) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="password">Password</FormLabel>
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
                    <FormLabel htmlFor="repeatPassword">Repeaat Password</FormLabel>
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

                  <Checkbox>
                    <Text textStyle="p3">
                      I agree With
                      <Text as="span" color="p.purple">
                        Terms & Condition
                      </Text>
                    </Text>
                  </Checkbox>

                  <Button type="submit">Create Account</Button>

                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an account Log In{" "}
                    <Link to="/signin">
                      <Text as="span" color="p.purple">
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
