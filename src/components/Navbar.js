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
      const shouldScrollBgChange = window.scrollY > 0;
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
    { href: '/', name: 'mail', icon: '/social-icons/mail.svg' },
    { href: '/', name: 'github', icon: '/social-icons/github.svg' },
    { href: '/', name: 'twitter', icon: '/social-icons/twitter.svg' }
  ];

  return (
    <Box
      position="fixed"
      width="full"
      paddingX={scrollBg ? 5 : 0}
      paddingY={scrollBg ? 5 : 0}
      transition="padding .4s ease-in-out"
      borderBottom={scrollBg ? 'none' : '2px solid'}
      borderColor="brand.700"
      zIndex={999}
    >
    <Flex
      as="nav"
      border={scrollBg ? '2px solid white' : ''}
      marginX="auto"
      borderRadius={scrollBg ? 'xl' : 0}
      borderBottom={'brand.500'}
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding={4}
      bg={scrollBg ? 'transparent' : 'black'}
      color={scrollBg ? 'brand.500' : 'white'}
      top="0"
      transition="all .4s ease-in-out"
      zIndex={999}
      backdropFilter={`blur(${scrollBg ? '3px' : '0px'})`}
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Split
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
        <DrawerOverlay  backgroundColor="rgba(227, 28, 111, 0.3)" />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerBody bg="black" display="flex" flexDirection="column" justifyContent="space-between">
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
                    <img 
                      src={item.icon} 
                      style={{ filter: 'invert(1)'}} 
                      alt={item.name} 
                    />
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