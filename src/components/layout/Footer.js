import { Box, Text, Link, HStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box 
      as="footer" 
      py={4} 
      textAlign="center" 
      borderTop="1px" 
      borderColor="gray.200"
      mt="auto"
    >
      <HStack justify="center" spacing={1}>
        <Text>Designed and Developed by</Text>
        <Link 
          href="https://github.com/NICxKMS" 
          isExternal
          color="blue.500"
          fontWeight="bold"
        >
          Nikhil
        </Link>
      </HStack>
      <Link
        href="https://github.com/NICxKMS/Decentralized_Voting_App"
        isExternal
        color="blue.500"
      >
        View Project on GitHub
      </Link>
    </Box>
  );
}