import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Web3Provider } from '../context/Web3Context';
import Layout from '../components/layout/Layout';

// Create theme
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Web3Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp;