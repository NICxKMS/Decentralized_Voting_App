import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Web3Context } from '../../context/Web3Context';
import Link from 'next/link';

export default function Navbar() {
  const { account, connectWallet } = useContext(Web3Context);

  return (
    <Box bg="blue.500" px={4} py={3}>
      <Flex maxW="container.xl" mx="auto" justify="space-between" align="center">
        <Link href="/">
          <Text color="white" fontSize="xl" fontWeight="bold">E-Voting System</Text>
        </Link>
        <Flex gap={4}>
          {account ? (
            <>
              <Text color="white" fontSize="sm">
                {account.slice(0, 6)}...{account.slice(-4)}
              </Text>
              <Link href="/register"><Button size="sm">Register</Button></Link>
              <Link href="/vote"><Button size="sm">Vote</Button></Link>
              <Link href="/results"><Button size="sm">Results</Button></Link>
              <Link href="/admin"><Button size="sm" colorScheme="red">Admin</Button></Link>
            </>
          ) : (
            <Button size="sm" onClick={connectWallet}>Connect Wallet</Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}