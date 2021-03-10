
import React, { Component } from 'react'
import Header from "./components/header";
import ControlPanel from "./components/control";
import { ChakraProvider } from "@chakra-ui/react"

// function App() {
//   return (
  class App extends Component{
    constructor(props){
      super(props);
      this.state = {noOfListItems: 0};
    }

    render(){
      return(
        <ChakraProvider>
          <Header noOfListItems={this.state.noOfListItems}/>
          <ControlPanel addToList={()=>this.addToList()} 
            removeFromList={()=>this.removeFromList()}/>
        </ChakraProvider>
      )
    }
  // );

  // Control functions
  addToList() {
    const value = this.state.noOfListItems + 1;
    this.setState({noOfListItems : value});
  }
  removeFromList() {
    if(this.state.noOfListItems > 0){
      const value = this.state.noOfListItems - 1;
      this.setState({noOfListItems : value});
    }
  }
}

export default App;
