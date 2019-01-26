import React, { Component } from 'react';
import UserSelect from './components/UserSelect';
import ProductSelect from './components/ProductSelect';
import Basket from './components/Basket';

class Candystore extends Component {

  constructor() {
    super();
    this.state = {
      selectedUserId: -1,
      products: []
    }
  }

  render() {
    return(
      <div className="col-37">
        <UserSelect userSelected={this.userSelected.bind(this)}/>
        {this.state.selectedUserId !== -1? <ProductSelect onProductSelect={this.productSelected.bind(this)}/> : undefined}
        {this.state.selectedUserId !== -1? <Basket selectedProducts={this.state.products}/> : undefined}
      </div>
    )
  }

  productSelected(product) {
    this.setState(prev => ({
      // ... notation is spread 
      products: [...prev.products, product]
    }))
  }

  userSelected(userId) {
    this.setState({
      selectedUserId: userId
    });
  }
}

export default Candystore;