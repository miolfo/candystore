import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList.js';
import UserInfo from './components/UserInfo.js';
import AllUserInfo from './components/AllUserInfo.js';
import InputField from './components/InputField.js';

class App extends Component {
  userQueryNotify = (id) => toast("User Query for User ID: " + id);

  constructor() {
    super();
    this.state = {
      userId: '',
      products: []
    };

    this.updateUserId = this.updateUserId.bind(this);
    this.userInfoUpdated = this.userInfoUpdated.bind(this);
  }

  updateUserId(event, data) {
    this.setState({userId: data});
  }

  userInfoUpdated(id) {
    this.userQueryNotify(id);
  }

  render() {
    return (
      <div className="App">
        <div className="DivContainer">
          <div className="ProductList">
            <ProductList name="messi market" />
          </div>
          <div className="UserInfo">
            <UserInfo id={this.state.userId} userInfoUpdated={this.userInfoUpdated}/>
          </div>
          <div className="AllUserInfo">
            <AllUserInfo />
          </div>
          <div className="InputField">
            <InputField id={this.state.userId} test={this.updateUserId}/>
          </div>
          <div className="ShoppingCart">
            <ShoppingCart userid={this.state.userId} products={this.state.products}/>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
