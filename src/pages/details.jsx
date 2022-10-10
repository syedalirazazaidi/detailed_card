import React from 'react';
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Button,
  Select,
} from '@chakra-ui/react';

const Details = () => {
  return (
    <Container w="640px" py="34xpx" px="80px" h="740px">
      <Box textAlign="left" w="560px">
        <Heading as="h1" fontSize="48px" w="297px" fontWeight="700">
          Your details
        </Heading>
        <Text pb="40px">
          <Text fontSize="16px" fontWeight="400" color="#1A202C">
            If you already have an account, click here to log in.
          </Text>
        </Text>
      </Box>
      <SimpleGrid columns={[1, null, 2]} spacing="40px"  paddingBottom='24px'>
        <FormControl w='242px' >
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="John" variant='filled' />
        </FormControl>
        <FormControl w='242px' border='none'>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Doe" variant='filled' />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid>
        <FormControl w='502px' py='24px'>
          <FormLabel>Address</FormLabel>
          <Input type="John" placeholder="Blvd. Broken Dreams 21"  variant='filled' />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} spacing="40px" py='24px'>
        <FormControl w='242px'  >
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="San Francisco" variant='filled' />
        </FormControl>
        <FormControl w='242px' >
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select option" variant='filled'>
            <option value="option1">United States of America</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </SimpleGrid>
     
      <Stack py='5px' >
      <Checkbox size='lg' colorScheme='green'  defaultChecked py='5px' >
      Ship to the billing address.
  </Checkbox>
      </Stack>
      <Button bg='#8AC919' color='white' w='502px'>Place Order</Button>
    </Container>
  );
};

export default Details;
