import React, { Component } from 'react';
import HogList from './components/HogList'

import './App.css';

import Nav from './components/Nav'

class App extends Component {


  render() {
    return (
      <div className="App">
          < Nav />
          <HogList />
      </div>
    )
  }
}



export default App;
