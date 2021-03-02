import React, { Component } from 'react';
import { withFetching } from './WithFetching.js';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3000';
const apiEndpoint = '/products/all';

class ProductSelect extends Component {

  constructor() {
    super();
    this.state = {
      selectedProduct: undefined
    }

    this.productSelected = this.productSelected.bind(this);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="nes-container is-dark with-title col-30">
          <p className="title">
            Product selection
          </p>
          Loading
        </div>
      )
    }

    let products = [];
    if (this.props.data.products) {
      this.props.data.products.forEach(product => {
        let btnClass = "nes-btn ";
        if (this.state.customInputtedValue) {
          btnClass += "is-disabled "
        }
        if (this.state.selectedProduct && this.state.selectedProduct.id === product.id) {
          btnClass += "is-primary ";
        }
        let productObj = { id: product.id, name: product.name, description: product.description, price: product.price }
        products.push(
          <div key={product.id}>
            <button type="button" id={product.id} className={btnClass} disabled={this.state.customInputtedValue} onClick={() => this.productSelected(productObj)}>
              {product.name} ({product.price}€)
            </button>
          </div>
        )
      });
    }
    let okClass;
    let okDisabled;
    if (this.state.selectedProduct !== undefined) {
      okClass = "nes-btn"
      okDisabled = false;
    } else {
      okClass = "nes-btn is-disabled"
      okDisabled = true;
    }
    return (
      <div className="nes-container is-dark with-title">
        <p className="title">
          Product selection
        </p>
        {products}
        <div className="nes-field">
          <label htmlFor="custom_amount_input">
            Custom amount
          </label>
          <input type="number" id="custom_amount_input" className="nes-input" onInput={this.onCustomInput.bind(this)} disabled={this.state.selectedProduct !== undefined && this.state.selectedProduct.id !== -1} />
        </div>
        <button className={okClass} disabled={okDisabled} onClick={this.okClicked.bind(this)}>
          OK
        </button>
      </div>
    )
  }

  okClicked() {
    this.props.onProductSelect(this.state.selectedProduct);
  }

  productSelected(product) {
    const productId = product.id;
    if (this.state.selectedProduct && this.state.selectedProduct.id === Number(productId)) {
      this.setState({
        selectedProduct: undefined
      });
    } else {
      this.setState({
        selectedProduct: product
      });
    }
  }

  onCustomInput(e) {
    const value = e.target.value;
    const customProduct = { id: -1, price: Number(value), description: "custom product", name: "custom " + value + "€" };
    if (value !== undefined && value !== "") {
      this.setState({
        selectedProduct: customProduct
      });
    } else {
      this.setState({
        selectedProduct: undefined
      });
    }

  }
}

export default withFetching(apiUrl + ':' + apiPort, apiEndpoint)(ProductSelect);
