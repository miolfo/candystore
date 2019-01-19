import React, { Component } from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/transactions/';

export default class Transaction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product_id: "",
      user_id: "",
      amount: ""
    }

    this.inputChanged = this.inputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let body = {};
    if(this.state.product_id !== "") {
      body = {
        user_id: parseInt(this.state.user_id, 10),
        product_id: parseInt(this.state.product_id, 10)
      }
    } else {
      body = {
        user_id: parseInt(this.state.user_id, 10),
        amount: parseFloat(this.state.amount)
      }
    }

    fetch(apiUrl + ':' + apiPort + apiEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => window.location.reload()
    ).catch(err => console.error(err));
  }

  inputChanged(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          Product id:
          <input type="number" name="product_id" onChange={this.inputChanged} value={this.state.product_id}/>
        </label>
        </div>
        <div>
        <label>
          User id:
          <input type="number" name="user_id" onChange={this.inputChanged} value={this.state.user_id} required={true}/>
        </label>
        </div>
        <div>
        <label>
           Amount:
          <input type="number" name="amount" onChange={this.inputChanged} value={this.state.amount}/>
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}