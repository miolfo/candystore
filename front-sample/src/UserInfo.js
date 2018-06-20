import React from 'react';

class UserInfo extends React.Component {
  constructor() {
      super();
      this.state = {
          userInfo: {name: 'nobody'},
          content: []
      };
    }

    componentDidMount() {      
      const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
      const apiPort = process.env.REACT_APP_API_PORT || '3333';
      fetch(apiUrl + ':' + apiPort + '/users/id/1', {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(function(response) {
        return response.json();
      }, function(error) {
        console.log("error: " + error.message);
      }).then(data => {
        let info = data;
        console.log('data contained in response: ' + JSON.stringify(info));
        let userInfo = {name: info.fname + info.lname, balance: info.balance, fname: info.fname, lname: info.lname};
        console.log('userinfo: ' + JSON.stringify(userInfo));
        let output = <span>Balance: {userInfo.balance} </span>;
        this.setState({userInfo: userInfo, content: output});
      })
      console.log("state " + this.state);
    }


    render() {
      return (
        <div>
          <strong>User information for {this.state.userInfo.name}</strong>
          {this.state.content}
        </div>
      )
    }
}

export default UserInfo;