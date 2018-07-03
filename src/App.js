import React, { Component } from 'react';
import Jobs  from './components/jobs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-style">
            <img className="logo" src="/src/imgs/logo.png" />
          </div>
        </header>
        <content>
          <Jobs/>
        </content>
      </div>
    );
  }
}

export default App;
