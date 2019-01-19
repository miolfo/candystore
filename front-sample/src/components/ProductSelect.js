import React, {Component} from 'react';
import { withFetching } from './WithFetching.js';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/products/all';

class ProductSelect extends Component {

  constructor() {
    super();
    this.state = {
      customInputtedValue: false,
      selectedProductId: -1
    }
  }
  render() {
    if(this.props.isLoading) {
      return(
        <div className="nes-container is-dark with-title col-30">
          <p className="title">
            Product selection
          </p>
          Loading
        </div>
      )
    }

    let products = [];
    if(this.props.data.products) {
      this.props.data.products.forEach(product => {
        let btnClass = "nes-btn ";
        if(this.state.customInputtedValue) {
          btnClass += "is-disabled "
        }
        if(this.state.selectedProductId === product.id) {
          btnClass += "is-primary ";
        }
        products.push(
          <div key={product.id}>
            <button type="button" id={product.id} className={btnClass} disabled={this.state.customInputtedValue} onClick={this.productSelected.bind(this)}>
              {product.name} ({product.price}€)
            </button>
          </div>
        )
      });
    }
    let okClass;
    let okDisabled;
    if(this.state.selectedProductId !== -1 || this.state.customInputtedValue) {
      okClass = "nes-btn"
      okDisabled = false;
    } else {
      okClass = "nes-btn is-disabled"
      okDisabled = true;
    }
    return(
      <div className="nes-container is-dark with-title col-30">
        <p className="title">
          Product selection
        </p>
        {products}
        <div className="nes-field">
          <label htmlFor="custom_amount_input">
            Custom amount
          </label>
          <input type="number" id="custom_amount_input" className="nes-input" onInput={this.onCustomInput.bind(this)} disabled={this.state.selectedProductId !== -1}/>
        </div>
        <button className={okClass} disabled={okDisabled}>
          OK
        </button>
      </div>
    )
  }

  productSelected(e) {
    const productId = e.target.id;
    if(this.state.selectedProductId === Number(productId)) {
      this.setState({
        selectedProductId: -1
      });
    } else {
      this.setState({
        selectedProductId: Number(productId)
      });
    }
  }

  onCustomInput(e) {
    const value = e.target.value;
    this.setState({
      customInputtedValue: value !== undefined && value !== ""
    });
  }
}

export default withFetching(apiUrl + ':' + apiPort, apiEndpoint)(ProductSelect);
