import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList.js';
import UserInfo from './UserInfo.js';
import AllUserInfo from './AllUserInfo.js';

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
        <div>
          <div className="ProductList">
            <ProductList name="messi market" />
          </div>
          <div className="UserInfo">
            <UserInfo />
          </div>
          <div className="AllUserInfo">
            <AllUserInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
