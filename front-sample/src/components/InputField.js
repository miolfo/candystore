import React, { Component } from 'react';
import './InputField.css';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            value: ''
        };
    }

    render() {
        return(
            <form>
                <label>
                    Input:
                    <input type="text" value={this.state.value}/>
                </label>
                <input type="button" value="Submit" onClick={(e) => this.props.test(e, this.state.value)} />
            </form>
        );
    }
}