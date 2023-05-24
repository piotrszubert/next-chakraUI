import { Box, Flex, Heading, Link, SimpleGrid, Text, Divider } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="" py={8} px={4}>
            <SimpleGrid columns={[1, 3]} spacing={8}>
                <Flex direction="column">
                    <Heading as="h4" size="md" mb={4}>
                        Company
                    </Heading>
                    <Link href="#">About Us</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Contact Us</Link>
                </Flex>
                <Flex direction="column">
                    <Heading as="h4" size="md" mb={4}>
                        Services
                    </Heading>
                    <Link href="#">Service 1</Link>
                    <Link href="#">Service 2</Link>
                    <Link href="#">Service 3</Link>
                </Flex>
                <Flex direction="column">
                    <Heading as="h4" size="md" mb={4}>
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