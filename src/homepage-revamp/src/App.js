
import React, {useState} from 'react'
import Header from "./components/header";
import ControlPanel from "./components/control";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {ContentView} from "./utilities"

function App(){
  const [noOfListItems,setListNo] = useState(0);
  const [currentTheme, setTheme] = React.useState("1");
  return(
    <ChakraProvider>
      <Router>
        <Header noOfListItems={noOfListItems} currentTheme={currentTheme}/>
        <ControlPanel addToList={()=>setListNo(noOfListItems + 1)} 
          removeFromList={()=>{noOfListItems > 0 && setListNo(noOfListItems - 1)}}
          setTheme={(val)=>setTheme(val)} currentTheme={currentTheme}/>
        <Switch>
          <Route component={ContentView}/>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
export default App;
