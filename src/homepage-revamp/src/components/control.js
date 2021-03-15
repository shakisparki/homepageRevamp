import React from 'react';
import {ButtonGroup, Button, Text, Flex, Stack,
VStack, HStack,RadioGroup,Radio} from "@chakra-ui/react"

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
                <RadioGroup onChange={props.setTheme}
                 value={props.currentTheme}>
                    <Stack direction="row">
                    <Text fontWeight="semibold"> Select Theme </Text>
                    <Radio value="1">TDCC</Radio>
                    <Radio value="2">FIND</Radio>
                    </Stack>
                </RadioGroup>
             </VStack>
            
            
        </Flex>
    )
}

export default ControlPanel;