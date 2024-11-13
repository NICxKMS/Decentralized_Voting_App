import { SimpleGrid, Box, Text, Badge } from '@chakra-ui/react';

export default function CandidateList({ candidates, selectedId, onSelect }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} w="full">
      {candidates.map((candidate) => (
        <Box
          key={candidate.id}
          p={5}
          borderWidth={1}
          borderRadius="lg"
          cursor={onSelect ? "pointer" : "default"}
          bg={selectedId === candidate.id ? "blue.50" : "white"}
          onClick={() => onSelect && onSelect(candidate.id)}
          _hover={onSelect && { bg: "gray.50" }}
        >
          <Text fontSize="lg" fontWeight="bold">{candidate.name}</Text>
          {!onSelect && (
            <Badge colorScheme="green" mt={2}>
              Votes: {Number(candidate.voteCount)}
            </Badge>
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
}