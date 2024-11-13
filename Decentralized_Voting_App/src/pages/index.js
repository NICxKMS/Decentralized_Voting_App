import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { Web3Context } from '../context/Web3Context';
import Link from 'next/link';

export default function Home() {
  const { account, connectWallet } = useContext(Web3Context);

  return (
    <VStack spacing={8} align="center" py={10}>
      <Heading>Welcome to Decentralized Voting</Heading>
      {!account ? (
        <Button colorScheme="blue" onClick={connectWallet}>
          Connect Wallet
        </Button>
      ) : (
        <VStack spacing={4}>
          <Text>Connected: {account}</Text>
          <Link href="/register">
            <Button colorScheme="green">Register to Vote</Button>
          </Link>
          <Link href="/vote">
            <Button colorScheme="blue">Go to Voting</Button>
          </Link>
        </VStack>
      )}
    </VStack>
  );
}