import React, { Component } from 'react';
import './InputField.js';
import UserInfo from './UserInfo.js';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      clicked: false,
      boxValue: '',
      productId: ''
    };

    this.handleChangedBoxValue = this.handleChangedBoxValue.bind(this);
    //this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangedBoxValue(event) {
    this.setState({boxValue: event.target.value});
    this.setState({content: null}, this.fetchUserInfo(event.target.value));
  }

  /*
  handleButtonClick(event) {
    console.log(event);
    console.log(event.target.value);
    let apiEndpoint = '/users/id/' + this.state.boxValue;
    console.log('calling UserInfo component with apiEndpoint ' + apiEndpoint);
    this.setState({ content: <UserInfo apiEndpoint={apiEndpoint} /> }, () => { console.log(this.state.content); });
  }*/
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('UPDATE!!!!');
    console.log(prevState);
    console.log(this.state.boxValue);
    //this.fetchUserInfo(this.state.boxValue);
    //let apiEndpoint = '/users/id/' + this.state.boxValue;
    //this.setState({ content: <UserInfo apiEndpoint={apiEndpoint} /> });
  }

  fetchUserInfo(id) {
    let apiEndpoint = '/users/id/' + id;
    this.setState({ content: <UserInfo apiEndpoint={apiEndpoint} /> });
  }

  handleSubmit(event){
    console.log(event);
    console.log('HURR DURR VITTU SAATANA: ' + this.state.boxValue);
    let apiEndpoint = '/users/id/' + this.state.boxValue;
    this.setState({ content: <UserInfo apiEndpoint={apiEndpoint} /> });
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          syötä  tieto:
          <input type="text" onChange={this.handleChangedBoxValue}/>
        </label>
        <input type="submit" value="FETCH" />
      </div>
      <div>
        {this.state.content}
      </div>
      </form>
    );
  }
}