import { Box, Flex, Grid, Text, Image, useBreakpointValue  } from '@chakra-ui/react';

const posts = [
  {
    title: 'Post 1',
    image: 'https://via.placeholder.com/400',
    date: 'May 1, 2023',
    author: 'John Doe',
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Post 2',
    image: 'https://via.placeholder.com/400',
    date: 'May 2, 2023',
    author: 'Jane Smith',
    tags: ['tag3', 'tag4'],
  },
  {
    title: 'Post 1',
    image: 'https://via.placeholder.com/400',
    date: 'May 1, 2023',
    author: 'John Doe',
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Post 2',
    image: 'https://via.placeholder.com/400',
    date: 'May 2, 2023',
    author: 'Jane Smith',
    tags: ['tag3', 'tag4'],
  },
  // Add more posts here...
];

const PostsList = () => {

    const gridColumnSize = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' });

  return (
    <Grid templateColumns={gridColumnSize} gap={6}>
      {posts.map((post, index) => (
        <Box key={index} p={4} borderWidth={1} borderRadius="md">
          <Image src={post.image} alt={post.title} mb={4} />
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            {post.title}
          </Text>
          <Text fontSize="sm" color="gray.500" mb={2}>
            {post.date} by {post.author}
          </Text>
          <Flex>
            {post.tags.map((tag, tagIndex) => (
              <Text key={tagIndex} fontSize="sm" color="brand.500" mr={2}>
                #{tag}
              </Text>
            ))}
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

export default PostsList;