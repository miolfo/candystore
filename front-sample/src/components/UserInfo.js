import React from 'react';
import './UserInfo.css';

class UserInfo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          userInfo: {name: props.id || 'nobody'},
          id: '',
          content: []
      };

      this.updateUser = this.updateUser.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
      console.log("nextProps.id: " + nextProps.id);
      if (this.state.id !== nextProps.id) {
        this.setState({id: nextProps.id}, () => {
          this.updateUser();
        });
      }
    }

    componentDidMount() {
    }

    updateUser() {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://back';
      const apiPort = process.env.REACT_APP_API_PORT || '3333';
      fetch(apiUrl + ':' + apiPort + '/users/id/' + (this.state.id || 0), {
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
        let output = <div>Balance: {userInfo.balance} </div>;
        this.setState({userInfo: userInfo, content: output});
      })
      console.log("state " + this.state);
      this.props.userInfoUpdated(this.state.id);
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