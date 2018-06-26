import React from 'react';
import ReactTable from 'react-table';
import { withFetching } from './WithFetching.js';
import 'react-table/react-table.css';
import './AllUserInfo.css';

const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
const apiPort = process.env.REACT_APP_API_PORT || '3333';
//const apiEndpoint = '/users/all';

const AllUserInfo = ({ data, isLoading, error, props }) => {
  const users = data.users || [];
  const columns = [{
    Header: 'First Name',
    accessor: 'fname'
}, {
    Header: 'Last Name',
    accessor: 'lname'
}, {
    Header: 'Balance',
    accessor: 'balance'
}]
  
  const allUserInfo = <ReactTable 
          data={users}
          columns={columns}
          minRows={5}
          showPagination={false}
          defaultSorted={[
            {
              id: 'balance'
            }
          ]} />;

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <strong>{props.name}</strong>
      {allUserInfo}
    </div>
  );
}

export default withFetching(apiUrl + ':' + apiPort)(AllUserInfo);