import React from 'react';
import {
  Container,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Checkbox,
  Stack,
  Button,
  Select,
} from '@chakra-ui/react';

const Details = () => {
  return (
    <Container w="640px" padding="40px">
      <Heading as="h1" fontSize="48px" fontWeight="700">
        Your details
      </Heading>
      <Text>
        <Text fontSize="16px" fontWeight="400">
          If you already have an account, click here to log in.
        </Text>
      </Text>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="John" />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Doe" />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input type="John" placeholder="Blvd. Broken Dreams 21" />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="San Francisco" />
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">United States of America</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          {/* <Input type="text" placeholder="United States of America" /> */}
        </FormControl>
      </SimpleGrid>
      <Stack>
        <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
      </Stack>
      <Button colorScheme="whatsapp">Place Order</Button>
    </Container>
  );
};

export default Details;
