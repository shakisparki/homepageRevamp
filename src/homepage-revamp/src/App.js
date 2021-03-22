
import React, {useState} from 'react'
import Header from "./components/header";
import Banner from "./components/banner";
import ControlPanel from "./components/control";
import {ChakraProvider, theme} from "@chakra-ui/react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {ContentView} from "./components/utilities"
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "360px",
  md: "768px",
  lg: "1024px",
  xl: "1440px"
});

const newTheme = {
  ...theme,
  breakpoints
};


function App(){
  const [noOfListItems,setListNo] = useState(0);
  const [currentTheme, setTheme] = React.useState("1");
  return(
    <ChakraProvider theme={newTheme}>
      <Router>
        <Header noOfListItems={noOfListItems} currentTheme={currentTheme}/>
        <Banner />
        <ControlPanel addToList={()=>setListNo(noOfListItems + 1)} 
          removeFromList={()=>{noOfListItems > 0 && setListNo(noOfListItems - 1)}}
          setTheme={(val)=>setTheme(val)} currentTheme={currentTheme}/>
        <Switch>
          {/* Handle all routes*/}
          <Route component={ContentView}/>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
export default App;
