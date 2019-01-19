import React, { Component } from 'react';
import UserSelect from './components/UserSelect';
import ProductSelect from './components/ProductSelect';

class Candystore extends Component {

  constructor() {
    super();
    this.state = {
      selectedUserId: -1
    }
  }

  render() {
    return(
      <div>
        <UserSelect userSelected={this.userSelected.bind(this)}/>
        {this.state.selectedUserId !== -1? <ProductSelect/> : undefined}
      </div>
    )
  }

  userSelected(userId) {
    this.setState({
      selectedUserId: userId
    });
  }
}

export default Candystore;