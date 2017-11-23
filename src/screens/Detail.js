import React, { Component } from 'react';
import Header from '../components/Header'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div>
                <p>Rating: {this.props.detail.rating}</p>
                <p>{this.props.detail.tags.join ( " / ")}</p>
            </div>
            <button onClick={this.props.onClick}>Close</button>
        </div>
        )
    }
}