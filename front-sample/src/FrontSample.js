import React, { Component } from 'react';
import './App.css';
import ProductList from './components-sample/ProductList.js';
import UserInfo from './components-sample/UserInfo.js';
import AllUserInfo from './components-sample//AllUserInfo.js';
import Transaction from './components-sample/Transaction';

class FrontSample extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/rHmypWY.jpg" className="App-logo" alt="logo" />
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
            <AllUserInfo name="Wall of Shame" />
          </div>
        </div>
        <div>
          <Transaction/>
        </div>
      </div>
    );
  }
}

export default FrontSample;