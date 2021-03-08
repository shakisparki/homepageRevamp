import React from "react";
import logo from '../images/logo.jpg';
import { Stack, Box, Icon, Flex, Button, Image, Input, InputGroup,
         InputRightElement, ButtonGroup } from "@chakra-ui/react";
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import { MdStar, MdAccountCircle } from "react-icons/md";
import nav from "../nav/nav.json"

const Header = props => {
  const [show, ] = React.useState(false);
  const menudata = nav.map((data) => {
    return (
      <Menu>
        <MenuButton size="lg" _active={{ fontWeight: 'bold' }}>
          {data.title}
        </MenuButton>
      </Menu>
    )
  })
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
          <Button borderRadius="1px" leftIcon={<Icon as={MdStar} boxSize={8}/>} variantColor="black" variant="outline" size="lg">
            My List
          </Button>
          {/* <Button borderRadius="1px" leftIcon={<Icon as={MdAccountCircle} boxSize={8}/>} >
            My Account
          </Button> */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} 
              leftIcon={<Icon as={MdAccountCircle} boxSize={8}/>} 
              borderRadius="1px" variantColor="black" variant="outline" size="lg">
              My Account
            </MenuButton>
            <MenuList>
              <MenuItem>Login</MenuItem>
              <MenuItem>Register</MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>

    </Flex>

    <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        
      <ButtonGroup spacing={20}>
        {menudata}
      </ButtonGroup>
      </Box>
    </Stack>


    </Flex>


  );
};

export default Header;
