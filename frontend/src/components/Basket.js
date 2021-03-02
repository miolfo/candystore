import React, { Component } from 'react';
import '../css/common.css';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3000';
const apiEndpoint = '/transactions/bulk';

class Basket extends Component {

  render() {

    let products = []
    let sum = 0;

    if (this.props.selectedProducts) {
      this.props.selectedProducts.forEach((product, index) => {
        sum += product.price;
        products.push(
          <div key={index}>
            {product.name}
            <button className="nes-btn is-error delete-product" onClick={() => this.deleteProduct(product)}>
              <i className="nes-icon close is-small"></i>
            </button>
          </div>
        )
      });
    }

    let buttonStyle = "nes-btn is-success";
    if (sum === 0) buttonStyle += " is-disabled";
    return (
      <div className="nes-container is-dark with-title">
        <p className="title">
          Basket {sum}€
        </p>
        {products}
        <button type="button" className={buttonStyle} disabled={sum === 0} onClick={() => this.buyProducts()}>
          OSTAA
        </button>
      </div>
    )
  }

  deleteProduct(product) {
    this.props.onProductDelete(product);
  }

  buyProducts() {
    console.log("KAKHAA", apiUrl, apiPort, apiEndpoint);
    console.log(this.props.selectedProducts);
    console.log(this.props.selectedUserId);
    let reqBody = [];

    this.props.selectedProducts.forEach(product => {
      reqBody.push({
        "user_id": this.props.selectedUserId,
        "product_id": product.id
      })
    });

    console.log(reqBody);
    // this.props.onProductCheckout();
    // fetch(url + query, {
    fetch(apiUrl + ':' + apiPort + apiEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error while requesting data...');
        }
      })
      .then(data => console.log(data))
      .catch(error => console.log(error)
      );
  }
}

export default Basket;