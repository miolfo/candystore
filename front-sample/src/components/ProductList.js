import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './ProductList.css';

class ProductList extends React.Component {
  constructor() {
      super();
      this.state = {
          products: [],
      };
    }
  
  componentDidMount() {
    const columns = [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Price',
      accessor: 'price'
    }]

    const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
    const apiPort = process.env.REACT_APP_API_PORT || '3333';
    fetch(apiUrl + ':' + apiPort + '/products/all', {
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
      let output = <ReactTable 
                      data={products}
                      columns={columns}
                      minRows={5} 
                      showPagination={false}/>;
      this.setState({products: output});
    })
    console.log("state " + this.state.products);
  }


  render() {
    return (
      <div>
        <strong>Product list for {this.props.name}</strong>
        {this.state.products}
      </div>
    )
  }
}

export default ProductList;