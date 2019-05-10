import React, { Component } from 'react';
import Home from "./pages/home.js"
import Wrapper from "./components/wrapper"
import './App.css';

class App extends Component {
 


  render() {
    return (

      <Wrapper>
        <Home></Home>
      </Wrapper>
    );
  }
}

export default App;
