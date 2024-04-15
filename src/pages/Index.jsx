import React from "react";
import { Box, Grid, Image, Text, Heading, VStack, Button } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0fGVufDB8fHx8MTcxMzE2MjY1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZWFuc3xlbnwwfHx8fDE3MTMxNjI2NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Dress",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmVzc3xlbnwwfHx8fDE3MTMyMDU4MzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYWNrZXR8ZW58MHx8fHwxNzEzMTYyNjU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    name: "Sneakers",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmVha2Vyc3xlbnwwfHx8fDE3MTMyMDU4MzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    name: "Sweater",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzd2VhdGVyfGVufDB8fHx8MTcxMzIwNTgzNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" m={8}>
        Clothing Brand
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} m={8}>
        {products.map((product) => (
          <VStack key={product.id} align="stretch">
            <Image src={product.image} alt={product.name} objectFit="cover" />
            <Box p={4}>
              <Heading as="h2" size="md">
                {product.name}
              </Heading>
              <Text fontSize="lg" fontWeight="bold" mt={2}>
                ${product.price}
              </Text>
              <Button colorScheme="blue" size="sm" mt={4}>
                Add to Cart
              </Button>
            </Box>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
