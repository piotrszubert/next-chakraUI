import {
    Box,
    Heading,
    Text,
    Container,
    Icon,
    Grid,
    Flex,
} from '@chakra-ui/react';
import { HiCheckCircle } from 'react-icons/hi2';

const Features = () => {
    const cards = [
        {
            heading: 'Best Quality',
            text: 'We care about the quality of the product. As a digital product development agency, we believe in beautiful software.',
        },
        {
            heading: 'Modern Tools',
            text: 'We use the modern and most flexible and secure technologies to build the best products on the internet.',
        },
        {
            heading: 'Advanced Security',
            text: 'At Software Security Solutions our mission is to raise the bar by making computer security more accessible.',
        },
    ];

    return (
        <Box
            bg="black"
            pt={30}
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
                            borderColor="white"
                            borderRadius="xl"
                        >
                            <Flex
                                direction="column"
                                alignItems="flex-start"
                                p={4}
                            >
                                <Icon
                                    as={HiCheckCircle}
                                    border="2px solid white"
                                    borderRadius="full"
                                    boxSize={10}
                                    color="brand.600"
                                />
                                <Heading
                                    as="h2"
                                    size="md"
                                    color="white"
                                    mt={4}
                                    mb={2}
                                >
                                    {card.heading}
                                </Heading>
                                <Text textAlign="start" color="white">
                                    {card.text}
                                </Text>
                            </Flex>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Features;
