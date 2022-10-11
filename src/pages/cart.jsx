import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import {
  Heading,
  Text,
  Image,
  Box,
  Flex,
  HStack,
  Divider,
} from '@chakra-ui/react';

import { Container } from '@chakra-ui/react';
const Cart = () => {
  const bgColor = useColorModeValue('gray.50', 'white.50');

  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <Container w={["430px","580px","580px"]} mx={[-12,10,10]}  bg={bgColor} h={[480, 550, 550]}>
      <Box textAlign="left" w="560px" px="40px">
        <Heading fontSize="48px" fontWeight="700">
          Your cart
        </Heading>
        <Text fontSize={['12px', '16px', '16px']} py="12px">
          If price is too hard on your eyes, try changing the theme.
        </Text>
      </Box>

      <Flex
        justifyContent="space-between"
        px={['110px', '40px', '40px']}
        marginLeft={['-70px', '0', '0']}
        w="560px"
      >
        <HStack>
          <Image
            boxSize="100px"
            objectFit="cover"
            w="96px"
            h="96px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Box textAlign="left" px={['5px', '15px', '15px']}>
            <Text
              fontSize={['18px', '24px', '24px']}
              fontWeight="700"
              color={secondaryTextColor}
            >
              Penny board
            </Text>
            <Text fontSize={['15px', '24px', '24px']}>PNYCOMP27541</Text>
          </Box>
        </HStack>
        <Box>
          <Text color={secondaryTextColor} fontSize="16px" fontWeight="700">
            $119.00
          </Text>
        </Box>
      </Flex>
      <Box
        px={['40px', '40px', '40px']}
        w={['420px', '560px', '560px']}
        h="148px"
      >
        <Flex justifyContent="space-between" py="10px ">
          <Text color={secondaryTextColor} fontWeight="400" fontSize="16px">
            Subtotal
          </Text>
          <Text color={secondaryTextColor} fontSize="16px" fontWeight="700">
            $119.00
          </Text>
        </Flex>
        <Flex justifyContent="space-between" my="16px">
          <Text color={secondaryTextColor} fontWeight="400" fontSize="16px">
            Shipping
          </Text>
          <Text color={secondaryTextColor} fontSize="16px" fontWeight="700">
            $19.99
          </Text>
        </Flex>
        <Flex justifyContent="space-between" my="16px">
          <Text color={secondaryTextColor} fontWeight="400" fontSize="16px">
            Taxes (estimated)
          </Text>
          <Text color={secondaryTextColor} fontSize="16px" fontWeight="700">
            $23.80
          </Text>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex justifyContent="space-between" marginTop="16px">
          <Text color={secondaryTextColor} fontWeight="400" fontSize="16px">
            Total
          </Text>
          <Text color={secondaryTextColor} fontSize="16px" fontWeight="700">
            $162.79
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Cart;
