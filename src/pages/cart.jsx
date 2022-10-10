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
    <Container w="640px" bg="#F7FAFC" h='550px' >
      <Box textAlign="left" w="560px" px="40px">
        <Heading fontSize="48px" fontWeight="700">
          Your cart
        </Heading>
        <Text fontSize="16px" py="12px">
          If price is too hard on your eyes, try changing the theme.
        </Text>
      </Box>

      <Flex justifyContent="space-between" px="40px" w="560px">
        <HStack>
          <Image
            boxSize="100px"
            objectFit="cover"
            w="96px"
            h="96px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Box textAlign="left" px="15px">
            <Text fontSize="24px" fontWeight="700" color="#1A202C">
              Penny board
            </Text>
            <Text>PNYCOMP27541</Text>
          </Box>
        </HStack>
        <Box>
          <Text color='#1A202C' fontSize='16px' fontWeight='700'>$119.00</Text>
        </Box>
      </Flex>
      <Box px='40px' marginRight='40px' w='560px' h='148px' >
      <Flex justifyContent="space-between" py='10px '>
        <Text   color='#4A5568' fontWeight='400' fontSize='16px'>Subtotal</Text>
        <Text color='#1A202C' fontSize='16px' fontWeight='700'>$119.00</Text>
      </Flex>
      <Flex justifyContent="space-between" my='16px'>
        <Text  color='#4A5568' fontWeight='400' fontSize='16px'>Shipping</Text>
        <Text color='#1A202C' fontSize='16px' fontWeight='700'>$19.99</Text>
      </Flex>
      <Flex justifyContent="space-between" my='16px'>
        <Text  color='#4A5568' fontWeight='400' fontSize='16px'>Taxes (estimated)</Text>
        <Text color='#1A202C' fontSize='16px' fontWeight='700'>$23.80</Text>
      </Flex>
      <Divider orientation="horizontal"  />
      <Flex justifyContent="space-between" marginTop='16px'>
        <Text  color='#4A5568' fontWeight='400' fontSize='16px'>Total</Text>
        <Text color='#1A202C' fontSize='16px' fontWeight='700'>$162.79</Text>
      </Flex>
      </Box>
    </Container>
  );
};

export default Cart;
