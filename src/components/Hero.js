import { Box, Heading, Text } from '@chakra-ui/react';

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
      <Heading as="h1" size="2xl" color="white" mb={4}>
        Welcome to My Website
      </Heading>
      <Text fontSize="xl" color="white">
        Placeholder marketing text goes here...
      </Text>
    </Box>
  );
};

export default Hero;