import { 
    Box, 
    Heading, 
    Text, 
    Container, 
    Flex, 
    Button
} from '@chakra-ui/react';

const Cta = () => {

  return (
    <Box
      bg="black"
      py={60}
      px={4}
    >
      <Container maxW="container.lg">
        <Box
            borderWidth={2}
            borderColor="white"
            borderRadius="xl"
        >
            <Flex
                direction="column"
                justifyContent="space-between"
                flexWrap="wrap"
                p={4}
                rowGap={10}
                textAlign="center"
            >
                <Box>
                    <Heading 
                        size="2xl"  
                        color="white" mt={4} mb={4}>
                        Start with Blitz today
                    </Heading>
                    <Text
                        color="white" 
                        marginX="auto"
                        textAlign="center"
                        maxW="container.sm">
                        Blitz is a new, revolutionary & cost-effective way to 
                        grow your website&apos;s traffic. It&apos;s a super-simple, 
                        one-time fee that will make your site rank higher 
                        on Google and bring in more visitors. We&apos;re so 
                        confident, we offer a 100% money back guarantee.
                    </Text>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Button 
                        colorScheme='white'
                        borderWidth="2px" 
                        backdropFilter="blur(2px)"
                        variant='outline' 
                        size='lg'
                        transition={'transform .14s cubic-bezier(.25, .46, .45, .69)'}
                        _hover={{
                            cursor: 'pointer',
                            boxShadow: "3px 3px 0px 0px white",
                            transform: "translate(-3px, -3px)"
                        }}
                    >
                        Start now
                    </Button>
                </Box>
            </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Cta;