import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList.js';
import UserInfo from './components//UserInfo.js';
import AllUserInfo from './components//AllUserInfo.js';
import InputField from './components/InputField.js';

//let userinfo2 = UserInfov2('localhost:3333','/users/id/1');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/rHmypWY.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Candystore v0.1</h1>
        </header>
        <div className="App-intro">
          <InputField />
        </div>
        <div>
          <div className="ProductList">
            <ProductList name="messi market" apiEndpoint='/products/all' />
          </div>
          <div className="UserInfo">
            <UserInfo apiEndpoint='/users/id/1' />
          </div>
          <div className="AllUserInfo">
            <AllUserInfo name="Wall of Shame" apiEndpoint='/users/all'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
