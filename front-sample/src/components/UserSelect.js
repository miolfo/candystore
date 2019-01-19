import React, { Component } from 'react';
import { withFetching } from './WithFetching.js';
import '../css/common.css'

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/users/all';

class UserSelect extends Component {
  render() {
    if(this.props.isLoading) {
      return (
        <div>
          Loading users
        </div>
      )
    }
    console.log(this.props.data.users);

    var users = [];
    if(this.props.data.users) {
      this.props.data.users.forEach(user => {
        users.push(
          <div>
            <button type="button" key={user.id} className="nes-btn">
              {user.fname} {user.lname} ({user.balance}€)
            </button>
          </div>
        )
      });
    }
    return(
      <div className="nes-container is-dark with-title col-30">
        <p className="title">
          Select user
        </p>
        {users}
      </div>
    )
  }
}

export default withFetching(apiUrl + ':' + apiPort, apiEndpoint)(UserSelect);