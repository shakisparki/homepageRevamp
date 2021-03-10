import React from 'react';
import {Box, ButtonGroup, Button, Text, Flex,
VStack, HStack} from "@chakra-ui/react"

function ControlPanel(props){
    return(
        <Flex align="center" justify="space-between"
         w="350px" px={10} py={2} borderWidth="1px">
             <VStack>
                <Text fontSize="xl" fontWeight="semibold"> Control Panel </Text>
                <HStack>
                    <Text fontWeight="semibold"> Add/Remove from list </Text>
                    <ButtonGroup spacing={3} >
                        <Button onClick={props.addToList}>
                            +
                        </Button>
                        <Button onClick={props.removeFromList}>
                            -
                        </Button>
                    </ButtonGroup>
                </HStack>
             </VStack>
            
            
        </Flex>
    )
}

export default ControlPanel;