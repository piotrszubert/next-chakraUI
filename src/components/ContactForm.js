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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box background="black" py={60}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Enter your name"
                {...register('name', { required: 'Name is required' })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', { required: 'Email is required' })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Enter your message"
                {...register('message', { required: 'Message is required' })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>

            <Button colorScheme="brand" type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
