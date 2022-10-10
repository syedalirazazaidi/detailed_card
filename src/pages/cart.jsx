import React from 'react';
import {
  Heading,
  Text,
  Image,
  Box,
  Flex,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';

import { Container } from '@chakra-ui/react';
const Cart = () => {
  return (
    <Container w="640px" bg="#F7FAFC" py="40px">
      <Heading>Your cart</Heading>
      <Text>If price is too hard on your eyes, try changing the theme.</Text>
      <Flex justifyContent="space-between" px="20px">
        <HStack>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <VStack>
            <Text>Penny board</Text>
            <Text>PNYCOMP27541</Text>
          </VStack>
        </HStack>
        <Box>
          <Text>$119.00</Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Subtotal</Text>
        <Text>$119.00</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Shipping</Text>
        <Text>$19.99</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Taxes (estimated)</Text>
        <Text>$23.80</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex justifyContent="space-between">
        <Text>Total</Text>
        <Text>$162.79</Text>
      </Flex>
    </Container>
  );
};

export default Cart;
