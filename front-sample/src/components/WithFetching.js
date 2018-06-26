import React, { Component } from 'react';

export const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        props: props,
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentWillReceiveProps(nextProps) {
      console.log('NEW PROPS!!!!! ');
      console.log(nextProps);
      this.fetchData();
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData() {
      this.setState({ isLoading: true });
      console.log(this.props);
      fetch(url + this.props.apiEndpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error while requesting data...');
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Comp { ...this.props } { ...this.state } />
    }
}