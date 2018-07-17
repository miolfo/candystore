import React, { Component } from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/transactions/';

export default class Transaction extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(apiUrl + ':' + apiPort + apiEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        product_id: 2
      })
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          Product id:
          <input type="number" name="product_id" />
        </label>
        </div>
        <div>
        <label>
          User id:
          <input type="number" name="user_id"/>
        </label>
        </div>
        <div>
        <label>
           Amount:
          <input type="number" name="amount"/>
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}