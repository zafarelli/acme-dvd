import React, { Component } from 'react';
import Header from './Header'

export default class DetailRead extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        console.log ("read", this.props)
        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div>
                <p>Rating: {this.props.detail.rating}</p>
                <p>{this.props.detail.tags.join(" / ")}</p>
            </div>
            <div>
                <button onClick={this.props.detailFunctions.onClickClose}>Close</button>
                <button onClick={this.props.onClickEdit}>Edit</button>

            </div>
        </div>);
    }
}