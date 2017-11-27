import React, { Component } from 'react';
import Header from './Header'
const _ = require('lodash')

export default class DetailRead extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        console.log ("read", this.props)
        const rating = _.reduce (this.props.detail.rating, (mem,r, key)=>{
            mem += " " + key + ": " + r
            return mem
        }, "")
        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div>
                <p>Rating: {rating}</p>
                <p>{this.props.detail.tags.join(" / ")}</p>
            </div>
            <div>
                <button onClick={this.props.detailFunctions.onClickClose}>Close</button>
                <button onClick={this.props.onClickEdit}>Edit</button>

            </div>
        </div>);
    }
}