import { Button, Fade, Box, useDisclosure } from "@chakra-ui/react";
import {
  HamburgerIcon,
  // IconButton
} from "@chakra-ui/icons";
import React from "react";

const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Button
        /* as={IconButton} */
        aria-label="Options"
        icon={<HamburgerIcon />}
      ></Button>
      <Box position="absolute" left="0" right="0" top="100%" shadow="xl">
        <Fade in={isOpen}>
          <Box p="4" mt="4" rounded="md">
            {children}
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default MobileNavigation;
