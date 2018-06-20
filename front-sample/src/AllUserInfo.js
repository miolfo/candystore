import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class AllUserInfo extends React.Component {
  constructor() {
      super();
      this.state = {
          content: []
      };
    }

    componentDidMount() {
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

      const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
      const apiPort = process.env.REACT_APP_API_PORT || '3333';
      fetch(apiUrl + ':' + apiPort + '/users/all', {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(function(response) {
        return response.json();
      }, function(error) {
        console.log("error: " + error.message);
      }).then(data => {
        let userData = data.users;
        console.log('data contained in allusers response: ' + JSON.stringify(userData));
        
        let output = <ReactTable
                        data={userData}
                        columns={columns}
                        minRows={5}
                        showPagination={false}
                        defaultSorted={[
                            {
                                id: 'balance'
                            }
                        ]} />;
        
        this.setState({content: output});
      })
      console.log("state " + this.state);
    }


    render() {
      return (
        <div>
          <strong>Wall of Shame</strong>
          {this.state.content}
        </div>
      )
    }
}

export default AllUserInfo;