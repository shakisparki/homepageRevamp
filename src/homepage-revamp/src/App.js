
import React from 'react'
import Header from "./components/header";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
        <Header />
      </ChakraProvider>

  );
}

export default App;
