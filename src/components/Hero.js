import { 
  Box, 
  Heading, 
  Text, 
  Container 
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      bg="black"
      py={60}
      px={4}
      textAlign="center"
      backgroundPosition="center"
      backgroundImage="url('/hero.svg')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Container maxW='container.sm'>
        <Heading as="h1" size="4xl" color="white" mb={4}>
          Welcome to My Website
        </Heading>
        <Text fontSize="lg" color="white">
          Placeholder marketing text goes here...
        </Text>
      </Container>
    </Box>
  );
};

export default Hero;