import React from "react";
import logo from '../images/logo.jpg';
import { Stack, Box, Icon, Flex, Button, Image, Input, InputGroup,
         InputRightElement, ButtonGroup, Text,LinkBox, LinkOverlay } from "@chakra-ui/react";
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import { MdStar, MdAccountCircle } from "react-icons/md";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import {IoPersonAdd} from "react-icons/io5";
import nav from "../nav/nav.json"

function NavMenu(props){
  const currentPage = (window.location.pathname === props.href);
  return(
    <Menu>
      {/* <MenuButton as="a" href={props.href} size="lg">
        <Text fontWeight={ currentPage ? "bold" : "normal"}>{props.title}</Text> */}
      <MenuButton size="lg" _active={{ fontWeight: 'bold' }}> {/* for demonstration */}
        {props.title}
      </MenuButton>
     </Menu>
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

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {loggedIn : false};
  }

  render(){
    // const [show, ] = React.useState(false);

    const menudata = nav.map((data) => {
      return (
        <NavMenu title={data.title} href={data.action}/>
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
        {...this.props}
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
          display={{ sm: this.show ? "block" : "none", md: "block" }}
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
            <MyList noOfItems={this.props.noOfListItems}/>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} 
                leftIcon={<Icon as={MdAccountCircle} boxSize={8}/>} 
                borderRadius="1px" variant="outline" size="lg">
                My Account
              </MenuButton>
              <MenuList>
                <MenuItem onClick={()=>{
                  this.setState({loggedIn:!this.state.loggedIn});
                  alert("You have been logged " + (this.state.loggedIn ? "in" : "out"));
                  }}>
                {
                    this.state.loggedIn ?
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
          display={{ sm: this.show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}>

          <ButtonGroup spacing={20} role="navigation">
            {menudata}
          </ButtonGroup>
        
        </Box>
      </Stack>

      </Flex>


    );
  };
}

export default Header;
