import React from "react";
import logo from '../images/logo.jpg';
import { Stack, Box,  Flex, Button, Image, Input, InputGroup, InputRightElement, ButtonGroup } from "@chakra-ui/react";
import { StarIcon, ArrowForwardIcon} from '@chakra-ui/icons'


const Header = props => {
  const [show, ] = React.useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white.500"
      borderBottom="1px"
      color="black"
      {...props}
    >
      
      <Flex align="center" mr={5}>
        <Image src={logo}></Image>
      </Flex>


    <Stack spacing={8}>
      {/* Flex for the search bar and two buttons */}
      <Flex>
      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <InputGroup size="lg">
          <Input borderRadius="1px" pr="20rem" placeholder="Search for samples"/>
          <InputRightElement width="5rem">
          <Button borderRadius="1px" bg="#808080" variant="solid" color="white" _hover={{ bg: "#4d4d4d" }}  size="lg">
              Search
          </Button>
          </InputRightElement>
      </InputGroup>
    </Box>
    <ButtonGroup spacing={4} ml="1.5rem">
          <Button borderRadius="1px" leftIcon={<StarIcon />} variantColor="black" variant="outline" size="lg">
            My List
          </Button>
          <Button borderRadius="1px" leftIcon={<ArrowForwardIcon />} variantColor="black" variant="outline" size="lg">
            My Account
          </Button>
        </ButtonGroup>

    </Flex>

    <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <ButtonGroup spacing={20}>
        <Button variantColor="black" variant="link">
          Home
        </Button>
        <Button variantColor="black" variant="link">
          Directory
        </Button>
        <Button variantColor="black" variant="link">
          Help and support
        </Button>
        <Button variantColor="black" variant="link">
          News
        </Button>
        <Button variantColor="black" variant="link">
          About UKCRK
        </Button>
        <Button variantColor="black" variant="link">
          Contact us
        </Button>
      </ButtonGroup>
      </Box>
    </Stack>


    </Flex>


  );
};

export default Header;
