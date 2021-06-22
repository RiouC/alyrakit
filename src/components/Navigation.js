import { Box, Container, Link, useMediaQuery } from "@chakra-ui/react";
import NavigationListItems from "./NavigationListItems";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const [isMobile] = useMediaQuery("max-width: 720px");
  console.log(isMobile);
  return (
    <Box position="fixed" py="3" w="100%" bg="whiteAlpha.800" zIndex="sticky">
      <Container
        as="nav"
        maxW="container.lg"
        d="flex"
        justifyContent="space-between"
        sx={{ "a:hover": { textDecoration: "none" } }}
      >
        <Link href="/" fontWeight="bold" fontSize="2xl">
          Alyrakit
        </Link>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{}} />
        )}
      </Container>
    </Box>
  );
};

export default Navigation;
