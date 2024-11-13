import { VStack, Button, Input, HStack, Text, useToast } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function AdminPanel() {
  const { contract, account } = useContext(Web3Context);
  const [newCandidate, setNewCandidate] = useState('');
  const [currentState, setCurrentState] = useState(0);
  const toast = useToast();

  const states = ['Created', 'Registering', 'Voting', 'Ended'];

  const addCandidate = async () => {
    try {
      const tx = await contract.addCandidate(newCandidate);
      await tx.wait();
      setNewCandidate('');
      toast({
        title: 'Candidate added successfully',
        status: 'success',
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Failed to add candidate',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    }
  };

  const updateState = async (newState) => {
    try {
      const tx = await contract.setState(newState);
      await tx.wait();
      setCurrentState(newState);
      toast({
        title: `Voting state updated to ${states[newState]}`,
        status: 'success',
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Failed to update state',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <VStack spacing={6} w="full" p={6} borderWidth={1} borderRadius="lg">
      <Text fontSize="2xl" fontWeight="bold">Admin Controls</Text>
      
      <HStack w="full">
        <Input 
          placeholder="Enter candidate name"
          value={newCandidate}
          onChange={(e) => setNewCandidate(e.target.value)}
        />
        <Button colorScheme="green" onClick={addCandidate}>
          Add Candidate
        </Button>
      </HStack>

      <VStack w="full" spacing={4}>
        <Text fontSize="lg">Voting State Control</Text>
        <HStack spacing={4}>
          {states.map((state, index) => (
            <Button
              key={state}
              colorScheme={currentState === index ? 'blue' : 'gray'}
              onClick={() => updateState(index)}
              isDisabled={index <= currentState}
            >
              {state}
            </Button>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
}