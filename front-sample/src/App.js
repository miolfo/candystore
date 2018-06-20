import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList.js';
import UserInfo from './components/UserInfo.js';
import AllUserInfo from './components/AllUserInfo.js';
import InputField from './components/InputField.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    };

    this.test = this.test.bind(this);
  }

  handleChange(event) {
    this.setState({id: event.target.value });
  }

  test(event, data) {
    console.log(data);
    console.log(event);
    this.setState({id: data});
  }

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
            <UserInfo id={this.state.id}/>
          </div>
          <div className="AllUserInfo">
            <AllUserInfo />
          </div>
          <div className="InputField">
            <InputField id={this.state.id} test={this.test}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
