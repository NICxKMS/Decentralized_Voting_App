import { VStack, Heading, Text, Button, SimpleGrid, useToast } from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function Vote() {
  const { account, contract } = useContext(Web3Context);
  const [candidates, setCandidates] = useState([]);
  const [voterStatus, setVoterStatus] = useState({});
  const toast = useToast();

  useEffect(() => {
    if (contract) {
      loadCandidates();
      if (account) {
        checkVoterStatus();
      }
    }
  }, [contract, account]);

  const loadCandidates = async () => {
    try {
      const candidatesList = await contract.getCandidates();
      setCandidates(candidatesList);
    } catch (error) {
      console.error('Error loading candidates:', error);
    }
  };

  const checkVoterStatus = async () => {
    try {
      const status = await contract.getVoterStatus(account);
      setVoterStatus({
        isRegistered: status[0],
        hasVoted: status[1],
        votedFor: status[2]
      });
    } catch (error) {
      console.error('Error checking voter status:', error);
    }
  };

  const handleVote = async (candidateId) => {
    try {
      const tx = await contract.castVote(candidateId);
      await tx.wait();
      
      toast({
        title: 'Vote cast successfully',
        status: 'success',
        duration: 5000,
      });
      
      await checkVoterStatus();
      await loadCandidates();
    } catch (error) {
      toast({
        title: 'Voting failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    }
  };

  return (
    <VStack spacing={6} align="center" py={10}>
      <Heading>Cast Your Vote</Heading>
      {!account ? (
        <Text>Please connect your wallet first</Text>
      ) : !voterStatus.isRegistered ? (
        <Text>You need to register before voting</Text>
      ) : voterStatus.hasVoted ? (
        <Text>You have already voted</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {candidates.map((candidate) => (
            <Button
              key={candidate.id}
              onClick={() => handleVote(candidate.id)}
              size="lg"
              height="100px"
              width="200px"
            >
              {candidate.name}
            </Button>
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
}