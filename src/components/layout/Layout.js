import { Box, Container, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Flex minH="100vh" direction="column">
      <Navbar />
      <Container maxW="container.xl" py={8} flex={1}>
        <Flex direction="column" gap={6}>
          {children}
        </Flex>
      </Container>
      <Footer />
    </Flex>
  );
}