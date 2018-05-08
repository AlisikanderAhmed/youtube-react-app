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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Youtube Search: <a class="font-weight-light">Coded Using React & Youtube</a><img src={logo} className="App-logo" alt="logo" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#channel">Channel Search</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#video">Video Search</a>
              </li>
            </ul>
          </div>
        </nav>

        <h1 id="channel">Youtube Channel Name Search</h1>
        <Youtube />
        <YoutubeSearch />
      </div>
    );
  }
}

export default App;
