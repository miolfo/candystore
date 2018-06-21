import React, { Component } from 'react';
import './InputField.css';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            userId: '',
            productId: ''
        };

        this.handleChangedUserId = this.handleChangedUserId.bind(this);
        this.handleChangedProductId = this.handleChangedProductId.bind(this);
    }

    handleChangedUserId(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <form>
                <label>
                    User ID:
                    <input type="text" value={this.state.userId} onChange={this.handleChangedUserId}/>
                </label>
                <input type="button" value="Submit" onClick={(e) => this.props.test(e, this.state.userId)} />
                <label>
                    Product ID:
                    <input type="text" value={this.state.productId} onChange={this.handleChangedProductId} />
                </label>
                <input type="button" value="Submit" onClick={(e) => this.props.addProduct(e, this.state.productId)} />
            </form>
        );
    }
}