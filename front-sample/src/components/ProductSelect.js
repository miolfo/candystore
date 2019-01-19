import React, {Component} from 'react';
import { withFetching } from './WithFetching.js';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/products/all';

class ProductSelect extends Component {
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
        products.push(
          <div key={product.id}>
          <button type="button" id={product.id} className="nes-btn">
            {product.name} ({product.price}€)
          </button>
        </div>
        )
      });
    }

    return(
      <div className="nes-container is-dark with-title col-30">
        <p className="title">
          Product selection
        </p>
        {products}
      </div>
    )
  }
}

export default withFetching(apiUrl + ':' + apiPort, apiEndpoint)(ProductSelect);
