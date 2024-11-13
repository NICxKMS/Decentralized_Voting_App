import { Button, Text, VStack, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function WalletConnection() {
  const { account, connectWallet } = useContext(Web3Context);

  return (
    <VStack spacing={4}>
      {account ? (
        <HStack>
          <Text>Connected:</Text>
          <Text fontWeight="bold">
            {account.slice(0, 6)}...{account.slice(-4)}
          </Text>
        </HStack>
      ) : (
        <Button
          colorScheme="blue"
          onClick={connectWallet}
          leftIcon={<WalletIcon />}
        >
          Connect Wallet
        </Button>
      )}
    </VStack>
  );
}

const WalletIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
    <path d="M20 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2" />
    <path d="M16 14h.01" />
  </svg>
);