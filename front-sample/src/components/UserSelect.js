import React, { Component } from 'react';
import { withFetching } from './WithFetching.js';
import '../css/common.css'

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/users/all';

class UserSelect extends Component {

  constructor() {
    super();
    this.state = {
      selectedUserId: -1
    }
  }

  render() {
    if(this.props.isLoading) {
      return (
        <div>
          Loading users
        </div>
      )
    }

    var users = [];
    if(this.props.data.users) {
      this.props.data.users.forEach(user => {
        var btnClass = this.state.selectedUserId === user.id? "nes-btn is-primary" : "nes-btn";
        users.push(
          <div key={user.id}>
            <button type="button" className={btnClass} onClick={this.userSelected.bind(this)} id={user.id}>
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

  userSelected(e) {
    var userId = e.target.id;
    if(this.state.selectedUserId === Number(userId)) {
      this.setState({
        selectedUserId: -1
      });
    } else {
      this.setState({
        selectedUserId: Number(userId)
      });
    }
  }
}

export default withFetching(apiUrl + ':' + apiPort, apiEndpoint)(UserSelect);