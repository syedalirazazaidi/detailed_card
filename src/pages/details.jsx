import React from 'react';

import { useColorModeValue } from '@chakra-ui/react';
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
  const bgColor = useColorModeValue('#1A202C', 'white.50');
  return (
    <Container w="640px" px="80px" mx={[-12, 10, 10]} h="740px">
      <Box textAlign="left" w="560px">
        <Heading as="h1" fontSize="48px" w="297px" fontWeight="700">
          Your details
        </Heading>
        <Text
          fontSize={['13px', '16px', '16px']}
          fontWeight="400"
          mb="40px"
          color={bgColor}
        >
          If you already have an account, click here to log in.
        </Text>
      </Box>
      <SimpleGrid columns={[1, null, 2]} spacing="40px" paddingBottom="24px">
        <FormControl w={['290px', '242px', '242px']}>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="John" />
        </FormControl>
        <FormControl w={['290px', '242px', '242px']} border="none">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Doe" />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid>
        <FormControl w={['290px', '502px', '502px']} py="24px">
          <FormLabel>Address</FormLabel>
          <Input type="John" placeholder="Blvd. Broken Dreams 21" />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} spacing="40px" py="24px">
        <FormControl w={['290px', '242px', '242px']}>
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="San Francisco" />
        </FormControl>
        <FormControl w={['290px', '242px', '242px']}>
          <FormLabel>Country</FormLabel>
          <Select variant="filled">
            <option value="usa">United States of America</option>
            <option value="uae">United Arab Emirates</option>
            <option value="uk"> United Kingdom</option>
            <option value="ge"> Germany</option>
          </Select>
        </FormControl>
      </SimpleGrid>

      <Stack py="5px">
        <Checkbox size="lg" defaultChecked py="5px">
          Ship to the billing address.
        </Checkbox>
      </Stack>
      <Button
        variant="primary"
      
        marginRight={['230px', '20px', '0px']}
        w={['290px', '502px', '502px']}
      >
        Place Order
      </Button>
    </Container>
  );
};

export default Details;
