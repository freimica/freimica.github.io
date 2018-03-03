import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="nav">
          <img src={logo} className="logo" alt="logo" />
        </nav>
        <header className="header">
          <h1>Michael Freiman</h1>
          <p>
          Front-end Developer - Madison, WI
          </p>
        </header>
        <div className="tiles">
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
