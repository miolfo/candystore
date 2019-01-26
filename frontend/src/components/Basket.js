import React, { Component } from 'react';

class Basket extends Component {

  render() {

    let products = []
    let sum = 0;

    if(this.props.selectedProducts){
      this.props.selectedProducts.forEach((product, index) => {
        sum += product.price;
        products.push(
          <div key={index}>
            {product.name}
          </div>
        )
      });
    }

    return (
      <div className="nes-container is-dark with-title">
        <p className="title">
          Basket {sum}€
        </p>
        {products}
      </div>
    )
  }
}

export default Basket;