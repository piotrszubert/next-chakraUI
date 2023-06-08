import { useForm } from 'react-hook-form';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    FormErrorMessage,
    Container,
    Textarea,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const toast = useToast();

    const onSubmit = async (data) => {
        // console.log(data);
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok) {
            toast({
                title: 'Message sent!',
                description: 'Your message was sent succesfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: 'Error occured!',
                description: 'Something went wrong. Try again later.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box background="black" py={60}>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack spacing={4} align="stretch">
                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                _hover=""
                                _focus={{
                                    outlineColor: 'brand.300',
                                    borderColor: 'white',
                                }}
                                border="2px solid white"
                                placeholder="Enter your name"
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                id="email"
                                border="2px solid white"
                                _hover=""
                                _focus={{
                                    outlineColor: 'brand.300',
                                    borderColor: 'white',
                                }}
                                type="email"
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.message}>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <Textarea
                                resize="none"
                                border="2px solid white"
                                _hover=""
                                _focus={{
                                    outlineColor: 'brand.300',
                                    borderColor: 'white',
                                }}
                                id="message"
                                placeholder="Enter your message"
                                {...register('message', {
                                    required: 'Message is required',
                                })}
                            />
                            <FormErrorMessage>
                                {errors.message && errors.message.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Button
                            isLoading={isSubmitting}
                            type="submit"
                            colorScheme="white"
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
                    </VStack>
                </form>
            </Container>
        </Box>
    );
};

export default ContactForm;
