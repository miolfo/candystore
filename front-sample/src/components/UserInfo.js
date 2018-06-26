import React from 'react';
import './UserInfo.css';
import { withFetching } from './WithFetching.js';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
const apiEndpoint = '/users/id/1';

const UserInfo = ({ data, isLoading, error, props}) => {
  const info = data || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  
  return (
    <div>
      <strong>User information for {info.fname} {info.lname}</strong>
      <br />
      <span>Balance: {info.balance} </span>
    </div>
  );
}

export default withFetching(apiUrl + ':' + apiPort, apiEndpoint)(UserInfo);