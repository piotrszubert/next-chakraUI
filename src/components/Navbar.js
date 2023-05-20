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
  
  const navItems = [
    {href: "/", name: "Home"},
    {href: "/", name: "About"}
  ]
  
  const socials = [
    { href: "/", name: "mail" },
    { href: "/", name: "github" },
    { href: "/", name: "twitter" }
  ];

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding={4}
      bg="blue.500"
      color="white"
      position="sticky"
      top="0"
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
              colorScheme="blue"
              _hover={{ color: "blue.500", backgroundColor: "white" }}
              color="white"
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
                <Button key={item.name} colorScheme="blue" variant="ghost">
                  {item.name}
                </Button>
              ))}
            </VStack>
            <HStack align="center" justifyContent="space-evenly" mb={4}>
              {socials.map((item) => (
                <Button
                  key={item.name}
                  colorScheme="blue"
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
  );
};

export default Navbar;
