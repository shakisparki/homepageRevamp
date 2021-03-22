import React, {useState, useEffect}from "react";
import { Stack, Box, Icon, Flex, Button, Image, Input, InputGroup,IconButton,
         InputRightElement, ButtonGroup, Text,LinkBox, LinkOverlay } from "@chakra-ui/react";
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {ChevronDownIcon, HamburgerIcon} from "@chakra-ui/icons"
import { MdStar, MdAccountCircle } from "react-icons/md";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import {IoPersonAdd} from "react-icons/io5";
import {Link,useLocation} from "react-router-dom";

function NavMenu(props){
  return(
    <Link to={props.href}>
      <Text fontWeight={props.loc === props.href ? "bold" : "normal"}
        mt={{ base: 4, md: 0 }} ml={{ base: 16, md: 16, sm:0 }} display="block">
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

function Header(props,laugh){
  const [show, setShow] = useState(false);
  const [loggedIn,setLoggedIn ] = useState(false);
  const [menudata,setMenuData ] = useState([]);
  const handleToggle = () => setShow(!show);
  
  let location = useLocation();
  const org = (props.currentTheme === "1" ? "tdcc" : "find");

  useEffect(() => {
    fetch(org === "tdcc" ? "/nav/nav.json" : "/nav/nav_find.json")
                .then(response => response.json())
                .then(data => setMenuData(data.map(data => 
                  <NavMenu title={data.title} href={data.action}
                    loc={location.pathname}/>)))
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
          <Image src={(org === "tdcc" ? "/images/logo.png" 
                                      : "/images/findLogo.png")}></Image>
        </LinkOverlay>
        </Flex>
      </LinkBox>
      {/* Collapsed Menu button */}
      <Box as={IconButton} icon={<HamburgerIcon />} 
        aria-label="Menu" display={{ base: "block", md: "none" }}
        mt={{ base: 4, md: 2 }}
        onClick={handleToggle} >
    </Box>
    <Flex
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 8, md: 2 }}
        justify="flex-end"
        // role="navigation"
      >
    <Stack spacing={8}>
      {/* Flex for the search bar and two buttons */}
      <Flex wrap="wrap">
      <Box
        display={{ sm: "none", md: "block" }}
        mt={{ base: 4, md: 2 }}
      >
      <InputGroup size="lg">
          <Input borderRadius="1px" width="28rem" placeholder="Search for samples"/>
          <InputRightElement width="5rem">
          <Button borderRadius="1px" bg="#808080" variant="solid" color="white" _hover={{ bg: "#4d4d4d" }}  size="lg">
              Search
          </Button>
          </InputRightElement>
      </InputGroup>
    </Box>
    
    <Box
      display={{ sm: show ? "block" : "none", md: "flex" }}
      mt={{ base: 4, md: 2 }}
    >
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
    </Box>
    </Flex>
      <Flex
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 8, md: 2 }}
        justify="flex-end"
      >
        {menudata}
      </Flex>
    </Stack>
    </Flex>
    </Flex>
    

  );
};

export default Header;
