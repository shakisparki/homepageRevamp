import React from "react";
import { Grid, Flex, Text, Box, Stack, Button } from "@chakra-ui/react"

function renderBanner() {
    return (
        <div>
        <Flex justify="center">
            <Box mt="20px" textAlign="center">
                <Text fontSize="5xl" as="b">Improving access to human tissue samples</Text>
            </Box>

        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} padding="50px" pb="20px">
            <Box bg="#EBEBEB" px="10px">
                <Flex justify="center" my="70px">
                    <Stack spacing={5} >
                        <Text fontSize="3xl" textAlign="center">Need tissue samples <br/> for your research?</Text>
                        <Button
                         bg="#808080" 
                         variant="solid" 
                         color="white"
                         height="65px"
                         borderRadius="1px" 
                         _hover={{ bg: "#4d4d4d" }} 
                         size="lg">
                            <Text fontSize="3xl" textAlign="center">Search the directory</Text>
                        </Button>
                    </Stack>    
                </Flex>
            </Box>    
            <Box bg="#EBEBEB" px="10px">
                <Flex justify="center" my="70px">
                    <Stack spacing={5}>
                        <Text fontSize="3xl" textAlign="center">Share your samples and <br/> collaborate with researchers</Text>
                        <Button
                         bg="#808080" 
                         variant="solid" 
                         color="white"
                         height="65px"
                         borderRadius="1px" 
                         _hover={{ bg: "#4d4d4d" }} 
                         size="lg">
                            <Text fontSize="3xl" textAlign="center"> Register with us </Text>
                        </Button>
                    </Stack>    
                </Flex>
            </Box>  
        </Grid>
        </div>
    );
}

const Banner = () => renderBanner();
export default Banner;