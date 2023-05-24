import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  VStack,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBg, setScrollBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScrollBgChange = window.scrollY > 0; // Change the scroll threshold as needed
      setScrollBg(shouldScrollBgChange);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' }
  ];

  const socials = [
    { href: '/', name: 'mail' },
    { href: '/', name: 'github' },
    { href: '/', name: 'twitter' }
  ];

  return (
    <Box
      position="fixed"
      // width="100vw"
      width="full"
      paddingX={scrollBg ? 5 : 0}
      paddingY={scrollBg ? 5 : 0}
      transition="padding .4s ease-in-out"
    >
    <Flex
      as="nav"
      marginX="auto"
      borderRadius={scrollBg ? 10 : 0}
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding={4}
      bg={scrollBg ? 'transparent' : 'black'}
      color={scrollBg ? 'brand.500' : 'white'}
      top="0"
      transition="background-color .4s ease-in-out, backdrop-filter .4s ease-in-out"
      zIndex={999}
      backdropFilter={`blur(${scrollBg ? '3px' : '0px'})`}
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          My Website
        </Text>
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <HStack spacing={2} align="start">
          {navItems.map((item) => (
            <Button
              key={item.name}
              colorScheme="brand"
              _hover={{ color: 'brand.500', backgroundColor: 'white' }}
              color={scrollBg ? 'white' : 'brand.500'}
              variant="ghost"
            >
              {item.name}
            </Button>
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
          <DrawerBody display="flex" flexDirection="column" justifyContent="space-between">
            <VStack spacing={2} marginTop={20} align="center">
              {navItems.map((item) => (
                <Button key={item.name} colorScheme="brand" variant="ghost">
                  {item.name}
                </Button>
              ))}
            </VStack>
            <HStack align="center" justifyContent="space-evenly" mb={4}>
              {socials.map((item) => (
                <Button
                  key={item.name}
                  colorScheme="brand"
                  variant="ghost"
                >
                  {item.name}
                </Button>
              ))}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
    </Box>
  );
};

export default Navbar;
