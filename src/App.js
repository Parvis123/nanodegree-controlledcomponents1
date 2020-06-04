import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      query:'Type Something!'
    }
  }
  
  updateInput = (input) => {
    this.setState(() => ({
      query: input
    }))
  }

  render() {
    const {query} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text"
           placeholder="Say Something"
            onChange={(event) => 
            this.updateInput(event.target.value)} />
          <p className="echo">Echo:</p>
          <p>{query}</p>
        </div>
      </div>
    );
  }
}

export default App;
