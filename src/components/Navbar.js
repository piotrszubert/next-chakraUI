import { useState } from 'react';
import { 
    Box, 
    Flex,
    Text, 
    IconButton, 
    VStack,
    HStack, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerBody, 
    useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navItems] = useState(['Home', 'About', 'Services', 'Contact']);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding={4}
      bg="teal.500"
      color="white"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          My Website
        </Text>
      </Box>

      <Box
        display={{ base: 'none', md: 'block' }}
      >
        <HStack spacing={2} align="start">
            {navItems.map((item) => (
            <Text key={item}>
                {item}
            </Text>
            ))}
        </HStack>
      </Box>

      <IconButton
        display={{ base: 'block', md: 'none' }}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        variant="ghost"
        size="md"
        aria-label="Toggle navigation"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={2} align="start">
              {navItems.map((item) => (
                <Text key={item} mr={4}>
                  {item}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;