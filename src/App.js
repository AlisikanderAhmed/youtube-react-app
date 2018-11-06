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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Youtube Search: </a><a className="font-weight-light text-white">Coded Using React & Youtube's API</a><img src={logo} className="App-logo" alt="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href=".">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#channel">Channel Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#video">Video Search</a>
              </li>
            </ul>
          </div>
        </nav>

        <YoutubeSearch />
        <h1 id="channel">Youtube Channel Name Search</h1>
        <Youtube />

      </div>
    );
  }
}

export default App;
