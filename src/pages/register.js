import { VStack, Heading, Text, Button, useToast } from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function Register() {
  const { account, contract } = useContext(Web3Context);
  const [isRegistered, setIsRegistered] = useState(false);
  const toast = useToast();

  useEffect(() => {
    checkRegistrationStatus();
  }, [account]);

  const checkRegistrationStatus = async () => {
    if (account && contract) {
      try {
        const [registered] = await contract.getVoterStatus(account);
        setIsRegistered(registered);
      } catch (error) {
        console.error('Error checking registration:', error);
      }
    }
  };

  const handleRegister = async () => {
    if (!account || !contract) return;
    
    try {
      const tx = await contract.registerVoter(account);
      await tx.wait();
      
      toast({
        title: 'Registration successful',
        status: 'success',
        duration: 5000,
      });
      
      setIsRegistered(true);
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    }
  };

  return (
    <VStack spacing={6} align="center" py={10}>
      <Heading>Voter Registration</Heading>
      {!account ? (
        <Text>Please connect your wallet first</Text>
      ) : isRegistered ? (
        <Text>You are already registered to vote!</Text>
      ) : (
        <Button colorScheme="green" onClick={handleRegister}>
          Register to Vote
        </Button>
      )}
    </VStack>
  );
}