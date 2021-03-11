import React from "react";
import logo from '../images/logo.jpg';
import { Stack, Box, Icon, Flex, Button, Image, Input, InputGroup,
         InputRightElement, ButtonGroup, Text,LinkBox, LinkOverlay } from "@chakra-ui/react";
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import { MdStar, MdAccountCircle } from "react-icons/md";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import {IoPersonAdd} from "react-icons/io5";
import {Link,useLocation} from "react-router-dom";
import nav from "../nav/nav.json"

function NavMenu(props){
  return(
    <Link to={props.href}>
      <Text fontWeight={props.loc === props.href ? "bold" : "normal"}>
        {props.title}
      </Text>
    </Link>
  )
}

function MyList(props){
  return(
    <Button borderRadius="1px" leftIcon={<Icon as={MdStar}
      boxSize={8}/>} variant="outline" size="lg"
      onClick={()=>
        alert("You have added " + props.noOfItems + " Contacts to your list")}>
      {"My List (" +  props.noOfItems + ")"} 
    </Button>
  )
}

function Header(props){
  const [show, ] = React.useState(false);
  const [loggedIn,setLoggedIn ] = React.useState(false);
  let location = useLocation();

  const menudata = nav.map((data) => {
    return (
      <NavMenu title={data.title} href={data.action}
         loc={location.pathname}/>
    )
  });

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
      <LinkBox>
        <Flex align="center" mr={5}>
        <LinkOverlay href="/">
          <Image src={logo}></Image>
        </LinkOverlay>
        </Flex>
      </LinkBox>

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
          <MyList noOfItems={props.noOfListItems}/>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} 
              leftIcon={<Icon as={MdAccountCircle} boxSize={8}/>} 
              borderRadius="1px" variant="outline" size="lg">
              My Account
            </MenuButton>
            <MenuList>
              <MenuItem onClick={()=>{
                setLoggedIn(!loggedIn);
                alert("You have been logged " + (!loggedIn ? "in" : "out"));
                }}>
                  {
                    !loggedIn ?
                    <>
                      <Icon as={FiLogIn} mr="10px"/> 
                      <span>Login</span>
                    </>
                    :
                    <>
                      <Icon as={FiLogOut} mr="10px"/> 
                      <span>Logout</span>
                    </>
                  }
                
              </MenuItem>
              <MenuItem>
                <Icon as={IoPersonAdd} mr="10px"/> 
                  <span>Register</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>

    </Flex>

    <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}>

        <ButtonGroup spacing={20} role="navigation">
          {menudata}
        </ButtonGroup>
      </Box>
    </Stack>

    </Flex>


  );
};

export default Header;
