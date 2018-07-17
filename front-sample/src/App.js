import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList.js';
import UserInfo from './components//UserInfo.js';
import AllUserInfo from './components//AllUserInfo.js';
import Transaction from './components/Transaction';

//let userinfo2 = UserInfov2('localhost:3333','/users/id/1');

class App extends Component {
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

export default App;
