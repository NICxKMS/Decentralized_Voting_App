import { VStack, Button, Text, useToast } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { Web3Context } from '../context/Web3Context';
import CandidateList from './CandidateList';

export default function VotingForm({ candidates, onVoteComplete }) {
  const { contract } = useContext(Web3Context);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const toast = useToast();

  const handleVote = async () => {
    if (!selectedCandidate) {
      toast({
        title: 'Please select a candidate',
        status: 'warning',
        duration: 3000,
      });
      return;
    }

    try {
      const tx = await contract.castVote(selectedCandidate);
      await tx.wait();
      toast({
        title: 'Vote cast successfully',
        status: 'success',
        duration: 3000,
      });
      onVoteComplete?.();
    } catch (error) {
      toast({
        title: 'Failed to cast vote',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <VStack spacing={6} w="full">
      <Text fontSize="xl" fontWeight="bold">Select a Candidate</Text>
      <CandidateList 
        candidates={candidates}
        selectedId={selectedCandidate}
        onSelect={setSelectedCandidate}
      />
      <Button
        colorScheme="blue"
        size="lg"
        isDisabled={!selectedCandidate}
        onClick={handleVote}
      >
        Cast Vote
      </Button>
    </VStack>
  );
}