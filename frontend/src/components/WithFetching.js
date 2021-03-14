import React, { Component } from 'react';

export const withFetching = (url, query) => (Comp) =>
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

    componentWillReceiveProps(props) {
      const { refresh } = this.props;
      // console.log(refresh);
      // console.log(props.refresh);
      if (props.refresh !== refresh) {
        this.refreshData()
      }
    }

    refreshData() {
      this.setState({ isLoading: true });
      this.setState({ data: {} });

      fetch(url + query, {
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

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url + query, {
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
      return <Comp {...this.props} {...this.state} />
    }
  }