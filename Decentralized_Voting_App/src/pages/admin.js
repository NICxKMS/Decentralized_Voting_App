import { VStack, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { Web3Context } from '../context/Web3Context';
import AdminPanel from '../components/AdminPanel';

export default function Admin() {
  const { account, contract } = useContext(Web3Context);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    checkOwner();
  }, [account, contract]);

  const checkOwner = async () => {
    if (account && contract) {
      try {
        const owner = await contract.owner();
        setIsOwner(owner.toLowerCase() === account.toLowerCase());
      } catch (error) {
        console.error('Error checking owner:', error);
      }
    }
  };

  if (!account) {
    return (
      <VStack spacing={6} align="center" py={10}>
        <Heading>Admin Panel</Heading>
        <Text>Please connect your wallet</Text>
      </VStack>
    );
  }

  if (!isOwner) {
    return (
      <VStack spacing={6} align="center" py={10}>
        <Heading>Admin Panel</Heading>
        <Text>You are not the contract owner</Text>
      </VStack>
    );
  }

  return (
    <VStack spacing={6} align="center" py={10}>
      <Heading>Admin Panel</Heading>
      <AdminPanel />
    </VStack>
  );
}