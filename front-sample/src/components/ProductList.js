import React from 'react';
import ReactTable from 'react-table';
import { withFetching } from './WithFetching.js';
import './ProductList.css';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
//const apiEndpoint = '/products/all';

const ProductList = ({ data, isLoading, error, props }) => {
  const products = data.products || [];
  const columns = [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Price',
    accessor: 'price'
  }]
  
  const productList = <ReactTable 
          data={products}
          columns={columns}
          minRows={5} 
          showPagination={false}/>;

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <strong>Product list for {props.name}</strong>
      {productList}
    </div>
  );
}

export default withFetching(apiUrl + ':' + apiPort)(ProductList);