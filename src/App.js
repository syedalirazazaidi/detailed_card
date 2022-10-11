import React from 'react';
import { ChakraProvider, Box, Grid, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Details from './pages/details';
import Cart from './pages/cart';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={4}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Flex
          w="full"
          py={[10,10,10]}
         
          px={20}
          
          direction={{base:'column-reverse',md:'row'}}
        >
          <Details />
          <Cart />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
