import {
    Box,
    Heading,
    Text,
    Container,
    Grid,
    Link,
    Flex,
} from '@chakra-ui/react';

import Image from 'next/image';

const Cards = () => {
    const cards = [
        {
            image: '1.jpg',
            imageAlt: 'poster',
            date: '',
            heading: 'Best Quality',
            text: 'We care about the quality of the product. As a digital product development agency, we believe in beautiful software.',
        },
        {
            image: '2.jpg',
            imageAlt: 'poster',
            date: '',
            heading: 'Modern Tools',
            text: 'We use the modern and most flexible and secure technologies to build the best products on the internet.',
        },
        {
            image: '4.jpg',
            imageAlt: 'poster',
            date: '',
            heading: 'Advanced Security',
            text: 'At Software Security Solutions our mission is to raise the bar by making computer security more accessible.',
        },
    ];

    return (
        <Box
            bg="black"
            pt={60}
            px={4}
            textAlign="center"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
        >
            <Container marginBottom={10} maxW="container.md">
                <Heading size="2xl" marginBottom={3}>
                    Case studies
                </Heading>
                <Text>
                    Discover how our tailored solutions have helped businesses
                    overcome diverse challenges and achieve remarkable results.
                    Dive into our collection of in-depth case studies, where we
                    explore real-life success stories, analyze complex problems,
                    and showcase the transformative impact of our services on
                    client businesses
                </Text>
            </Container>
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
                            boxShadow="xl"
                            overflow="hidden"
                            position="relative"
                            transition={
                                'transform .14s cubic-bezier(.25, .46, .45, .69)'
                            }
                            _hover={{
                                cursor: 'pointer',
                                boxShadow: '6px 6px 0px 0px white',
                                transform: 'translate(-6px, -6px)',
                            }}
                        >
                            <Flex
                                direction="column"
                                alignItems="flex-start"
                                p={4}
                            >
                                <Image
                                    width="300"
                                    quality="100"
                                    height="300"
                                    src={`/card-images/${card.image}`}
                                    alt={card.imageAlt}
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
                <Box marginTop="10">
                    <Link
                        textDecoration="underline"
                        color="white"
                        size="2xl"
                        href="#"
                    >
                        Check more
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Cards;
