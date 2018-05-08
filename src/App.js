import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './Youtube.js';
import YoutubeSearch from './YoutubeSearch.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Youtube Search</h1>
          <p className="App-title-p">Coded Using React & Youtube API</p>
        </header>
        <h1>Search Youtube Channel Name</h1>
        <Youtube />
        <YoutubeSearch />
      </div>
    );
  }
}

export default App;
