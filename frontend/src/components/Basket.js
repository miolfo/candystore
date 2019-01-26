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

    let buttonStyle = "nes-btn is-success";
    if(sum === 0) buttonStyle += " is-disabled";
    return (
      <div className="nes-container is-dark with-title">
        <p className="title">
          Basket {sum}€
        </p>
        {products}
        <button type="button" className={buttonStyle} disabled={sum === 0}>
          OSTAA
        </button>
      </div>
    )
  }
}

export default Basket;