import {
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { Formik, Form, Field } from "formik";
  import { object, string } from 'yup';
import Card from "../../Dashboard/components/Card";
  
  const signinValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
    password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  })
  
  const Signin = () => {
    return (
      <Container>
        <Center minH="100vh">
          <Card>
            <Text fontWeight="medium" textStyle="h1">Welcome to Crypto App</Text>
            <Text textStyle="p2" pt="2" color="black.60">
              Enter your credentials to access the amount.
            </Text>
  
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
  
              validationSchema={signinValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="10" spacing="6">
                    
  
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
  
                    <HStack justify="space-between" alignItems="center">
                    <Checkbox>
                      <Text textStyle="p3">
                        Remember me
                      </Text>
                    </Checkbox>
                        <Link to="/forgot-password">
                        <Text textStyle="p3" as="span" color="p.purple">
                            Forgot Password?
                        </Text>
                        </Link>
                    </HStack>
  
                    <Box>
                    <Button w="full" type="submit">Login</Button>
                    <Link to="/signup">
                    <Button variant="outline" mt="3" w="full">Create Account</Button>
                    </Link>
                    </Box>
  
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
        </Center>
      </Container>
    );
  };
  
  export default Signin;
  