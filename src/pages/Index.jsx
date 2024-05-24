import { Box, Container, VStack, Text, Heading, Input, InputGroup, InputRightElement, IconButton, SimpleGrid, Image, Link, Flex, Spacer, HStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const featuredProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: "$299", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" alignItems="center">
          <Heading size="lg">ElectroShop</Heading>
          <Spacer />
          <InputGroup maxW="400px" mx={4}>
            <Input placeholder="Search for products..." />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<FaSearch />} />
            </InputRightElement>
          </InputGroup>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="start">
          <Heading>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {featuredProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Text fontWeight="bold">{product.name}</Text>
                  <Text>{product.price}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;