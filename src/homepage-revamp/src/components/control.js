import React from 'react';
import {ButtonGroup, Button, Text, Flex, Stack,
RadioGroup,Radio,Switch} from "@chakra-ui/react"

function ControlPanel(props){
    return(
        <Flex align="center" justify="space-between"
         w="350px" px={10} py={2} borderWidth="1px">
             <Stack textAlign="center">
                <Text fontSize="xl" fontWeight="semibold"> Control Panel </Text>
                <Stack direction="row" align="center">
                    <Text fontWeight="semibold"> Add/Remove from list </Text>
                    <ButtonGroup spacing={3} >
                        <Button onClick={props.addToList}>
                            +
                        </Button>
                        <Button onClick={props.removeFromList}>
                            -
                        </Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction="row" align="center">
                    <Text fontWeight="semibold"> Select Theme </Text>
                    <RadioGroup onChange={props.setTheme}
                    value={props.currentTheme}>
                        <Stack direction="row">
                        <Radio value="1">TDCC</Radio>
                        <Radio value="2">FIND</Radio>
                        </Stack>
                    </RadioGroup>
                </Stack>
                <Stack direction="row" align="center">
                    <Text fontWeight="semibold"> Turn on/off Header </Text>
                    <Switch isChecked={props.headerPower}
                        onChange={(e)=>props.powerHeader(e.currentTarget.checked)}/>
                </Stack>
                <Stack direction="row" align="center">
                    <Text fontWeight="semibold"> Turn on/off Banner </Text>
                    <Switch  isChecked={props.bannerPower}
                        onChange={(e)=>props.powerBanner(e.currentTarget.checked)}/>
                </Stack>
             </Stack>
            
            
        </Flex>
    )
}

export default ControlPanel;