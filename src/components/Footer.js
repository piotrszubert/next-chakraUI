import { Box, Flex, Heading, Link, SimpleGrid, Text, Divider } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="black" py={8} px={4}>
            <SimpleGrid paddingX={5} columns={[1, 2, 3]} spacing={3}>
                <Flex direction="column" gap={2}>
                    <Heading as="h3" color="brand.500" size="md" mb={3}>
                        Company
                    </Heading>
                    <Link href="#">About Us</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Contact Us</Link>
                </Flex>
                <Flex direction="column" gap={2}>
                    <Heading as="h3" color="brand.500" size="md" mb={3}>
                        Services
                    </Heading>
                    <Link href="#">Service 1</Link>
                    <Link href="#">Service 2</Link>
                    <Link href="#">Service 3</Link>
                </Flex>
                <Flex direction="column" gap={2}>
                    <Heading as="h3" color="brand.500" size="md" mb={3}>
                        Resources
                    </Heading>
                    <Link href="#">Resource 1</Link>
                    <Link href="#">Resource 2</Link>
                    <Link href="#">Resource 3</Link>
                </Flex>
            </SimpleGrid>
            <Divider my={8} />
            <Flex align="center" justify="center">
                <Text fontSize="sm" color="gray.500" mr={2}>
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;