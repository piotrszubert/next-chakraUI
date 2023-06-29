import {
    chakra,
    Box,
    Heading,
    Text,
    Container,
    Button,
} from '@chakra-ui/react';
import Link from 'next/link';

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
            <Container maxW="container.sm">
                <Heading as="h1" size="4xl" color="white" mb={4}>
                    Build and scale
                    <Text
                        bgClip="text"
                        bgGradient="linear(to-t, brand.300, brand.500)"
                    >
                        faster
                    </Text>
                </Heading>
                <Text fontSize="lg" color="white">
                    Blinder making it simple for you to build and grow your SaaS
                    applications, or any business idea.
                </Text>
                <Button
                    as={chakra(Link)}
                    href="/contact"
                    colorScheme="white"
                    marginTop="4"
                    borderWidth="2px"
                    backdropFilter="blur(2px)"
                    variant="outline"
                    size="lg"
                    transition={
                        'transform .14s cubic-bezier(.25, .46, .45, .69)'
                    }
                    _hover={{
                        cursor: 'pointer',
                        boxShadow: '3px 3px 0px 0px white',
                        transform: 'translate(-3px, -3px)',
                    }}
                >
                    Start now
                </Button>
            </Container>
        </Box>
    );
};

export default Hero;
