import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Candystore v0.1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProductList name="messi market" />
      </div>
    );
  }
}

export default App;
