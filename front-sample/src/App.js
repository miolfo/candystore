import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ProductList from './components/ProductList.js';
import ProductListv2 from './components/ProductListv2.js';
//import UserInfo from './components//UserInfo.js';
import UserInfov2 from './components/UserInfov2.js';
import AllUserInfo from './components//AllUserInfo.js';

//let userinfo2 = UserInfov2('localhost:3333','/users/id/1');

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
            <ProductListv2 name="messi market" />
          </div>
          <div className="UserInfo">
            <UserInfov2 />
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
