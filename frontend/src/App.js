import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import FrontSample from './FrontSample';
import Candystore from './Candystore';

//let userinfo2 = UserInfov2('localhost:3333','/users/id/1');

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <div>
            <Route path="/" exact={true} component={Candystore}/>
            <Route path="/sample" component={FrontSample}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
