import React from 'react';

class ProductList extends React.Component {
  constructor() {
      super();
      this.state = {
          products: [],
      };
    }

  componentDidMount() {
    fetch('http://localhost:3000/products/all', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(function(response) {
      return response.json();
    }, function(error) {
      console.log("error: " + error.message);
    }).then(data => {
      let products = data.products;
      console.log('data contained in response: ' + JSON.stringify(products));
      let mappedProducts = products.map((product) => {
        return(
          <div key={product.id}>{product.name}</div>
        )
      })
      this.setState({products: mappedProducts});
    })
    console.log("state " + this.state.products);
  }


  render() {
    return (
      <div>
        <h2>Product list for {this.props.name}</h2>
        {this.state.products}
      </div>
    )
  }
}

export default ProductList;