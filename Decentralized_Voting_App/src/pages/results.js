import { VStack, Heading, Text, Box, Progress } from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function Results() {
  const { contract } = useContext(Web3Context);
  const [results, setResults] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    if (contract) {
      loadResults();
    }
  }, [contract]);

  const loadResults = async () => {
    try {
      const candidates = await contract.getCandidates();
      const total = await contract.totalVotes();
      setResults(candidates);
      setTotalVotes(Number(total));
    } catch (error) {
      console.error('Error loading results:', error);
    }
  };

  const calculatePercentage = (voteCount, total) => {
    if (!total) return 0;
    // Convert BigInt to Number for calculation
    return (Number(voteCount) * 100) / Number(total);
  };

  return (
    <VStack spacing={6} align="stretch" py={10} px={4}>
      <Heading textAlign="center">Voting Results</Heading>
      <Text textAlign="center">Total Votes: {totalVotes}</Text>
      {results.map((candidate) => (
        <Box key={candidate.id} p={4} borderWidth={1} borderRadius="md">
          <Text fontSize="lg">{candidate.name}</Text>
          <Progress
            value={calculatePercentage(candidate.voteCount, totalVotes)}
            size="lg"
            colorScheme="blue"
          />
          <Text mt={2}>Votes: {Number(candidate.voteCount)}</Text>
        </Box>
      ))}
    </VStack>
  );
}