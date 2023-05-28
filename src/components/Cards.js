import { Box, Heading, Text, Container, Icon, Grid, Flex } from '@chakra-ui/react';
import { HiCheckCircle } from "react-icons/hi2";

const Cards = () => {

  const cards = [
    {
      image: '',
      date: '',
      heading: 'Best Quality',
      text: 'We care about the quality of the product. As a digital product development agency, we believe in beautiful software.',
    },
    {
      image: '',
      date: '',
      heading: 'Modern Tools',
      text: 'We use the modern and most flexible and secure technologies to build the best products on the internet.',
    },
    {
      image: '',
      date: '',
      heading: 'Advanced Security',
      text: 'At Software Security Solutions our mission is to raise the bar by making computer security more accessible.',
    },
  ];

  return (
    <Box
      bg="black"
      py={30}
      px={4}
      textAlign="center"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="container.lg">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={4}
          rowGap={10}
          justifyContent="center"
          alignItems="stretch" // Align items to stretch for equal height
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              borderWidth={2}
              borderColor="brand.500"
              borderRadius="xl"
              boxShadow='xl'
              overflow='hidden'
              position='relative'
              transition={'transform .14s cubic-bezier(.25, .46, .45, .69)'}
              _hover={{
                cursor: 'pointer',
                boxShadow: "6px 6px 0px 0px white",
                transform: "translate(-6px, -6px)"
              }}
            >
              <Flex
                direction="column"
                alignItems="flex-start"
                p={4}
              >
                <img src='https://via.placeholder.com/300'/>
                <Heading as="h2" size="md"  color="white" mt={4} mb={2}>
                    {card.heading}
                </Heading>
                <Text textAlign="start" color="white">{card.text}</Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Cards;