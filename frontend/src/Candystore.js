import React, { Component } from 'react';
import UserSelect from './components/UserSelect';
import ProductSelect from './components/ProductSelect';
import Basket from './components/Basket';

class Candystore extends Component {

  constructor() {
    super();
    this.state = {
      selectedUserId: -1,
      products: [],
      userRefresh: false
    }
  }

  render() {
    return (
      <div className="col-37">
        <UserSelect refreshFunc={this.refreshUsers.bind(this)} refresh={this.state.userRefresh} userSelected={this.userSelected.bind(this)} />
        {this.state.selectedUserId !== -1 ? <ProductSelect onProductSelect={this.productSelected.bind(this)} /> : undefined}
        {this.state.selectedUserId !== -1 ? <Basket
          selectedUserId={this.state.selectedUserId}
          selectedProducts={this.state.products}
          onProductDelete={this.productDeleted.bind(this)}
          onProductCheckout={this.productsBought.bind(this)}
        /> : undefined}
      </div>
    )
  }

  productSelected(product) {
    this.setState(prev => ({
      // ... notation is spread 
      products: [ ...prev.products, product ]
    }));
  }

  userSelected(userId) {
    this.setState({
      selectedUserId: userId
    });
  }

  productDeleted(product) {
    const prods = this.state.products;
    const index = prods.indexOf(product);
    prods.splice(index, 1);
    this.setState({
      products: prods
    });
  }

  productsBought() {
    const prods = this.state.products;
    this.refreshUsers();
    this.setState({ products: [] });
  }

  refreshUsers = () =>
    this.setState({ userRefresh: !this.state.userRefresh });
}

export default Candystore;