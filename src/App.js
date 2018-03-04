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
        <footer className="footer">
            <p>This is a work in progress. Built with React.</p>
            <a className="btn" href="mailto:michael@michaelfreiman.com">Say Hello</a>
        </footer>
      </div>
    );
  }
}

export default App;
