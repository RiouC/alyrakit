import { Box, Badge, Heading, Text, Button, Container } from "@chakra-ui/react"
const GetStarted = () => {
  return (
    <Box
      as="section"
      textAlign="center"
      bg="teal.900"
      py="20"
      color="white"
      id="buy-now"
    >
      <Container maxWidth="container.md">
        <Badge colorScheme="whiteAlpha">Get Started</Badge>
        <Heading mb="6" fontFamily="special">Get AlyraKit and save your time</Heading>
        <Text fontSize="lg" mb="6">
          Stop wasting time trying to do it the "right way" and build a site
          from scratch. AlyraKit is faster, easier, and you still have complete
          control.
        </Text>
        <Button colorScheme="teal" size="lg">
          Buy now
        </Button>
      </Container>
    </Box>
  )
}

export default GetStarted
